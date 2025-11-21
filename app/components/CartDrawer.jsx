'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';

export default function CartDrawer({ isOpen, closeCart }) {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='p-5 border-b flex justify-between items-center'>
        <h2 className='text-xl font-bold'>🛍 Cart Bag</h2>
        <button onClick={closeCart} className='text-xl'>
          ✖
        </button>
      </div>

      <div className='p-5 overflow-y-auto h-[85%]'>
        {cart.length === 0 && (
          <p className='text-gray-500 mt-10'>Cart is Empty</p>
        )}

        {cart.map((item, i) => (
          <div key={i} className='flex gap-4 border-b py-3'>
            <div className='relative h-16 w-16'>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className='object-contain'
              />
            </div>

            <div className='flex-1'>
              <h3 className='text-sm font-semibold'>{item.title}</h3>
              <p className='font-bold text-sm'>₹{item.price}</p>

              {/* Qty Controls */}
              <div className='flex items-center gap-2 mt-1'>
                <button
                  onClick={() => decreaseQty(item.title)}
                  className='px-2 bg-gray-300 rounded'
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.title)}
                  className='px-2 bg-gray-300 rounded'
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                removeFromCart(item.title);
                toast.error('Removed ❌');
              }}
              className='text-red-500 text-sm'
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
