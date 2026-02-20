import { withGTConfig } from "gt-next/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placekitten.com" },
      { protocol: "https", hostname: "cataas.com" },
    ],
  },
};

export default withGTConfig(nextConfig);
