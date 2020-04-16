const dev = process.env.NODE_ENV === "development";

export default {
	apiUrl: `${dev ? "http://localhost:3000" : "https://alles.cx"}/api`,
	dev,
	scopes: {
		teams: "Know what teams you are in"
	},
	inputBounds: {
		name: {
			min: 1,
			max: 50
		},
		nickname: {
			min: 1,
			max: 50
		},
		about: {
			min: 1,
			max: 125
		},
		password: {
			min: 6,
			max: 128
		}
	},
	usersResultLimit: 20
};
