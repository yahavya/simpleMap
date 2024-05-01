/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
};

module.exports = nextConfig;
