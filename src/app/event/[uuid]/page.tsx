'use client';

import { use, useEffect } from 'react';

import { detectPlatform, storeUrlForPlatform } from '@/lib/stores';

export default function EventRedirect({ params }: PageProps<'/event/[uuid]'>) {
    const { uuid } = use(params);

    useEffect(() => {
        const platform = detectPlatform(navigator.userAgent);
        const storeUrl = storeUrlForPlatform(platform);

        window.location.href = `fomo://event/${uuid}`;
        const timeout = setTimeout(() => {
            window.location.href = storeUrl;
        }, 1500);

        return () => clearTimeout(timeout);
    }, [uuid]);

    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-2 px-6 text-center'>
            <h1 className='text-2xl font-semibold'>Fomo</h1>
            <p className='text-sm opacity-60'>Opening event…</p>
        </main>
    );
}
