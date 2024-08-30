import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import StaffHead from "@/components/client/client-staff/staff.head";
import SubStaff from "@/components/client/client-staff/staff.substaff";
import ClientTableStaff from "@/components/client/client-staff/staff.table.client";
import { Box, Divider } from "@mui/material";

const ClientStaff = () => {
    const breadcrumb = [
        { title: "LRD", link: "/" },
        { title: "Staffs", link: "/staff" },
    ]
    return (
        <Box
            sx={{
                pt: { xs: 12, sm: 12 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Breadcrumb
                    breadcrumb={breadcrumb}
                />
            </Box>
            <StaffHead />
            <SubStaff />
            <ClientTableStaff />
        </Box>
    )
}

export default ClientStaff;