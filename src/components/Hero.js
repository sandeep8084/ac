import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { carouselItems } from "../data/carouselData"; 

const Hero = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        style={{ width: "100%" }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: { xs: 250, sm: 350, md: 400, lg: 500 },
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  zIndex: 1,
                }}
              />
              <Container
                maxWidth="md"
                sx={{
                  position: "relative",
                  zIndex: 2,
                  color: "white",
                  textAlign: { xs: "center", md: "left" },
                  px: { xs: 2, sm: 3, md: 0 },
                }}
              >
                {/* <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' } }}
                >
                  {item.title}
                </Typography> */}
                {/* <Typography variant="h5" sx={{ mb: 3, fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem' } }}>
                  {item.description}
                </Typography> */}
                {/* <Button variant="contained" color="secondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' } }}>
                  {item.buttonText}
                </Button> */}
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
