/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/todo",
      permanent: true,
    },
  ],
};

export default nextConfig;
