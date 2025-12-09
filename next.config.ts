import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure API routes are treated as serverless functions
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
