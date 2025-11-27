'use client';
import ComboMealBoxes from './cloudComponents/ComboMealBoxes';
import CrazyDeals from './cloudComponents/CrazyDeals';
import CuisinesBrowse from './cloudComponents/CuisinesBrowse';
import FoodAds from './cloudComponents/FoodAds';
import KitchenInsights from './cloudComponents/kitchen-insights';
import WhyChooseUs from './cloudComponents/WhyChooseUs';
import FAQSection from './components/FAQSection';
import GiftingSection from './components/GiftingSection';

import Navbar from './components/Navbar';
import TestimonialSection from './components/TestimonialSection';
import { useSelect } from './context/SelectContext';
import BeforeAfterBranding from './Corporate-components/BeforeAfterBranding';

import HeroSection from './Corporate-components/HeroSection';
import TrendingItems from './Corporate-components/TrendingItems';
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
      <Navbar />
      {/* {select === 'Cloud Kitchen' ? 'cloud' : <Hero />} */}
      {select === 'Cloud Kitchen' ? <CuisinesBrowse /> : <Categories />}
      {select === 'Cloud Kitchen' ? (
        <BannerSlider slides={Cloudbanners} />
      ) : (
        <BannerSlider slides={banners} />
      )}
      {select === 'Cloud Kitchen' ? <CrazyDeals /> : <HeroSection />}{' '}
      {select === 'Cloud Kitchen' ? <FoodAds /> : <TrendingItems />}{' '}
      {select === 'Cloud Kitchen' ? <WhyChooseUs /> : <BeforeAfterBranding />}
      {select === 'Cloud Kitchen' ? <ComboMealBoxes /> : <AboutCorporate />}
      {select === 'Cloud Kitchen' ? <KitchenInsights /> : <GiftingSection />}
      {/* <ContactSection /> */}{' '}
      {select === 'Cloud Kitchen' ? '' : <TrustedPartners />}
      <TestimonialSection />{' '}
      {select === 'Cloud Kitchen' ? <FAQSection /> : <FAQSection />}
  
    </>
  );
}
