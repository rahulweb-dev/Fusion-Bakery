'use client';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className='p-10 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>🛍 Your Cart Bag</h1>

      {cart.length === 0 && (
        <p className='text-gray-500 text-lg'>Your bag is empty.</p>
      )}

      {cart.map((item, i) => (
        <div
          key={i}
          className='flex items-center gap-4 border p-4 my-3 rounded-xl shadow-sm'
        >
          <div className='relative w-20 h-20'>
            <Image
              src={item.img}
              alt={item.title}
              fill
              className='object-contain'
            />
          </div>

          <div className='flex-1'>
            <h2 className='text-lg font-semibold'>{item.title}</h2>
            <p className='text-gray-600 font-medium'>₹{item.price}</p>
            <p className='text-sm text-gray-400 line-through'>
              ₹{item.pastPrice}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.title)}
            className='px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600'
          >
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  );
}
