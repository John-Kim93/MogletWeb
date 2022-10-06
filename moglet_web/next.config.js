/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['main-server-moglet-bucket.s3.ap-northeast-2.amazonaws.com/'],
  },
  swcMinify: true,
  env: {
    S3_URL : "https://main-server-moglet-bucket.s3.ap-northeast-2.amazonaws.com/"
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://43.200.237.200:3457/api/:path*",
      },
    ]
  },
}

module.exports = nextConfig
/* video domain : main-server-moglet-bucket-media-convert */
