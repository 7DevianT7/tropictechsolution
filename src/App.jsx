import { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 100);
  }, []);

  return (
    <div className={fade ? 'fade-in' : 'hidden'}>
      <HeroSection />
      <WhoWeAre />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
      <ScrollToTop />
    </div>
  );
}

export default App;
