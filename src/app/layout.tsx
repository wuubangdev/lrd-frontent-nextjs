import * as React from 'react';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import { ToastContextProvider } from '@/lib/toast.info.wrapper';
import NProgressWrapper from '@/lib/next.nprogress';
import NextAuthWrapper from '@/lib/next.auth.wrapper';

export const metadata = {
  title: 'Home Page',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NextAuthWrapper>
            <NProgressWrapper>
              <ToastContextProvider>
                {children}
              </ToastContextProvider>
            </NProgressWrapper>
          </NextAuthWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
