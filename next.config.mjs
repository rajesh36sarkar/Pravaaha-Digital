/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for smaller deployments
  output: 'standalone',
  
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  
  // Optimize images (if you use next/image)
  images: {
    domains: ['firebasestorage.googleapis.com'], // if you load from Firebase
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable React Strict Mode (helps catch issues)
  reactStrictMode: true,
  
  // Swc minify for faster builds
  swcMinify: true,
  
  // Redirects (optional)
  async redirects() {
    return [
      // Example: redirect old routes
    ];
  },
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/assets/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;