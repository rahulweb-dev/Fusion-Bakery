'use client';
import { products } from '../data/products';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';

export default function SingleProductClient({ slug }) {
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  const { addToCart, buyNow } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  if (!product) {
    return (
      <div className='max-w-4xl mx-auto py-16 px-4 text-center'>
        <h2 className='text-2xl font-bold'>Product not found 😕</h2>
      </div>
    );
  }

  const liked = wishlist?.some((w) => w.slug === product.slug);
  const [qty, setQty] = useState(1);
  const [selectedImg, setSelectedImg] = useState(
    product?.images?.[0] || '/images/fallback.png'
  );

  return (
    <>
      <div className='max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10  mt-36'>
        {/* LEFT */}
        <div>
          <div className='relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-50'>
            <Image
              src={selectedImg}
              alt={product.title}
              fill
              className='object-cover'
            />
          </div>

          <div className='flex gap-3 mt-4 flex-wrap'>
            {product.images?.map((img, i) => (
              <button
                key={i}
                className={`relative w-20 h-20 rounded-lg border ${
                  selectedImg === img ? 'border-black' : 'border-gray-300'
                } overflow-hidden`}
                onClick={() => setSelectedImg(img)}
              >
                <Image src={img} fill alt='thumb' className='object-cover' />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className='text-3xl font-bold'>{product.title}</h2>
          <p className='text-gray-700 mt-2'>{product.brand}</p>

          <div className='flex items-center gap-2 mt-3'>
            <span className='text-2xl font-bold'>₹{product.price}</span>
            {product.originalPrice && (
              <span className='line-through text-gray-400'>
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Quantity */}
          <div className='flex items-center mt-4 gap-4'>
            <strong>Qty</strong>
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className='px-3 py-1 bg-gray-200 rounded-lg text-lg'
            >
              -
            </button>
            <span className='text-lg'>{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className='px-3 py-1 bg-gray-200 rounded-lg text-lg'
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className='flex gap-4 mt-6'>
            <button
              onClick={() => {
                addToCart(product, qty);
                toast.success(`Added ${qty} item(s) to Cart 🛒`);
              }}
              className='bg-black text-white px-6 py-3 rounded-xl'
            >
              Add to Cart 🛒
            </button>

            <button
              onClick={() => {
                toggleWishlist(product);
                toast.success(liked ? 'Removed from Wishlist ❤️' : 'Saved to Wishlist ❤️');
              }}
              className='border px-6 py-3 rounded-xl'
            >
              {liked ? '❤️ Saved' : '🤍 Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {/* 🌟 Sticky Bottom Buy Bar (Mobile Only) */}
      <div className='fixed bottom-0 left-0 w-full bg-white shadow-xl border-t border-gray-200 p-4 flex justify-between items-center md:hidden z-50'>
        <div>
          <p className='text-lg font-bold'>₹{product.price}</p>
          <p className='text-xs text-gray-500'>Including GST</p>
        </div>

        <div className='flex gap-2'>
          <button
            onClick={() => {
              toggleWishlist(product);
              toast.success(liked ? 'Removed ❤️' : 'Saved ❤️');
            }}
            className='border rounded-lg px-3 py-2 text-lg'
          >
            {liked ? '❤️' : '🤍'}
          </button>

          <button
            onClick={() => {
              buyNow(product, qty);
              toast.success('Redirecting to Checkout 🚚');
            }}
            className='bg-black text-white px-5 py-2 rounded-lg text-sm'
          >
            Buy Now ⚡
          </button>
        </div>
      </div>
    </>
  );
}
