'use client';
import GiftingSection from './components/GiftingSection';
import TestimonialSection from './components/TestimonialSection';
import { useSelect } from './context/SelectContext';

import TrustedPartners from './corporateComponents/TrustedPartners';
import AboutUs from './home-components/AboutUs';
import FeaturedHighlights from './home-components/FeaturedHighlights';
import HomeHero from './home-components/HomeHero';
import OurOfferings from './home-components/OurOfferings';
import WhyFusionn from './home-components/WhyFusionn';
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
  const Cloudbanners = [
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
      {/* <Header/> */}
      <HomeHero />
 
      <OurOfferings />
      <WhyFusionn />
      <AboutUs />
      <FeaturedHighlights />

      <GiftingSection />
      <TrustedPartners />
      <TestimonialSection />
      {/* {select === 'Cloud Kitchen' ? <FAQSection /> : <FAQSection />} */}
    </>
  );
}
