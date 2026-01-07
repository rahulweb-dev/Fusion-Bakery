'use client';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import toast from 'react-hot-toast';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

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
      title: 'Earrings',
      price: 600,
      pastPrice: 950,
      img: 'https://brandingwrap.com/wp-content/uploads/2023/04/Gift-Sets-Images-Web-31-1.png',
    },
    {
      title: 'Bracelet',
      price: 900,
      pastPrice: 1400,
      img: 'https://brandingwrap.com/wp-content/uploads/2023/04/Gift-Sets-Images-Web-31-1.png',
    },
  ];

  const likeProduct = (item) => {
    toggleWishlist(item);
    const exists = wishlist.find((p) => p.title === item.title);
    exists ? toast.error('Removed from Wishlist ❌') : toast.success('Added to Wishlist ❤️');
  };

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-14 lg:py-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Bigger Smiles, <br /> Smaller Prices ✨
          </h2>
          <p className="mt-4 text-gray-600 text-[15px] sm:text-[16px] leading-relaxed px-2 md:px-0">
            Celebrate every occasion with unique collections at amazing offers. Grab up to 50% discounts!
          </p>

          <Link href="/products">
            <button className="mt-7 sm:mt-8 px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white rounded-lg sm:rounded-xl text-sm sm:text-lg font-medium hover:opacity-90 shadow-lg hover:shadow-xl transition">
              Explore Products ✨
            </button>
          </Link>
        </div>

        {/* Swiper Slider */}
        <div className="w-full md:w-[60%] relative">
          <Swiper
            loop
            autoplay={{ delay: 2200 }}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            grabCursor
            breakpoints={{
              0: { slidesPerView: 1.1 }, // phones
              480: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.6 }, 
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {products.map((item, idx) => {
              const liked = wishlist.find((p) => p.title === item.title);
              return (
                <SwiperSlide key={idx}>
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-yellow-600 p-4 sm:p-5 transition-all duration-300">
                    <button
                      onClick={() => likeProduct(item)}
                      className="absolute top-3 right-3 text-xl sm:text-2xl"
                    >
                      {liked ? '❤️' : '🤍'}
                    </button>

                    <p className="text-[11px] sm:text-xs text-gray-500 tracking-widest font-light">CATEGORY</p>
                    <h3 className="text-lg sm:text-xl font-serif font-bold mt-1 text-gray-900">{item.title}</h3>

                    <div className="relative w-full h-[130px] sm:h-[160px] mx-auto mt-3 mb-5">
                      <Image src={item.img} alt={item.title} fill className="object-contain" />
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-[15px] sm:text-lg font-bold text-gray-900">
                        ₹{item.price}
                        <span className="line-through text-gray-400 text-xs sm:text-sm ml-2">
                          ₹{item.pastPrice}
                        </span>
                      </p>

                      <button
                        onClick={() => {
                          addToCart(item);
                          toast.success('Added to Cart 🛒');
                        }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-[11px] sm:text-sm hover:bg-gray-800 transition"
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
          <button className="prev-btn absolute left-[-5px] sm:left-[-18px] top-[45%] -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center z-30 bg-gradient-to-b from-yellow-500 to-yellow-700 text-white border border-yellow-800 rounded-full shadow-lg hover:scale-110 transition">
            ❮
          </button>

          <button className="next-btn absolute right-[-5px] sm:right-[-18px] top-[45%] -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center z-30 bg-gradient-to-b from-yellow-500 to-yellow-700 text-white border border-yellow-800 rounded-full shadow-lg hover:scale-110 transition">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
