// @ts-check
import configureBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import("next").NextConfig} **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "lh3.googleusercontent.com", "source.unsplash.com"],
    minimumCacheTTL: 60,
  },
};

const withBundleAnalyzer = configureBundleAnalyzer({ enabled: process.env.ANALYZE_BUNDLE === "true" });

// @ts-ignore
export default withBundleAnalyzer(nextConfig);
