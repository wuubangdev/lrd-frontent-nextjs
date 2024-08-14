import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
function Copyright(props: any) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props} >
            {'Copyright © '}
            <Link color="inherit" href="wuubangdev.click">
                wuubangdev,
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const AdminFooter = () => {
    return (
        <Box sx={{ marginTop: 'auto' }}>
            <Copyright sx={{ p: 2 }} />
        </Box>
    )
}

export default AdminFooter;