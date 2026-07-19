import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve public assets directly — more reliable on VPS without sharp issues
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
