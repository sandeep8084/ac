import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { carouselItems } from "../data/carouselData";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
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
                  // backgroundColor: "rgba(0,0,0,0.4)",
                  zIndex: 1,
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
