import { Box, Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import ClientSlider from "../../slider/client.slider";
import { Fragment } from "react";


interface ISocialNetWork {
    title: string;
    description: string;
    images: string[];
}

const socials: ISocialNetWork[] = [
    {
        title: "Học bổng cho sinh viên",
        description: "Hàng năm, hội cựu sinh viên thường tham dự các buổi sinh hoạt đầu khóa, động viên và trao đổi kinh nghiệm với các em sinh viên đang học. Các anh chị cũng có nhiều phần quà cho sinh viên xuất sắc các khóa, sinh viên vượt khó học giỏi. Các dịp hội thảo, họp mặt Cựu sinh viên cũng là dịp để các anh chị chia sẻ kinh nghiệm, đóng góp cải tiến cho chương trình đào tạo Quản lý đất đai gắn với thực tiễn công việc.",
        images: [
            "/images/alumni/csv_hb1.jpg",
            "/images/alumni/csv2.jpg",
        ]
    },
    {
        title: "Hoạt động xã hội",
        description:
            "Ngoài những hoạt động hỗ trợ cho sinh viên đang học tại trường, Hội cựu sinh viên ngành Quản lý Đất đai thường xuyên tham gia cùng Bộ môn trong các hoạt động xã hội như trao học bổng, quả cho học sinh đầu năm học mới, phát quà cho người nghèo. Những hoạt động này thể hiện sự tâm tình chia sẻ, thương yêu của ngwoif làm công tác quản lý đất đai đối với xã hội",
        images: [
            "/images/alumni/xahoi2.jpg",
            "/images/alumni/xahoi3.jpg",
        ]
    },
]

export default function AlumniSocialNetWork() {
    return (
        <Box
            sx={{
                pb: { xs: 3, sm: 4 },
            }}
        >
            <Grid container spacing={2}>
                {socials && socials.map((social, i) => (
                    <Grid item xs={12} md={12} key={`social-${social.title}`}>
                        <Typography component="h4" variant="h3" color="text.primary"
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                color: (theme) => theme.palette.mode === "light" ? "#0263B6" : "",
                                mb: 2,
                                textAlign: 'center'
                            }}
                        >
                            {social.title.toUpperCase()}
                        </Typography>
                        <Card sx={{ mb: 3 }}>
                            <CardContent sx={{ textAlign: "justify", pb: 0 }}>
                                <Box sx={{ textIndent: '20px', m: 0, fontWeight: 500 }}>
                                    {social.description}
                                </Box>
                            </CardContent>
                        </Card>
                        <Box sx={{ mb: { xs: 2, sm: 3 }, }}>
                            <ClientSlider
                                images={social.images}
                            />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }} textAlign="center">{`Một số hình ảnh của hoạt động`}</Typography>
                        <Divider />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}