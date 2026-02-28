"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const GiftHeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src='/images/hero-corporate.jpeg' alt="Premium corporate gift hamper" fill className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 " />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light"
          >
            Premium Corporate Gifting
          </motion.span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
            Gift It Once.{" "}
            <span className="italic text-gold-light">Stay Remembered</span>{" "}
            All Year.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Diaries, calendars & desk accessories that inspire productivity all year long. Curated for clients, partners, and teams.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60"
            >
              Talk to Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default GiftHeroSection;