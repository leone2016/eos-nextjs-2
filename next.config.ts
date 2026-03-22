import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
 images: {
    unoptimized: true,
  },
  // images: {
  //   qualities: [25, 50, 75, 95, 100],
  // },
};

export default nextConfig;
