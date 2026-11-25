/** @type {import('next').NextConfig} */
module.exports = {
	async redirects() {
		return [
			{ source: "/about", destination: "/", permanent: false },
			{
				source: "/work/safe-at-home",
				destination: "/work/shelter-website-redesign",
				permanent: true,
			},
		];
	},
};
