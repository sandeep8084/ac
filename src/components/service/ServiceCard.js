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

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/contact");
  };
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 150,
          bgcolor: "primary.light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexShrink: 0,
        }}
      >
        {service.icon}

        {/* <img
          src={service.image}
          alt={service.title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        /> */}
      </CardMedia>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.375rem", md: "1.5rem" },
            mb: 1,
            minHeight: "1em",
          }}
        >
          {service.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
            mb: 2,
            minHeight: "4.5em",
            lineHeight: 1.5,
          }}
        >
          {service.description}
        </Typography>

        <Box sx={{ mb: 1, flexGrow: 1, minHeight: "20px" }}>
          {service.features.map((feature, idx) => (
            <Chip
              key={idx}
              label={feature}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                fontSize: { xs: "0.75rem", sm: "0.813rem" },
              }}
              variant="outlined"
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto",
            pt: 2,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 0 },
          }}
        >
          <Typography
            variant="body2"
            fontWeight="bold"
            color="primary"
            sx={{
              fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
            }}
          >
            {/* {service.price} */}
          </Typography>
          <Button
            variant="contained"
            size="small"
            fullWidth={false}
            onClick={handleGetQuote}
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.813rem", md: "0.875rem" },
              px: { xs: 2, sm: 2.5, md: 3 },
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

export default ServiceCard;
