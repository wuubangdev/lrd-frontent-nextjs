import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import StaffHead from "@/components/client/client-staff/staff.head";
import SubStaff from "@/components/client/client-staff/staff.substaff";
import ClientTableStaff from "@/components/client/client-staff/staff.table.client";
import { Box } from "@mui/material";

export const metadata = {
    title: 'Cán bộ',
    description: 'Thông tin tổ chức cán bộ và nhân sự bộ môn',
};

const ClientStaff = () => {
    const breadcrumb = [
        { title: "LRD", link: "/" },
        { title: "Cán bộ", link: "#" },
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