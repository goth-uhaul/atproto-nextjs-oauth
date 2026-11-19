import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["127.0.0.1"],
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
