import { Box } from "@mui/material";

const AboutHero = () => {
  return (
    <Box
      sx={{
        height: { xs: 300, md: 500 },
        backgroundImage: "url(/assets/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(11, 35, 68, 0.6)", // primary.main with 60% opacity
        }}
      />
    </Box>
  );
};

export default AboutHero;
