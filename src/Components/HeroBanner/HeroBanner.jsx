import { Box, Button, Stack, Typography } from "@mui/material";

import "./HeroBanner.css";

import HeroBannerImage from "../Assets/banner_image.jpg";

import { useUserAuth } from "../../context/UserAuthContext";

export const HeroBanner = () => {
  const { user } = useUserAuth();
  return (
    <Box
      sx={{ mt: { lg: "180px", xs: "70px" }, ml: { sm: "50px" } }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF2625' fontWeight='600' fontSize='40px'>
        FitSense 360
      </Typography>

      <Typography color='#9D9794' fontWeight='600' fontSize='32px'>
        Hi, {user.displayName}
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb='23px'
        mt='30px'
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize='22px' mb={4} fontFamily='Poppins' lineHeight='35px'>
        Check out personalized exercises
      </Typography>
      <Stack>
        <Button
          href='#exercises'
          sx={{
            marginTop: "45px",
            textDecoration: "none",
            borderColor: "#FF2625",
            border: "1px solid",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
            "&:hover": {
              bgcolor: "white",
              color: "#FF2625",
              borderColor: "#FF2625",
            },
          }}
        >
          Explore Exercises
        </Button>
      </Stack>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt='hero-banner'
        className='hero-banner-img'
      />
    </Box>
  );
};

export default HeroBanner;
