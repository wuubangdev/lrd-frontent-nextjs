import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardContent, CardMedia, Divider } from '@mui/material';
import Link from 'next/link';

const researches = [
  {
    image: "/images/research/international-cooperations-9_o.png",
    title: 'Hợp tác quốc tế',
    description:
      "Từ ngày thành lập, Bộ môn đã thiết lập và giữ mối quan hệ hợp tác với các viện nghiên cứu và trường đại học quốc tế như Wageningen University (Hà Lan), Asian Institute Technology -AIT (Thái Lan), Centre for Remote Sensing and Image Processing, National University - CRISP (Singapore), Centre for Space and Remote Sensing Research - CSRSR (Đài Loan), International Rice Research Institute-IRRI (Philippines), Viện nghiên cứu phát triển - IRD (Pháp), ACIAR (Australia)."
  },
  {
    image: "/images/research/conferrences-4_o.png",
    title: 'Hội thảo',
    description:
      "Bộ môn Tài nguyên Đất đai là đơn vị tổ chức chính nhiều hội thảo trong và ngoài nước trong các lĩnh vực liên quan đến Tài nguyên Đất đai, Quản lý đất đai, GIS và Viễn thám. Trong đó có nhiều hội thảo quốc tê như GIS-IDEAS 2018, Hội thảo Viễn thám Châu Á 2021."
  },
  {
    image: "/images/research/publication-2_o.png",
    title: 'Xuất bản sách, giáo trình',
    description:
      "Xuất bản các kết quả nghiên cứu khoa học giữ vai trò quan trong trong hỗ trợ đào tạo. Bộ môn chú trọng đến các các xuất bản nằm trong danh mục Hội đồng chức danh nhà nước công nhận. Hướng đến nâng cao số lượng và chất lượng xuất bản quốc tế."
  },
];

export default function ResearchActivity() {
  return (
    <Box
      id="research-activity"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        backgroundImage: (theme) =>
          theme.palette.mode === 'light'
            ? "linear-gradient(to bottom right, #FFFEFF , #9DCFFF)"
            : ""
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            Hoạt đông nghiên cứu
          </Typography>
          <Typography variant="body1" sx={{ color: (theme) => theme.palette.mode === 'light' ? "grey.400" : 'grey.400' }}>
            Nghiên cứu sử dụng nguồn tài nguyên đất đai cho vùng Đồng bằng sông Cửu Long nói riêng và cả nước nói chung.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {researches.map((activity, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}
              sx={{
                display: 'flex',
                ":hover": {
                  ".card": {
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    img: {
                      transition: 0.5,
                      opacity: 0.7
                    }
                  }
                }
              }}
            >
              <Link href={"#"} style={{ textDecoration: "unset", color: "black" }}>
                <Card className='card'>
                  <CardMedia
                    component="img"
                    height="235"
                    image={activity.image}
                    alt="image-teaching-activity"
                  />
                  <Divider />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textAlign: "justify",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal"
                      }}>
                      {activity.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
