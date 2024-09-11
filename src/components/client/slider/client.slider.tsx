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


interface IProps {
    images: string[];
}

const ClientSlider = ({ images }: IProps) => {

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
            id="carousel"
            sx={{
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
                            height: { xs: 200, sm: 700 },
                        }}
                    >
                        <Image
                            alt='hero-image'
                            src={image}
                            sizes='100%'
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}
export default ClientSlider;