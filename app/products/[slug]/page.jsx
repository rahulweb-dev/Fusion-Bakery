"use client";
import { products } from "@/data/products";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import toast from "react-hot-toast";

export default function SingleProduct({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  const liked = wishlist.find((w) => w.slug === product.slug);

  const [qty, setQty] = useState(1);
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT: Image Gallery */}
      <div>
        {/* Main Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image src={selectedImg} alt={product.title} fill className="object-cover" />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {product.images.map((img, i) => (
            <div
              key={i}
              className={`relative w-20 h-20 rounded-lg border cursor-pointer ${
                selectedImg === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImg(img)}
            >
              <Image src={img} alt="thumb" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div>
        <h2 className="text-3xl font-bold">{product.title}</h2>

        <p className="text-gray-700 mt-2">{product.brand}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl font-bold">₹{product.price}</span>
          <span className="line-through text-gray-400">₹{product.originalPrice}</span>
        </div>

        {/* Qty Selector */}
        <div className="flex items-center mt-4 gap-4">
          <span className="font-semibold">Quantity</span>
          <button
            className="px-3 py-1 bg-gray-200 rounded-lg"
            onClick={() => qty > 1 && setQty(qty - 1)}
          >
            -
          </button>
          <span>{qty}</span>
          <button
            className="px-3 py-1 bg-gray-200 rounded-lg"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>

        {/* Coupons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="border rounded-xl p-3 text-center shadow-sm">
            <p className="font-semibold">TGS10</p>
            <p>Flat 10% Off</p>
          </div>
          <div className="border rounded-xl p-3 text-center shadow-sm">
            <p className="font-semibold">TGSS500</p>
            <p>Flat ₹500 Off</p>
          </div>
        </div>

        {/* Pincode */}
        <div className="mt-6">
          <p className="font-semibold">Check availability</p>
          <input
            className="w-full border px-3 py-2 rounded-lg mt-2"
            placeholder="Enter pincode"
          />
        </div>

        {/* Delivery Date */}
        <div className="mt-4">
          <p className="font-semibold">Enter Delivery Date</p>
          <input type="date" className="w-full border px-3 py-2 rounded-lg mt-2" />
        </div>

        {/* Message */}
        <div className="mt-4">
          <p className="font-semibold">Message</p>
          <textarea className="w-full border p-3 rounded-lg" rows={3}></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => {
              addToCart({ ...product, qty });
              toast.success("Added to Cart 🛒");
            }}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Add to Cart 🛒
          </button>

          <button
            onClick={() => {
              toggleWishlist(product);
              toast.success(liked ? "Removed" : "Saved ❤️");
            }}
            className="border px-6 py-3 rounded-xl"
          >
            {liked ? "❤️ Saved" : "🤍 Wishlist"}
          </button>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Product Info */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Product Info</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {product.productInfo?.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
