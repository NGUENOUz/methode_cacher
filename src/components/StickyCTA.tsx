import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Zap } from "lucide-react";

interface StickyCTAProps {
  currentPrice: string;
  symbol: string; // Ajouté pour la monnaie dynamique
  ctaText: string;
}

export const StickyCTA = ({ currentPrice, symbol, ctaText }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Apparaît après 600px de scroll
      if (window.scrollY > 600) {
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
          // hidden lg:block : Cache sur desktop (largeur > 1024px)
          // w-full px-4 : Prend toute la largeur avec un petit padding de sécurité
          className="fixed bottom-4 left-0 right-0 z-[100] w-full px-4 lg:hidden flex justify-center pointer-events-none"
        >
          <button
            onClick={scrollToOffer}
            // pointer-events-auto : Réactive le clic uniquement sur le bouton
            className="pointer-events-auto w-full max-w-[500px] bg-slate-900/95 backdrop-blur-xl text-white p-5 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20 flex items-center justify-between group overflow-hidden relative"
          >
            {/* Effet de brillance constant */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />

            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-black tracking-[0.2em] text-blue-400 leading-none mb-1.5">Offre Immédiate</p>
                <p className="text-sm font-black uppercase italic tracking-tight">{ctaText}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10 bg-white/10 py-2 px-4 rounded-2xl border border-white/10">
              <div className="flex items-baseline gap-0.5">
                 <span className="text-2xl font-black tracking-tighter">{currentPrice}</span>
                 <span className="text-xs font-bold">{symbol}</span>
              </div>
              <Download className="w-5 h-5 text-blue-400" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};