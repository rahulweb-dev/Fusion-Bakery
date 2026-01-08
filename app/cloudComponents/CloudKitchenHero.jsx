"use client";
import Image from "next/image";

export default function CloudKitchenHero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-gradient-to-r from-[#9AAF79] to-[#8EA46E]">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-10">

        {/* LEFT — TEXT BLOCK */}
        <div className="text-white">
          <p className="text-lg opacity-90">Introducing</p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-1">
            Fusion Cloud Kitchen
          </h1>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-lg">
            Delicious meals prepared daily using quality ingredients,
            delivered hot to your doorstep.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-[#E1F2B3] text-black font-semibold hover:bg-[#F1FFC9] transition">
            Order now
          </button>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-end md:justify-end">
          <Image
            src="/dummy-images/FireflyGemini_Flash_the_background_colour_should_be_linear__6B8E6E_to__8C9A6B_619898-removebg-preview 1.png"  // replace with your image
            alt="Plated gourmet dish"
            width={520}
            height={520}
            className=" drop-shadow-2xl md:max-w-330 w-full h-full "
          />
        </div>

      </div>
    </section>
  );
}
