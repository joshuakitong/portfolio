import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ABWaveformPlayer from './ABWaveformPlayer';

export default function ABWaveformPlayerCarousel({ pairs = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pairs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pairs.length - 1 : prev - 1
    );
  };

  return (
    <section className="my-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="text-blue-500 hover:text-blue-600 transition mb-6"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="w-full max-w-2xl">
          <ABWaveformPlayer
            title={pairs[currentIndex][0]}
            beforeUrl={pairs[currentIndex][1]}
            afterUrl={pairs[currentIndex][2]}
          />
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="text-blue-500 hover:text-blue-600 transition mb-6"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {pairs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition duration-200 ${
              i === currentIndex
                ? 'bg-blue-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}