/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  transpilePackages: ['react-haiku'],
  nextConfig,
}
