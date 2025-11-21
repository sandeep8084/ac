
import { Box, Container, Typography } from "@mui/material";

const logos = [
  "/assets/alokaremovebg.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
];

const ClientSlider = () => {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: "#F6F8FB",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 1, color: "#0B2344" }}
        >
          Our Clients
        </Typography>
        <Typography
          variant="body2"
          sx={{ opacity: 0.7, maxWidth: 500, mx: "auto" }}
        >
          Trusted by leading brands across India.
        </Typography>
      </Container>

      {/* Slider Wrapper */}
      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Slider Track */}
        <Box
          sx={{
            display: "inline-flex",
            animation: "slide 20s linear infinite",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                px: 4,
                py: 2,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={`Client Logo ${index}`}
                sx={{
                  height: 60,
                  width: "auto",
                  filter: "grayscale(0%)",
                  opacity: 0.8,
                  transition: "0.3s",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Keyframes */}
      <style>
        {`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </Box>
  );
};

export default ClientSlider;
