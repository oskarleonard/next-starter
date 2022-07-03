/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  reactStrictMode: true,
  basePath: '',
  optimizeFonts: true,
  experimental: {
    scrollRestoration: true,
  },
  //add environment variables to the JavaScript bundle
  env: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  corePlugins: [],
  images: {
    domains: [
      'storage.googleapis.com',
      'static.onecms.io',
      'www.apple.com',
      'www.clipartmax.com',
      'thumbs.dreamstime.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
