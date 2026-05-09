// @ts-check
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import UnoCSS from "unocss/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://cccp.ps",
	integrations: [UnoCSS(), svelte(), solid()],
});
