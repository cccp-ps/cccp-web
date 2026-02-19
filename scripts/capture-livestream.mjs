import { chromium } from "playwright";

// Force mode=mse to skip WebRTC ICE negotiation (times out in headless CI)
const STREAM_URL = "https://live.cccp.ps/stream.html?src=goodcam&mode=mse";
const OUTPUT_PATH = "livestream.jpg";
const TIMEOUT = 30_000;

async function capture() {
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true,
    args: [
      "--autoplay-policy=no-user-gesture-required",
      "--use-gl=angle",
      "--use-angle=swiftshader",
      "--disable-gpu-sandbox",
    ],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  // Capture page console messages for CI debugging
  const consoleLogs = [];
  page.on("console", (msg) => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on("pageerror", (err) => consoleLogs.push(`[pageerror] ${err.message}`));

  try {
    await page.goto(STREAM_URL, { waitUntil: "domcontentloaded", timeout: TIMEOUT });

    // Wait for a <video> element to appear (go2rtc's <video-stream> renders one internally)
    const video = await page.waitForSelector("video", { timeout: TIMEOUT }).catch(() => null);

    if (!video) {
      await page.screenshot({ path: OUTPUT_PATH, type: "jpeg", quality: 85, fullPage: false });
      console.log("No video element found — captured full page fallback:", OUTPUT_PATH);
      return;
    }

    // Log initial video state for CI debugging
    const initialState = await video.evaluate((el) => ({
      readyState: el.readyState,
      currentTime: el.currentTime,
      paused: el.paused,
      videoWidth: el.videoWidth,
      videoHeight: el.videoHeight,
      error: el.error ? el.error.message : null,
      networkState: el.networkState,
      src: el.currentSrc || el.src,
    }));
    console.log("Video initial state:", JSON.stringify(initialState, null, 2));

    // Wait for actual frame decode — not just readyState
    try {
      await page.waitForFunction(
        (el) => {
          if (el.readyState < 2) return false;
          if (el.paused) return false;
          if (el.currentTime <= 0) return false;
          if (el.videoWidth === 0 || el.videoHeight === 0) return false;
          return true;
        },
        video,
        { timeout: TIMEOUT }
      );
    } catch {
      // Dump diagnostics on timeout
      const finalState = await video.evaluate((el) => ({
        readyState: el.readyState,
        currentTime: el.currentTime,
        paused: el.paused,
        videoWidth: el.videoWidth,
        videoHeight: el.videoHeight,
        error: el.error ? el.error.message : null,
        networkState: el.networkState,
        src: el.currentSrc || el.src,
      }));
      console.error("Video wait timed out. Final state:", JSON.stringify(finalState, null, 2));
      console.error("Page console logs:", consoleLogs.join("\n"));
      await page.screenshot({ path: "livestream-debug.jpg", type: "jpeg", quality: 85, fullPage: true });
      console.error("Saved diagnostic screenshot: livestream-debug.jpg");
      throw new Error("Video never reached playable state — stream may be offline");
    }

    // Log ready state
    const readyState = await video.evaluate((el) => ({
      readyState: el.readyState,
      currentTime: el.currentTime,
      paused: el.paused,
      videoWidth: el.videoWidth,
      videoHeight: el.videoHeight,
      error: el.error ? el.error.message : null,
    }));
    console.log("Video ready state:", JSON.stringify(readyState, null, 2));

    // Let compositor paint the decoded frame
    await page.waitForTimeout(2000);

    await video.screenshot({ path: OUTPUT_PATH, type: "jpeg", quality: 85 });
    console.log("Captured video element screenshot:", OUTPUT_PATH);
  } finally {
    await browser.close();
  }
}

capture().catch((err) => {
  console.error("Capture failed:", err.message);
  process.exit(1);
});
