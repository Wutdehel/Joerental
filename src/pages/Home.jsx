import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import AdvantagesSection from '../components/sections/AdvantagesSection';
import TruckComparisonSection from '../components/sections/TruckComparisonSection';
import ConcreteGradesSection from '../components/sections/ConcreteGradesSection';
import PumpServiceSection from '../components/sections/PumpServiceSection';
import PricingSection from '../components/sections/PricingSection';
import GallerySection from '../components/sections/GallerySection';
import OrderingSection from '../components/sections/OrderingSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <AdvantagesSection />
      <TruckComparisonSection />
      <ConcreteGradesSection />
      <PumpServiceSection />
      <PricingSection />
      {/* <GallerySection /> */}
      <OrderingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
