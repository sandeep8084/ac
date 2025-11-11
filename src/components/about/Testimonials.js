import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Rating,
  Chip,
} from "@mui/material";
import { FormatQuote, Verified, Google } from "@mui/icons-material";
import { testimonials } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <Box sx={{ py: 0, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={testimonial.id}
              sx={{ display: "flex", width: "100%" }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  bgcolor: "background.paper",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    transition: "transform 0.3s ease-in-out",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                >
                  <FormatQuote sx={{ fontSize: 60 }} />
                </Box>

                <CardContent
                  sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Rating value={testimonial.rating} readOnly size="small" />
                    {testimonial.verified && (
                      <Chip
                        icon={<Verified />}
                        label="Verified"
                        size="small"
                        color="success"
                        sx={{ ml: 1 }}
                      />
                    )}
                  </Box>

                  <Chip
                    label={testimonial.service}
                    size="small"
                    color="secondary"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    "{testimonial.review}"
                  </Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", mt: "auto" }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      sx={{
                        width: 48,
                        height: 48,
                        mr: 2,
                        bgcolor: "primary.main",
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="text.primary"
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location} • {testimonial.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.source}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h5" gutterBottom color="primary.main">
            Find Us On
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Chip
              icon={<Google />}
              label="Google Reviews (4.9/5)"
              variant="outlined"
              color="secondary"
              clickable
            />
            <Chip
              label="Facebook"
              variant="outlined"
              color="secondary"
              clickable
            />
            <Chip
              label="Instagram"
              variant="outlined"
              color="secondary"
              clickable
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
