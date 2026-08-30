import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
                ]
            },
            {
                source: '/.well-known/apple-app-site-association',
                headers: [{ key: 'Content-Type', value: 'application/json' }]
            }
        ];
    }
};

export default nextConfig;
