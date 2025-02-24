import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // copy-pasta from Next.js to implement Styled Components
  },
  webpack: (config) => {
    // this ensures that we can import markdown files
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
  output: "export",
};

export default nextConfig;
