// import { Box, Container, Typography } from "@mui/material";

// const CompanyProfile = () => {
//   return (
//     <Box
//       component="section"
//       sx={{
//         py: { xs: 6, md: 10 },
//         backgroundColor: "background.paper",
//       }}
//     >
//       <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
//         <Typography
//           variant="h5"
//           sx={{
//             textTransform: "uppercase",
//             letterSpacing: 1,
//             fontWeight: 700,
//             color: "primary.main",
//             mb: { xs: 4, md: 5 },
//           }}
//         >
//           Company Profile
//         </Typography>

//         {/* Responsive 40/60 split, stacks on small screens */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", sm: "0.4fr 0.6fr" },
//             columnGap: { xs: 0, sm: 6, md: 8 },
//             rowGap: { xs: 4, sm: 0 },
//             alignItems: "start",
//           }}
//         >
//           {/* Left image with fixed aspect ratio */}
//           <Box
//             sx={{
//               position: "relative",
//               width: "100%",
//               aspectRatio: { xs: "4 / 3", sm: "5 / 4" },
//               borderRadius: 3,
//               overflow: "hidden",
//               boxShadow: 4, // subtle shadow
//               border: "1px solid",
//               borderColor: "primary.main", // accent border
//             }}
//           >
//             <Box
//               component="img"
//               src="/assets/hero.jpg"
//               alt="Modern glass building"
//               loading="lazy"
//               sx={{
//                 position: "absolute",
//                 inset: 0,
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </Box>

//           {/* Right text */}
//           <Box>
//             <Typography
//               variant="body1"
//               sx={{ color: "text.primary", lineHeight: 1.9, mb: 2 }}
//             >
//               Blue Star is India&apos;s leading Air Conditioning, Commercial
//               Refrigeration and MEP (Mechanical, Electrical, Plumbing and
//               Fire‑fighting) contracting company with over 80 years of
//               experience. The Company&apos;s philosophy is rooted in the
//               principles of ‘Trust’ and ‘Excellence’, which have served as the
//               guiding force behind its remarkable journey of growth. Renowned
//               for its customer‑centric ethos, Blue Star is recognised for
//               delivering innovative, value‑driven products and solutions that
//               strongly resonate in the market.
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{ color: "text.primary", lineHeight: 1.9, mb: 2 }}
//             >
//               The Company offers a plethora of cooling solutions including
//               chillers, ducted systems, VRFs, room ACs, deep freezers, water
//               coolers, and cold rooms, amongst others. It has also made inroads
//               into air purification, engineering facilities management,
//               commercial kitchen and medical refrigeration.
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{ color: "text.primary", lineHeight: 1.9 }}
//             >
//               The Company’s integrated business model of a manufacturer;
//               engineering, procurement and construction (EPC) services provider;
//               and an after‑sales service provider enables it to provide
//               comprehensive solutions across segments, including electrical,
//               plumbing, fire‑fighting and industrial projects, enabling turnkey
//               delivery.
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default CompanyProfile;



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
        <Typography
          variant="h5"
          sx={{
            textTransform: "uppercase",
            letterSpacing: 1,
            fontWeight: 700,
            color: "primary.main",
            mb: { xs: 4, md: 5 },
          }}
        >
          Company Profile
        </Typography>

        {/* 30/70 split, stacks on small screens */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.3fr 0.7fr" },
            columnGap: { xs: 0, md: 6, lg: 8 },
            rowGap: { xs: 4, md: 0 },
            alignItems: "center",
          }}
        >
          {/* Left side - Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 4, md: 0 },
              // backgroundColor: "background.default",
              // borderRadius: 3,
              // boxShadow: 2,
              // border: "1px solid",
              // borderColor: "divider",
            }}
          >
            <Box
              component="img"
              src="/assets/alokaremovebg.png"
              alt="Blue Star Logo"
              loading="lazy"
              sx={{
                width: "100%",
                maxWidth: { xs: 280, md: 320, lg: 380 },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Right side - Content */}
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9, mb: 2 }}
            >
              Blue Star is India&apos;s leading Air Conditioning, Commercial
              Refrigeration and MEP (Mechanical, Electrical, Plumbing and
              Fire‑fighting) contracting company with over 80 years of
              experience. The Company&apos;s philosophy is rooted in the
              principles of 'Trust' and 'Excellence', which have served as the
              guiding force behind its remarkable journey of growth. Renowned
              for its customer‑centric ethos, Blue Star is recognised for
              delivering innovative, value‑driven products and solutions that
              strongly resonate in the market.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9, mb: 2 }}
            >
              The Company offers a plethora of cooling solutions including
              chillers, ducted systems, VRFs, room ACs, deep freezers, water
              coolers, and cold rooms, amongst others. It has also made inroads
              into air purification, engineering facilities management,
              commercial kitchen and medical refrigeration.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.primary", lineHeight: 1.9 }}
            >
              The Company's integrated business model of a manufacturer;
              engineering, procurement and construction (EPC) services provider;
              and an after‑sales service provider enables it to provide
              comprehensive solutions across segments, including electrical,
              plumbing, fire‑fighting and industrial projects, enabling turnkey
              delivery.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyProfile;