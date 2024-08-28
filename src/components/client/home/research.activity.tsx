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
    title: 'International cooperations',
    description:
      'DLR has long term collaboration with Wageningen University (Netherlands), Asian Institute Technology - AIT (Thailand), Centre for Remote Sensing and Image Processing, National University - CRISP (Singapore), Centre for Space and Remote Sensing...',
  },
  {
    image: "/images/research/conferrences-4_o.png",
    title: 'Conferences',
    description:
      'DLR is a core member of many prestigious national and international conferences hosted by Can Tho University on GIS, Remote sensing and Land management. Especially international conferences such as GIS-IDEAS 2018, ACRS 2021.',
  },
  {
    image: "/images/research/publication-2_o.png",
    title: 'Publications',
    description:
      ' Besides training,  international publication is an important development orientation of DLR. We try to improve not only the quantity but also the quality of publications.',
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
            Research Activity
          </Typography>
          <Typography variant="body1" sx={{ color: (theme) => theme.palette.mode === 'light' ? "grey.400" : 'grey.400' }}>
            DLR focuses on teaching, training, conducting scientific research and transferring technology to advance socio-economic development of the Mekong Delta region.
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
