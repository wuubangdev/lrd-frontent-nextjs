'use client';
import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BrandStack from '@/components/client/hero/hero.brand.stack';
import ClientSlider from '../slider/client.slider';

export default function Hero() {

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
        <ClientSlider images={
          [
            '/images/hero/hero-1.png',
            '/images/hero/hero-2.png',
            '/images/hero/tuyensinh_qldd_2024.jpg',
          ]

        } />
      </Container>
    </Box>
  );
}
