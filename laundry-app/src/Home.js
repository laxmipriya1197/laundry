import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import ServicesOverview from './ServicesOverview';
import HowItWorks from './HowItWorks';
import WhyChooseUs from './WhyChooseUs';
import CTA from './CTA';
import Footer from './Footer';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroBanner />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;

