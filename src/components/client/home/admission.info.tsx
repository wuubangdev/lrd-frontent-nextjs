import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { CardMedia, Tooltip } from '@mui/material';

const admissions = [
  {
    title: 'Land Management',
    occupation: 'University',
    description:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable."
  },
  {
    title: 'Regional and Urban Planning',
    occupation: 'University',
    description:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    title: 'Master of Land Management',
    occupation: 'Graduate Admissions',
    description:
      "Learners are highly trained, have solid expertise in state administrative management of land, engineering - technology, management - exploitation and sustainable development of practical issues related to the field of land resources and land management."
  },
  {
    title: 'Doctor of Land Management',
    occupation: 'Graduate Admissions',
    description:
      "Learners are trained in in-depth knowledge of land management, undertake the task of management, teaching and scientific research, and apply it effectively in practice."
  },
];

export default function Admission() {
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
            Admission
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The Department of Land Resources trains in 2 fields of Land Management and Urban Planning.
            Undergraduate, Graduate Admissions: Enrollment of Master of Land Management & Doctoral Enrollment in Land Management
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
                  sx={{ height: 140 }}
                  image="/images/academic/belm-8_o.jpg"
                  title="image-admisssion"
                />
                <Link href={"#"} style={{ textDecoration: "unset", color: "black" }}>
                  <Tooltip title="Please click here to show more info!" placement="top-start">
                    <div>
                      <CardHeader
                        title={admission.title}
                        subheader={admission.occupation}
                        sx={{
                          pb: "4px",
                          textAlign: "center"
                        }}
                      />
                    </div>
                  </Tooltip>
                </Link>
                <CardContent sx={{ pt: "4px" }}>
                  <Typography variant="body2" color="text.secondary" textAlign="justify">
                    {admission.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
