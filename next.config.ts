import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["admin-panel.meowaesthetics.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
