import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://www.sugaid.org",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Inter Variable",
			cssVariable: "--font-inter",
			weights: ["100 900"],
			styles: ["normal"],
			subsets: [
				"latin",
				"latin-ext",
				"cyrillic",
				"cyrillic-ext",
				"greek",
				"greek-ext",
				"vietnamese",
			],
			display: "swap",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Oswald Variable",
			cssVariable: "--font-oswald",
			weights: ["200 700"],
			styles: ["normal"],
			subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
			display: "swap",
		},
	],
});
