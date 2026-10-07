import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
  isReplaying?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, isReplaying = false }) => {
  const [stage, setStage] = useState<'enter' | 'zoom' | 'finished'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    const zoomTimer = setTimeout(() => {
      setStage('zoom');
    }, 1500);

    const finishTimer = setTimeout(() => {
      setStage('finished');
      onComplete();
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(zoomTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete, isReplaying]);

  if (stage === 'finished') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader-overlay"
        initial={{ opacity: 1 }}
        animate={{
          opacity: stage === 'zoom' ? 0 : 1,
        }}
        transition={{
          duration: 0.85,
          ease: [0.65, 0, 0.35, 1],
          delay: stage === 'zoom' ? 0.2 : 0,
        }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] overflow-hidden select-none"
      >
        {/* Subtle radial glow for dark theme */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.15)_0%,_rgba(18,18,18,1)_70%)] pointer-events-none" />

        {/* Center Logo with Zoom Transition */}
        <div className="relative flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={
              stage === 'enter'
                ? { scale: 1, opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                : {
                    scale: 30,
                    opacity: 0,
                    filter: 'blur(6px)',
                    transition: { duration: 0.95, ease: [0.7, 0, 0.2, 1] },
                  }
            }
            className="relative will-change-transform flex items-center justify-center p-4"
          >
            <img
              src="/3c049011-964b-4330-918f-4b6c2b01d278 (1).png"
              alt="Street Garage Logo"
              className="w-44 sm:w-56 md:w-64 h-auto max-h-[280px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Subtext and Progress bar */}
          <motion.div
            animate={{
              opacity: stage === 'zoom' ? 0 : 1,
              y: stage === 'zoom' ? 15 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="mt-6 flex flex-col items-center text-center space-y-2"
          >
            <div className="flex items-center gap-1.5 font-heading font-black tracking-tight text-white text-2xl uppercase">
              <span>Street</span>
              <span className="text-[#3b82f6]">Garage</span>
            </div>
            <p className="text-xs text-[#94a3b8] font-medium tracking-wide">
              Ελαστικά &middot; Μηχανικό Service &middot; 24/7 Οδική Βοήθεια
            </p>

            {/* Clean progress bar */}
            <div className="w-36 sm:w-48 h-1 bg-[#27272a] rounded-[2px] overflow-hidden mt-3">
              <motion.div
                className="h-full bg-[#1d4ed8] rounded-[2px]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
