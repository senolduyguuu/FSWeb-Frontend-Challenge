import colors from './colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				darkModeBackground: colors.darkModeBackground,
				darkModeText: colors.darkModeText,
				darkModeEllipse: colors.darkModeEllipse,
				navTextColor: colors.navTextColor,
				navText: colors.navText,
				SkilsText: colors.SkilsText,
				ProfileColor: colors.ProfileColor,
				FooterColor: colors.FooterColor,
				DarkModeBodyColor: colors.DarkModeBodyColor

			},
		},
	},
	plugins: [],
}
