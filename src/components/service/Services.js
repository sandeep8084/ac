import { Container, Typography, Grid, Box } from "@mui/material";
import { AcUnit, Build, Settings, Speed } from "@mui/icons-material";
// import ServiceCard from "./ServiceCard";
import ServiceTest from "./ServiceTest";

const services = [
  {
    icon: <AcUnit sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
    title: "AC Installation",
    description:
      "Professional installation of new air conditioning systems for homes and businesses.",
    features: ["Energy-efficient units", "Proper sizing", "Warranty included"],
    price: "Starting at $2,500",
    image: "/assets/install2.jpg",
  },
  {
    icon: <Build sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
    title: "AC Repair",
    description: "24/7 emergency repair services for all AC makes and models.",
    features: ["Same-day service", "All brands", "Licensed technicians"],
    price: "Starting at $150",
    image: "/assets/acRepair.jpg",
  },
  {
    icon: <Settings sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
    title: "AC Maintenance",
    description:
      "Regular maintenance to keep your system running efficiently year-round.",
    features: [
      "Seasonal tune-ups",
      "Filter replacement",
      "Performance optimization",
    ],
    price: "Starting at $99",
    image: "/assets/acMaintain.jpg",
  },
  {
    icon: <Speed sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
    title: "Emergency Service",
    description: "Round-the-clock emergency AC repair when you need it most.",
    features: ["24/7 availability", "Fast response", "Weekend service"],
    price: "Call for pricing",
    image: "/assets/install3.jpg",
  },
  // {
  //   icon: <Settings sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
  //   title: "AC Consultation",
  //   description:
  //     "Regular maintenance to keep your system running efficiently year-round.",
  //   features: [
  //     "Seasonal tune-ups",
  //     "Filter replacement",
  //     "Performance optimization",
  //   ],
  //   price: "Starting at $99",
  //   image: "/assets/install3.jpg",
  // },
  // {
  //   icon: <Speed sx={{ fontSize: { xs: 40, sm: 45, md: 50 } }} />,
  //   title: "Emergency Service",
  //   description: "Round-the-clock emergency AC repair when you need it most.",
  //   features: ["24/7 availability", "Fast response", "Weekend service"],
  //   price: "Call for pricing",
  //   image: "/assets/install2.jpg",
  // },
];

const Services = () => {
  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: "background.default" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.75rem",
                sm: "2.25rem",
                md: "2.75rem",
                lg: "3rem",
              },
              fontWeight: 700,
            }}
          >
            Our Professional AC Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 4,
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.35rem",
                lg: "1.5rem",
              },
              px: { xs: 0, sm: 2, md: 4 },
            }}
          >
            Comprehensive air conditioning solutions for your home and business
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                minWidth: "300px",
                maxWidth: "500px",
              }}
            >
              {/* <ServiceCard service={service} /> */}

              <ServiceTest service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
