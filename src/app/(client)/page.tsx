'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from '@/components/client/hero/hero';
import Footer from '@/components/client/footer/Footer';
import Introduction from '@/components/client/home/Introduction';
import TeachingActivity from '@/components/client/home/teaching.activity';
import ResearchActivity from '@/components/client/home/research.activity';
import QualityAssurance from '@/components/client/home/quality.assurance';
import Admission from '@/components/client/home/admission.info';
import AskQuestion from '@/components/client/home/ask.questions';
import AUN from '@/components/client/home/aun.qa';

export default function LandingPage() {

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Introduction />
        <Divider />
        <Admission />
        <Divider />
        <TeachingActivity />
        <Divider />
        <ResearchActivity />
        <Divider />
        <QualityAssurance />
        <Divider />
        <AskQuestion />
        <Divider />
        <AUN />
        {/* <Divider /> */}
      </Box>
    </>
  );
}
