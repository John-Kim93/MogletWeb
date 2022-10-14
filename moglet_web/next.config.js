/** @type {import('next').NextConfig} */
import { S3_URL, API_URL, IMAGE_DOMAIN, VIDEO_DOMAIN } from "/config/index" 

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [IMAGE_DOMAIN],
  },
  swcMinify: true,
  env: {
    S3_URL : S3_URL
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: API_URL,
      },
    ]
  },
}

module.exports = nextConfig