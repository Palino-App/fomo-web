'use client';

import { useEffect } from 'react';

import { APP_STORE_URL, PLAY_STORE_URL, detectPlatform, storeUrlForPlatform } from '@/lib/stores';

export default function Home() {
    useEffect(() => {
        const platform = detectPlatform(navigator.userAgent);
        if (platform === 'ios' || platform === 'android') {
            window.location.href = storeUrlForPlatform(platform);
        }
    }, []);

    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
            <div>
                <h1 className='text-3xl font-semibold'>Fomo</h1>
                <p className='mt-2 text-sm opacity-70'>Discover events around you.</p>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row'>
                <a
                    href={APP_STORE_URL}
                    className='rounded-full border border-current px-5 py-2 text-sm font-medium opacity-80 transition hover:opacity-100'>
                    Download on the App Store
                </a>
                <a
                    href={PLAY_STORE_URL}
                    className='rounded-full border border-current px-5 py-2 text-sm font-medium opacity-80 transition hover:opacity-100'>
                    Get it on Google Play
                </a>
            </div>
        </main>
    );
}
