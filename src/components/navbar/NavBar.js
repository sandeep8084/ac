import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* Logo */}
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/alokaremovebg.png"
          alt="Aloka Enterprises Logo"
          style={{ height: 40, marginBottom: 8 }}
        />
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemText
              primary={
                // <Button
                //   component={Link}
                //   to={item.path}
                //   sx={{
                //     width: "100%",
                //     color:
                //       location.pathname === item.path
                //         ? theme.palette.primary.contrastText
                //         : theme.palette.primary.contrastText,
                //     bgcolor:
                //       location.pathname === item.path
                //         ? theme.palette.secondary.main
                //         : "transparent",
                //     "&:hover": {
                //       bgcolor: theme.palette.secondary.main,
                //       color: theme.palette.primary.contrastText,
                //     },
                //     textTransform: "none",
                //     fontWeight: 600,
                //   }}
                // >
                //   {item.label}
                // </Button>

                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    width: "100%",
                    color:
                      location.pathname === item.path
                        ? theme.palette.secondary.main
                        : theme.palette.primary.contrastText,
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: theme.palette.secondary.main,
                    },
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Button>
              }
            />
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            href="tel:9642929237"
            sx={{ width: "80%", mx: "auto" }}
          >
            Call Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
          {/* Logo + Name */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              component="img"
              src="/assets/logobgw1.png"
              alt="Logo"
              sx={{ height: 60, mr: 1.5 }}
            />
          </Box>

          {/* Desktop Navigation */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                // <Button
                //   key={item.label}
                //   component={Link}
                //   to={item.path}
                //   sx={{
                //     color:
                //       location.pathname === item.path
                //         ? theme.palette.primary.contrastText
                //         : theme.palette.primary.contrastText,
                //     bgcolor:
                //       location.pathname === item.path
                //         ? theme.palette.secondary.main
                //         : "transparent",
                //     "&:hover": {
                //       bgcolor: theme.palette.secondary.main,
                //       color: theme.palette.primary.contrastText,
                //     },
                //     textTransform: "none",
                //     fontWeight: 600,
                //   }}
                // >
                //   {item.label}
                // </Button>

                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? theme.palette.secondary.main
                        : theme.palette.primary.contrastText,
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: theme.palette.secondary.main,
                    },
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                href="tel:9642929237"
              >
                Call Now
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { width: 240 } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
