
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import AcademyTabs from "@/components/client/client-academy/academy.tabs";
import ConferenceContent from "@/components/client/conference/conference.content";
import { Box } from "@mui/material";


const ClientAcademy = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Hội thảo", link: "#" },
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
            <ConferenceContent />
        </Box>
    )
}

export default ClientAcademy;