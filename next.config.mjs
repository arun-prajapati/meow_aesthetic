/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['admin-panel.meowaesthetics.com'],
    formats: ['image/webp'],
    unoptimized: true
  },
};

export default nextConfig;
