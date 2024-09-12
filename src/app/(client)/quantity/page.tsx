
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import QualityTabs from "@/components/client/quality/quality.tabs";
import { Box } from "@mui/material";
export const metadata = {
    title: 'Chất lượng đào tạo',
    description: 'Thông tin đánh giá chất lượng đào tạo ngành quản lý đất đai',
};

const ClientAcademy = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Đánh giá chất lượng", link: "#" },
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
            <QualityTabs />
        </Box>
    )
}

export default ClientAcademy;