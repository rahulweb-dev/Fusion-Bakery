import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from 'next/image'
const categories = ["All Chocolates", "Gift Boxes", "Premium Range"];

const productData = {
  "All Chocolates": [
    { name: "Chocolate Truffle", price: 499, image: '/images/chocolate-truffles.png'},
    { name: "Dark Hazelnut Bar", price: 349, image: '/images/chocolates.png' },
    { name: "Milk Almond Crunch", price: 299, image: '/images/chocolate-truffles.png' },
    { name: "Caramel Bonbons", price: 599, image: '/images/chocolate-gift-box.png' },
    { name: "Belgian Pralines", price: 749, image:  '/images/chocolate-truffles.png' },
    { name: "Rose Pistachio Bark", price: 449, image: '/images/chocolates.png'  },
  ],
  "Gift Boxes": [
    { name: "Classic Gift Box (12pc)", price: 999, image: '/images/chocolate-gift-box.png' },
    { name: "Premium Assorted (24pc)", price: 1799, image: '/images/chocolate-gift-box.png' },
    { name: "Luxury Hamper", price: 2499, image: '/images/chocolate-gift-box.png' },
    { name: "Festival Special Box", price: 1299, image: '/images/chocolate-gift-box.png' },
  ],
  "Premium Range": [
    { name: "Single Origin 72%", price: 599, image: '/images/chocolates.png'  },
    { name: "Gold Dusted Truffles", price: 899, image:  '/images/chocolate-truffles.png' },
    { name: "Champagne Bonbons", price: 1099, image:  '/images/chocolate-truffles.png' },
    { name: "Artisan Collection", price: 1499, image: '/images/chocolates.png'  },
  ],
};

const ChocolateProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All Chocolates");
  const [scrollIndex, setScrollIndex] = useState(0);

  const items = productData[activeCategory];
  const visibleCount = 4;
  const maxScroll = Math.max(0, items.length - visibleCount);

  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
              Exclusive{" "}
              <span className="bg-gradient-to-r from-chocolate to-gold bg-clip-text text-transparent">
                Chocolate
              </span>{" "}
              & Treats
            </h2>
            <p className="text-muted-foreground text-lg">
              Handcrafted with passion, delivered with love
            </p>
          </div>

          {/* Arrows */}
          {items.length > visibleCount && (
            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={() =>
                  setScrollIndex(Math.max(0, scrollIndex - 1))
                }
                disabled={scrollIndex === 0}
                className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() =>
                  setScrollIndex(Math.min(maxScroll, scrollIndex + 1))
                }
                disabled={scrollIndex >= maxScroll}
                className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-10 bg-card rounded-full p-1.5 max-w-fit border border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setScrollIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + scrollIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {items
              .slice(scrollIndex, scrollIndex + visibleCount)
              .map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-square overflow-hidden bg-muted/50 p-6 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="w-4/5 h-4/5 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">
                        ₹{item.price}
                      </span>

                      <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ChocolateProducts;