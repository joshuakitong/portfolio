import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ABWaveformPlayer from './ABWaveformPlayer';
import WaveformPlayer from './WaveformPlayer';

export default function Carousel({ type, items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const renderItem = () => {
    const item = items[currentIndex];
    
    switch (type) {
      case 'abwaveform':
        return <ABWaveformPlayer title={item[0]} beforeUrl={item[1]} afterUrl={item[2]} />;

      case 'waveform':
        return <WaveformPlayer title={item[0]} url={item[1]} />;

      case 'spotify':
        return (
          <div className="relative w-full max-w-[42rem] h-[152px] overflow-hidden rounded-lg shadow">
            <iframe
              className="w-full h-full rounded-lg shadow"
              src={`https://open.spotify.com/embed/track/${item}?utm_source=generator`}
              title={`Spotify track ${currentIndex + 1}`}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        );

      case 'youtube':
      default:
        return (
          <div className="relative w-[42rem] aspect-video overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${item}?enablejsapi=1`}
              title={`YouTube video ${currentIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
    }
  };

  const colorMap = {
    youtube: 'red-600',
    spotify: 'green-500',
    abwaveform: 'blue-500',
    waveform: 'blue-500',
  };

  const colorMap2 = {
    youtube: 'red-700',
    spotify: 'green-600',
    abwaveform: 'blue-600',
    waveform: 'blue-600',
  };

  const activeColor = colorMap[type];
  const hoverColor = colorMap2[type];

  return (
    <section className="my-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className={`text-${activeColor} hover:text-${hoverColor} transition`}
        >
          <ChevronLeft size={30} />
        </button>

        {renderItem()}

        <button
          onClick={handleNext}
          aria-label="Next"
          className={`text-${activeColor} hover:text-${hoverColor} transition`}
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition duration-200 ${
              i === currentIndex
                ? `bg-${activeColor} scale-125`
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}