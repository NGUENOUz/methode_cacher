import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Zap } from "lucide-react";

interface StickyCTAProps {
  currentPrice: string;
  ctaText: string;
}

export const StickyCTA = ({ currentPrice, ctaText }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Apparaît après avoir scrollé de 600px
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md"
        >
          <button
            onClick={scrollToOffer}
            className="w-full bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex items-center justify-between group overflow-hidden relative"
          >
            {/* Effet de brillance qui passe sur le bouton régulièrement */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            />

            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-slate-900 fill-slate-900" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-black tracking-widest text-amber-400 leading-none mb-1">Offre Spéciale</p>
                <p className="text-sm font-bold leading-none">{ctaText}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <span className="text-xl font-black text-white">{currentPrice}</span>
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <Download className="w-5 h-5" />
              </div>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};