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
    { title: 'Rings', pastPrice: 1200, price: 800, img: '/images/45-in-1-pre-4-400x457.png' },
    { title: 'Couple Rings', price: 1000, pastPrice: 1400, img: 'https://brandingwrap.com/wp-content/uploads/2023/04/45-in-1-pre-5-400x457.png' },
    { title: 'Earrings', price: 600, pastPrice: 950, img: 'https://brandingwrap.com/wp-content/uploads/2023/04/Gift-Sets-Images-Web-31-1.png' },
    { title: 'Bracelet', price: 900, pastPrice: 1400, img: 'https://brandingwrap.com/wp-content/uploads/2023/04/Gift-Sets-Images-Web-31-1.png' },
  ];

  const likeProduct = (item) => {
    toggleWishlist(item);
    const exists = wishlist.find((p) => p.title === item.title);
    exists ? toast.error('Removed from Wishlist ❌') : toast.success('Added to Wishlist ❤️');
  };

  return (
    <section className=" px-5 sm:px-10 lg:px-20 py-14 lg:py-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2F2B28] leading-tight">
            Premium Gifts<br /> Crafted For Special Moments 🎁
          </h2>

          <p className="mt-4 text-[#4C2A1A] text-[15px] sm:text-[16px] leading-relaxed px-2 md:px-0">
            Elegant, thoughtful and timeless gifting — curated for clients, partners and loved ones.
          </p>

          <Link href="/products">
            <button className="mt-7 sm:mt-8 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-lg font-medium
              bg-gradient-to-r from-[#C8A26A] to-[#8B5E34] text-white shadow-lg hover:shadow-xl transition">
              Explore Collection ✨
            </button>
          </Link>
        </div>

        {/* Slider */}
        <div className="w-full md:w-[60%] relative">
          <Swiper
            loop
            autoplay={{ delay: 2200 }}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            grabCursor
            breakpoints={{
              0: { slidesPerView: 1.1 },
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
                  <div className="relative bg-[#FAF7F3] rounded-2xl sm:rounded-3xl shadow-lg
                    border border-[#E6D8C4] hover:border-[#C8A26A] p-5 transition-all duration-300">

                    <button
                      onClick={() => likeProduct(item)}
                      className="absolute top-3 right-3 text-xl sm:text-2xl"
                    >
                      {liked ? '❤️' : '🤍'}
                    </button>

                    <p className="text-[11px] sm:text-xs text-gray-500 tracking-widest">PREMIUM COLLECTION</p>

                    <h3 className="text-lg sm:text-xl font-serif font-bold mt-1 text-[#2F2B28]">
                      {item.title}
                    </h3>

                    <div className="relative w-full h-[130px] sm:h-[160px] mx-auto mt-3 mb-5">
                      <Image src={item.img} alt={item.title} fill className="object-contain" />
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-[15px] sm:text-lg font-bold text-[#4C2A1A]">
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
                        className="px-4 py-2 rounded-full text-[11px] sm:text-sm
                          bg-[#4C2A1A] text-white hover:bg-[#2F2B28] transition">
                        Add To Cart 🛒
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Nav Buttons */}
          <button className="prev-btn absolute left-[-8px] sm:left-[-18px] top-[45%] -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center z-30
            bg-[#C8A26A] text-white border border-[#8B5E34]
            rounded-full shadow-lg hover:bg-[#8B5E34] transition">
            ❮
          </button>

          <button className="next-btn absolute right-[-8px] sm:right-[-18px] top-[45%] -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center z-30
            bg-[#C8A26A] text-white border border-[#8B5E34]
            rounded-full shadow-lg hover:bg-[#8B5E34] transition">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
