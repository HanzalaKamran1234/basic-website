import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // @tailwindcss/turbopack processes Tailwind CSS files.
      // NOTE: `as` must NOT be set – that caused a double-processing loop.
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
      },
    },
  },
};

export default nextConfig;
