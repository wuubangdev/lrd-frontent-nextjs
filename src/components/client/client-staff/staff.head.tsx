'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Link } from '@mui/material';
import Image from 'next/image';
import { toSlugify } from '@/utils/global.hook';

const heads = [
  {
    id: 1,
    title: 'Phó trưởng bộ môn',
    avatar: "/images/avatar/avatar_male.png",
    name: 'Dr. Tran Thi A',
    email: 'tthia@gmail.com',
    description: [
      'Remote sensing',
      'Forest',
      'GIS, GPS',
    ],
  },
  {
    id: 1,
    title: 'Trưởng bộ môn',
    avatar: "/images/avatar/avatar_female_2.png",
    name: 'Assocc. Prof. Nguyen Van B',
    email: 'nvanb@gmail.com',
    description: [
      'Land resources',
      'Optimizer',
      'Land-use planning',
    ],
  },
  {
    id: 1,
    title: 'Phó trưởng bộ môn',
    avatar: "/images/avatar/avatar_female_1.png",
    name: 'Dr. Le Thanh C',
    email: 'lthanhc@gmail.com',
    description: [
      'Remote sensing',
      'Modeling',
      'GIS, GPS',
    ],
  },
];

export default function StaffHead() {
  return (
    <>
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
            Ban Chủ Nhiệm Bộ Môn
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bao gồm 1 trưởng bộ môn và 2 phó trưởng bộ môn
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {heads.map((head, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={head.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  border: head.title === 'Trưởng bộ môn' ? '1px solid' : undefined,
                  borderColor:
                    head.title === 'Trưởng bộ môn' ? 'primary.main' : undefined,
                  background:
                    head.title === 'Trưởng bộ môn'
                      ? 'linear-gradient(#033363, #021F3B)'
                      : undefined,
                  cursor: "pointer",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  }
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
                        color: head.title === 'Trưởng bộ môn' ? 'grey.100' : '',
                      }}
                    >
                      <Typography component="h3" variant="h5">
                        {head.title}
                      </Typography>
                    </Box>
                    <Link
                      href={`/staff/${toSlugify(head.name)}-${head.id}`}
                      style={{ textDecoration: 'unset', }}
                    >
                      <Box
                        component="span"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          color: head.title === 'Trưởng bộ môn' ? 'grey.100' : '',
                          pt: 2,
                          gap: 1,
                          transition: 0.3,
                          '&:hover': {
                            opacity: 0.7,
                          },
                        }}
                      >
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
                            color: head.title === 'Trưởng bộ môn' ? 'grey.50' : undefined,
                          }}
                        >
                          <Typography component="h3" variant="h6">
                            {head.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Link>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                      }}
                    >
                      <Link href="mailto:someone@example.com" sx={{ color: head.title === 'Trưởng bộ môn' ? 'grey.50' : undefined }}>{head.email}</Link>
                    </Box>
                  </Box>
                  <Divider
                    sx={{
                      my: 2,
                      opacity: 0.2,
                      borderColor: 'grey.500',
                    }}
                  />
                  <Box>
                    {head.description.map((line, i) => (
                      <Box
                        key={`head-skill-${i}`}
                        sx={{
                          py: 1,
                          display: 'flex',
                          gap: 1.5,
                          alignItems: 'center',
                        }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            width: 20,
                            color:
                              head.title === 'Trưởng bộ môn'
                                ? 'primary.light'
                                : 'primary.main',
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color:
                              head.title === 'Trưởng bộ môn' ? 'grey.200' : "",
                          }}
                        >
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider />
    </>
  );
}
