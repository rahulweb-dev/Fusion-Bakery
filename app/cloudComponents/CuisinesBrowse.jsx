"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function CuisinesBrowse() {
  const vegTabs = ["Salads", "Fries", "Dessert", "Healthy Bowl"];
  const nonVegTabs = ["Starters", "Grill", "Curries", "Snacks"];

  const [foodType, setFoodType] = useState("Veg");
  const [activeTab, setActiveTab] = useState("Salads");

  const [showForm, setShowForm] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const cuisines = [
    { name: "Chicken Salad", img: "/food/chicken.png", category: "Salads", type: "Non-Veg" },
    { name: "Egg Tofu", img: "/food/tofu.png", category: "Starters", type: "Non-Veg" },
    { name: "Grilled Fish", img: "/food/fish.png", category: "Grill", type: "Non-Veg" },
    { name: 'Greens Salad', price: 180, category: 'Salads', img: '/Green-salad.gif', rating: 4.4, type: 'Veg' },
    { name: 'Tofu Salad', price: 220, category: 'Salads', img: '/gif-images/tofu.gif', rating: 4.3, type: 'Veg' },
    { name: 'Sprouts Salad', price: 190, category: 'Salads', img: '/gif-images/sproutes.gif', rating: 4.2, type: 'Veg' },
    { name: 'Paneer Salad', price: 230, category: 'Salads', img: '/gif-images/panner-salad.gif', rating: 4.5, type: 'Veg' },
    { name: 'Fruit Salad', price: 160, category: 'Salads', img: '/gif-images/fruit-salad.gif', rating: 4.6, type: 'Veg' },
    { name: 'Sweet Corn Salad', price: 170, category: 'Salads', img: '/gif-images/corn.gif', rating: 4.3, type: 'Veg' },
  ];

  useEffect(() => {
    setActiveTab(foodType === "Veg" ? vegTabs[0] : nonVegTabs[0]);
  }, [foodType]);

  const filtered = cuisines.filter(
    (f) => f.type === foodType && f.category === activeTab
  );

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-4xl md:text-8xl font-semibold text-center mb-3 text-[#2E2E2E66]">
          Browse Our Menu
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Fresh • Healthy • Delicious
        </p>

        {/* VEG / NON-VEG */}
        <div className="flex justify-center gap-6 mb-10">
          {["Veg", "Non-Veg"].map((t) => (
            <button
              key={t}
              onClick={() => setFoodType(t)}
              className={`px-6 py-3 rounded-2xl border text-sm font-semibold transition
              ${foodType === t
                  ? "bg-white shadow border-gray-300"
                  : "bg-transparent border-gray-200"}`}
            >
              {t === "Veg" ? "🟢 VEG" : "🔴 NON-VEG"}
            </button>
          ))}
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(foodType === "Veg" ? vegTabs : nonVegTabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white border text-gray-700 hover:bg-gray-100"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex justify-end mb-6">
          <Link
            href="/cloud-kitchen/menu"
            className="group flex items-center gap-2 text-sm font-semibold
    text-orange-600 hover:text-orange-700 transition"
          >
            Explore More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {filtered.map((food, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl border shadow-sm
                hover:shadow-lg transition p-5">

                  {/* IMAGE */}
                  <div className="relative h-[160px] flex justify-center">
                    <Image
                      src={food.img}
                      alt={food.name}
                      width={160}
                      height={160}
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />

                    {/* VEG BADGE */}
                    <span className={`absolute top-2 left-2 w-4 h-4 border-2
                      ${food.type === "Veg" ? "border-green-600" : "border-red-600"}`}>
                      <span className={`block w-2 h-2 m-[3px] rounded-full
                        ${food.type === "Veg" ? "bg-green-600" : "bg-red-600"}`} />
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900">{food.name}</h3>

                    <div className="flex justify-between items-center mt-3">
                      <div>
                        <p className="font-bold text-lg">₹{food.price}</p>
                        <p className="text-xs text-gray-400 line-through">₹150</p>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedFood(food.name);
                          setShowForm(true);
                        }}
                        className="px-4 py-2 text-sm rounded-lg
                        border border-orange-500 text-orange-600
                        hover:bg-orange-500 hover:text-white transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAV BUTTONS */}
          <button className="prevBtn absolute left-[-20px] top-1/2 -translate-y-1/2
          w-10 h-10 bg-white rounded-full shadow border z-20">❮</button>

          <button className="nextBtn absolute right-[-20px] top-1/2 -translate-y-1/2
          w-10 h-10 bg-white rounded-full shadow border z-20">❯</button>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[95%] max-w-md p-6">
            <h3 className="text-lg font-semibold mb-1">Quick Booking</h3>
            <p className="text-sm text-gray-500 mb-4">
              Item: <b>{selectedFood}</b>
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-3 py-2 mb-3"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-3 py-2 mb-4"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="w-1/2 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  console.log({
                    food: selectedFood,
                    ...formData,
                  });
                  setShowForm(false);
                }}
                className="w-1/2 py-2 rounded-lg bg-black text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
