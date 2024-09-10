
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import Research from "@/components/client/research/research";
import { Box } from "@mui/material";


const ClientResearch = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Nghiên cứu", link: "#" },
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
            <Research />
        </Box>
    )
}

export default ClientResearch;