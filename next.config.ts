
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/',
        permanent: true,
      },
      {
        source: '/campaigns',
        destination: '/',
        permanent: true,
      },
      {
        source: '/campaigns/manage',
        destination: '/',
        permanent: true,
      },
    ]
  }
}
export default nextConfig;
