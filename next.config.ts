import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //https://i.ibb.co.com/khHN7Pk/9780143454212.jpg
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
