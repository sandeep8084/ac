// import { Box, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

// const Gallery = ({ images, columns = 3, gap = 8 }) => {
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const isTablet = useMediaQuery("(max-width:960px)");

//   return (
//     <Box sx={{ width: "100%", height: "100%" }}>
//       <ImageList
//         variant="masonry"
//         cols={isMobile ? 1 : isTablet ? 2 : 3}
//         gap={12}
//       >
//         {images.map((item) => (
//           <ImageListItem
//             key={item.img}
//             sx={{
//               overflow: "hidden",
//               borderRadius: 2,
//               //   padding:"20px",
//               "& img": {
//                 transition: "transform 0.3s ease-in-out",
//               },
//               "&:hover img": {
//                 transform: "scale(1.2)",
//               },
//             }}
//           >
//             <img
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// };

// export default Gallery;

import { useState } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const dummyImages = [
  { img: "/assets/acMaintain.jpg", title: "Random Image 1" },
  { img: "/assets/acRepair.jpg", title: "Random Image 2" },
  { img: "/assets/emrgency.jpg", title: "Random Image 3" },
  { img: "/assets/installation.jpg", title: "Random Image 4" },
  { img: "/assets/acMaintain.jpg", title: "Random Image 5" },
  { img: "/assets/acRepair.jpg", title: "Random Image 6" },
  { img: "/assets/installation.jpg", title: "Random Image 7" },
  { img: "/assets/acMaintain.jpg", title: "Random Image 8" },
  { img: "/assets/acMaintain.jpg", title: "Random Image 9" },
];

const Gallery = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, textAlign: "center", mb: 3 }}
      >
        Image Gallery
      </Typography>

      <ImageList
        variant="masonry"
        cols={isMobile ? 1 : isTablet ? 2 : 3}
        gap={16}
      >
        {dummyImages.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleOpen(item.img)}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              cursor: "pointer",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",

              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease-in-out",
              },

              "&:hover img": {
                transform: "scale(1.1)",
              },

              "&:hover": {
                boxShadow: "0 6px 30px rgba(0,0,0,0.25)",
              },
            }}
          >
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Full Screen Preview Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          style: { background: "transparent", boxShadow: "none" },
        }}
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              "&:hover": { background: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={selectedImg}
            alt="Full Preview"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery;
