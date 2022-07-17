/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    domains: ['mabrur-portfolio.herokuapp.com'],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
