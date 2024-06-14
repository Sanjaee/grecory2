/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.tokopedia.net',
      },
    ],
  },
};

module.exports = nextConfig;
