import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-grafito flex flex-col items-center justify-center"
        >
          <p className="font-mono text-6xl lg:text-8xl text-mineral tabular-nums mb-6">
            {count}
          </p>
          <div className="w-48 h-px bg-mineral/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-vital"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="font-general text-label tracking-[0.3em] text-metal mt-6">
            MUV VITAL
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
