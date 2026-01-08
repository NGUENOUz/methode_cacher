import { motion } from 'framer-motion';
import { Download, ShieldCheck, ArrowRight, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export const OfferSection = ({ t, countdownText, guarantees }: any) => {
  return (
    <section id="offer-section" className="py-20 lg:py-32 px-4 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TITRE AVEC ACCENTUATION */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            className="h-1.5 bg-blue-600 mb-6 rounded-full" 
          />
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] italic uppercase">
            {t.title}
          </h2>
          <p className="mt-4 text-slate-500 font-bold uppercase text-[10px] lg:text-xs tracking-[0.2em]">
            Une décision aujourd'hui, un business transformé demain.
          </p>
        </div>

        {/* BOX PRINCIPALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border border-slate-100">
          
          {/* CÔTÉ GAUCHE : LA VALEUR */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-8 md:p-16 relative">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase">Offre à durée limitée</span>
              </div>

              <div className="relative inline-block">
                <div className="flex items-baseline gap-4">
                  <span className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter tabular-nums italic">
                    {t.currentPrice}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl text-slate-300 line-through font-bold italic">
                      {t.oldPrice}
                    </span>
                    <span className="text-xs font-black text-emerald-500 uppercase tracking-tight">-50% OFF</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.1em]">Inclus dans votre accès immédiat :</p>
                <div className="grid grid-cols-1 gap-3">
                  {guarantees.map((g: string, i: number) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
                    >
                      <div className="bg-emerald-500 rounded-full p-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[11px] lg:text-xs font-bold text-slate-700 uppercase tracking-tight">{g}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CÔTÉ DROIT : L'ACTION (FOND NOIR) */}
          <div className="lg:col-span-5 bg-slate-900 p-8 md:p-12 flex flex-col justify-between text-white relative">
            {/* L'élément qui manquait : L'urgence visible */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <CountdownTimer text={countdownText} isDark={true}/>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Paiement 100% Sécurisé</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  Après le paiement, vous recevrez directementl'ebook  par email.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <button
                onClick={() => window.open('https://qopvpcyv.mychariow.shop/prd_nqf4um/checkout')}
                className="group w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-500 transition-all duration-300 active:scale-95 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)]"
              >
                <Download className="w-5 h-5" />
                {t.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                {t.delivery}
              </p>
            </div>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Garantie 30 Jours</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
              <Lock className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">SSL Encrypted</span>
            </div>
            <div className="hidden lg:block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600/30">
              C.A.C.H.E.R v2.0
            </div>
        </div>

      </div>
    </section>
  );
};