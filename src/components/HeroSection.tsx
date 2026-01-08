import { Download, Zap, FileText, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { CountdownTimer } from "./CountdownTimer";

export const HeroSection = ({ t }: any) => {
  const handleCTA = () => {
    window.location.href =
      "https://qopvpcyv.mychariow.shop/prd_nqf4um/checkout";
  };

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col items-center justify-start lg:justify-center bg-[#F8FAFC] px-4 -mt-5 pt-0 lg:pt-0 -mt-11 pb-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center h-full">

        {/* ===================== COLONNE GAUCHE ===================== */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 lg:space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 lg:px-3 lg:py-1">
            <span className="text-[10px] lg:text-xs font-black uppercase tracking-wider text-emerald-700">
              +1,200 Entrepreneurs Formés
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1 lg:space-y-3">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter italic uppercase">
              {t.headline}
            </h1>
            <p className="text-[12px] lg:text-lg text-slate-600 font-medium max-w-[300px] lg:max-w-xl">
              {t.subheadline}
            </p>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-3 h-3 lg:w-4 lg:h-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="text-[9px] lg:text-xs font-bold text-slate-400 ml-2 uppercase">
              4.9/5 satisfaction
            </span>
          </div>

          {/* ===================== MOCKUP EBOOK — MOBILE + DESKTOP ===================== */}
          <div className="relative w-44 lg:hidden mt-3">
            <motion.img
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: -2, scale: 1 }}
              src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622977/1766986526_xe5bbx.png"
              alt="Ebook"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-white border border-slate-100 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
              <FileText className="w-3 h-3 text-blue-600" />
              <span className="text-[8px] font-black text-slate-700 uppercase">
                PDF 4.2 MB
              </span>
            </div>
          </div>

          {/* ===================== ZONE DESKTOP : EBOOK + PROJECTION ===================== */}
          <div className="hidden lg:grid grid-cols-2 gap-8 items-start pt-4">

            {/* Ebook Desktop */}
            <div className="relative w-64 xl:w-72">
              <motion.img
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: -2, scale: 1 }}
                src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622977/1766986526_xe5bbx.png"
                alt="Ebook"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-white border border-slate-100 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5">
                <FileText className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] font-black text-slate-700 uppercase">
                  PDF 4.2 MB
                </span>
              </div>
            </div>

            {/* Projection mentale */}
            <div className="flex flex-col gap-4 justify-center max-w-md">
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                Ce que tu vas obtenir
              </p>

              <ul className="space-y-3">
                {[
                  "Comprendre pourquoi tu échoues vraiment",
                  "Corriger ce qui bloque ta progression",
                  "Avancer avec une méthode claire et durable",
                  "Éviter les erreurs qui font abandonner",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                Basé sur la méthode C.A.C.H.E.R.
              </span>
            </div>
          </div>
        </div>

        {/* ===================== COLONNE DROITE ===================== */}
        <div className="lg:col-span-5 w-full mt-6 lg:mt-0 max-w-md lg:max-w-sm xl:max-w-md mx-auto">
          <div className="bg-white border border-blue-600/10 rounded-3xl p-5 lg:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] relative">

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] lg:text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
              Offre de lancement
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl lg:text-7xl font-black text-slate-900 italic">
                  8$
                </span>
                <span className="text-lg text-slate-300 line-through italic">
                  16$
                </span>
              </div>

            <button
  onClick={handleCTA}
  className="w-full relative overflow-hidden bg-blue-600 text-white py-4 rounded-xl font-black text-sm flex flex-col items-center justify-center gap-0 hover:bg-blue-700 transition-all active:scale-95 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)]"
>
  {/* BANDE LUMINEUSE (Shimmer Effect) */}
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: "200%" }}
    transition={{
      repeat: Infinity,
      duration: 2.5,
      ease: "linear",
      repeatDelay: 1,
    }}
    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
  />

  {/* CONTENU DU BOUTON */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    <div className="flex items-center gap-2">
      <motion.div
        animate={{ y: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Download className="w-4 h-4" />
      </motion.div>
      <span className="tracking-tight">TÉLÉCHARGER MAINTENANT</span>
    </div>
    <span className="text-[8px] opacity-80 font-medium tracking-normal mt-0.5">
      Ebook envoyé par email immédiatement
    </span>
  </div>
</button>

              <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-5 border-t">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Accès Direct
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Paiement Sécurisé
                  </span>
                </div>
              </div>

              <div className="w-full mt-5">
                <CountdownTimer text="L'offre se termine dans :" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
