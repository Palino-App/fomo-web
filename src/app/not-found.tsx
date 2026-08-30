'use client';

import { useEffect } from 'react';

import { detectPlatform, storeUrlForPlatform } from '@/lib/stores';

export default function NotFound() {
    useEffect(() => {
        const platform = detectPlatform(navigator.userAgent);
        const timeout = setTimeout(() => {
            window.location.href = storeUrlForPlatform(platform);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-2 px-6 text-center'>
            <h1 className='text-2xl font-semibold'>Fomo</h1>
            <p className='text-sm opacity-60'>Opening event…</p>
        </main>
    );
}
