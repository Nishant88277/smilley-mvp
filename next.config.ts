import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smileyfilms.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
