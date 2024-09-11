import { Box, Grid } from "@mui/material";

const AlumniContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ flexGrow: 1, py: 2 }}>
            {children}
        </Box>
    );
};

export default AlumniContent;