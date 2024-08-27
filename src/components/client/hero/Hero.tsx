'use client';
import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BrandStack from '@/components/client/hero/hero.brand.stack';

export default function Hero() {
  const images = [
    '/images/hero/hero-1.png',
    '/images/hero/hero-2.png',
    '/images/hero/tuyensinh_qldd_2024.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {dots}
      </Box>
    ),
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 8, sm: 12 },
          pb: { xs: 4, sm: 4 },
        }}
      >
        <BrandStack />
        <Box
          id="carousel"
          sx={{
            mt: { xs: 4, sm: 6 },
            alignSelf: 'center',
            height: { xs: 200, sm: 600 },
            width: '100%',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor: theme => theme.palette.mode === 'light' ? alpha('#BFCCD9', 0.5) : alpha('#9CCCFC', 0.1),
            boxShadow: theme => theme.palette.mode === 'light' ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}` : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            overflow: 'hidden', // Ensure images do not overflow
          }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  height: { xs: 200, sm: 600 },
                }}
              >
                <Image
                  alt='hero-image'
                  src={image}
                  sizes='100%'
                  fill
                // style={{
                //   objectFit: 'contain',
                // }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
