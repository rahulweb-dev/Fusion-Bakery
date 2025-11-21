'use client';
import Image from "next/image";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item);
    toast.success("Moved to cart 🛒");
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">❤️ Your Wishlist</h1>

      {wishlist.length === 0 && (
        <p className="text-gray-500 text-lg">No liked items.</p>
      )}

      {wishlist.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 border p-4 my-3 rounded-xl shadow-sm"
        >
          <div className="relative w-20 h-20">
            <Image src={item.img} alt={item.title} fill className="object-contain" />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600 font-medium">₹{item.price}</p>
            <p className="text-sm text-gray-400 line-through">
              ₹{item.pastPrice}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => moveToCart(item)}
              className="px-3 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700"
            >
              Move to Bag 🛍
            </button>

            <button
              onClick={() => {
                toggleWishlist(item);
                toast.error("Removed ❌");
              }}
              className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
            >
              Delete ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
