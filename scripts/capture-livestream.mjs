import { chromium } from "playwright";

const STREAM_URL = "https://live.cccp.ps/stream.html?src=goodcam";
const OUTPUT_PATH = "livestream.jpg";
const TIMEOUT = 30_000;

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  try {
    await page.goto(STREAM_URL, { waitUntil: "domcontentloaded", timeout: TIMEOUT });

    // Wait for a <video> element to appear (go2rtc's <video-stream> renders one internally)
    const video = await page.waitForSelector("video", { timeout: TIMEOUT }).catch(() => null);

    if (video) {
      // Wait for the video to have loaded data (readyState >= 2)
      await page.waitForFunction(
        (el) => el.readyState >= 2,
        video,
        { timeout: TIMEOUT }
      ).catch(() => null);

      // Brief pause to ensure a frame is rendered
      await page.waitForTimeout(1000);

      await video.screenshot({ path: OUTPUT_PATH, type: "jpeg", quality: 85 });
      console.log("Captured video element screenshot:", OUTPUT_PATH);
    } else {
      // Fallback: capture full page (shows offline/error state)
      await page.screenshot({ path: OUTPUT_PATH, type: "jpeg", quality: 85, fullPage: false });
      console.log("No video element found — captured full page fallback:", OUTPUT_PATH);
    }
  } finally {
    await browser.close();
  }
}

capture().catch((err) => {
  console.error("Capture failed:", err.message);
  process.exit(1);
});
