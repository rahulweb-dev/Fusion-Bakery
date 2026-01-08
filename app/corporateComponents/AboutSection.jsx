"use client";
import Image from "next/image";

export default function AboutCorporate() {
  return (
    <section className="bg-[#F4EEE6] py-16 px-4 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE BLOCK */}
        <div className="relative flex justify-center">
          <div className="border-[6px] rounded-[50px] border-[#C8A26A] bg-[#FAF7F3] p-2 shadow-lg">
            <Image
              src="/images/gift.jpg"
              alt="Gift Box"
              width={450}
              height={550}
              className="rounded-[40px]"
            />
          </div>

          {/* Badge */}
          <div className="absolute top-6 left-6 bg-white border border-[#E6D8C4] shadow-lg rounded-full flex items-center px-5 py-2 gap-2">
            <Image src="/images/gift.jpg" alt="Award" width={40} height={40} className="rounded-full" />
            <div className="text-sm font-bold leading-tight">
              <p className="text-[#4C2A1A]">30 Years Of</p>
              <p className="text-[#2F2B28]">Experience</p>
            </div>
          </div>

          {/* Bottom Accent Images */}
          <div className="absolute bottom-6 left-0 flex gap-3">
            <Image
              src="/images/gift.jpg"
              width={140}
              height={140}
              alt="Small 1"
              className="rounded-full border-[4px] border-white shadow-md"
            />
            <Image
              src="/images/gift.jpg"
              width={140}
              height={140}
              alt="Small 2"
              className="rounded-[35px] border-[4px] border-white shadow-md"
            />
          </div>
        </div>

        {/* RIGHT CONTENT BLOCK */}
        <div>
          <p className="uppercase text-[#8B5E34] font-semibold tracking-widest">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold mt-3 leading-tight text-[#2F2B28]">
            Premium Corporate Gifting <br />
            Crafted For Meaningful Moments
          </h2>

          <span className="block w-20 h-[4px] bg-[#C8A26A] rounded-full mt-3"></span>

          <p className="text-[#4C2A1A] mt-6 leading-relaxed text-lg">
            We curate elegant and thoughtful gifting experiences designed to create
            lasting impressions. Each gift is crafted with premium quality,
            refined aesthetics, and meaningful presentation.
          </p>

          {/* FEATURES */}
          <ul className="mt-8 space-y-4 text-lg font-semibold text-[#2F2B28]">
            <li className="flex items-center gap-3">
              <span className="text-[#C8A26A] text-2xl">✔</span> Premium Packaging & Branding
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C8A26A] text-2xl">✔</span> Customizable Corporate Solutions
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C8A26A] text-2xl">✔</span> Bulk & Corporate Order Support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C8A26A] text-2xl">✔</span> Curated Luxury Gift Collections
            </li>
          </ul>

          {/* BUTTON */}
          <button className="mt-10 px-8 py-4 rounded-full text-lg font-semibold
            bg-gradient-to-r from-[#C8A26A] to-[#8B5E34]
            text-white shadow-lg hover:shadow-xl transition">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}
