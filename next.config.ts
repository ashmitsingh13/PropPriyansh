import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "static.wixstatic.com"
    ], // Add any other external image domains here
  },
};

export default nextConfig;
