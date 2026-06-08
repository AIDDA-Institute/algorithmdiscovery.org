import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/S8UUehY4d",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
