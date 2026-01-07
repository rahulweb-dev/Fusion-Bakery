export default function CoreValues() {
  const values = [
    {
      icon: "🥗",
      title: "Quality & Care",
      text: "Serving wholesome, hygienic food that nurtures health, dignity, and comfort."
    },
    {
      icon: "🎁",
      title: "Meaningful Gifting",
      text: "Thoughtful corporate gifting and chocolate experiences that build lasting relationships."
    },
    {
      icon: "🔥",
      title: "Tradition & Innovation",
      text: "Honouring time-tested values while embracing modern culinary creativity."
    },
    {
      icon: "🤝",
      title: "People-First Growth",
      text: "Empowering teams, delighting customers, and growing responsibly with empathy."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
        <p className="text-center text-gray-600 mt-2">
          The Four Pillars of FUSIONN
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl">{v.icon}</div>
              <h3 className="font-semibold text-xl mt-3">{v.title}</h3>
              <p className="text-gray-600 mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
