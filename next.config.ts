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
      {
        source: "/AIDDA2026",
        destination: "https://us06web.zoom.us/j/86268091058",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
