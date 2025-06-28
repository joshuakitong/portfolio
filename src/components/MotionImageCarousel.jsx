import { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function MotionImageCarousel({
  images = [],
  height = 'h-40',
  gap = 'gap-4',
  speed = 1
}) {
  const containerRef = useRef(null);
  const x = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedImages = [...images, ...images, ...images, ...images];

  
  useAnimationFrame(() => {
    if (!isHovered && containerRef.current) {
      x.current -= speed;
      const totalWidth = containerRef.current.scrollWidth / 2;

      if (x.current <= -totalWidth) {
        x.current = 0;
      }

      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div
      className={`relative overflow-hidden -mx-8 my-4 ${height}`}
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