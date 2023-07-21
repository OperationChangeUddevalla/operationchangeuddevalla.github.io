/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-gradient":
					"radial-gradient(circle, #333 0%, #777 80%, #999 100%)",
			},
			colors: {
				"ukraine-blue": "#0057b7",
				"ukraine-yellow": "#ffd700",
			},
			gridTemplateRows: {
				hero: "1fr 3fr 2fr",
			},
		},
	},
	plugins: [],
};
