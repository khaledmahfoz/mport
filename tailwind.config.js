/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "#ffffff",
			blue: "#646AFF",
			dark: "#383838",
			gray: {
				100: "#5d5d5d",
				200: "#ededed",
				300: "#FCFCFC",
				400: "#E9EBEE",
				500: "#90949C",
			},
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			sans: ["Source Sans Pro", "sans-serif"],
		},
		extend: {
			gridTemplateColumns: {
				skills: "repeat(7, minmax(0, 50px))",
				skillsMd: "repeat(12, minmax(0, 30px))",
			},
			keyframes: {
				travelTopLeft: {
					"0%": { transform: "translate(0, 0)" },
					"25%": { transform: "translate(0, calc(150px))" },
					"50%": {
						transform: "translate(calc(150px), calc(150px))",
					},
					"75%": {
						transform: "translate(calc(150px), 0)",
					},
					"150px": {
						transform: "translate(0, 0)",
					},
				},
				travelBottomLeft: {
					"0%": { transform: "translate(0, 0)" },
					"25%": {
						transform: "translate(calc(150px), 0)",
					},
					"50%": {
						transform: "translate(calc(150px), calc(-150px))",
					},
					"75%": { transform: "translate(0, calc(-150px))" },
					"150px": {
						transform: "translate(0, 0)",
					},
				},
				travelTopRight: {
					"0%": { transform: "translate(0, 0)" },
					"25%": {
						transform: "translate(calc(-150px), 0)",
					},
					"50%": {
						transform: "translate(calc(-150px), calc(150px))",
					},
					"75%": {
						transform: "translate(0, calc(150px))",
					},
					"150px": {
						transform: "translate(0, 0)",
					},
				},
				travelBottomRight: {
					"0%": { transform: "translate(0, 0)" },
					"25%": {
						transform: "translate(0, calc(-150px))",
					},
					"50%": {
						transform: "translate(calc(-150px), calc(-150px))",
					},
					"75%": { transform: "translate(calc(-150px), 0)" },
					"150px": {
						transform: "translate(0, 0)",
					},
				},
			},
			animation: {
				travelTopLeft: "travelTopLeft 8s 0s linear infinite forwards",
				travelBottomLeft: "travelBottomLeft 8s linear infinite forwards",
				travelTopRight: "travelTopRight 8s linear infinite forwards",
				travelBottomRight: "travelBottomRight 8s linear infinite forwards",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
