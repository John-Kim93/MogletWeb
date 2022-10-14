/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
  swcMinify: true,
  env: {
    S3_URL : process.env.S3_URL
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.API_URL,
      },
    ]
  },
}

module.exports = nextConfig