import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  className: "center",
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: "100px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const images = [
  "/images/AUN/aun_2.jpg",
  "/images/AUN/aun_3.jpg",
  "/images/AUN/aun_4.jpg",
  "/images/AUN/aun_5.jpg",
  "/images/AUN/aun_6.jpg",
  "/images/AUN/aun_7.jpg",
  "/images/AUN/aun_8.jpg",
  "/images/AUN/aun_9.jpg",
  "/images/AUN/aun_10.jpg",
  "/images/AUN/aun_11.jpg",
  "/images/AUN/aun_12.png",
]
export default function AUN() {

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        ASEAN University Network-Quality Assurance
      </Typography>
      <Box
        sx={{
          height: "auto",
          width: '100%',
        }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => {
              return (
                <div
                  key={`image-quanlity-${index}`}
                  style={{
                    position: 'relative',
                    height: "auto",
                    width: 'auto',
                    padding: '0 10px'
                  }}
                >
                  <Image
                    alt='image-aun'
                    src={`${image}`}
                    width={200}
                    height={100}
                    style={{
                      objectFit: 'cover',
                      borderRadius: "4px",
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                      display: 'block',
                      margin: '0 auto'
                    }}

                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </Box>
    </Box>
  );
}
