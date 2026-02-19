import { spawn } from "child_process";
import { writeFile, stat } from "fs/promises";

// Connect directly to go2rtc WebSocket — bypasses browser codec limitations.
// The camera sends H.265 (HEVC) which headless CI Chrome can't decode in MSE,
// but FFmpeg handles it natively.
const WS_URL = "wss://live.cccp.ps/api/ws?src=goodcam";
const OUTPUT_PATH = "livestream.jpg";
const COLLECT_SECONDS = 5;
const TIMEOUT_MS = 30_000;

// Request HEVC video + AAC audio — matches the camera's native codecs.
// go2rtc's client JS normally filters these via MediaSource.isTypeSupported(),
// which excludes HEVC on headless Linux Chrome. By connecting directly we skip that.
const MSE_CODECS = "hvc1.1.6.L153.B0,mp4a.40.2";

async function capture() {
  console.log(`Connecting to ${WS_URL}`);

  const ws = new WebSocket(WS_URL);
  ws.binaryType = "arraybuffer";

  const chunks = [];

  const mp4Data = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      ws.close();
      reject(new Error("Timeout waiting for stream data"));
    }, TIMEOUT_MS);

    ws.addEventListener("open", () => {
      console.log("WebSocket connected, requesting MSE stream...");
      ws.send(JSON.stringify({ type: "mse", value: MSE_CODECS }));
    });

    ws.addEventListener("message", (event) => {
      if (typeof event.data === "string") {
        const msg = JSON.parse(event.data);
        console.log("Server:", JSON.stringify(msg));

        if (msg.type === "mse") {
          console.log(`MIME type: ${msg.value}`);
          // Collect fMP4 segments for a few seconds then stop
          setTimeout(() => ws.close(), COLLECT_SECONDS * 1000);
        } else if (msg.type === "error") {
          ws.close();
          reject(new Error(`go2rtc error: ${msg.value}`));
        }
      } else {
        // Binary fMP4 data (init segment + media segments)
        chunks.push(Buffer.from(event.data));
      }
    });

    ws.addEventListener("close", () => {
      clearTimeout(timeout);
      if (chunks.length === 0) {
        reject(new Error("No video data received — stream may be offline"));
        return;
      }
      resolve(Buffer.concat(chunks));
    });

    ws.addEventListener("error", (event) => {
      clearTimeout(timeout);
      reject(new Error(`WebSocket error: ${event.message || "connection failed"}`));
    });
  });

  console.log(`Received ${mp4Data.length} bytes (${chunks.length} segments)`);

  // Write fMP4 to temp file
  const tmpPath = "/tmp/livestream-raw.mp4";
  await writeFile(tmpPath, mp4Data);

  // Extract first video frame with FFmpeg
  await new Promise((resolve, reject) => {
    const ffmpeg = spawn(
      "ffmpeg",
      ["-y", "-i", tmpPath, "-frames:v", "1", "-q:v", "2", OUTPUT_PATH],
      { stdio: ["ignore", "pipe", "pipe"] }
    );

    let stderr = "";
    ffmpeg.stderr.on("data", (d) => {
      stderr += d.toString();
    });

    ffmpeg.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        console.error("FFmpeg stderr:", stderr);
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });
  });

  const { size } = await stat(OUTPUT_PATH);
  console.log(`Captured: ${OUTPUT_PATH} (${size} bytes)`);
}

capture().catch((err) => {
  console.error("Capture failed:", err.message);
  process.exit(1);
});
