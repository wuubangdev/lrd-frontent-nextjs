'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from "@mui/material";


interface IConference {
    title: string;
    link: string;
    description: string;
    image: string
}

const conferences: IConference[] = [
    {
        title: "ACRS21",
        link: "#",
        description: "Asian Conference on Remote Sensing 2021",
        image: "/images/conference/acrs1.jpg",
    },
    {
        title: "Hội thảo GIS 2024",
        link: "#",
        description: "Hội thảo GIS 2024 tổ chức tại Đại học Cần Thơ",
        image: "/images/conference/GIS2024.jpg",
    },
    {
        title: "ACRS21",
        link: "#",
        description: "Asian Conference on Remote Sensing 2021",
        image: "/images/conference/acrs1.jpg",
    },
    {
        title: "Hội thảo GIS 2024",
        link: "#",
        description: "Hội thảo GIS 2024 tổ chức tại Đại học Cần Thơ",
        image: "/images/conference/GIS2024.jpg",
    },
    {
        title: "Hội thảo quản lý đất đai 2024",
        link: "#",
        description: "Hội thảo quản lý đất đai tổ chức tại Huế",
        image: "/images/conference/qldd.jpg",
    },
    {
        title: "Hội thảo quản lý đất đai 2024",
        link: "#",
        description: "Hội thảo quản lý đất đai tổ chức tại Huế",
        image: "/images/conference/qldd.jpg",
    },
]


export default function ConferenceContent() {
    return (
        <Container
            sx={{
                py: { xs: 4, sm: 4 }
            }}
        >
            <Typography variant='h5' mb={2} textAlign='center'>Danh sách các hội thảo</Typography>
            <Grid container spacing={2} >
                {conferences && conferences.map((conference, i) => (
                    <Grid key={`conference-${i}`} item xs={12} sm={6}>
                        <Card
                            sx={{
                                display: 'flex',
                                transition: '0.5s',
                                overflow: 'hidden',
                                ':hover': {
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    cursor: 'pointer',
                                    img: {
                                        opacity: 1,
                                    }
                                }
                            }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, opacity: 0.7, overflow: 'hidden', }}
                                image={conference.image}
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {conference.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {conference.description}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Container>
    )
}