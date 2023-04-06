// @ts-check
import configureBundleAnalyzer from "@next/bundle-analyzer";
import configureNextPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} **/
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "lh3.googleusercontent.com", "source.unsplash.com"],
    minimumCacheTTL: 60,
  },
  experimental: {
    appDir: true,
    turbo: {
      resolveAlias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
    },
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
