/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  distDir: ".next",
  compress: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "lh3.googleusercontent.com", "via.placeholder.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
