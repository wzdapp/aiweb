/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
}

module.exports = {
  ...nextConfig,
  output: 'standalone',
}

// Export for Next.js config
module.exports.nextConfig = nextConfig
