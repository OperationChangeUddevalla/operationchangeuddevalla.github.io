/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

const plugin = require("tailwindcss/plugin");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
				heading: ["Oswald Variable", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"hero-gradient": "radial-gradient(circle, #333 0%, #777 80%, #999 100%)",
			},
			colors: {
				"ukraine-blue": "#006fc7",
				"ukraine-yellow": "#f5d41b",
			},
			gridTemplateRows: {
				hero: "1fr 3fr 2fr",
			},
			textShadow: {
				DEFAULT: "2px 2px 10px black",
			},
		},
	},
	plugins: [
		plugin(function({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			)
		}),
		plugin(function({ addComponents, theme }) {
			addComponents({
				".scrolled-nav": {
					"background-color": theme("colors.white"),
					"border-bottom-color": theme("colors.ukraine-blue"),
				},
			});
		}),
	],
}
