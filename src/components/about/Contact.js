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
    phone: "",
    service: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const services = [
    "AC Installation",
    "AC Repair",
    "AC Maintenance",
    "Emergency Service",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION: Only digits + max 10 characters
    if (name === "phone") {
      const phoneRegex = /^[0-9]{0,10}$/;

      // Block non-numeric characters
      if (!phoneRegex.test(value)) return;

      // Set validation message
      if (value.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate before submitting
    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    console.log("Form submitted:", formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
    setPhoneError("");
  };

  return (
    <Box sx={{ py: { xs: 6, md: 6 }, bgcolor: "background.default" }}>
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
              {/* Full Name */}
              <CustomTextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
                placeholder="Enter your full name"
              />

              {/* Phone Number with validation */}
              <CustomTextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ mb: 2 }}
                placeholder="0987654321"
                error={Boolean(phoneError)}
                helperText={phoneError}
              />

              {/* Service Dropdown */}
              <FormControl
                fullWidth
                sx={{
                  mb: 2,
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                  "& .MuiSelect-icon": { color: "white" },
                }}
              >
                <InputLabel>Service Needed</InputLabel>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  label="Service Needed"
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Message Field */}
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

              {/* Buttons */}
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
                      backgroundColor: "primary.main",
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
