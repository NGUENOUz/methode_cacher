import { motion } from 'framer-motion';
import { Download, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export const OfferSection = ({ t, countdownText, guarantees }: any) => {
  return (
    <section id="offer-section" className="py-24 px-4 bg-white relative">
      
      {/* Background : Très léger dégradé pour donner de la profondeur sans alourdir */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TITRE SIMPLE & PUISSANT */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="h-1 w-12 bg-blue-600 mb-8 rounded-full" />
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] italic uppercase">
            {t.title}
          </h2>
        </div>

        {/* BOX PRINCIPALE : L'OFFRE UNIQUE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
          
          {/* CÔTÉ GAUCHE : VALEUR (8 colonnes) */}
          <div className="lg:col-span-8 bg-[#F8FAFC] border border-slate-200 rounded-t-[3rem] lg:rounded-l-[3rem] lg:rounded-tr-none p-8 md:p-16">
            <div className="space-y-12">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">Tarification_Unique</span>
              </div>

              <div className="flex items-baseline gap-6">
                <span className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter tabular-nums">
                  {t.currentPrice}
                </span>
                <span className="text-2xl text-slate-300 line-through font-medium italic">
                  {t.oldPrice}
                </span>
              </div>

              {/* Liste de garanties simplifiée */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guarantees.map((g: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CÔTÉ DROIT : ACTION (4 colonnes) */}
          <div className="lg:col-span-4 bg-slate-900 rounded-b-[3rem] lg:rounded-r-[3rem] lg:rounded-bl-none p-8 md:p-12 flex flex-col justify-between text-white shadow-2xl">
            
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <CountdownTimer text={countdownText} />
            </div>

            <button
              onClick={() => window.open('https://qopvpcyv.mychariow.shop/prd_nqf4um/checkout')}
              className="group w-full bg-white text-black py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 shadow-xl"
            >
              <Download className="w-6 h-6" />
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center">
              <p className="text-[10px] font-black text-white/30 tracking-widest uppercase italic">
                {t.delivery}
              </p>
            </div>
          </div>

        </div>

        {/* TRUST BAR MINIMALISTE */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40">
           <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Satisfait ou remboursé</span>
           </div>
           <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Paiement Sécurisé</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest italic">C.A.C.H.E.R v2.0</span>
           </div>
        </div>

      </div>
    </section>
  );
};