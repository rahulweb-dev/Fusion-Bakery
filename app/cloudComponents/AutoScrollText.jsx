"use client";

export default function AutoScrollText() {
  const items = [
    "Explore our Corporate Gifts Collections",
    "Explore our Cloud Kitchen",
    "Explore our Chocolates",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#72401D] py-3 fixed top-0 z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, index) => (
              <span
                key={index}
                className="flex items-center text-white text-sm md:text-base font-medium mx-6"
              >
                {text}
                <span className="mx-6 text-gray-400">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
