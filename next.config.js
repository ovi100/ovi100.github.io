/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.jp",
      port: "",
      pathname: "",
    },
  ],
  publicRuntimeConfig: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
};

module.exports = nextConfig;
