import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-jet-black text-white"
    >
      <div className="relative overflow-hidden">
        <motion.h1 
          className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white/20"
        >
          BEFORE AND AFTER
        </motion.h1>
        <motion.h1 
          className="absolute inset-0 font-display text-4xl md:text-6xl font-bold tracking-tighter text-white"
          style={{ 
            clipPath: `inset(0 ${100 - progress}% 0 0)` 
          }}
        >
          BEFORE AND AFTER
        </motion.h1>
        {/* Glowing Scan Line */}
        <motion.div 
          className="absolute top-0 bottom-0 w-2 bg-marine-light shadow-[0_0_15px_rgba(0,180,216,0.8)]"
          style={{ 
            left: `${progress}%`,
            opacity: progress < 100 ? 1 : 0,
            transform: 'translateX(-50%)'
          }}
        />
      </div>
      
      <div className="mt-4 text-marine-light font-mono text-sm tracking-widest uppercase">
        Detailing Service
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 w-64 h-[1px] bg-white/10">
        <motion.div 
          className="h-full bg-marine-blue"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute bottom-16 text-xs font-mono text-white/50">
        {Math.round(progress)}% // INITIALIZING PREMIUM EXPERIENCE
      </div>
    </motion.div>
  );
}
