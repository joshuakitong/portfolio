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
          <div className="w-[42rem] flex flex-col items-center">
            <div className="relative w-full h-[152px] overflow-hidden rounded-lg shadow">
              <iframe
                className="w-full h-full rounded-lg shadow"
                src={`https://open.spotify.com/embed/track/${item}?utm_source=generator`}
                title={`Spotify track ${currentIndex + 1}`}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <p className="note text-center mt-2">
              Volume can be adjusted using your device or Spotify’s controls.
            </p>
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
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        );

      case 'tiktok':
        return (
          <div className="w-[20rem] flex flex-col items-center">
            <div className="relative w-full aspect-[9/16] mx-auto rounded-lg overflow-hidden">
              <iframe
                src={`https://www.tiktok.com/embed/${item}`}
                title={`TikTok video ${currentIndex + 1}`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full overflow-hidden"
                frameBorder="0"
                scrolling="no"
                style={{ overflow: 'hidden' }}
                loading="lazy"
              />
            </div>
            <p className="note text-center mt-2">
              Volume can be adjusted using your device or TikTok's controls.
            </p>
          </div>
        );

      case 'twitch':
        return (
          <div className="relative w-full max-w-[36rem] aspect-video overflow-hidden">
            <iframe
              src={`https://clips.twitch.tv/embed?clip=${item}&parent=${window.location.hostname}`}
              title={`Twitch clip ${currentIndex + 1}`}
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              allow="autoplay; fullscreen"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        );
    }
  };

  const colorMap = {
    youtube: 'text-red-600',
    spotify: 'text-green-500',
    tiktok: 'text-[#EE1D52]',
    twitch: 'text-purple-700',
    abwaveform: 'text-blue-500',
    waveform: 'text-blue-500',
  };

  const colorMap2 = {
    youtube: 'text-red-700',
    spotify: 'text-green-600',
    tiktok: 'text-[#c91946]',
    twitch: 'text-purple-800',
    abwaveform: 'text-blue-600',
    waveform: 'text-blue-600',
  };

  const colorMap3 = {
    youtube: 'bg-red-600',
    spotify: 'bg-green-500',
    tiktok: 'bg-[#EE1D52]',
    twitch: 'bg-purple-700',
    abwaveform: 'bg-blue-500',
    waveform: 'bg-blue-500',
  };

  const prevNextColor = colorMap[type];
  const hoverColor = colorMap2[type];
  const paginationColor = colorMap3[type];

  return (
    <section className="my-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className={`${prevNextColor} hover:${hoverColor} transition`}
        >
          <ChevronLeft size={30} />
        </button>

        {renderItem()}

        <button
          onClick={handleNext}
          aria-label="Next"
          className={`${prevNextColor} hover:${hoverColor} transition`}
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
                ? `${paginationColor} scale-125`
                : 'bg-black/30 hover:bg-black/50 dark:bg-white/30  dark:hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}