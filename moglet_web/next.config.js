/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.ORIGINAL_DATA, process.env.CONVERT_DATA]
  },
  swcMinify: true,
  env: {
    ORIGINAL_DATA : `https://${process.env.ORIGINAL_DATA}`,
    CONVERT_DATA : `https://${process.env.CONVERT_DATA}`,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.API,
      },
      {
        source: "/video/:filename*",
        destination: `https://${process.env.CONVERT_DATA}:filename*`,
      }
    ]
  },
}

module.exports = nextConfig