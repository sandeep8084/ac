import { Box } from "@mui/material";

import AboutHero from "../components/about/AboutHero";
import CompanyProfile from "../components/about/CompanyProfile";
import Testimonials from "../components/about/Testimonials";
import CustomerReview from "../components/about/CustomerReview";

const AboutPage = () => {
  return (
    <Box>
      <AboutHero />
      <CompanyProfile />
      <CustomerReview/>
      <Testimonials/>
    </Box>
  );
};

export default AboutPage;
