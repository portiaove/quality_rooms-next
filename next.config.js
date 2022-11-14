/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const imageConfig = {
  images: {
    domains: ["localhost"]
  }
}

module.exports = {...nextConfig, ...imageConfig}
