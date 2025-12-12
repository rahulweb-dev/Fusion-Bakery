"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import toast from "react-hot-toast";

export default function PremiumGlassLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/login", { email, password });
      if (res.status === 200) {
        toast.success("Login Successful");
        router.push("/admin/dashboard");
      }
    } catch (err) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/42/e1/8f/42e18fcd2b236e57c0b8517bea6bd979.jpg')`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />

   

      {/* LOGIN CARD */}
      <div className="
        relative z-10 w-full max-w-2xl px-16 py-16 rounded-3xl
        bg-white/10 backdrop-blur-2xl
        shadow-[0_0_50px_rgba(0,0,0,0.6)]
        border border-white/20
      ">

        {/* HEADINGS */}
        <h1 className="text-white text-5xl font-light drop-shadow-lg">Welcome Back</h1>
        <p className="text-gray-200 mt-2 mb-12 tracking-wide text-lg">
          Sign in to continue to your dashboard.
        </p>

        {/* FORM */}
        <form onSubmit={submit} className="space-y-8">

          {/* USERNAME */}
          <div className="relative group">
            <FaUserAlt className="absolute left-4 top-4 text-gray-300 group-focus-within:text-white" />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="
                w-full py-4 pl-12 pr-4 rounded-xl bg-white/10 text-white
                border border-white/30 placeholder-gray-400
                focus:ring-2 focus:ring-blue-400 focus:border-transparent
                focus:bg-white/20 transition-all duration-200
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="relative group">
            <FaLock className="absolute left-4 top-4 text-gray-300 group-focus-within:text-white" />
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="
                w-full py-4 pl-12 pr-12 rounded-xl bg-white/10 text-white
                border border-white/30 placeholder-gray-400
                focus:ring-2 focus:ring-blue-400 focus:border-transparent
                focus:bg-white/20 transition-all duration-200
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* TOGGLE PASSWORD */}
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-4 text-gray-300 hover:text-white transition"
            >
              {show ? <IoEyeSharp size={22} /> : <IoEyeOffSharp size={22} />}
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            className="
              w-full py-4 rounded-xl text-lg font-semibold
              bg-gradient-to-r from-blue-600 to-blue-500
              hover:from-blue-500 hover:to-blue-400
              text-white shadow-lg
              transition-all duration-300 hover:shadow-blue-500/40
            "
          >
            LOGIN
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-12 text-center text-gray-300 text-sm tracking-wide">
          © {new Date().getFullYear()} All Rights Reserved <br />
          Developed by{" "}
          <a
            href="https://www.broaddcast.com"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            broaddcast.com
          </a>
        </div>
      </div>
    </div>
  );
}
