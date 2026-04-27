/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/satlinkgy" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/satlinkgy/" : "",
};

export default nextConfig;
