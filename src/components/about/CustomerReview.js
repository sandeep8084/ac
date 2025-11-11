import { Container, Typography, Grid, Card, Box } from "@mui/material";

import { stats } from "../../data/testimonialsData";

const CustomerReview = () => {
  return (
    <Box sx={{ paddingTop: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: 700 }}
          >
            What Our Customers Say
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Real reviews from satisfied customers across the city
          </Typography>

          {/* Statistics Row */}
          <Grid
            container
            spacing={3}
            sx={{ mb: 4, justifyContent: "center", alignItems: "center" }}
          >
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 2,
                    bgcolor: "primary.main",
                    color: "contrastText",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "primary.contrastText" }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReview;
