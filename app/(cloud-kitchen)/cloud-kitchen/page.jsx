import ComboMealBoxes from '@/app/cloudComponents/ComboMealBoxes';
import CuisinesBrowse from '@/app/cloudComponents/CuisinesBrowse'
import KitchenInsights from '@/app/cloudComponents/kitchen-insights';
import WhyChooseUs from '@/app/cloudComponents/WhyChooseUs';
import FAQSection from '@/app/components/FAQSection';
import BannerSlider from '@/app/corporateComponents/BannerSlider'
import TrustedPartners from '@/app/corporateComponents/TrustedPartners';
import React from 'react'

export default function page() {
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
    <div><CuisinesBrowse />
      <BannerSlider slides={Cloudbanners} />
      <WhyChooseUs />
      <ComboMealBoxes />
      <KitchenInsights />
      <TrustedPartners />
      <FAQSection />
    </div>
  )
}
