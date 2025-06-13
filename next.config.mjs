import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
      },
      
      images: {
        formats: ['image/webp', 'image/avif'],
      },
      
      compress: true,
      
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-DNS-Prefetch-Control',
                value: 'on'
              }
            ],
          },
        ];
      },
};

export default withBundleAnalyzer(nextConfig);
