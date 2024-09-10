import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import Link from 'next/link';

const teaches = [
  {
    image: "/images/academic/belm-8_o.jpg",
    title: 'Đại học Quản lý đất đai',
    description:
      "Đại học Quản lý Đất đai đào tạo sinh viên có khả năng nghiên cứu, vận dụng các kiến thức cơ bản và chuyên ngành, các kỹ năng và sự phát triển của công nghệ thông tin, phân tích, nghiên cứu địa chính, quản lý và khai thác tài nguyên, quy hoạch và sử dụng đất một cách có hiệu quả nhất. Ngành được công nhận đạt chuẩn quốc tế AUN-QA năm 2022"
  },
  {
    image: "/images/academic/master-land-management-7_o.jpg",
    title: 'Thạc sĩ Quản lý đất đai',
    description:
      "Đào tạo thạc sĩ Quản lý đất đai nhằm nâng cao trình độ chuyên môn và năng lực trong công tác Quản lý đất đai; có kiến thức sâu rộng, có khả năng phụ trách các nhiệm vụ quản lý, nghiên cứu và ứng dụng các kiến thức vào thực tế một cách có hiệu quả trong điều kiện của ĐBSCL. Học bổ túc kiến thức Cao học QLĐĐ Tuyển sinh Thạc sĩ QLĐĐ 2022"
  },
  {
    image: "/images/academic/doctor-land-management-6_o.jpg",
    title: 'Tiến sĩ Quản lý đất đai',
    description:
      " Đào tạo Tiến sĩ Quản lý đất đai nhằm nâng cao trình độ chuyên môn và năng lực trong công tác quản lý đất đai, có kiến thức chuyên sâu đảm nhiệm nhiệm vụ quản lý, giảng dạy và nghiên cứu khoa học, ứng dụng vào thực tế một cách có hiệu quả trong điều kiện tự nhiên và kinh tế xã hội của ĐBSCL. Tuyển sinh Tiến sĩ QLĐĐ 2022"
  },
];

export default function TeachingActivity() {
  return (
    <Box>
      <Container
        id="teaching-activity"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
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
            Hoạt động giảng dạy
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bộ môn Tài nguyên Đất đai tập chung vào các hoạt động giảng dạy tập huấn các công nghệ, kiến thức về phát triển kinh tế nông nghiệp, sử dụng đất đai hiệu quả và phát triển bền vững.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {teaches.map((activity, index) => (
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
      </Container >
    </Box>
  );
}
