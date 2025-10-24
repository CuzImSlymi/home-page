/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/home-page/docs',
  assetPrefix: '/home-page/docs/',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig