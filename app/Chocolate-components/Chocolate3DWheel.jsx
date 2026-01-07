import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const wheelImages = [
  "https://i.pinimg.com/1200x/c8/05/1e/c8051ec3e7c5fba47bbbe651a14561ac.jpg",
  "https://i.pinimg.com/736x/61/94/87/6194879938dfd7715a57382aa8f4def8.jpg",
  "https://i.pinimg.com/736x/9f/2e/34/9f2e34e8ff56eb5c187e30450c5da71e.jpg",
];

export function Chocolate3DWheel() {
  const ref = useRef(null);

  // Scroll control
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Rotation based on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Drag control (interactive)
  const dragRotate = useMotionValue(0);
  const springRotate = useSpring(dragRotate, { stiffness: 80, damping: 12 });

  return (
    <div ref={ref} className="relative w-[380px] md:w-[460px] h-[460px] perspective-1000">
      <motion.div
        drag="y"
        style={{ rotateX: springRotate }}
        dragElastic={0.2}
        dragMomentum={true}
        onDrag={(e, info) => dragRotate.set(dragRotate.get() + info.delta.y * -0.6)}
        className="relative w-full h-full preserve-3d"
      >
        {wheelImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="absolute inset-0 w-full h-full object-contain rounded-xl"
            style={{
              rotateX: rotation,
              transformOrigin: "center center -220px",
              transform: `rotateX(${i * 120}deg) translateZ(220px)`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
