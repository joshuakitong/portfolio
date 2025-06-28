import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import * as Slider from '@radix-ui/react-slider';
import { Play, Pause, VolumeX, Volume2, SlidersHorizontal } from 'lucide-react'

export default function ABWaveformPlayer({ beforeUrl, afterUrl }) {
  const [mode, setMode] = useState('before')
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false);

  const beforeWaveformRef = useRef(null)
  const afterWaveformRef = useRef(null)

  const beforeWS = useRef(null)
  const afterWS = useRef(null)

  useEffect(() => {
    if (!beforeWaveformRef.current || !afterWaveformRef.current) return

    beforeWS.current = WaveSurfer.create({
      container: beforeWaveformRef.current,
      waveColor: '#94a3b8',
      progressColor: '#93c5fd',
      responsive: true,
      height: 100,
      normalize: false,
      barWidth: 2,
      barGap: 2,
      barRadius: 1,
      barHeight: 1,
      backend: 'WebAudio'
    })

    afterWS.current = WaveSurfer.create({
      container: afterWaveformRef.current,
      waveColor: '#94a3b8',
      progressColor: '#3b82f6',
      responsive: true,
      height: 100,
      normalize: false,
      barWidth: 2,
      barGap: 2,
      barRadius: 1,
      barHeight: 1,
      backend: 'WebAudio'
    })

    beforeWS.current.load(beforeUrl)
    afterWS.current.load(afterUrl)

    beforeWS.current.on('finish', () => setIsPlaying(false))
    afterWS.current.on('finish', () => setIsPlaying(false))

    beforeWS.current.setVolume(volume)
    afterWS.current.setVolume(volume)

    setIsPlaying(false)
    setMode('before');

    return () => {
      beforeWS.current?.stop()
      beforeWS.current?.destroy()
      afterWS.current?.stop()
      afterWS.current?.destroy()
    }
  }, [beforeUrl, afterUrl])

  useEffect(() => {
    beforeWS.current?.setVolume(volume)
    afterWS.current?.setVolume(volume)
  }, [volume])

  const getActiveWS = () => (mode === 'before' ? beforeWS.current : afterWS.current)
  const getInactiveWS = () => (mode === 'before' ? afterWS.current : beforeWS.current)

  const togglePlay = () => {
    const active = getActiveWS()
    const inactive = getInactiveWS()

    if (!active) return

    if (isPlaying) {
      active.pause()
      setIsPlaying(false)
    } else {
      active.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const actualVolume = isMuted ? 0 : volume;
    beforeWS.current?.setVolume(actualVolume);
    afterWS.current?.setVolume(actualVolume);
  }, [volume, isMuted]);

  const swapMode = () => {
    const current = getActiveWS()
    const other = getInactiveWS()
    const time = current.getCurrentTime()

    current.pause()
    other.seekTo(time / other.getDuration())

    if (isPlaying) {
      other.play()
    }

    setMode(mode === 'before' ? 'after' : 'before')
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-[#222] rounded-lg text-white">
      <div className="text-center mb-2">
        <strong>{mode === 'before' ? 'Before Mix/Master' : 'After Mix/Master'}</strong>
      </div>

      <div className="mb-4">
        <div ref={beforeWaveformRef} className={mode === 'before' ? 'block' : 'hidden'} />
        <div ref={afterWaveformRef} className={mode === 'after' ? 'block' : 'hidden'} />
      </div>

      <div className="flex sm:items-center sm:justify-center sm:gap-4 gap-2">
        <div className="flex justify-center gap-2 sm:gap-4">
          <button
            onClick={togglePlay}
            className="bg-blue-500 text-white text-sm sm:text-base px-3 sm:px-4 sm:py-2 rounded hover:bg-blue-600 h-10 transition"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button
            onClick={swapMode}
            className="bg-gray-700 text-white text-sm sm:text-base px-3 sm:px-4 sm:py-2 rounded hover:bg-gray-600 h-10 transition"
          >
            Swap A/B
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 sm:mt-0 bg-gray-700 px-3 py-2 rounded h-10">
          <button
              onClick={() => setIsMuted((prev) => !prev)}
              className="text-gray-300 hover:text-white transition"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <div className="relative w-24 group">
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer transition"
                defaultValue={[volume]}
                max={1}
                step={0.01}
                onValueChange={([val]) => setVolume(val)}
              >
                <Slider.Track className="bg-gray-600 relative grow rounded-full h-1">
                  <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full shadow hover:bg-blue-600 transition" />
              </Slider.Root>
            </div>
        </div>
      </div>
    </div>
  )
}