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
};

export default nextConfig;
