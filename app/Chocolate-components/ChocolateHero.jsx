import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ChocolateHero = () => {
  return (
    <section className="relative h-[90vh] min-h-[650px] overflow-hidden bg-warm-cream">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chocolate-hero.png"
          alt="Celebration Chocolate Bar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/90 via-chocolate/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-[#D99726] mb-4 font-medium"
          >
            Introducing
          </motion.p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Celebration <br />
            <span className="text-[#D99726]">Bars</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-md">
            The perfect gift for every occasion — handcrafted with the finest cocoa and a touch of artistry.
          </p>

          {/* Button */}
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#D99726] text-chocolate px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg"
          >
            Explore Now
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-cream to-transparent" />
    </section>
  );
};

export default ChocolateHero;