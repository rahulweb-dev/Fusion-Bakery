'use client';

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection() {
  const faqs = [
    { q: "What types of corporate gifts do you offer?", a: "We offer a wide range of premium gifting options including gourmet hampers, luxury chocolates, customized desserts, festive collections, and personalized corporate presents tailored to brand needs." },
    { q: "Can we customize the gifts with our company logo and branding?", a: "Yes, we specialize in fully branded corporate gifting. You can customize packaging, ribbons, tags, logo prints, and curated product selections to match your brand identity." },
    { q: "What is the minimum order quantity (MOQ) for bulk corporate gifting?", a: "MOQ varies depending on the products selected. Standard MOQ starts from 25 units for custom gifting and can scale up based on requirements." },
    { q: "Do you offer PAN India shipping and delivery?", a: "Yes, we ship corporate gift orders across all major Indian cities with both express and scheduled deliveries available." },
    { q: "How early should I place my order for festive or event-based gifting?", a: "For festive seasons or bulk gifting events, we recommend placing orders 15–30 days in advance to ensure customization, packaging, and delivery timelines." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT TEXT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-700 font-medium mb-1">
            Corporate Gifting Solutions
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 text-[15px] leading-relaxed max-w-md">
            We’ve answered common questions to help you understand our customization,
            process, timelines and delivery. Reach out anytime — we’re here to help you
            create the perfect gifting experience.
          </p>
        </div>

        {/* FAQ BOX */}
        <div className="bg-[#F3E7D8] p-6 rounded-[16px] shadow-sm border border-[#e7d8c7]">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-[#e1d5c6]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-3 text-left"
              >
                <span className="text-[16px] font-semibold text-gray-900">
                  {item.q}
                </span>
                <FiChevronDown
                  className={`text-gray-800 text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="pb-3 text-gray-700 text-[14px] leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
