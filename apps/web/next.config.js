// @ts-check
import configureBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import("next").NextConfig} **/
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "localhost", "lh3.googleusercontent.com", "source.unsplash.com"],
    minimumCacheTTL: 60,
  },
  webpack(config, { dev }) {
    if (!dev)
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: "all",
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            defaults: false,
            vendors: false,
          },
        },
        runtimeChunk: false,
        usedExports: true,
        sideEffects: true,
        moduleIds: "deterministic",
      };

    return config;
  },
};

const withBundleAnalyzer = configureBundleAnalyzer({ enabled: process.env.ANALYZE_BUNDLE === "true" });

// @ts-ignore
export default withBundleAnalyzer(nextConfig);
