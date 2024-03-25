import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import Navbar from "../LandingPage/Navbar";
import Hero from "../LandingPage/Hero";
import FitnessGoal from "../LandingPage/FitnessGoal";
import BestOffers from "../LandingPage/BestOffers";
import Services from "../LandingPage/Services";
import BestPlan from "../LandingPage/BestPlan";
import Testimonial from "../LandingPage/Testimonial";
import Footer from "../LandingPage/Footer";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      {/* <LogoutPopup /> */}
      <Hero />
      <FitnessGoal />
      <BestOffers />
      <Services />
      <BestPlan />
      <Testimonial />
      <Footer />
    </>
  );
};
