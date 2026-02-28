
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden rounded-xl ">
      <Image
        src='/images/download.jpeg'
        fill
        alt="Fusion Bakery premium corporate gift boxes with artisan pastries"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      <div className="relative z-2 flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl">
        <p className="text-amber-200 font-sans font-medium text-sm tracking-widest uppercase mb-3">
          Fusion Bakery · Corporate Gifts
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 text-white">
          Celebrate Every Occasion
        </h1>
        <p className="text-gray-100 font-sans text-base md:text-lg max-w-md ">
          Handcrafted gift boxes that leave a lasting impression. Premium quality, exquisite taste.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;