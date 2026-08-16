import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ARENA');

  useEffect(() => {
    const totalDuration = 2200;
    const intervalTime = 30;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next < 25) setStatusText('INITIALIZING ARENA');
        else if (next < 55) setStatusText('CALIBRATING 24/7 MATRIX');
        else if (next < 85) setStatusText('LOADING COACH ENGINES');
        else if (next < 100) setStatusText('FORGING ENVIRONMENT');
        else {
          setStatusText('SYSTEM READY');
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#060606] flex flex-col items-center justify-center p-6"
        >
          <div className="text-center w-full max-w-xs space-y-4">
            <div className="font-display text-4xl sm:text-5xl tracking-tight text-white uppercase leading-none">
              THE FITNESS<span className="text-accent text-glow">WORLD</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent-gold font-bold">
              LOHAR PUL · NEW TOWN, KOLKATA
            </div>

            <div className="font-mono text-xs text-foreground tracking-widest font-bold pt-4">
              {statusText} // {String(Math.floor(progress)).padStart(2, '0')}%
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-gold shadow-[0_0_12px_#ff3b30]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
