// npm install --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss

module.exports = {
	useTabs: true,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
