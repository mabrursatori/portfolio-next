/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    domains: ['mabrur-portfolio.herokuapp.com'],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
