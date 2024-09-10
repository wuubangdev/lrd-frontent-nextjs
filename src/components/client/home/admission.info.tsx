import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { CardMedia, Divider, Tooltip } from '@mui/material';
import ModalAdmission from './modal/modal.admission';

const admissions = [
  {
    title: 'Quản lý đất đai - Đạt chuẩn AUN',
    type: 'Bậc đại học',
    image: "/images/admission/dh_qldd.jpg",
    image_card: "/images/admission/resize/dh_qldd.png",
    description:
      "Đào tạo trình độ kỹ sư về quản lý hành chính nhà nước, kỹ thuật - công nghệ, quản lý - khai thác và phát triển bền vững các vấn đề thực tiễn liên quan đến lĩnh vực tài nguyên đất đai, quản lý đất đai."
  },
  {
    title: 'Quy hoạch vùng và đô thị - Ngành mới',
    type: 'Bậc đại học',
    image: "/images/admission/dh_quyhoach.jpg",
    image_card: "/images/admission/resize/quyhoach.png",
    description:
      "Đào tạo trình độ kỹ sư, người học được đào tạo năng lực hoàn thành nhiệm vụ được giao, sáng tạo, kỹ năng tổ chức, làm việc chuyên nghiệp trong lĩnh vực về quy hoạch cấp vùng, quy hoạch và thiết kế không gian đô thị để góp phần đáp ứng nguồn nhân lực cho địa phương phục vụ cộng đồng."
  },
  {
    title: 'Thạc sĩ chuyên nghành Quản lý đất đai',
    type: 'Sau đại học',
    image: "/images/admission/ths_qldd.jpg",
    image_card: "/images/admission/resize/ths_qldd.png",
    description:
      "Người học được đào tạo kiến thức chuyên sâu về quản lý đất đai, đảm nhiệm nhiệm vụ quản lý, giảng dạy và nghiên cứu khoa học, ứng dụng vào thực tế một cách có hiệu quả."
  },
  {
    title: 'Tiến sĩ chuyên ngành Quản lý đất đai',
    type: 'Sau đại học',
    image: "/images/admission/ts_qldd.jpg",
    image_card: "/images/admission/resize/ts_qldd.png",
    description:
      "Người học được đào tạo nâng cao, có chuyên môn vững vàng về quản lý hành chính nhà nước về đất đai, kỹ thuật - công nghệ, quản lý - khai thác và phát triển bền vững các vấn đề thực tiễn liên quan đến lĩnh vực tài nguyên đất đai, quản lý đất đai."
  },
];

export interface IModalAdmissionData {
  title: string;
  image: string;
}

export default function Admission() {

  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<IModalAdmissionData | null>(null);

  return (
    <Box
      sx={{
        backgroundImage: (theme) =>
          theme.palette.mode === 'light'
            ? "linear-gradient(to bottom right, #FFFEFF , #9DCFFF)"
            : ""
      }}
    >
      <Container
        id="admission"
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
            Thông tin tuyển sinh
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bộ môn tài nguyên đất đai tuyển sinh 2 nghành học ở bậc đại học là: Quản lý đất đai, Quy hoạch vùng và đô thị.
            Tuyển sinh sau đại học bao gồm: Tiến sĩ và thạc sĩ chuyên ngành Quản lý đất đai.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {admissions.map((admission, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}
              sx={{
                display: 'flex',
                justifyContent: "center",
                ":hover": {
                  ".card": {
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    img: {
                      transition: 0.5,
                      opacity: 0.7
                    }
                  }
                }
              }}>
              <Card
                className='card'
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1,
                }}
              >
                <CardMedia
                  sx={{ height: 180, width: "auto", borderRadius: "5px" }}
                  image={admission.image_card}
                  title="image-admisssion"
                />
                <Link href={"#"} style={{ textDecoration: "unset", color: "black" }}>
                  <div>
                    <CardHeader
                      title={admission.title}
                      subheader={admission.type}
                      sx={{
                        pb: "4px",
                        textAlign: "center"
                      }}
                    />
                  </div>
                </Link>
                <CardContent sx={{ pt: "4px", cursor: "pointer" }}>
                  <Tooltip title="Please click here to show more info!" placement="bottom-end">
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      textAlign="justify"
                      onClick={() => {
                        setOpen(true);
                        setModalData({
                          image: admission.image,
                          title: admission.title
                        })
                      }}
                    >
                      {admission.description}
                    </Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <ModalAdmission
          modalData={modalData}
          open={open}
          setOpen={setOpen}
        />
      </Container>
    </Box>
  );
}
