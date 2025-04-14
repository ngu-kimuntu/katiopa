/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/katiopa',
  assetPrefix: '/katiopa/',
  trailingSlash: true,
}

module.exports = nextConfig