import { Download, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { CountdownTimer } from "./CountdownTimer";

interface HeroSectionProps {
  t: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    currentPrice: string;
    oldPrice: string;
    badge: string;
    countdownText: string;
  };
}

export const HeroSection = ({ t }: HeroSectionProps) => {
  const handleCTA = () => {
    document
      .getElementById("offer-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-4 py-12 lg:py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Layout : Titre en haut sur mobile, Mockup/Prix en grille sur desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 1. TITRE & DESCRIPTION (4 colonnes sur Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                {t.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase">
              {t.headline}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed font-medium italic">
              {t.subheadline}
            </p>
          </motion.div>

          {/* 2. LE MOCKUP (4 colonnes sur Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 w-full flex justify-center"
          >
            <div className="relative group w-full max-w-[300px] lg:max-w-full lg:px-4">
              <div className="p-3 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622977/1766986526_xe5bbx.png"
                  alt="Ebook Cover"
                  className="w-full h-auto rounded-[1.8rem]"
                />
              </div>
            </div>
          </motion.div>

          {/* 3. LE BLOC DE CONVERSION UNIFIÉ (4 colonnes sur Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 w-full"
          >
            <div className="bg-white border border-slate-100 rounded-[3rem] p-8 lg:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col gap-8 relative overflow-hidden">
              {/* Effet visuel discret en fond de carte */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16" />

              {/* PRIX */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-7xl font-black text-slate-900 tracking-tighter italic leading-none">
                  {t.currentPrice}
                </span>
                <div className="flex flex-col">
                  <span className="text-xl text-slate-300 line-through font-light leading-none italic">
                    {t.oldPrice}
                  </span>
                  <span className="text-[10px] font-black text-emerald-600 tracking-[0.2em] mt-1">
                    OFFRE_ACTIVE
                  </span>
                </div>
              </div>

              {/* TIMER */}
              <div className="py-6 border-y border-slate-50">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 text-center lg:text-left">
                  Expiration de la session :
                </p>
                <CountdownTimer text={t.countdownText} />
              </div>

              {/* BOUTON & TRUST */}
              <div className="space-y-4">
                <button
                  onClick={handleCTA}
                  className="w-full group bg-slate-900 text-white p-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all duration-300 shadow-xl active:scale-95"
                >
                  <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                  {t.ctaPrimary}
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 tracking-widest uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    SSL_SECURED
                  </div>
                  <div className="w-1 h-1 bg-slate-200 rounded-full" />
                  <div className="text-[9px] font-black text-slate-400 tracking-widest uppercase">
                    {t.ctaSecondary}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
