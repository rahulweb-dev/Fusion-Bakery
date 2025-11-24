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
import HeroSection from './Corporate-components/HeroSection';
import AboutCorporate from './corporateComponents/AboutSection';
import BannerSlider from './corporateComponents/BannerSlider';
import Categories from './corporateComponents/Categories';
import TrustedPartners from './corporateComponents/TrustedPartners';
export default function Home() {
  const { select } = useSelect();

  const banners = [
    {
      image:
        'https://corporategiftstkc.com/cdn/shop/files/Diwali_Website_Banners_PC_1.png?v=1761810497&width=1800',
      title: 'Gift It Once. Stay Remembered All Year.',
      subtitle:
        'Diaries, calendars & desk accessories that inspire productivity all year long',
      buttonText: 'Explore Now',
      buttonLink: '#products',
    },
    {
      image:
        'https://corporategiftstkc.com/cdn/shop/files/website-banner-2_2.jpg?v=1746699864&width=1800',
      title: 'Gift It Once. Stay Remembered All Year.',
      subtitle:
        'Diaries, calendars & desk accessories that inspire productivity all year long',
      buttonText: 'Explore Now',
      buttonLink: '#products',
    },
  ];
  return (
    <>
      <Navbar />
      {/* {select === 'Cloud Kitchen' ? 'cloud' : <Hero />} */}
      {select === 'Cloud Kitchen' ? 'cloud' : <Categories />}
      {select === 'Cloud Kitchen' ? 'cloud' : <BannerSlider slides={banners} />}

      {select === 'Cloud Kitchen' ? 'cloud' : <HeroSection />}
      {select === 'Cloud Kitchen' ? <AboutSection /> : <AboutCorporate />}
      {select === 'Cloud Kitchen' ? <FreshServices /> : ''}
      {/* {select === 'Cloud Kitchen' ? 'cloud' : <ExploreRange />} */}

      {/* {select === 'Cloud Kitchen' ? 'cloud' : <SweetStory />} */}
      {select === 'Cloud Kitchen' ? '' : <TrustedPartners />}
      {select === 'Cloud Kitchen' ? 'cloud' : <GiftingSection />}
      {/* <ContactSection /> */}
      <TestimonialSection />
      <Footer />
    </>
  );
}
