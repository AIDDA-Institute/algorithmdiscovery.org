import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/CjEnRybBm",
        permanent: false,
      },
      {
        source: "/Discord",
        destination: "https://discord.gg/CjEnRybBm",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
