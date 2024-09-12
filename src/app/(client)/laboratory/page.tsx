
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import LabTabs from "@/components/client/client-lab/lab.tabs";
import { Box } from "@mui/material";
export const metadata = {
    title: 'Cở sở vật chất',
    description: 'Thông tin về cơ sở vật chất & phòng thí nghiệm',
};

const ClientLaboratory = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Phòng thí nghiệm", link: "#" },
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
            <LabTabs />
        </Box>
    )
}

export default ClientLaboratory;