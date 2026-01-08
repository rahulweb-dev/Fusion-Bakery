import GiftingSection from '@/app/components/GiftingSection';
import BeforeAfterBranding from '@/app/Corporate-components/BeforeAfterBranding';
import CorporateGiftingHero from '@/app/Corporate-components/CorporateGiftingHero';
import HeroSection from '@/app/Corporate-components/HeroSection'
import TrendingItems from '@/app/Corporate-components/TrendingItems';
import AboutCorporate from '@/app/corporateComponents/AboutSection';
import BannerSlider from '@/app/corporateComponents/BannerSlider'
import Categories from '@/app/corporateComponents/Categories'
import TrustedPartners from '@/app/corporateComponents/TrustedPartners';
import React from 'react'
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
export default function page() {
  return (
    <div>  <Categories />
      <BannerSlider slides={banners} /><HeroSection />
      <TrendingItems />
      <BeforeAfterBranding />
      <AboutCorporate />
      <CorporateGiftingHero/>
      <GiftingSection />
      <TrustedPartners />
    </div>
  )
}
