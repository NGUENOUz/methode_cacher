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
    <section className="relative min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 sm:px-6 lg:px-12 py-10 overflow-hidden">
      
      {/* Background Decor Soft & Professional */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 text-center lg:text-left"
        >
          {/* Badge avec effet de brillance */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-700">
              {t.badge}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter italic uppercase">
            {t.headline}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            {t.subheadline}
          </p>

          {/* Section Prix & Urgence - Refondue pour le déclic */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 bg-white/50 backdrop-blur-sm p-2 rounded-3xl border border-white inline-flex">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-black text-slate-900 tracking-tighter">
                {t.currentPrice}
              </span>
              <div className="flex flex-col">
                <span className="text-xl text-slate-400 line-through font-light leading-none">
                  {t.oldPrice}
                </span>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">
                  OFFRE_VALIDE
                </span>
              </div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-slate-200" />
            <CountdownTimer text={t.countdownText} />
          </div>

          {/* CTA & Trust */}
          <div className="space-y-6">
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto group relative bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 overflow-hidden"
            >
              <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              {t.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="flex items-center justify-center lg:justify-start gap-4">
               <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  {t.ctaSecondary}
               </div>
               <div className="h-4 w-px bg-slate-200" />
               <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SÉCURISÉ</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* MOCKUP VISUAL - L'ÉLEMENT DE DÉCLIC */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Ombre portée réaliste au sol */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-slate-900/10 blur-3xl rounded-full" />
          
          {/* Cadre de l'ebook (Le Mockup) */}
          <div className="relative group p-4 sm:p-6 bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 transition-transform duration-500 hover:-translate-y-2">
            <div className="relative aspect-[3/4.2] w-full max-w-[320px] sm:max-w-[400px] overflow-hidden rounded-[1.8rem] shadow-2xl">
              {/* IMAGE DE L'EBOOK (Lien par défaut) */}
              <img 
                src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622977/1766986526_xe5bbx.png" 
                alt="Ebook Cover"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient sur l'image pour le texte si besoin */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Texte sur le mockup (Optionnel si ton image n'a pas de texte) */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between text-white pointer-events-none">
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
                <div className="space-y-2">
                  <h3 className="text-5xl font-black leading-none tracking-tighter italic">C.A.C.H.E.R.</h3>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">La Méthode Maîtresse</p>
                </div>
              </div>

              {/* Effet de reflet de vitre */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Badge Flottant "Qualité Certifiée" */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-blue-600 text-white p-5 rounded-3xl shadow-2xl border-4 border-[#F8FAFC] hidden sm:block"
            >
              <Sparkles className="w-8 h-8 fill-white" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};