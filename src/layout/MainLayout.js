import { Box } from "@mui/material";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {/* Navbar */}
      <NavBar />

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",

          // mx: "auto", // horizontal center
          // px: { xs: 2, md: 3 }, // responsive padding
          // py: { xs: 4, md: 6 },
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
