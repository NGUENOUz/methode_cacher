import { ArrowRight, CheckCircle2, Download, Sparkles, Target, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface BenefitsSectionProps {
  t: {
    title: string;
    list: string[];
  };
}

export const BenefitsSection = ({ t }: BenefitsSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Suivi du scroll dans la section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1
  });

  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="py-32 px-4 bg-white relative">
      
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full mb-6"
          >
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase italic">Transformation_Step</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic uppercase leading-[0.9]">
            {t.title}
          </h2>
        </div>

        {/* PROGRESSIVE CONTENT AREA */}
        <div className="relative">
          
          {/* Ligne de progression verticale (Desktop) */}
          <div className="absolute left-0 lg:left-[-40px] top-0 bottom-0 w-1 bg-slate-100 rounded-full hidden md:block">
            <motion.div 
              style={{ scaleY: scaleX, originY: 0 }}
              className="absolute inset-0 w-full bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>

          <div className="space-y-24 md:space-y-40">
            {t.list.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                text={benefit} 
                index={index} 
              />
            ))}
          </div>
        </div>

        {/* CTA FINAL DE SECTION */}
        <div className="mt-40 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl p-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2.5rem]"
          >
            <button
              onClick={scrollToOffer}
              className="w-full bg-white hover:bg-transparent hover:text-white transition-all duration-500 text-slate-900 p-10 rounded-[2.3rem] flex flex-col md:flex-row items-center justify-between gap-6 group"
            >
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-2">Prêt pour le changement ?</p>
                <p className="text-3xl font-black italic uppercase tracking-tighter">Activer ma réussite</p>
              </div>
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* COMPOSANT CARTE INDIVIDUELLE */
const BenefitCard = ({ text, index }: { text: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group"
    >
      {/* Numéro avec effet de remplissage */}
      <div className="relative">
        <span className="text-7xl md:text-9xl font-black text-slate-100 transition-colors duration-500 group-hover:text-blue-50/50 italic tabular-nums">
          0{index + 1}
        </span>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="w-12 h-12 bg-white border-4 border-white shadow-xl rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
           </div>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
           <div className="h-px w-8 bg-blue-600" />
           <span className="text-xs font-black text-blue-600 uppercase tracking-widest italic">Étape_Validation</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter leading-none">
          {text}
        </h3>
        <div className="flex items-center gap-4 pt-2">
           <div className="flex gap-1">
              {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
           </div>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Système_Actif</span>
        </div>
      </div>

      {/* Décoration en fond */}
      <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
         <Sparkles className="w-24 h-24 text-blue-50" />
      </div>
    </motion.div>
  );
};