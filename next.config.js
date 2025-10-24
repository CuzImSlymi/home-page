/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/home-page',
  assetPrefix: '/home-page/',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig