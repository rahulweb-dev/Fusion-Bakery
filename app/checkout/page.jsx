"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const [item, setItem] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const saved = localStorage.getItem("buyNowItem");
    if (saved) setItem(JSON.parse(saved));
  }, []);

  if (!item)
    return <div className="p-10 text-center text-gray-500">Loading...</div>;

  const total = item.price * item.qty;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">🧾 Checkout</h1>

      <div className="flex gap-4 border p-4 rounded-xl shadow-sm">
        <div className="relative w-20 h-20">
          <Image src={item.images[0]} fill alt={item.title} className="object-cover rounded-lg" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p>Qty: {item.qty}</p>
          <p className="font-bold mt-2">₹{total}</p>
        </div>
      </div>

      <button
        onClick={() => alert("Order Placed Successfully 🎉")}
        className="mt-6 w-full bg-black text-white p-4 rounded-xl text-lg font-semibold"
      >
        Proceed to Payment 💳
      </button>
    </div>
  );
}
