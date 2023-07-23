/** @type {import('next').NextConfig} */
const nextConfig = {
	api: {
		bodyParser: {
			sizeLimit: "10mb",
		},
	},
	experimental: {
		serverActions: true,
		serverActionsBodySizeLimit: "10mb",
	},
};

module.exports = nextConfig;
