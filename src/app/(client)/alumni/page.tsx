
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import AlumniTabs from "@/components/client/alumni/alumni.tabs";
import { Box } from "@mui/material";


const ClientAlumni = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Người học", link: "#" },
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
            <AlumniTabs />
        </Box>
    )
}

export default ClientAlumni;