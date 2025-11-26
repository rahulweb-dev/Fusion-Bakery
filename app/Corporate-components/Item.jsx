"use client";

import Image from "next/image";

export default function Item({ image, name, new_price, old_price }) {
  return (
    <div className="w-[260px] sm:w-[300px] p-3 bg-white shadow-sm rounded-xl cursor-pointer hover:shadow-md hover:scale-[1.04] transition-all duration-300">
      <div className="w-full h-[260px] relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-3 text-[15px] font-medium text-gray-800">{name}</p>

      <div className="flex gap-3 items-center mt-1">
        <span className="text-[17px] font-bold text-gray-900">
          ₹{new_price}
        </span>
        <span className="text-[15px] line-through text-gray-400">
          ₹{old_price}
        </span>
      </div>
    </div>
  );
}
