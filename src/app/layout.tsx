import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'Fomo',
    description: 'Discover events around you.'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='en'>
            <body className='antialiased'>{children}</body>
        </html>
    );
}
