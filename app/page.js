'use client';
import AboutSection from './components/About';
import ContactSection from './components/ContactSection';
import ExploreRange from './components/ExploreRange';
import Footer from './components/Footer';
import FreshServices from './components/FreshServices';
import GiftingSection from './components/GiftingSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SweetStory from './components/SweetStory';
import TestimonialSection from './components/TestimonialSection';
import { useSelect } from './context/SelectContext';
export default function Home() {
  const { select } = useSelect();
  return (
    <>
      <Navbar />
      {select === 'Cloud Kitchen' ? 'cloud' : <Hero />}
      {select === 'Cloud Kitchen' ? 'cloud' : <AboutSection />}
      {select === 'Cloud Kitchen' ? 'cloud' : <FreshServices />}
      {select === 'Cloud Kitchen' ? 'cloud' : <ExploreRange />}
      {select === 'Cloud Kitchen' ? 'cloud' : <SweetStory />}
      {select === 'Cloud Kitchen' ? 'cloud' : <GiftingSection />}
      <ContactSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
