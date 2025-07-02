import { useEffect, useRef, useState, useCallback } from 'react';
import WaveSurfer from 'wavesurfer.js';
import * as Slider from '@radix-ui/react-slider';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';

export default function ABWaveformPlayer({ title, beforeUrl, afterUrl }) {
  const [mode, setMode] = useState('before');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const beforeWaveformRef = useRef(null);
  const afterWaveformRef = useRef(null);

  const beforeWsInstance = useRef(null);
  const afterWsInstance = useRef(null);

  const initializeWaveSurfer = useCallback((containerRef, progressColor) => {
    if (!containerRef.current) return null;

    return WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#94a3b8',
      progressColor: progressColor,
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
    if (!beforeWaveformRef.current || !afterWaveformRef.current) return;

    const currentBeforeWS = initializeWaveSurfer(beforeWaveformRef, '#93c5fd');
    const currentAfterWS = initializeWaveSurfer(afterWaveformRef, '#3b82f6');

    beforeWsInstance.current = currentBeforeWS;
    afterWsInstance.current = currentAfterWS;

    if (currentBeforeWS && beforeUrl) {
      currentBeforeWS.load(beforeUrl).catch(() => {});
    }
    if (currentAfterWS && afterUrl) {
      currentAfterWS.load(afterUrl).catch(() => {});
    }

    if (currentBeforeWS) {
      currentBeforeWS.on('finish', () => setIsPlaying(false));
    }
    if (currentAfterWS) {
      currentAfterWS.on('finish', () => setIsPlaying(false));
    }

    const actualInitialVolume = isMuted ? 0 : volume;
    if (currentBeforeWS) currentBeforeWS.setVolume(actualInitialVolume);
    if (currentAfterWS) currentAfterWS.setVolume(actualInitialVolume);

    setIsPlaying(false);
    setMode('before');

    return () => {
      if (currentBeforeWS) {
        currentBeforeWS.stop();
        currentBeforeWS.destroy();
      }
      if (currentAfterWS) {
        currentAfterWS.stop();
        currentAfterWS.destroy();
      }
      beforeWsInstance.current = null;
      afterWsInstance.current = null;
    };
  }, [beforeUrl, afterUrl, initializeWaveSurfer]);

  useEffect(() => {
    const actualVolume = isMuted ? 0 : volume;
    beforeWsInstance.current?.setVolume(actualVolume);
    afterWsInstance.current?.setVolume(actualVolume);
  }, [volume, isMuted]);

  const getActiveWS = () => (mode === 'before' ? beforeWsInstance.current : afterWsInstance.current);
  const getInactiveWS = () => (mode === 'before' ? afterWsInstance.current : beforeWsInstance.current);

  const togglePlay = () => {
    const active = getActiveWS();
    if (!active) return;

    if (isPlaying) {
      active.pause();
      setIsPlaying(false);
    } else {
      active.play();
      setIsPlaying(true);
    }
  };

  const swapMode = () => {
    const current = getActiveWS();
    const other = getInactiveWS();

    if (!current || !other) return;

    const time = current.getCurrentTime();

    current.pause();
    if (isPlaying) {
        other.seekTo(time / other.getDuration());
        other.play();
    } else {
        other.seekTo(time / other.getDuration());
    }

    setMode(mode === 'before' ? 'after' : 'before');
  };

  return (
    <div className="w-full max-w-2xl p-4 rounded-lg text-gray-800 dark:text-gray-200">
      <div className="text-center mb-2">
        <strong>{mode === 'before' ? 'Before Mix/Master' : 'After Mix/Master'} ({title})</strong>
      </div>

      <div className="mb-4">
        <div ref={beforeWaveformRef} className={`${mode === 'before' ? 'block' : 'hidden'} cursor-pointer`} />
        <div ref={afterWaveformRef} className={`${mode === 'after' ? 'block' : 'hidden'} cursor-pointer`} />
      </div>

      <div className="flex sm:items-center sm:justify-center sm:gap-4 gap-2">
        <div className="flex justify-center gap-2 sm:gap-4">
          <button
            onClick={togglePlay}
            className="bg-blue-500 text-white text-sm sm:text-base px-3 sm:px-4 sm:py-2 rounded hover:bg-blue-600 h-10 transition flex items-center justify-center"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button
            onClick={swapMode}
            className="bg-gray-700 text-white text-sm sm:text-base px-3 sm:px-4 sm:py-2 rounded hover:bg-gray-600 h-10 transition flex items-center justify-center"
          >
            Swap A/B
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 bg-gray-700 px-3 py-2 rounded h-10 sm:flex-grow-0">
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