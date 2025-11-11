import { Box, Typography, Button } from "@mui/material";

const ServiceHelpline = ({
  title = "Need Help Choosing?",
  description = "Call us for a free consultation and personalized recommendations",
  buttonText = "Call Now",
  phoneNumber = "9642929237",
  buttonColor = "secondary",
  buttonVariant = "contained",
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: { xs: 4, sm: 5, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.125rem" },
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: 3,
          fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
          px: { xs: 0, sm: 2 },
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        {description}
      </Typography>
      <Button
        variant={buttonVariant}
        color={buttonColor}
        size="large"
        href={`tel:${phoneNumber}`}
        sx={{
          fontSize: {
            xs: "0.875rem",
            sm: "0.9375rem",
            md: "1rem",
            lg: "1.125rem",
          },
          px: { xs: 3, sm: 4, md: 5, lg: 6 },
          py: { xs: 1, sm: 1.25, md: 1.5 },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: 3,
          },
        }}
      >
        {buttonText} {phoneNumber}
      </Button>
    </Box>
  );
};

export default ServiceHelpline;
