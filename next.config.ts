import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    domains: ['images.unsplash.com', 'placehold.co'],
    formats: ['image/avif', 'image/webp']
  },

};

export default nextConfig;
