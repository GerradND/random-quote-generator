/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
