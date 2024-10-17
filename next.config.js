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
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  },
};

module.exports = nextConfig;
