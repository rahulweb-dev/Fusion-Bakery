"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // FORM VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMsg(data.error || "Something went wrong");
      }
    } catch (err) {
      setResponseMsg("Server error, please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/cookies.jpg"
          alt="Contact background"
          fill
          className="object-cover brightness-[0.35]"
        />
      </div>

      {/* OVERLAY BOKEH EFFECTS */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-16 w-60 h-60 bg-[#B55328]/20 rounded-full blur-[90px]"></div>

      <div className="relative container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 text-white">

        {/* LEFT FORM (GLASS CARD) */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 animate-fadeUp">

          <h2 className="text-4xl font-bold mb-2 tracking-wide drop-shadow">
            Contact Us
          </h2>

          <p className="text-white/80 text-sm italic mb-10">
            Submit information to place order
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/40 focus:border-white/90 focus:ring-0 outline-none py-3 text-white placeholder-white/60 transition-all"
              />
              {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/40 focus:border-white/90 outline-none py-3 text-white placeholder-white/60 transition-all"
              />
              {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
            </div>

            {/* PHONE */}
            <div>
              <input
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/40 focus:border-white/90 outline-none py-3 text-white placeholder-white/60 transition-all"
              />
              {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows="3"
                className="w-full bg-transparent border-b border-white/40 focus:border-white/90 outline-none py-3 text-white placeholder-white/60 resize-none transition-all"
              ></textarea>
              {errors.message && <p className="text-red-300 text-sm">{errors.message}</p>}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#B55328] hover:bg-[#9e4521] text-white px-10 py-3 rounded-full font-semibold shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {responseMsg && (
              <p className="text-green-300 text-sm mt-2">{responseMsg}</p>
            )}
          </form>
        </div>

        {/* RIGHT CONTACT INFO */}
        <div className="p-6 flex flex-col justify-center animate-fadeUpDelay">
          <h2 className="text-4xl font-bold tracking-wide mb-6">
            Get in Touch
          </h2>

          <p className="text-white/80 leading-relaxed max-w-md">
            PO Box 16122 Collins Victoria 3000 Australia
          </p>

          <div className="mt-10 space-y-3 text-white/90 text-lg">
            <p>Email: <span className="text-white/70">info@chiart.abcdf.com</span></p>
            <p>Phone: <span className="text-white/70">+33 323 34522</span></p>
            <p>Fax: <span className="text-white/70">+33 3467888</span></p>
          </div>

          <div className="mt-14 text-sm tracking-widest text-white/50 uppercase">
            Gallery
          </div>
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpDelay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp .7s ease-out forwards; }
        .animate-fadeUpDelay { animation: fadeUpDelay .9s ease-out forwards; }
      `}</style>
    </section>
  );
}
