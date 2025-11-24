/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bakersdelight.com.au',
      },
      {
        protocol: 'https',
        hostname: 'brandingwrap.com',
      },
      {
        protocol: 'https',
        hostname: 'www.boxupgifting.com',
      },
      {
        protocol: 'https',
        hostname: 'corporategiftstkc.com',
      },
    ],
  },
};

export default nextConfig;
