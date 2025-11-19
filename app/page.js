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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <FreshServices />
      <ExploreRange />
      <SweetStory />
      <GiftingSection />
      <ContactSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
