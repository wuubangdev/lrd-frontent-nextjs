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
    title: 'B.E in Land Management',
    description:
      "The main objective of the Bachelor of Engineering in Land Management (BELM) programme is to develop competent engineers capable of researching, applying knowledge and possessing specific skills in the related field of land management.",
  },
  {
    image: "/images/academic/master-land-management-7_o.jpg",
    title: 'Master in Land Management',
    description:
      "The Master's degree in Land Management aims to make an important contribution human resources in land management for the whole country in general and for the Mekong Delta in particular as well as to adapt to Urban and rural development requirement.  This requires staff with postgraduate qualifications to support land management now and in the future.",
  },
  {
    image: "/images/academic/doctor-land-management-6_o.jpg",
    title: 'PhD in Land Management',
    description:
      'Programme of PhD in Land Management aims to improve in-depth knowledge, teaching and scientific research in land management for learners under socio-economic and environmental changes of the Mekong Delta.',
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
            Teaching Activity
          </Typography>
          <Typography variant="body1" color="text.secondary">
            DLR focuses on teaching, training, conducting scientific research and transferring technology to advance socio-economic development of the Mekong Delta region.
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
