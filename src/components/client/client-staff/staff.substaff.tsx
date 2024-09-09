'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';
import { toSlugify } from '@/utils/global.hook';
import Link from 'next/link';

const departmentCell = [
  {
    avatar: <Avatar alt='pham-thi-m' src='/images/avatar/avatar_male.png' />,
    id: 1,
    name: 'Pham Thi Mo',
    type: 'Secretary',
  },
  {
    avatar: <Avatar alt='pham-van-h' src='/images/avatar/avatar_female_2.png' />,
    id: 1,
    name: 'Pham Van Huynh',
    type: 'Deputy Secretary ',
  },
  {
    avatar: <Avatar alt='le-van-d' src='/images/avatar/avatar_female_1.png' />,
    id: 1,
    name: 'Le Van Dinh',
    type: 'Member',

  },
];
const tradeUnion = [
  {
    avatar: <Avatar alt='pham-thi-m' src='/images/avatar/avatar_male.png' />,
    id: 1,
    name: 'Tran Thanh Phong',
    type: 'Team Leader',
  },
  {
    avatar: <Avatar alt='pham-van-h' src='/images/avatar/avatar_female_2.png' />,
    id: 1,
    name: 'Luc Thien Thinh',
    type: 'Vice President',
  },
];

export default function SubStaff() {
  const route = useRouter();
  return (
    <Container
      id="substaff"
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 2, sm: 4 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, sm: 1 },

      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'center', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary"
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: (theme) => theme.palette.mode === "light" ? "#0263B6" : ""
          }}
        >
          Department Cell & Trade Union
        </Typography>
      </Box>
      <>
        <Typography variant="body1" color="text.secondary" fontSize={"20px"}>
          Department cell about: secretary, deputy secretary and member.
        </Typography>
        <Grid container spacing={2}>
          {departmentCell.map((staff, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  p: 1,
                  cursor: "pointer",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                  }
                }}
              >
                <Link
                  href={`/staff/${toSlugify(staff.name)}-${staff.id}`}
                  style={{ textDecoration: 'unset', }}
                >
                  <Box
                    component="span"
                    sx={{

                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      pr: 2,
                      transition: 0.3,
                      '&:hover': {
                        opacity: 0.7,
                      },
                    }}
                  >
                    <CardHeader
                      avatar={staff.avatar}
                      title={staff.name}
                      subheader={staff.type}
                    />
                  </Box>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
      <>
        <Typography variant="body1" color="text.secondary" mt={1} fontSize={"20px"}>
          Trade union about: team leader and vice president.
        </Typography>
        <Grid container spacing={2}>
          {tradeUnion.map((staff, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  p: 1,
                  cursor: "pointer",
                  ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                  }
                }}
              >

                <Link
                  href={`/staff/${toSlugify(staff.name)}-${staff.id}`}
                  style={{ textDecoration: 'unset', }}
                >
                  <Box
                    component="span"
                    sx={{

                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      pr: 2,
                      transition: 0.3,
                      '&:hover': {
                        opacity: 0.7,
                      },
                    }}
                  >
                    <CardHeader
                      avatar={staff.avatar}
                      title={staff.name}
                      subheader={staff.type}
                    />
                  </Box>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    </Container>
  );
}
