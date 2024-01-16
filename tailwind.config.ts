import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"base-white": "#fff",
				"primary-primary-default": "#14b1b9",
				"surface-surface-secondary": "#e9ebf0",
				"accent-color": "#000",
				"primary-600": "#14b1b9",
				"gray-700": "#354154",
				"gray-300": "#d1d6de",
				"gray-400": "#a2abba",
				"gray-500": "#667085",
				gray: "#101828",
				whitesmoke: "#eceeeb",
			},
			spacing: {},
			fontFamily: {
				alata: "Alata",
				"inter-tight": "'Inter Tight'",
			},
		},
		fontSize: {
			sm: "0.88rem",
			base: "1rem",
			xl: "1.25rem",
			inherit: "inherit",
		},
	},
	corePlugins: {
		preflight: false,
	},
};
export default config;
