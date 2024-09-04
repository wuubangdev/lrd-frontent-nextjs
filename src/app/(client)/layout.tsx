'use client'
import * as React from 'react';
import { Divider, PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '@/components/client/header/AppAppBar';
import getLPTheme from '@/components/client/theme/getLPTheme';
import Footer from '@/components/client/footer/Footer';

// export const metadata = {
//     title: 'Home Page',
//     description: 'Next.js App Router + Material UI v5',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const LPtheme = createTheme(getLPTheme(mode));
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            {children}
            <Divider />
            <Footer />
        </ThemeProvider>
    );
}
