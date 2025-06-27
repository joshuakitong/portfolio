import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SpotifyCarousel({ ids = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ids.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ids.length - 1 : prev - 1
    )
  }

  return (
    <section className="my-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="text-green-500 hover:text-green-600 transition"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="relative w-full max-w-[42rem] h-[152px] overflow-hidden rounded-lg shadow">
          <iframe
            className="w-full h-full"
            src={`https://open.spotify.com/embed/track/${ids[currentIndex]}?utm_source=generator`}
            title={`Spotify tracks ${currentIndex + 1}`}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="text-green-500 hover:text-green-600 transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <p className="text-xs text-gray-400 text-center mt-2">
        Volume can be adjusted using your device or Spotify’s controls.
      </p>
      <div className="flex justify-center gap-2 mt-4">
        {ids.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition duration-200 ${
              i === currentIndex
                ? 'bg-green-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}