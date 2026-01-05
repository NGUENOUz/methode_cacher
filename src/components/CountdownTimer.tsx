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
    <div className="flex flex-col items-center md:items-start gap-4 p-2">
      {/* Label avec petit voyant "Live" */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
          {text}
        </span>
      </div>

      {/* Timer Container */}
      <div className="flex items-center gap-1.5 font-mono">
        <TimeUnit value={timeLeft.hours} label="H" />
        <span className="text-xl font-black text-slate-700 animate-pulse">:</span>
        <TimeUnit value={timeLeft.minutes} label="M" />
        <span className="text-xl font-black text-slate-700 animate-pulse">:</span>
        <TimeUnit value={timeLeft.seconds} label="S" />
      </div>
    </div>
  );
};

// Sous-composant pour chaque unité de temps (Premium Glass look)
const TimeUnit = ({ value, label }: { value: number; label: string }) => {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <div className="relative group">
      {/* Glow d'arrière plan */}
      <div className="absolute -inset-1 bg-blue-500/10 rounded-lg blur-md group-hover:bg-blue-500/20 transition-all" />
      
      <div className="relative flex flex-col items-center bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-lg px-3 py-2 min-w-[50px] shadow-2xl">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formattedValue}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-black text-white tracking-tighter"
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>
        <span className="text-[8px] font-black text-blue-500/80 absolute -bottom-1 bg-[#08090A] px-1 px-1 border border-white/10 rounded">
          {label}
        </span>
      </div>
    </div>
  );
};