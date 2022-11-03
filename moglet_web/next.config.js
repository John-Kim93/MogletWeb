/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGE_DOMAIN, process.env.MEDIA_CONVERTER_DOMAIN],
  },
  swcMinify: true,
  env: {
    S3_URL : process.env.S3_URL,
    MEDIA_CONVERTER_URL : process.env.MEDIA_CONVERTER_URL
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