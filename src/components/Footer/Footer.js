import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Email,
  LocalPhone,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        py: 6,
        mt: { xs: 0, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          // justifyContent="center"
          alignItems="flex-start"
        >
          {/* Company Info */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, letterSpacing: 0.5 }}
            >
              Aloka Enterprises
            </Typography>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 320,
                mx: { xs: "auto", md: 0 },
                color: "inherit",
                opacity: 0.85,
                lineHeight: 1.6,
              }}
            >
              Reliable Air Conditioning & Refrigeration Services.
              <br />
              Keeping homes & businesses cool with trust and innovation.
            </Typography>
          </Grid>

          {/* Contact Info */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Stack
              spacing={1.8}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              {/* Address */}
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOn fontSize="small" sx={{ mt: "2px" }} />
                <Typography
                  variant="body2"
                  sx={{ maxWidth: 260, color: "inherit", textAlign: "left" }}
                >
                  Nagasuri Enclave, 1st Floor, Flat No.109, 9th Phase,
                  SaliVahana Colony, Kukatpally, Hyderabad - 500085.
                </Typography>
              </Stack>

              {/* Phone Numbers */}
              <Stack direction="row" spacing={1} alignItems="center">
                <LocalPhone fontSize="small" />
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {[
                    { number: "9642929237", link: "tel:+919642929237" },
                    { number: "8712999712", link: "tel:+918712999712" },
                  ].map((phone, i) => (
                    <Link
                      key={i}
                      href={phone.link}
                      color="inherit"
                      underline="hover"
                      sx={{
                        fontSize: "0.9rem",
                        "&:visited": { color: "inherit" },
                        "&:hover": { color: theme.palette.secondary.main },
                      }}
                    >
                      {phone.number}
                    </Link>
                  ))}
                </Stack>
              </Stack>

              {/* Email */}
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" />
                <Link
                  href="mailto:alokaenterprises@outlook.com"
                  color="inherit"
                  underline="hover"
                  sx={{
                    fontSize: "0.9rem",
                    "&:visited": { color: "inherit" },
                    "&:hover": { color: theme.palette.secondary.main },
                  }}
                >
                  alokaenterprises@outlook.com
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontWeight: 600, color: "inherit" }}
            >
              Follow Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: <Facebook />, link: "https://www.facebook.com" },
                { icon: <Twitter />, link: "https://www.twitter.com" },
                { icon: <Instagram />, link: "https://www.instagram.com" },
                { icon: <LinkedIn />, link: "https://www.linkedin.com" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  sx={{
                    color: "inherit",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: theme.palette.secondary.main,
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.secondary.main}`,
            mt: 5,
            mb: 2,
            opacity: 0.2,
          }}
        />

        {/* Copyright */}
        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ opacity: 0.8, fontSize: "0.8rem", letterSpacing: 0.5 }}
        >
          © {new Date().getFullYear()} Aloka Enterprises. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
