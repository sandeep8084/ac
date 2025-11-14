import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Alert,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import CustomTextField from "../../components/customComponents/CustomTextField";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const services = [
    "AC Installation",
    "AC Repair",
    "AC Maintenance",
    "Emergency Service",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <Box sx={{ py: { xs: 8, md: 6 }, bgcolor: "background.default" }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 4 } }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: 700 }}
          >
            Get Your Free Estimate
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "text.secondary", opacity: 0.9 }}
          >
            Ready to improve your comfort? Contact us today!
          </Typography>
        </Box>

        <Card
          elevation={4}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            // bgcolor: "primary.main",
            bgcolor: "secondary.main",
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 1, color: "primary.contrastText", fontWeight: 600 }}
            >
              Request Service
            </Typography>
            <Typography
              variant="body2"
              color="primary.contrastText"
              sx={{ mb: 4 }}
            >
              Fill out the form below and we'll get back to you within 24 hours
            </Typography>

            {showAlert && (
              <Alert severity="success" sx={{ mb: 4 }}>
                Thank you! We'll contact you within 24 hours.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <CustomTextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
                placeholder="Enter your full name"
              />

              <CustomTextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ mb: 2 }}
                placeholder="+91 XXXXX XXXXX"
              />

              <FormControl
                fullWidth
                sx={{
                  mb: 2,
                  "& .MuiInputLabel-root": {
                    color: "white", // label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white", // focused label
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "white", // text color
                    "& fieldset": {
                      borderColor: "white", // default border
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // hover border
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // focused border
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "white", // dropdown arrow color
                  },
                  "& .MuiMenuItem-root": {
                    color: "black", // dropdown list text (keep black for visibility)
                  },
                }}
              >
                <InputLabel>Service Needed *</InputLabel>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  label="Service Needed *"
                  required
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
                ~
              </FormControl>

              <CustomTextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={2}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 4 }}
                placeholder="Describe your AC needs or any specific issues..."
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    // backgroundColor: "secondary.main",
                    backgroundColor: "secondary.main",
                    border: "1px solid #A4D3F5",

                    "&:hover": { backgroundColor: "primary.main" },
                  }}
                >
                  Send Request
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  href="tel:+915551234567"
                  sx={{
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderColor: "primary.main",
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    "&:hover": {
                      borderColor: "primary.contrastText",
                      backgroundColor:"primary.main"
                    },
                  }}
                >
                  Call Now
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;
