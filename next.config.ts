import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["old-images.hb.ru-msk.vkcs.cloud"]
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
    
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, 
      },
      
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
};

export default nextConfig;
