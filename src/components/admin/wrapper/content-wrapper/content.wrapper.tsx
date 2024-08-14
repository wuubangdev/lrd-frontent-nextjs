'use client'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                padding: "30px 40px 0 40px"
            }}
        >
            <Toolbar />
            {children}
        </Box>
    )
}

export default ContentWrapper;