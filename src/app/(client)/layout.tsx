import * as React from 'react';

export const metadata = {
    title: 'Home Page',
    description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
