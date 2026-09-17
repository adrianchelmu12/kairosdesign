import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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
      {
        source: "/termeni",
        destination: "/termeni-si-conditii",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/termeni-si-conditii",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
