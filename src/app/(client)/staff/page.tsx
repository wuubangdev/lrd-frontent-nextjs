import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import StaffHead from "@/components/client/client-staff/staff.head";
import SubStaff from "@/components/client/client-staff/staff.substaff";
import TableStaff from "@/components/client/client-staff/staff.table";
import { Box, Divider } from "@mui/material";

const ClientStaff = () => {
    const breadcrumb = [
        { title: "LRD", link: "/" },
        { title: "Staffs", link: "/staff" },
    ]
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 12, sm: 12 },
                pb: { xs: 4, sm: 4 },
            }}
        >
            <Breadcrumb
                breadcrumb={breadcrumb}
            />
            <StaffHead />
            <SubStaff />
            <TableStaff />
        </Box>
    )
}

export default ClientStaff;