import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import StaffHead from "@/components/client/client-staff/staff.head";
import { Container, Typography } from "@mui/material";

const ClientStaff = () => {
    const breadcrumb = [
        { title: "LRD", link: "/" },
        { title: "Staffs", link: "/staff" },
    ]
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
            <Breadcrumb
                breadcrumb={breadcrumb}
            />
            <Typography variant="h5">Staffs off lrd</Typography>
            <StaffHead />
        </Container>
    )
}

export default ClientStaff;