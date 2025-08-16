/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  // WAŻNE: nie używamy optimizeCss, bo wymaga paczki "critters"
  // Usuń całe "experimental" albo zostaw puste:
  experimental: {},
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};
export default nextConfig;
