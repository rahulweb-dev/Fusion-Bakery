"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!form.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Invalid Email";

    if (!form.phone) temp.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone)) temp.phone = "Enter 10 digit mobile number";

    if (!form.name) temp.name = "Name is required";

    if (!form.message) temp.message = "Message is required";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully");
      setForm({ email: "", phone: "", name: "", message: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-3 sm:space-y-4"
    >
      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Email */}
        <div>
          <input
            type="text"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full p-3 rounded-full bg-[#E6C7A4] text-gray-800 outline-none"
          />
          <p className="text-red-500 text-xs">{errors.email}</p>
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone"
            className="w-full p-3 rounded-full bg-[#E6C7A4] text-gray-800 outline-none"
          />
          <p className="text-red-500 text-xs">{errors.phone}</p>
        </div>
      </div>

      {/* Name */}
      <div>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="w-full p-3 rounded-full bg-[#E6C7A4] text-gray-800 outline-none"
        />
        <p className="text-red-500 text-xs">{errors.name}</p>
      </div>

      {/* Message */}
      <div>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Message"
          className="w-full p-3 rounded-3xl bg-[#E6C7A4] text-gray-800 outline-none h-28 resize-none"
        ></textarea>
        <p className="text-red-500 text-xs">{errors.message}</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#E6C7A4] hover:bg-[#4f8981] text-white px-7 py-3 rounded-full font-semibold transition-all"
      >
        Submit Button
      </button>
    </form>
  );
}
