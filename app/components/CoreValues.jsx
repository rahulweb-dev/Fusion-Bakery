import Image from "next/image";

export default function CoreValues() {
  const values = [
    {
      title: "Quality & Care",
      text: "Wholesome, hygienic food prepared with consistency, dignity and attention to detail.",
      img: "https://i.pinimg.com/1200x/c5/5b/e4/c55be4e3602fcaa72d7293660017ea0e.jpg",
    },
    {
      title: "Meaningful Gifting",
      text: "Thoughtfully curated chocolates and gifting experiences that foster lasting relationships.",
      img: "https://i.pinimg.com/1200x/c5/5b/e4/c55be4e3602fcaa72d7293660017ea0e.jpg",
    },
    {
      title: "Tradition & Innovation",
      text: "Rooted in time-honoured values while embracing modern culinary creativity.",
      img: "https://i.pinimg.com/1200x/77/32/2f/77322f963a2876b7580127c8fa16082f.jpg",
    },
    {
      title: "People-First Growth",
      text: "Empowering our teams, delighting customers and growing responsibly with empathy.",
      img: "https://i.pinimg.com/1200x/72/65/d4/7265d4f12cf263dff8c70dd1669436c5.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#FBF6EE]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.25em] uppercase text-amber-700">
            Our Foundation
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900">
            Core Values
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed">
            The principles that guide every decision, every creation,
            and every relationship at FUSIONN.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-[260px] w-full">
                <Image
                  src={v.img}
                  alt={v.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {v.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {v.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
