/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com']
  },
  serverless: {
    functions: {
      'api/cron': {
        maxDuration: 30
      }
    }
  }
}

module.exports = nextConfig;
