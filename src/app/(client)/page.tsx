'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from '@/components/client/hero/hero';
import LogoCollection from '@/components/client/example/LogoCollection';
import Highlights from '@/components/client/example/Highlights';
import Pricing from '@/components/client/example/Pricing';
import Testimonials from '@/components/client/example/Testimonials';
import FAQ from '@/components/client/example/FAQ';
import Footer from '@/components/client/footer/Footer';
import Introduction from '@/components/client/home/Introduction';

export default function LandingPage() {

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Introduction />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <LogoCollection />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
