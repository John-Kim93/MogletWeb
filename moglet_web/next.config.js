/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.39.87.211:3457/api/:path*",
      },
    ]
  },
}

module.exports = nextConfig
