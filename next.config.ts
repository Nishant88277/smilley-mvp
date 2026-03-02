import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smileyfilms.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/featured-work", destination: "/#featured-work", permanent: false },
      { source: "/media/awards", destination: "/#awards", permanent: false },
      { source: "/media/press", destination: "/press", permanent: false },
      { source: "/media", destination: "/#press", permanent: false },
    ];
  },
};

export default nextConfig;
