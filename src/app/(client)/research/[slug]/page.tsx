
import Breadcrumb from "@/components/breadcrumbs/breadcrumbs";
import DetailProjectList from "@/components/client/research/detail/detail.project.list";
import { Box, Container, Typography } from "@mui/material";


const ClientResearchDetail = () => {
    const breadcrumb = [
        { title: "Trang chủ", link: "/" },
        { title: "Nghiên cứu", link: "/research" },
        { title: "Danh sách nghiên cứu", link: "#" },
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
            <Container>
                <Typography variant="h5" textAlign='center' my={1} color="#0263B6"> DANH SÁCH CÁC ĐỀ TÀI, XUẤT BẢN</Typography>
                <DetailProjectList />
            </Container>
        </Box>
    )
}

export default ClientResearchDetail;