const withPWA = require("next-pwa")({
  dest: "public"
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  output: "export"
});

module.exports = nextConfig;
