'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Chip, Link } from '@mui/material';
import Image from 'next/image';

const heads = [
  {
    id: 1,
    avatar: "/images/avatar/avatar_male.png",
    name: 'Dr. Tran Thi A',
    email: 'tthia@gmail.com',
    description: [
      'Remote sensing',
      'Forest',
      'GIS, GPS',
      'Land management',
      'Urban change',
      'Remote sensing',
    ],
  }
];
export default function StaffDetailHeader() {
  return (
    <Container
      id="staff-head"
      sx={{
        pb: { xs: 4, sm: 6 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: "center",
        }}
      >
        <Typography component="h4" variant="h4" color="text.primary"
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: (theme) => theme.palette.mode === "light" ? "#0263B6" : ""
          }}
        >
          SCIENTIFIC CURRICULUM VITAE
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {heads.map((head, i) => (
          <Grid
            item
            key={i}
            xs={12}
            md={6}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                  </Box>
                  <Image
                    alt='avatar-staff'
                    src={head.avatar}
                    width={150}
                    height={150}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {head.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}
                  >
                    <Link href="mailto:someone@example.com">{head.email}</Link>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
                  {head.description.map((line, i) => (
                    <Chip key={`chip-skill-key-${i}`} label={line} variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
