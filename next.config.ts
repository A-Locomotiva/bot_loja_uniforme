import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'solutudo-cdn.s3-sa-east-1.amazonaws.com' },
      { protocol: 'https', hostname: 'solutudo-cdn.s3.sa-east-1.amazonaws.com' },
      { protocol: 'https', hostname: 'thumb-cdn.soluall.net' },
      { protocol: 'https', hostname: '*.ngrok-free.app' },
    ],
  },
}

export default nextConfig
