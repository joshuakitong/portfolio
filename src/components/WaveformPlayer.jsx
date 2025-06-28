import { useEffect, useRef, useState, useCallback } from 'react';
import WaveSurfer from 'wavesurfer.js';
import * as Slider from '@radix-ui/react-slider';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';

export default function WaveformPlayer({ title, url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const waveformRef = useRef(null);
  const wsInstance = useRef(null);

  const initializeWaveSurfer = useCallback((containerRef) => {
    if (!containerRef.current) return null;
    return WaveSurfer.create({
      container: containerRef.current,
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
    });
  }, []);

  useEffect(() => {
    const ws = initializeWaveSurfer(waveformRef);
    if (!ws) return;

    wsInstance.current = ws;

    ws.load(url).catch(() => {});
    ws.on('finish', () => setIsPlaying(false));

    ws.setVolume(isMuted ? 0 : volume);

    setIsPlaying(false);

    return () => {
      try {
        ws.stop();
        ws.destroy();
      } catch (err) {
        console.warn('Error cleaning up WaveSurfer:', err);
      }
    };
  }, [url, initializeWaveSurfer]);

  useEffect(() => {
    wsInstance.current?.setVolume(isMuted ? 0 : volume);
  }, [volume, isMuted]);

  const togglePlay = () => {
    const ws = wsInstance.current;
    if (!ws) return;

    if (isPlaying) {
      ws.pause();
      setIsPlaying(false);
    } else {
      ws.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-2xl p-4 bg-[#222] rounded-lg text-white">
      <div className="text-center mb-2">
        <strong>{title}</strong>
      </div>

      <div className="mb-4">
        <div ref={waveformRef} className="cursor-pointer" />
      </div>

      <div className="flex sm:items-center sm:justify-center sm:gap-4 gap-2 flex-wrap">
        <div className="flex justify-center gap-2 sm:gap-4 flex-grow sm:flex-grow-0">
          <button
            onClick={togglePlay}
            className="bg-blue-500 text-white text-sm sm:text-base px-3 sm:px-4 sm:py-2 rounded hover:bg-blue-600 h-10 transition flex items-center justify-center"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 bg-gray-700 px-3 py-2 rounded h-10 flex-grow sm:flex-grow-0">
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

          <div className="relative w-20 group">
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5 cursor-pointer transition"
              defaultValue={[volume]}
              value={[volume]}
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
  );
}