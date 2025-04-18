import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	output: "export",
	distDir: "out",
	images: {
		unoptimized: true,
	},
};

export default withContentlayer(nextConfig);
