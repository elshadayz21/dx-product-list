/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coopbankoromia.com.et",
        pathname: "/wp-content/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
