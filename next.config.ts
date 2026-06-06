import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "23kfhzn5is.ufs.sh",
      },
    ],
  },
  outputFileTracingIncludes: {
    "app/api/**/*": [
      "./app/generated/prisma/**/*",
      "./node_modules/.prisma/client/**/*",
      "./node_modules/@prisma/client/runtime/**/*",
    ],
  },
};

export default nextConfig;