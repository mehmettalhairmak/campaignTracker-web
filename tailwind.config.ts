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
			xl: "1.25rem",
			inherit: "inherit",
		},
	},
	corePlugins: {
		preflight: false,
	},
};
export default config;
