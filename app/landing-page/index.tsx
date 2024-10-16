import PricingSection from "./pricing-section";
import Hero from "./hero";
import FeaturesSection from "./features-section";
import HowItWorks from "./howitworks";
import IntegrateCode from "./integrate-code";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <IntegrateCode />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default LandingPage;
