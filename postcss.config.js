export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {
			overrideBrowserslist: [
				">= 0.5%",
				"last 2 major versions",
				"not dead",
				"Chrome >= 60",
				"Firefox >= 60",
				"Safari >= 12",
				"Edge >= 79",
			],
		},
		// Enable CSS optimization in production
		...(process.env.NODE_ENV === "production" && {
			cssnano: {
				preset: "default",
			},
		}),
	},
};
