// @ts-check
import configureBundleAnalyzer from "@next/bundle-analyzer";
import configureNextPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} **/
const nextConfig = {
  compiler: {
    // removeConsole: isProduction,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "lh3.googleusercontent.com", "source.unsplash.com"],
  },
  experimental: {
    appDir: true,
    legacyBrowsers: false,
  },
};

const withBundleAnalyzer = configureBundleAnalyzer({ enabled: process.env.ANALYZE_BUNDLE === "true" });
const withPWA = configureNextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: !isProduction,
});

// @ts-expect-error
export default withBundleAnalyzer(withPWA(nextConfig));
