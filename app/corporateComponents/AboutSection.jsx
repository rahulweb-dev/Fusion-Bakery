"use client";
import Image from "next/image";

export default function AboutCorporate() {
  return (
    <section className="container mx-auto py-16 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE BLOCK */}
        <div className="relative flex justify-center">
          <div className="border-[6px] rounded-[50px] border-[#d61b5e] p-2">
            <Image
              src="/images/gift.jpg"
              alt="Gift Box"
              width={450}
              height={550}
              className="rounded-[40px]"
            />
          </div>

          {/* Badge */}
          <div className="absolute top-6 left-6 bg-white shadow-md rounded-full flex items-center px-5 py-2 gap-2">
            <Image  src="/images/gift.jpg" alt="Award" width={40} height={40} />
            <div className="text-sm font-bold leading-tight">
              <p className="text-[#d61b5e]">30 Years Of</p>
              <p className="text-black">Experience</p>
            </div>
          </div>

          {/* Small Circle Images */}
          <div className="absolute bottom-6 left-0 flex gap-3">
            <Image
              src="/images/gift.jpg"
              width={140}
              height={140}
              alt="Small 1"
              className="rounded-full border-[4px] border-white"
            />
            <Image
               src="/images/gift.jpg"
              width={140}
              height={140}
              alt="Small 2"
              className="rounded-[35px] border-[4px] border-white"
            />
          </div>
        </div>

        {/* RIGHT CONTENT BLOCK */}
        <div>
          <p className="uppercase text-[#d61b5e] font-semibold tracking-widest">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold mt-3 leading-tight">
            We Provide Best And Quality <br />
            Gifts Box Product For You
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            We offer a wide range of premium gift boxes, thoughtfully curated for every
            occasion. From elegant packaging to high quality products, each box is designed
            to impress and bring joy to your loved ones.
          </p>

          {/* FEATURES */}
          <ul className="mt-8 space-y-4 text-lg font-semibold text-gray-800">
            <li className="flex items-center gap-3">
              <span className="text-[#d61b5e] text-2xl">✔</span> Streamlined Shipping Experience
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#d61b5e] text-2xl">✔</span> Affordable Modern Design
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#d61b5e] text-2xl">✔</span> Competitive Price & Easy To Shop
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#d61b5e] text-2xl">✔</span> We Made Awesome Products
            </li>
          </ul>

          {/* BUTTON */}
          <button className="mt-10 bg-[#d61b5e] hover:bg-[#a21549] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}
