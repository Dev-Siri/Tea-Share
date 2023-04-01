// @ts-check
import configureBundleAnalyzer from "@next/bundle-analyzer";
import configureNextPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} **/
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "lh3.googleusercontent.com", "source.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) config.optimization.splitChunks.minSize = 100000;

    return config;
  },
};

const withBundleAnalyzer = configureBundleAnalyzer({ enabled: process.env.ANALYZE_BUNDLE === "true" });
const withPWA = configureNextPWA({
  dest: "public/worker",
  skipWaiting: true,
  disable: !isProduction,
});

// @ts-ignore
export default withBundleAnalyzer(withPWA(nextConfig));
