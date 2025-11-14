import { AcUnit, Build, Speed, CheckCircle } from "@mui/icons-material";

export const heroData = {
  title: "Professional AC Services You Can Trust",
  subtitle:
    "Expert air conditioning installation, repair, and maintenance services. Keep your home comfortable year-round with our reliable solutions.",
  phoneNumber: "9642929237",
  buttons: [
    {
      label: "Call Now: 9642929237",
      variant: "contained",
      href: "tel:9642929237",
    },
    // {
    //   label: "Get Free Estimate",
    //   variant: "outlined",
    //   href: "#estimate",
    // },
  ],
  features: [
    {
      icon: <AcUnit sx={{ color: "primary.main", fontSize: 40 }} />,
      title: "Expert Installation",
      description: "Professional AC installation services",
    },
    {
      icon: <Build sx={{ color: "primary.main", fontSize: 40 }} />,
      title: "24/7 Repairs",
      description: "Emergency repair services available",
    },
    {
      icon: <Speed sx={{ color: "primary.main", fontSize: 40 }} />,
      title: "Quick Response",
      description: "Fast and efficient service",
    },
    {
      icon: <CheckCircle sx={{ color: "primary.main", fontSize: 40 }} />,
      title: "Licensed & Insured",
      description: "Fully certified technicians",
    },
  ],
};
