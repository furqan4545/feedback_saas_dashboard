import PricingSection from "./pricing-section";
import Hero from "./hero";
import FeaturesSection from "./features-section";
import HowItWorks from "./howitworks";
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default LandingPage;
