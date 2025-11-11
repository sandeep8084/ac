import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Services from "../components/service/Services";
import CompanyProfile from "../components/about/CompanyProfile";
import Contact from "../components/about/Contact";
import CustomerReview from "../components/about/CustomerReview";
const Home = () => {
  return (
    <Box>
      <Hero />
      <Services />
      <CompanyProfile />
      <CustomerReview/>
      <Contact />
    </Box>
  );
};

export default Home;
