/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com']
  },
  // Add this section to set the maxDuration for your Serverless Function
  async rewrites() {
    return [
      {
        source: '/api/cron',
        destination: '/api/cron',
        async middleware(req, ev) {
          // Your Serverless Function code here
          // ...
        },
        maxDuration: 30 // Set maxDuration to 30 seconds, for example
      }
    ];
  }
};

module.exports = nextConfig;