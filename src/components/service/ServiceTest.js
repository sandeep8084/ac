import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceTest = ({ service }) => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/contact");
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 6px 28px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Bigger Image Section */}
      <CardMedia
        component="img"
        src={service.image}
        alt={service.title}
        sx={{
          height: 200,
          width: "100%",
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 3 },
          flexGrow: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.3rem", sm: "1.45rem" },
            mb: 1.5,
            color: "primary.main",
          }}
        >
          {service.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.6,
            mb: 2,
            minHeight: "60px",
          }}
        >
          {service.description}
        </Typography>

        {/* Features */}
        <Box sx={{ mb: 2 }}>
          {service.features?.map((feature, idx) => (
            <Chip
              key={idx}
              label={feature}
              size="small"
              variant="outlined"
              sx={{
                mr: 1,
                mb: 1,
                borderRadius: "6px",
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Box>

        {/* Price + Button */}
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{
              fontWeight: "bold",
              visibility: service.price ? "visible" : "hidden",
            }}
          >
            {/* {service.price} */}
          </Typography>

          <Button
            variant="contained"
            size="medium"
            onClick={handleGetQuote}
            sx={{
              px: 3,
              fontWeight: 600,
              borderRadius: 2,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Get Quote
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceTest;




