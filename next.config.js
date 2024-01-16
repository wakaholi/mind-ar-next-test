/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["mind-ar"],
  output: "export",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/mind-ar-next-test" : "",
};

module.exports = nextConfig;
