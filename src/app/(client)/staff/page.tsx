import { Breadcrumbs, Container, Link } from "@mui/material";

const ClientStaff = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 8, sm: 12 },
                pb: { xs: 4, sm: 4 },
                height: "100vh"
            }}
        >
            Client Staff
        </Container>
    )
}

export default ClientStaff;