
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import AcademyTabs from "@/components/client/client-academy/academy.tabs";
import { Box } from "@mui/material";


const ClientAcademy = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Chương trình giảng dạy", link: "#" },
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
            <AcademyTabs />
        </Box>
    )
}

export default ClientAcademy;