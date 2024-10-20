import PricingSection from "./pricing-section";
import Hero from "./hero";
import FeaturesSection from "./features-section";
import HowItWorks from "./howitworks";
import IntegrateCode from "./integrate-code";
import WidgetShowcase from "./WidgetShowcase";
const LandingPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <WidgetShowcase />
      <IntegrateCode />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default LandingPage;
