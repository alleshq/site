import axios from "axios";

export default sessionToken => {
	const setOnline = () => {
		axios
			.post(
				"https://online.alles.cx",
				{},
				{
					headers: {
						authorization: sessionToken
					}
				}
			)
			.catch(() => {});
	};

	setOnline();
	const interval = setInterval(setOnline, 10000);
	return () => clearInterval(interval);
};
