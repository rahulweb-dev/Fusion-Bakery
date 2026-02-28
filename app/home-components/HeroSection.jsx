"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src='/images/hero.png'
          alt="Fusion premium gift boxes and chocolates"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl ">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-[#72401D] mb-4"
          >
            One Brand
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Many Ways to{" "}
            <span className="bg-gradient-to-r from-[#72401D] to-orange-500 bg-clip-text text-transparent">
              Celebrate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg  mb-8 max-w-lg"
          >
            From freshly baked delights to premium corporate gifts and handcrafted chocolates — curated with love and elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#offerings"
              className="inline-flex items-center gap-3 bg-[#72401D] px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-white transition-all duration-300 group shadow-lg"
            >
              Explore Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;