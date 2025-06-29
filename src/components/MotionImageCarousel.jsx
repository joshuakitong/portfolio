import { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function MotionImageCarousel({
  images = [],
  height = 'h-40',
  gap = 'gap-4',
  reversed = false
}) {
  const containerRef = useRef(null);
  const x = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedImages = [...images, ...images];
  
  useAnimationFrame(() => {
    if (!isHovered && containerRef.current) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const singleLoopWidth = scrollWidth / 2;

      if (reversed) {
        x.current += 0.5;
        if (x.current >= 0) {
          x.current = -singleLoopWidth;
        }
      } else {
        x.current -= 0.5;
        if (Math.abs(x.current) >= singleLoopWidth) {
          x.current = 0;
        }
      }

      container.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div
      className={`relative overflow-hidden -mx-4 lg:-mx-8 my-4 ${height}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className={`flex ${gap} w-max`}
        style={{ willChange: 'transform' }}
      >
        {duplicatedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`object-cover ${height} rounded`}
            draggable={false}
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}