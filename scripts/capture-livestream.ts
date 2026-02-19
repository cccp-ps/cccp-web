import { spawn } from "child_process";
import { writeFile, stat } from "fs/promises";

interface Go2RtcMessage {
  type: string;
  value: string;
}

const WS_URL = process.env.WS_URL || "wss://live.cccp.ps/api/ws?src=goodcam";
const OUTPUT_PATH = "livestream.jpg";
const TIMEOUT_MS = 30_000;

// Request HEVC video + AAC audio
const MSE_CODECS = "hvc1.1.6.L153.B0,mp4a.40.2";

async function capture() {
  console.log(`Connecting to ${WS_URL}`);

  const ws = new WebSocket(WS_URL);
  ws.binaryType = "arraybuffer";

  const chunks: Buffer[] = [];

  console.time("socket");
  const mp4Data = await new Promise<Buffer>((resolve, reject) => {
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
        const msg = JSON.parse(event.data) as Go2RtcMessage;
        console.log("Server:", JSON.stringify(msg));

        if (msg.type === "mse") {
          console.log(`MIME type: ${msg.value}`);
        } else if (msg.type === "error") {
          ws.close();
          reject(new Error(`go2rtc error: ${msg.value}`));
        }
      } else {
        // Binary fMP4 data (init segment + media segments)
        chunks.push(Buffer.from(event.data as ArrayBuffer));
        
        // The first chunk is typically the init segment.
        // We wait for at least a couple of media segments (total >= 3) to ensure we get an I-frame.
        if (chunks.length >= 3) {
          ws.close();
        }
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

    ws.addEventListener("error", (event: Event) => {
      clearTimeout(timeout);
      const msg = "message" in event ? (event as ErrorEvent).message : "connection failed";
      reject(new Error(`WebSocket error: ${msg}`));
    });
  });
  console.timeEnd("socket");

  console.log(`Received ${mp4Data.length} bytes (${chunks.length} segments)`);

  // Write fMP4 to temp file
  const tmpPath = "/tmp/livestream-raw.mp4";
  await writeFile(tmpPath, mp4Data);

  console.time("ffmpeg");
  // Extract first video frame with FFmpeg
  await new Promise<void>((resolve, reject) => {
    const ffmpeg = spawn(
      "ffmpeg",
      // Optimization: `-skip_frame nokey` to ensure we get an I-frame, `-vframes 1` is cleaner than `-frames:v 1`
      ["-y", "-skip_frame", "nokey", "-i", tmpPath, "-q:v", "2", "-vframes", "1", OUTPUT_PATH],
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
  console.timeEnd("ffmpeg");

  const { size } = await stat(OUTPUT_PATH);
  // Guarantee data integrity by failing the Action if output is less than 2KB (corrupt/gray image)
  if (size < 2048) {
    throw new Error(`Image size dangerously low (${size} bytes). Assuming corruption.`);
  }
  console.log(`Captured: ${OUTPUT_PATH} (${size} bytes)`);
}

capture().catch((err) => {
  console.error("Capture failed:", err.message);
  process.exit(1);
});
