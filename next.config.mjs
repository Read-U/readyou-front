/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites: () => [
    {
      source: '/api/img',
      destination: `${process.env.NEXT_PUBLIC_API_URL}`,
    },
  ],
};

export default nextConfig;
