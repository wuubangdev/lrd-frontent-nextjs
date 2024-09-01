'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Container, } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PublicationDetails, { IPublication } from './staff.publication.item';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? "#fff" : '#1A2027',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const publications: IPublication[] = [
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

export default function Publications() {

    return (
        <Box>
            <Container
                id="sub-staff"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 1 },

                }}
            >
                <Paper sx={{ width: '100%' }}>
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={2}
                            sx={{
                                backgroundColor: (theme) => theme.palette.mode === 'light' ? "#fff" : '#1A2027',
                            }}
                        >
                            {publications && publications.map((publication, i) => {
                                return (
                                    <Item
                                        key={`public-item-${i}`}
                                        sx={{
                                            cursor: "pointer",
                                            ":hover": {
                                                transition: "1s",
                                                transform: "translateX(15px)",
                                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                            }
                                        }}>
                                        <PublicationDetails publication={publication} />
                                    </Item>
                                )
                            })}
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}