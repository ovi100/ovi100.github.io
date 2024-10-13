/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.jp",
      port: "",
      pathname: "",
    },
  ],
};

module.exports = nextConfig;
