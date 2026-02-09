"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const liked = wishlist.find((w) => w.slug === item.slug);
  const [animate, setAnimate] = useState(false);

  const handleWishlist = () => {
    toggleWishlist(item);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600);
    toast.success(liked ? "Removed from wishlist" : "Added to wishlist ❤️");
  };

  return (
    <div className="group rounded-xl border mt-32 border-gray-200 bg-white p-4 shadow-sm hover:shadow-xl hover:border-black/10 transition-all duration-300 relative overflow-hidden">

      {/* Discount Badge */}
      {item.discount && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
          {item.discount}% Off
        </span>
      )}

      {/* Wishlist Heart Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 text-xl"
      >
        <span
          className={`transition-transform duration-300 ${
            animate ? "scale-150" : "scale-100"
          }`}
        >
          {liked ? "❤️" : "🤍"}
        </span>
      </button>

      {/* Product Image */}
      <Link href={`/products/${item.slug}`}>
        <div className="relative w-full h-52 rounded-lg overflow-hidden">
          <Image
            src={item.images[0]}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Title + Brand */}
      <Link href={`/products/${item.slug}`}>
        <h3 className="font-semibold text-gray-900 text-lg mt-3 line-clamp-1 group-hover:text-black transition">
          {item.title}
        </h3>
      </Link>
      <p className="text-gray-500 text-sm">{item.brand}</p>

      {/* Price Row */}
      <div className="mt-2 flex items-center gap-2">
        <span className="font-bold text-xl text-black">₹{item.price}</span>
        <span className="line-through text-gray-400 text-sm">
          ₹{item.originalPrice}
        </span>
      </div>

      {/* Add to Cart Button */}
      {/* <button
        onClick={() => {
          addToCart(item);
          toast.success("Added to cart 🛒");
        }}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition active:scale-95"
      >
        🛒 Add to Cart
      </button> */}

      {/* Delivery Information */}
      <p className="mt-3 text-sm text-gray-600 flex items-center gap-1">
        🚚 Delivery: <span className="font-semibold text-gray-800">{item.delivery}</span>
      </p>
    </div>
  );
}
