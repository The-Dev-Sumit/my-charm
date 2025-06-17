import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during `npm run build`
  },
};

export default nextConfig;
