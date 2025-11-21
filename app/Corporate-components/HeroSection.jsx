'use client';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import toast from 'react-hot-toast';

import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSection() {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const products = [
    {
      title: 'Rings',
      pastPrice: 1200,
      price: 800,
      img: '/images/45-in-1-pre-4-400x457.png',
    },
    {
      title: 'Couple Rings',
      price: 1000,
      pastPrice: 1400,
      img: 'https://brandingwrap.com/wp-content/uploads/2023/04/45-in-1-pre-5-400x457.png',
    },
    {
      title: 'Earings',
      price: 600,
      pastPrice: 950,
      img: 'https://brandingwrap.com/wp-content/uploads/2023/04/Gift-Sets-Images-Web-31-1.png',
    },
    {
      title: 'Earings',
      price: 600,
      pastPrice: 950,
      img: 'https://brandingwrap.com/wp-content/uploads/2023/04/Gift-Sets-Images-Web-31-1.png',
    },
  ];

  // Like Handler + Toast
  const likeProduct = (item) => {
    toggleWishlist(item);
    const exists = wishlist.find((p) => p.title === item.title);
    if (exists) {
      toast.error('Removed from Wishlist ❌');
    } else {
      toast.success('Added to Wishlist ❤️');
    }
  };

  return (
    <section className='bg-white px-6 py-16 md:px-20 relative max-w-8xl'>
      <div className='md:flex items-center justify-between mt-20 gap-12'>
        <div className='max-w-xl'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold leading-tight text-gray-900'>
            Bigger Smiles, Smaller <br /> Prices
          </h2>
          <p className='mt-6 text-gray-600 text-[16px] leading-relaxed'>
            Celebrate every occasion with unique collections at amazing
            discounts. Grab offers up to 50% off this season!
          </p>

          <button className='mt-8 px-7 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white rounded-xl text-lg font-medium hover:opacity-90 shadow-xl'>
            Explore Products ✨
          </button>
        </div>

        <div className='w-full md:w-[60%] relative'>
          <Swiper
            slidesPerView={3}
            loop
            autoplay={{ delay: 2500 }}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            grabCursor
          >
            {products.map((item, idx) => {
              const liked = wishlist.find((p) => p.title === item.title);
              return (
                <SwiperSlide key={idx}>
                  <div className='relative bg-white rounded-3xl shadow-xl p-5 border border-gray-200 hover:border-yellow-600 hover:shadow-2xl transition-all duration-300'>
                    {/* ❤️ LIKE BUTTON */}
                    <button
                      onClick={() => likeProduct(item)}
                      className='absolute top-3 right-3 text-lg'
                    >
                      {liked ? '❤️' : '🤍'}
                    </button>

                    <p className='text-sm text-gray-500 tracking-widest font-light'>
                      CATEGORIES
                    </p>
                    <h3 className='text-xl font-serif font-bold mt-1 text-gray-900'>
                      {item.title}
                    </h3>

                    <div className='relative w-full h-[150px] mx-auto mt-4 mb-5'>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className='object-contain'
                      />
                    </div>

                    <div className='flex justify-between items-center'>
                      <p className='text-lg font-bold text-gray-900'>
                        ₹{item.price}
                        <span className='line-through text-gray-400 text-sm ml-2'>
                          ₹{item.pastPrice}
                        </span>
                      </p>

                      <button
                        onClick={() => {
                          addToCart(item);
                          toast.success('Added to Cart 🛒');
                        }}
                        className='px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition'
                      >
                        Add To Cart 🛒
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Buttons */}
          <button className='prev-btn absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center z-30 bg-gradient-to-b from-yellow-500 to-yellow-700 text-white border border-yellow-800 rounded-full shadow-lg hover:scale-110 transition'>
            ❮
          </button>

          <button className='next-btn absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center z-30 bg-gradient-to-b from-yellow-500 to-yellow-700 text-white border border-yellow-800 rounded-full shadow-lg hover:scale-110 transition'>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
