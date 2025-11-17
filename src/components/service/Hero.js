import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { heroData } from "../../data/ServiceHeroData";

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "text.primary",
        py: { xs: 8, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ color: "background.paper", fontWeight: 700 }}
            >
              {heroData.title}
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{ mb: 4, color: "background.paper", opacity: 0.9 }}
            >
              {heroData.subtitle}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {heroData.buttons.map((btn, i) => (
                <Button
                  key={i}
                  variant={btn.variant}
                  size="large"
                  href={btn.href}
                  sx={
                    btn.variant === "contained"
                      ? {
                          backgroundColor: "secondary.main",
                          color: "contrastText",
                          "&:hover": { backgroundColor: "primary.main" },
                        }
                      : {
                          color: "background.paper",
                          borderColor: "background.paper",
                          "&:hover": {
                            color: "primary.contrastText",
                            borderColor: "secondary.main",
                          },
                        }
                  }
                >
                  {btn.label}
                </Button>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
            //  sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 2, padding:2 }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "stretch",
                }}
              >
                {heroData.features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        width: "262px",
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 3,
                        textAlign: "center",
                        py: 3,
                      }}
                    >
                      <CardContent>
                        <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                        <Typography
                          variant="h6"
                          color="primary.main"
                          gutterBottom
                        >
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
