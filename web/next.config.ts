import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  basePath: '/cv',
  assetPrefix: '/cv',
  images: {
    unoptimized: true,
  },
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },


  
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
