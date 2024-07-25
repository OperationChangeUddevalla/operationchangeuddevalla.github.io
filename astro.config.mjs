import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.operationchange-uddevalla.org",
	integrations: [tailwind(), sitemap(
		{
			filter: (_page) => false
		}
	)]
});