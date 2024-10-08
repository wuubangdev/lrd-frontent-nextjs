import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Bản quyền thiết kế © '}
      <Link href="https://wuubangdev.click/" target="_blank">wuubangdev&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, sm: 4 },
        pt: { xs: 2, sm: 3 },
        pb: { xs: 1, sm: 1 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: '100%' } }}>
        <Box
          sx={{
            ml: '-15px',
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: 'column', gap: 1
          }}
        >
          <Image
            alt='logo-lrd'
            src={`/images/logo_png.png`}
            width={40}
            height={40}
          />
          <Typography variant="h5" fontWeight={600} gutterBottom m={0} color="#FF5500" textAlign="center">
            Bộ môn Tài nguyên Đất đai (LRD)
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Khoa Môi trường và Tài nguyên thiên nhiên, Đại học Cần Thơ
            Khu II, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, thành phố Cần Thơ, Việt Nam
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Facebook: <Link href='https://www.facebook.com/TaiNguyenDatDaiCTU' target="_blank">https://www.facebook.com/TaiNguyenDatDaiCTU</Link>
          </Typography>
          <Copyright />
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: 'text.secondary',
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/wuubangdev"
              target="_blank"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/WuBangLee/"
              target="_blank"
              aria-label="FaceBook"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/bang-le-6a9088193/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
