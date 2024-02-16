import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
