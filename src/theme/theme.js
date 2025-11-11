import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B2344", // Deep Navy Blue - For Header, Buttons, and Highlights
      contrastText: "#F6F8FB", // Cool White - Text on primary background
    },
    secondary: {
      main: "#1F5EA8", // Cool Royal Blue - For hover effects, secondary buttons
    },
    background: {
      default: "#F6F8FB", // Cool White - Page background
      paper: "#A4D3F5", // Ice Blue - Card and section backgrounds
    },
    text: {
      primary: "#2E2E2E", // Graphite Gray - For most text
      secondary: "#0B2344", // Deep Navy Blue - Headings or emphasis
    },
  },

  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#0B2344",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#0B2344",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#1F5EA8",
    },
    body1: {
      fontSize: "1rem",
      color: "#2E2E2E",
    },
    body2: {
      fontSize: "0.9rem",
      color: "#2E2E2E",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      color: "#F6F8FB",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
          transition: "0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#1F5EA8", // Cool Royal Blue
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0B2344", // Deep Navy Blue
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#A4D3F5", // Ice Blue
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
