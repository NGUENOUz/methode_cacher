import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownTimerProps {
  text: string;
}

export const CountdownTimer = ({ text }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);
    const difference = endTime.getTime() - now.getTime();

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center lg:items-start gap-2">
      {/* Label Minimaliste */}
      <div className="flex items-center gap-1.5 opacity-60">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
          {text}
        </span>
      </div>

      {/* Timer Fin & Élégant */}
      <div className="flex items-center gap-3">
        <TimeUnit value={timeLeft.hours} label="h" />
        <span className="text-slate-300 font-light">:</span>
        <TimeUnit value={timeLeft.minutes} label="m" />
        <span className="text-slate-300 font-light">:</span>
        <TimeUnit value={timeLeft.seconds} label="s" />
      </div>
    </div>
  );
};
const TimeUnit = ({ value, label, isDark }: { value: number; label: string; isDark?: boolean }) => {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <div className="flex items-baseline gap-0.5">
      <div className="overflow-hidden h-8 flex items-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formattedValue}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={`text-2xl font-black tabular-nums tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-tighter ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
        {label}
      </span>
    </div>
  );
};