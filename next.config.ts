import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "23kfhzn5is.ufs.sh",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/api/**/*": [
      "./app/generated/prisma/**/*",
      "./node_modules/.prisma/client/**/*",
      "./node_modules/@prisma/client/runtime/**/*",
    ],
  },
};

export default nextConfig;