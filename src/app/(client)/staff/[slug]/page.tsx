import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import StaffDetailHeader from "@/components/client/client-staff/client-staff-detail/staff.detail.header";
import { Box } from "@mui/material";


const StaffDetails = () => {
    const breadcrumb = [
        { title: "LRD", link: "/" },
        { title: "Staffs", link: "/staff" },
        { title: "Staff details", link: "#" },
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
            <StaffDetailHeader />
        </Box>
    )
}

export default StaffDetails;