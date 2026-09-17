import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cookies",
        destination: "/politica-de-confidentialitate#cookie-uri",
        permanent: true,
      },
      {
        source: "/confidentialitate",
        destination: "/politica-de-confidentialitate",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/politica-de-confidentialitate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

