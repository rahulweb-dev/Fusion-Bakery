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
      {
        protocol: 'https',
        hostname: 'b.zmtcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'lepure.in',
      },
    ],
  },
};

export default nextConfig;
