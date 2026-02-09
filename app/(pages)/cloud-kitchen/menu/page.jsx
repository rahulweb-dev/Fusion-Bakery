'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext';

export default function FoodPage() {
  const { addToCart } = useCart();

  // ---------------- DATA ----------------
  const foods = [
    { name: 'Greens Salad', price: 180, category: 'Salads', img: '/Green-salad.gif', rating: 4.4, type: 'Veg' },
    { name: 'Tofu Salad', price: 220, category: 'Salads', img: '/gif-images/tofu.gif', rating: 4.3, type: 'Veg' },
    { name: 'Sprouts Salad', price: 190, category: 'Salads', img: '/gif-images/sproutes.gif', rating: 4.2, type: 'Veg' },
    { name: 'Paneer Salad', price: 230, category: 'Salads', img: '/gif-images/panner-salad.gif', rating: 4.5, type: 'Veg' },
    { name: 'Fruit Salad', price: 160, category: 'Salads', img: '/gif-images/fruit-salad.gif', rating: 4.6, type: 'Veg' },
    { name: 'Sweet Corn Salad', price: 170, category: 'Salads', img: '/gif-images/corn.gif', rating: 4.3, type: 'Veg' },

    { name: 'Cheese Balls', price: 210, category: 'Fries', img: '/food/cheese-balls.png', rating: 4.4, type: 'Veg' },
    { name: 'Masala Vada', price: 160, category: 'Fries', img: '/food/vada.png', rating: 4.2, type: 'Veg' },
    { name: 'Veg Fingers', price: 190, category: 'Fries', img: '/food/veg-fingers.png', rating: 4.3, type: 'Veg' },
    { name: 'Masala cashew', price: 210, category: 'Fries', img: '/food/cheese-balls.png', rating: 4.4, type: 'Veg' },
    { name: 'Masala Almonds', price: 160, category: 'Fries', img: '/food/vada.png', rating: 4.2, type: 'Veg' },
    { name: 'Makanas', price: 190, category: 'Fries', img: '/food/veg-fingers.png', rating: 4.3, type: 'Veg' },

    { name: 'Dark Chocolates', price: 220, category: 'Dessert', img: '/food/dark-choco.png', rating: 4.6, type: 'Veg' },
    { name: 'Cookies', price: 160, category: 'Dessert', img: '/food/cookies.png', rating: 4.4, type: 'Veg' },
    { name: 'Nuts', price: 220, category: 'Dessert', img: '/food/dark-choco.png', rating: 4.6, type: 'Veg' },
    { name: 'Seeds', price: 160, category: 'Dessert', img: '/food/cookies.png', rating: 4.4, type: 'Veg' },
    { name: 'Choco Chips', price: 220, category: 'Dessert', img: '/food/dark-choco.png', rating: 4.6, type: 'Veg' },
    { name: 'Butter Cookies', price: 160, category: 'Dessert', img: '/food/cookies.png', rating: 4.4, type: 'Veg' },


    { name: 'Poha', price: 120, category: 'Healthy Bowl', img: '/food/poha.png', rating: 4.4, type: 'Veg' },
    { name: 'Rajma Masala', price: 200, category: 'Healthy Bowl', img: '/food/rajma.png', rating: 4.5, type: 'Veg' },
    { name: 'Sandwich', price: 120, category: 'Healthy Bowl', img: '/food/poha.png', rating: 4.4, type: 'Veg' },
    { name: 'Chena Masala', price: 200, category: 'Healthy Bowl', img: '/food/rajma.png', rating: 4.5, type: 'Veg' },
    { name: 'Millets Upma', price: 120, category: 'Healthy Bowl', img: '/food/poha.png', rating: 4.4, type: 'Veg' },
    { name: 'Peanuts Masala', price: 200, category: 'Healthy Bowl', img: '/food/rajma.png', rating: 4.5, type: 'Veg' },
  ];

  const categories = ['All', ...new Set(foods.map(f => f.category))];

  // ---------------- STATE ----------------
  const [qty, setQty] = useState({});
  const [quickView, setQuickView] = useState(null);

  const [vegOnly, setVegOnly] = useState(false);
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('');

  // ---------------- FILTER LOGIC ----------------
  const filteredFoods = useMemo(() => {
    let list = [...foods];

    if (vegOnly) {
      list = list.filter(f => f.type === 'Veg');
    }

    if (category !== 'All') {
      list = list.filter(f => f.category === category);
    }

    if (sort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === 'rating-high') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [vegOnly, category, sort]);

  const updateQty = (name, val) => {
    setQty(prev => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + val),
    }));
  };

  // ---------------- UI ----------------
  return (
    <section className="bg-[#F8F8F8] min-h-screen px-4 md:px-10 py-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Restaurants near you
        </h1>

        {/* ZOMATO FILTER BAR */}
        <div className="flex gap-3 flex-wrap mb-8">

          {/* Veg Only */}
          <button
            onClick={() => setVegOnly(v => !v)}
            className={`px-4 py-2 rounded-full border text-sm font-medium
              ${vegOnly
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-700'}`}
          >
            🟢 Veg Only
          </button>

          {/* Category */}
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full border text-sm
                ${category === c
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700'}`}
            >
              {c}
            </button>
          ))}

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-full border bg-white text-sm"
          >
            <option value="">Sort</option>
            <option value="price-low">Price: Low to High</option>
            <option value="rating-high">Rating: High to Low</option>
          </select>

          {/* Clear */}
          <button
            onClick={() => {
              setVegOnly(false);
              setCategory('All');
              setSort('');
            }}
            className="px-4 py-2 rounded-full border text-sm bg-white"
          >
            ❌ Clear
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoods.map(item => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl
              transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="relative cursor-pointer overflow-hidden rounded-t-2xl"

              >
                <Image
                  src={item.img}
                  width={300}
                  height={200}
                  alt={item.name}
                  className="w-full  object-contain"
                />
                <span className="absolute top-2 left-2 w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>

                <div className="flex justify-between mt-1">
                  <p className="font-medium">₹{item.price}</p>
                  <span className="text-xs bg-green-600 text-white px-2 rounded">
                    ★ {item.rating}
                  </span>
                </div>

                <button

                  className="mt-4 w-full border border-orange-500 text-orange-600
                  py-1.5 rounded-lg font-semibold text-sm
                  hover:bg-orange-500 hover:text-white transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK VIEW MODAL (UNCHANGED) */}
      {quickView && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
          onClick={() => setQuickView(null)}
        >
          <div
            className="bg-white rounded-2xl w-[90%] max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={quickView.img}
              width={300}
              height={200}
              alt={quickView.name}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">{quickView.name}</h3>
            <p className="text-gray-500">₹{quickView.price}</p>

            <div className="flex justify-center gap-5 mt-5">
              <button onClick={() => updateQty(quickView.name, -1)} className="w-8 h-8 border rounded-full">–</button>
              <span>{qty[quickView.name] || 1}</span>
              <button onClick={() => updateQty(quickView.name, +1)} className="w-8 h-8 border rounded-full">+</button>
            </div>

            {/* <button
              onClick={() => {
                addToCart({ ...quickView, qty: qty[quickView.name] || 1 });
                setQuickView(null);
              }}
              className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
}
