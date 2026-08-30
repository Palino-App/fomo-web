export const APP_STORE_URL = 'https://apps.apple.com/mx/app/fomo-o%C3%B6-events-konzerte/id6784392006';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.fomo.android&hl=de_AT';

export type Platform = 'ios' | 'android' | 'other';

export function detectPlatform(userAgent: string): Platform {
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
    if (/Android/i.test(userAgent)) return 'android';
    return 'other';
}

export function storeUrlForPlatform(platform: Platform): string {
    return platform === 'android' ? PLAY_STORE_URL : APP_STORE_URL;
}
