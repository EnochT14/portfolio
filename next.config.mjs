/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/script.js', destination: 'https://umami.ecobbina.work/script.js' },
      { source: '/api/send', destination: 'https://umami.ecobbina.work/api/send' },
    ];
  },
};

export default nextConfig;
