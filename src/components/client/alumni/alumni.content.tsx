import { Box, Grid } from "@mui/material";

const AlumniContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
};

export default AlumniContent;