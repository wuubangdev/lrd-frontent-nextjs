import * as React from 'react';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import { ToastContextProvider } from '@/lib/toast.info.wrapper';
import NProgressWrapper from '@/lib/next.nprogress';
import "@/app/layout.css";
import Head from 'next/head';

export const metadata = {
  title: 'Home Page',
  description: 'LRD',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&subset=vietnamese"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ThemeRegistry>
          <NProgressWrapper>
            <ToastContextProvider>
              {children}
            </ToastContextProvider>
          </NProgressWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
