import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function YoutubeCarousel({ ids = [] }) {
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
          className="text-blue-500 hover:text-blue-600 transition"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="relative w-[48rem] aspect-video overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${ids[currentIndex]}?enablejsapi=1`}
            title={`YouTube video ${currentIndex + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="text-blue-500 hover:text-blue-600 transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {ids.map((_, i) => (
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
  )
}