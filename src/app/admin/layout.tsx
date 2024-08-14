import * as React from 'react';
import AdminFooter from '@/components/admin/footer/admin.footer';
import ThemeWrapper from '@/components/admin/wrapper/theme-wrapper/theme.wrapper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ContentWrapper from '@/components/admin/wrapper/content-wrapper/content.wrapper';
import AdminSideBar from '@/components/admin/sidebar/admin.sidebar';

export const metadata = {
  title: 'Admin Page',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeWrapper>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AdminSideBar />
          <ContentWrapper>
            {children}
            <AdminFooter />
          </ContentWrapper>
        </Box>
      </ThemeWrapper>
    </>
  );
}
