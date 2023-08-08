import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/Base.jpeg';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF595A" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      color="#CAC0B3"
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography
      color="#CAC0B3"
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
    >
      Check out the most effective <br />
      exercises personalized to you
    </Typography>
    <Stack>
      <a
        className="hero_explore--exercise"
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#FF595A',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#2272FF"
      sx={{
        opacity: '0.4',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
    >
      Exercise
    </Typography>
    <div className="image_container">
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </div>
  </Box>
);

export default HeroBanner;
