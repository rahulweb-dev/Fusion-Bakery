'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { usePathname } from 'next/navigation';

export default function FoodPage() {
  const { addToCart } = useCart();
  const pathname = usePathname(); // 👈 To show all items even on slug page

  // 🍕 TEMP DATA (Later replace with API / DB)
  const foods = [
    {
      name: 'Barbecue Bacon',
      price: 250,
      category: 'Pizza',
      img: '/food/pizza1.png',
      rating: 4.5,
    },
    {
      name: 'Buffalo Chicken',
      price: 280,
      category: 'Pizza',
      img: '/food/pizza2.png',
      rating: 4.3,
    },
    {
      name: 'Buttery Garlic',
      price: 220,
      category: 'Garlic Bread',
      img: '/food/garlic.png',
      rating: 4.0,
    },
    {
      name: 'Caramelized Onion',
      price: 240,
      category: 'Pizza',
      img: '/food/pizza3.png',
      rating: 4.6,
    },
    {
      name: 'Chicken Supreme',
      price: 300,
      category: 'Pizza',
      img: '/food/chickenpizza.png',
      rating: 4.4,
    },
    {
      name: 'Gourmet Hawaiian',
      price: 260,
      category: 'Pizza',
      img: '/food/pineapplepizza.png',
      rating: 4.2,
    },
    {
      name: 'Margherita Sauce',
      price: 200,
      category: 'Pizza',
      img: '/food/marg.png',
      rating: 4.7,
    },
    {
      name: 'Spicy Sausage',
      price: 320,
      category: 'Pizza',
      img: '/food/spicy.png',
      rating: 4.3,
    },
  ];

  // 🧠 AUTO DETECT CATEGORIES + PRICE-RANGE
  const categories = ['All', ...new Set(foods.map((x) => x.category))];
  const maxPrice = Math.max(...foods.map((x) => x.price), 0);

  // 🎛 STATES
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState(maxPrice);
  const [category, setCategory] = useState('All');
  const [qty, setQty] = useState({});
  const [showFilter, setShowFilter] = useState(false); // mobile filter

  // ➕ Increment / ➖ Decrement Quantity
  const updateQty = (name, val) => {
    setQty((prev) => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + val),
    }));
  };

  // 🔎 FILTER LOGIC
  const filtered = foods.filter(
    (x) =>
      x.name.toLowerCase().includes(search.toLowerCase()) &&
      x.price <= price &&
      (category === 'All' || x.category === category)
  );

  return (
    <div className='px-4 md:px-10 py-12 bg-[#FFF9F2] min-h-screen select-none'>
      {/* 🏷 HEADER */}
      <div className='flex flex-col sm:flex-row items-center justify-between mb-10 gap-3'>
        <p className='text-gray-700 font-medium'>
          Showing {filtered.length} of {foods.length} results
        </p>
        <input
          type='text'
          placeholder='Search food...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border rounded-full px-4 py-2 w-[240px] text-sm outline-none focus:border-orange-500'
        />
      </div>

      <div className='flex gap-10'>
        {/* 🧾 DESKTOP FILTER */}
        <div className='hidden lg:block w-[260px] space-y-6'>
          <div className='p-4 bg-white rounded-xl shadow border'>
            <p className='font-bold text-gray-800 mb-2'>Filter by price</p>
            <input
              type='range'
              min='1'
              max={maxPrice}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className='w-full cursor-pointer'
            />
            <p className='text-sm font-medium text-gray-700 mt-1'>
              ₹0 - ₹{price}
            </p>
          </div>

          <div className='p-4 bg-white rounded-xl shadow border'>
            <p className='font-bold text-gray-800 mb-2'>Categories</p>
            {categories.map((c, i) => (
              <p
                key={i}
                onClick={() => setCategory(c)}
                className={`text-sm py-1 cursor-pointer transition ${
                  category === c
                    ? 'text-orange-600 font-bold'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {c}
              </p>
            ))}
          </div>
        </div>

        {/* 🍕 PRODUCTS GRID */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-1'>
          {filtered.length === 0 && (
            <div className='col-span-full text-center py-20 text-gray-500 text-lg font-semibold'>
              😞 No food items available!
            </div>
          )}

          {filtered.map((item, i) => (
            <div
              key={i}
              className='bg-white rounded-xl border shadow hover:shadow-md transition p-3 text-center'
            >
              <Image
                src={item.img}
                width={200}
                height={200}
                alt={item.name}
                className='mx-auto mb-3'
              />
              <p className='font-semibold text-gray-800'>{item.name}</p>
              <p className='text-sm text-gray-500'>₹{item.price}</p>
              <p className='text-sm text-yellow-600'>⭐ {item.rating}</p>

              {/* 🧮 QUANTITY */}
              <div className='flex justify-center items-center gap-3 mt-3'>
                <button
                  onClick={() => updateQty(item.name, -1)}
                  className='bg-gray-200 w-7 h-7 rounded-full text-lg font-bold hover:bg-gray-300'
                >
                  -
                </button>
                <span>{qty[item.name] || 1}</span>
                <button
                  onClick={() => updateQty(item.name, +1)}
                  className='bg-gray-200 w-7 h-7 rounded-full text-lg font-bold hover:bg-gray-300'
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart({ ...item, qty: qty[item.name] || 1 })}
                className='mt-3 w-full bg-orange-500 text-white py-1.5 rounded-full hover:bg-orange-600 transition text-sm'
              >
                Add {qty[item.name] || 1} to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 📱 MOBILE FILTER BUTTON */}
      <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-between py-3 px-5 z-50'>
        <button
          className='bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold'
          onClick={() => setShowFilter(true)}
        >
          🔍 Filters
        </button>
      </div>

      {/* 📱 BOTTOM FILTER MODAL */}
      {showFilter && (
        <div
          className='fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-end z-[9999]'
          onClick={() => setShowFilter(false)}
        >
          <div
            className='bg-white w-full rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='w-20 h-1.5 bg-gray-300 rounded-full mx-auto mb-4'></div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              Filters
            </h3>

            {/* PRICE */}
            <p className='font-bold text-gray-800 mb-1'>Price</p>
            <input
              type='range'
              min='1'
              max={maxPrice}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className='w-full cursor-pointer'
            />
            <p className='text-sm font-medium text-gray-700 mb-4'>
              ₹0 - ₹{price}
            </p>

            {/* CATEGORY */}
            <p className='font-bold text-gray-800 mb-2'>Categories</p>
            {categories.map((c, i) => (
              <p
                key={i}
                onClick={() => setCategory(c)}
                className={`text-sm py-1 cursor-pointer transition ${
                  category === c
                    ? 'text-orange-600 font-bold'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {c}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
