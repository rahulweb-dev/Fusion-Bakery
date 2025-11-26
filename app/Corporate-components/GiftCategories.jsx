"use client";

import GiftCategoryCard from "./GiftCategoryCard";



export default function GiftCategories() {
  const cards = [
    {
      image:
        "https://i.ibb.co/QYbhHsS/blue-gift.jpg",
      label: "GIFT BOX",
      title: "AWESOME GIFTS BOX COLLECTIONS",
      subtext: "SHOP NOW",
    },
    {
      image:
        "https://i.ibb.co/FJDfDHL/light-gifts.jpg",
      label: "OCCASION GIFT",
      title: "BEST OCCASION GIFTS COLLECTIONS",
      subtext: "SHOP NOW",
    },
    {
      image:
        "https://i.ibb.co/4FK0Ljw/pink-gift.jpg",
      label: "HOT SALE",
      title: "COMBO SETS GIFT BOX UP TO 50% OFF",
      subtext: "SHOP NOW",
    },
  ];

  return (
    <section className="w-full py-14 px-4 md:px-10 lg:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <GiftCategoryCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
