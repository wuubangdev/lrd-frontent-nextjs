'use client'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

const defaultTheme = createTheme();
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeWrapper;