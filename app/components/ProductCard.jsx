"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import toast from "react-hot-toast";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const liked = wishlist.find((w) => w.slug === item.slug);

  return (
    <div className="rounded-xl border border-gray-200 shadow-md bg-white p-3 hover:shadow-lg transition">
      {/* Image */}
      <Link href={`/products/${item.slug}`}>
        <div className="relative w-full h-52 rounded-lg overflow-hidden">
          <Image
            src={item.images[0]}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Title */}
      <Link href={`/products/${item.slug}`}>
        <h3 className="font-semibold text-gray-900 text-lg mt-3">
          {item.title}
        </h3>
      </Link>

      <p className="text-gray-500 text-sm">{item.brand}</p>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2">
        <span className="font-bold text-lg">₹{item.price}</span>
        <span className="line-through text-gray-400 text-sm">
          ₹{item.originalPrice}
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={() => {
            toggleWishlist(item);
            toast.success(
              liked ? "Removed from wishlist" : "Added to wishlist ❤️"
            );
          }}
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <button
          onClick={() => {
            addToCart(item);
            toast.success("Added to cart 🛒");
          }}
          className="bg-black text-white px-3 py-2 rounded-lg text-sm"
        >
          Add to Cart
        </button>
      </div>

      {/* Delivery */}
      <p className="mt-3 text-sm text-gray-600 flex items-center gap-1">
        🚚 Earliest delivery: <span className="font-semibold">{item.delivery}</span>
      </p>
    </div>
  );
}
