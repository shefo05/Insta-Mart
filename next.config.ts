import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // new URL('https://ecommerce.routemisr.com/Route-Academy-product/**')
    remotePatterns: [
      {
        protocol:'https',
        hostname:'ecommerce.routemisr.com',
        pathname:'/Route-Academy-products/**'
      },
      {
        protocol:'https',
        hostname:'ecommerce.routemisr.com',
        pathname:'/Route-Academy-categories/**'
      },
      {
        protocol:'https',
        hostname:'ecommerce.routemisr.com',
        pathname:'/Route-Academy-brands/**'
      }
    ]
  }
};


export default nextConfig;
