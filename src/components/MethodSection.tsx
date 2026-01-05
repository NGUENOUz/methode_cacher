import { motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";

interface MethodStep {
  letter: string;
  title: string;
  description: string;
}

interface MethodSectionProps {
  t: {
    title: string;
    steps: MethodStep[];
  };
}

export const MethodSection = ({ t }: MethodSectionProps) => {
  return (
    <section className="py-32 px-4 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background : Rappel des lueurs de la Hero */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER DE SECTION STYLE STUDIO */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">Architecture_Système</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic uppercase leading-[0.9]">
            {t.title}
          </h2>
        </div>

        {/* GRID DE LA MÉTHODE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {t.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Carte sculptée (Neumorphism léger / Studio) */}
              <div className="h-full bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 flex flex-col items-start relative overflow-hidden">
                
                {/* L'ombre de la lettre en fond pour le "déclic" visuel */}
                <div className="absolute -top-4 -right-4 text-[12rem] font-black text-slate-500 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity select-none italic pointer-events-none">
                  {step.letter}
                </div>

                {/* Le Badge Lettre (Point focal) */}
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-500">
                   {/* Effet de brillance interne */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                   <span className="text-white text-3xl font-black italic">{step.letter}</span>
                </div>

                <div className="mt-8 space-y-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 bg-blue-600 rounded-full" />
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Détail technique discret en bas */}
                <div className="mt-auto pt-8 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                   <Sparkles className="w-3 h-3 text-blue-600" />
                   <span className="text-[9px] font-black tracking-widest uppercase">Module_0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Ligne de connexion visuelle (Optionnelle) */}
        <div className="mt-20 text-center">
           <div className="inline-block px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm text-slate-400 font-mono text-[11px] tracking-widest uppercase">
             Processus_Séquentiel_Optimisé // v2.0
           </div>
        </div>
      </div>
    </section>
  );
};