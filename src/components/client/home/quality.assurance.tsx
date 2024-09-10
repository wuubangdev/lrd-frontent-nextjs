import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import Image from 'next/image';

const NextArrow = (props: any) => {
  return (
    <Button
      color="inherit"
      variant="contained"
      onClick={props.onClick}
      sx={{
        position: 'absolute',
        left: 0,
        top: "45%",
        zIndex: 2,
        minWidth: 30,
        width: 35
      }}
    >
      <ChevronLeft />
    </Button>
  )
}
const PrevArrow = (props: any) => {
  return (
    <Button
      color="inherit"
      variant="contained"
      onClick={props.onClick}
      sx={{
        position: 'absolute',
        right: 0,
        top: "45%",
        zIndex: 2,
        minWidth: 30,
        width: 35
      }}
    >
      <ChevronRight />
    </Button>
  )
}
const settings: Settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  className: "center",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: "100px",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function QualityAssurance() {

  const images = [
    "/images/quality/Poster_1.jpg",
    "/images/quality/Poster_2.jpg",
    "/images/quality/Poster_3.jpg",
    "/images/quality/poster_4.jpg",
    "/images/quality/Poster_5.jpg",
    "/images/quality/Poster_6.jpg",
    "/images/quality/Poster_7.jpg",
    "/images/quality/Poster_8.jpg",
    "/images/quality/Poster_9.jpg",
    "/images/quality/Poster_10.jpg",
  ]

  return (
    <Container
      id="quality-assurance"
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
          Đảm bảo chất lượng
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ngành quản lý đất đai bậc đại học đã đạt tiêu chuẩn đánh giá chất lượng quốc tế theo tiêu chuẩn của AUN-QA.
        </Typography>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: '100%',
        }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => {
              return (
                <div
                  key={`image-quanlity-${index}`}
                  style={{
                    position: 'relative',
                    height: "auto",
                    width: 'auto',
                    padding: '0 10px'
                  }}
                >
                  <Image
                    alt='image-quality-assurance'
                    src={`${image}`}
                    width={340}
                    height={480}
                    style={{
                      objectFit: 'cover',
                      borderRadius: "4px",
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                      display: 'block',
                      margin: '0 auto'
                    }}

                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </Box>

    </Container>
  );
}
