/** @type {import('next').NextConfig} */

// It will redirect to /todo
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/todo',
        permanent: true,
      },
    ];
  },
  images: {
    // domains: ['i.ibb.co'],
    remotePatterns: [
      {
        hostname: '*',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
