/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif','image/webp'] },
  experimental: { optimizeCss: true },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};
export default nextConfig;
