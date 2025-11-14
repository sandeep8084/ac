import { Box, Container, Typography } from "@mui/material";

const CompanyProfile = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        {/* Section Title */}
        <Typography
          variant="h5"
          sx={{
            textTransform: "uppercase",
            letterSpacing: 1,
            fontWeight: 700,
            color: "primary.main",
            mb: { xs: 4, md: 6 },
          }}
        >
          Company Profile
        </Typography>

        {/* Layout Grid - Logo Left / Text Right */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.3fr 0.7fr" },
            columnGap: { md: 6, lg: 10 },
            rowGap: { xs: 4, md: 0 },
            alignItems: "center",
          }}
        >
          {/* Left Side - Company Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src="/assets/logobgw1.png"
              // src="/assets/alokaremovebg.png"
              alt="Company Logo"
              loading="lazy"
              sx={{
                width: "100%",
                maxWidth: { xs: 260, sm: 300, md: 340, lg: 380 },
                height: "auto",
                objectFit: "contain",
                // filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.15))",
              }}
            />
          </Box>

          {/* Right Side - Text Description */}
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9, mb: 2 }}
            >
              Blue Star is India&apos;s leading Air Conditioning, Commercial
              Refrigeration and MEP (Mechanical, Electrical, Plumbing and
              Fire-fighting) contracting company with over 80 years of
              experience. The Company&apos;s philosophy is rooted in the
              principles of “Trust” and “Excellence”, guiding its remarkable
              journey of growth and innovation.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9, mb: 2 }}
            >
              The Company offers a wide range of cooling solutions including
              chillers, ducted systems, VRF technology, room air conditioners,
              deep freezers, water coolers, and cold rooms. It has also expanded
              into air purification, facilities management, commercial kitchen
              equipment, and medical refrigeration.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9 }}
            >
              Blue Star’s integrated business model — manufacturing,
              engineering-procurement-construction (EPC), and after-sales
              service — empowers it to deliver complete turnkey solutions across
              electrical, plumbing, fire-fighting, and industrial project
              domains.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyProfile;
