import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Tag, Gift } from "lucide-react";

export const ExitIntentChat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Déclenche quand la souris sort vers le haut sur desktop
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Sur Mobile, on peut déclencher après 20 secondes d'inactivité ou au scroll arrière
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 45000); // 45 secondes par sécurité

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center justify-center lg:items-end lg:justify-end p-4 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="bg-white w-full max-w-[420px] rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-100"
        >
          {/* Header */}
          <div className="bg-slate-900 p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622960/IMG_0967-removebg-preview_b1ej8j.png"
                  className="w-12 h-12 rounded-full bg-slate-800 object-cover border-2 border-blue-500/50"
                  alt="Jean-Noël"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <p className="text-white text-base font-black italic tracking-tight leading-none">
                  Jean-Noël Gehy
                </p>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                  Auteur en ligne
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-white/30 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Bubbles */}
          <div className="p-6 space-y-4 bg-slate-50/50 max-h-[350px] overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-200/50 text-sm text-slate-700 font-medium"
            >
              Je vois que vous hésitez... et je déteste l'idée que le prix soit
              un frein à votre réussite.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-blue-600 p-4 rounded-2xl rounded-tl-none shadow-md text-sm text-white font-bold flex items-start gap-3"
            >
              <Gift className="w-5 h-5 flex-shrink-0" />
              <div>
                Écoutez, je vous offre{" "}
                <span className="underline decoration-white/50 underline-offset-4">
                  1$ de réduction immédiate
                </span>
                . Votre accès passe à{" "}
                <span className="text-xl block mt-1 font-black">
                  7$ seulement.
                </span>
                <div className="mt-2 bg-white/20 border border-white/30 rounded-lg py-1 px-3 text-center text-sm tracking-widest font-black">
                  CODE : SUCCESS20
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Area */}
          <div className="p-6 bg-white">
            <button
              onClick={() =>
                (window.location.href =
                  "https://qopvpcyv.mychariow.shop/prd_nqf4um/checkout?coupon=SUCCESS20")
              }
              className="relative overflow-hidden group w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] active:scale-95"
            >
              {/* EFFET LUMINEUX (Shimmer) */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 1.5,
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              />

              {/* CONTENU DU BOUTON (Z-10 pour passer au-dessus de l'effet) */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span>OBTENIR MON ACCÈS À 7$</span>
                <motion.div
                  animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.div>
              </div>
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 opacity-50">
              <Tag className="w-3 h-3 text-slate-900" />
              <span className="text-[10px] font-black uppercase tracking-tighter">
                Le coupon est appliqué automatiquement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
