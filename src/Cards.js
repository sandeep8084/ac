import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    id: 1,
    title: "Ac Installation",
    description:
      "A complex process involving the assembly, positioning, and integration of components to create a fully functional, safe, and efficient elevator system tailored to the building's specifications.",
    image: "/assets/hero.jpg",
  },
  {
    id: 2,
    title: "Ac Repairs",
    description:
      "Comprehensive maintenance and repair solutions to ensure elevators run smoothly, minimizing downtime and enhancing safety.",
    image: "/assets/hero.jpg",
  },
  {
    id: 3,
    title: "Ac Maintanance",
    description:
      "Upgrade existing elevator systems with advanced technology, improved efficiency, and enhanced aesthetics for a modern experience.",
    image: "/assets/hero.jpg",
  },
  {
    id: 4,
    title: "Emergency Services",
    description:
      "Thorough testing and compliance checks to ensure the elevator meets all safety and performance standards.",
    image: "/assets/hero.jpg",
  },
];

const ServiceCardsRow = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} key={service.id}>
            <Card
              sx={{
                width: "100%",
                maxWidth: { md: "555px" },
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", sm: 200 },
                  height: { xs: 200, sm: "auto" },
                  objectFit: "cover",
                  flexShrink: 0,
                }}
                image={service.image}
                alt={service.title}
                loading="lazy"
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 2, sm: 3 },
                  flexGrow: 1,
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "justify", mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "primary.main",
                      fontWeight: 500,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    View More <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
                  </Link>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceCardsRow;