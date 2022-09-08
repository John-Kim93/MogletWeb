/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['test-server-moglet-bucket.s3.ap-northeast-2.amazonaws.com/'],
  },
  swcMinify: true,
  env: {
    S3_URL : "https://test-server-moglet-bucket.s3.ap-northeast-2.amazonaws.com/"
  },
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
