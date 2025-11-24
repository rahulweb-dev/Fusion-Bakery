'use client';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

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
          {/* IMG FIX HERE */}
          <div className='relative w-20 h-20'>
            <Image
              src={item.images?.[0]} // 👈 Use first image
              alt={item.title}
              fill
              className='object-contain'
            />
          </div>

          {/* DETAILS */}
          <div className='flex-1'>
            <h2 className='text-lg font-semibold'>{item.title}</h2>
            <p className='text-gray-600 font-medium'>₹{item.price}</p>
          </div>

          {/* QTY */}
          <div className='flex items-center border rounded-lg shadow-sm'>
            <button
              onClick={() => decreaseQty(item.slug)}
              className='px-3 py-1 text-lg font-bold hover:bg-gray-200 rounded-l-lg'
            >
              –
            </button>
            <span className='px-4 py-1 text-md'>{item.qty}</span>
            <button
              onClick={() => increaseQty(item.slug)}
              className='px-3 py-1 text-lg font-bold hover:bg-gray-200 rounded-r-lg'
            >
              +
            </button>
          </div>

          {/* REMOVE */}
          <button
            onClick={() => removeFromCart(item.slug)}
            className='px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600'
          >
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  );
}
