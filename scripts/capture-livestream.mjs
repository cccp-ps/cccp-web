import { chromium } from "playwright";

const STREAM_URL = "https://live.cccp.ps/stream.html?src=goodcam";
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

  try {
    await page.goto(STREAM_URL, { waitUntil: "domcontentloaded", timeout: TIMEOUT });

    // Wait for a <video> element to appear (go2rtc's <video-stream> renders one internally)
    const video = await page.waitForSelector("video", { timeout: TIMEOUT }).catch(() => null);

    if (!video) {
      // Fallback: capture full page (shows offline/error state)
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
