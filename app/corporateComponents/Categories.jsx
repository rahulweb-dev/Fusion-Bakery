"use client";
import Image from "next/image";

const categories = [
  {
    title: "Employee Welcome Kits",
    img: "https://www.boxupgifting.com/cdn/shop/files/BRANDED_CORPORATE_GIFTS_100x100_9ba8fdd0-b1a9-46c7-85e3-876ea88dc9a3.jpg?v=1750653298&width=300",
  },
  {
    title: "Eco Friendly Gifts",
    img: "https://www.boxupgifting.com/cdn/shop/files/GIFTS_FOR_CLIENTS_100x100_55818777-05f4-4374-a18f-488c4f35c355.jpg?v=1750653325&width=300",
  },
  {
    title: "Client Gifts",
    img: "https://www.boxupgifting.com/cdn/shop/files/BUDGET_FRIENDLY_100x100_fd176453-bfc9-47c5-9664-ded5c8262e08.jpg?v=1750653357&width=300",
  },
  {
    title: "Employee Gifts",
    img: "https://www.boxupgifting.com/cdn/shop/files/TECK_GIFTS_100x100_5a9fa99e-7cfe-46bd-ba45-ac46d6953e80.jpg?v=1750653389&width=300",
  },
  {
    title: "Drinkware",
    img: "https://www.boxupgifting.com/cdn/shop/files/DRINKWARE_1_copy.jpg?v=1753334106&width=300",
  },
  {
    title: "Promotional Products",
    img: "https://www.boxupgifting.com/cdn/shop/files/PROMOTIONAL_GIFTS_100x100_c808ae7d-eb0a-41d5-83e4-4a8745eb8701.jpg?v=1750653474&width=300",
  },
];

export default function Categories() {
  return (
    <section className="w-full py-6 mt-40">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border border-green-200 hover:shadow-xl transition cursor-pointer">
              <Image
                src={item.img}
                alt={item.title}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-green-900 text-sm font-medium mt-3 w-28">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
