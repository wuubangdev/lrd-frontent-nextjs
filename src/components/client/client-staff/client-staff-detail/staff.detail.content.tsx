'use client'
import { Box, Container, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonalDetail from "./staff-info/personal.details";
import Qualifications from "./staff-info/qualifications";
import Professional from "./staff-info/professional";
import Publications from "../../publication/publications";

const StaffDetailContent = () => {
    return (
        <Container
            id="staff-head"
            sx={{
                pb: { xs: 4, sm: 6 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 2, sm: 3 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '100%' },
                    textAlign: "center",
                }}
            >
                <Typography component="h4" variant="h4" color="text.primary"
                    sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: (theme) => theme.palette.mode === "light" ? "#0263B6" : ""
                    }}
                >
                    INFORMATION
                </Typography>
            </Box>
            <Accordion defaultExpanded sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    sx={{ fontWeight: 600 }}
                >
                    I. Personal details
                </AccordionSummary>
                <AccordionDetails>
                    <PersonalDetail />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    sx={{ fontWeight: 600 }}
                >
                    II. Qualifications (training)
                </AccordionSummary>
                <AccordionDetails>
                    <Qualifications />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    sx={{ fontWeight: 600 }}
                >
                    III. Professional working experience
                </AccordionSummary>
                <AccordionDetails>
                    <Professional />
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    sx={{ fontWeight: 600 }}
                >
                    IV. List of publications (listed as reference format)
                </AccordionSummary>
                <AccordionDetails>
                    <Publications publications={
                        [
                            {
                                authors: "Trần Thanh Tài, Phan Kiều Diễm, Nguyễn Kiều Diễm",
                                year: "2019",
                                title: "Xây dựng bản đồ phân loại rừng sử dụng chuỗi ảnh khác biệt thực vật. Tạp chí khoa học đất/ Hiệp hội khoa học đất Việt Nam",
                                journal: "Tạp chí khoa học đất/ Hiệp hội khoa học đất Việt Nam",
                                code: "ISSN: 2525-2216"
                            },
                            {
                                authors: "Nguyễn Kiều Diễm, Nguyễn Thị Hồng Ngân, Võ Quốc Tuấn",
                                year: "2019",
                                title: "Đánh giá sự thay đổi hiện trạng sử dụng đất khu vực vườn quốc gia Tràm Chim giai đoạn 2008 – 2018.",
                                journal: "Kỷ yếu hội thảo ứng dụng GIS toàn quốc năm 2019. Nhà xuất bản nông nghiệp",
                                code: "ISBN: 978-604-60-3104-8"
                            },
                            {
                                authors: "Nguyễn Kiều Diễm, Trần Thị Kim Sa, Võ Quốc Tuấn",
                                year: "2019",
                                title: "Đánh giá sự thay đổi diện tích rừng phòng hộ tỉnh Bạc Liêu từ năm 2016 đến năm 2018",
                                journal: "Tạp chí khoa học đất/ Hiệp hội khoa học đất Việt Nam",
                                code: "ISSN: 2225-2516"
                            },
                        ]
                    } />
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default StaffDetailContent;