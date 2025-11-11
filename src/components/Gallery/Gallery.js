import * as React from "react";
import { Box, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

const Gallery = ({ images, columns = 3, gap = 8 }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ImageList
        variant="masonry"
        cols={isMobile ? 1 : isTablet ? 2 : 3}
        gap={12}
      >
        {images.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              //   padding:"20px",
              "& img": {
                transition: "transform 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
