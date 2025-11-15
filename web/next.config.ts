import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  basePath: '/cv',
  
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
