import { AlertCircle, ArrowDownCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProblemSectionProps {
  t: {
    title: string;
    content: string;
  };
}

export const ProblemSection = ({ t }: ProblemSectionProps) => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        
        {/* Titre de section discret */}
        <div className="flex items-center justify-center gap-3 mb-12">
           <div className="h-px w-12 bg-slate-200" />
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Diagnostic de situation</span>
           <div className="h-px w-12 bg-slate-200" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white border border-slate-100 rounded-[3rem] p-8 sm:p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          {/* Accent subtil de couleur en fond */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
            
            {/* Colonne Icône & Statut */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center shadow-inner">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <div className="px-3 py-1 bg-red-50/50 border border-red-100 rounded-full">
                <span className="text-[9px] font-black text-red-600 uppercase tracking-tighter">Point critique</span>
              </div>
            </div>

            {/* Colonne Texte */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter italic uppercase italic">
                {t.title}
              </h2>
              
              <div className="relative">
                <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-medium">
                  {t.content}
                </p>
                
                {/* Petit rappel de la solution à venir */}
                <div className="pt-8 flex items-center justify-center lg:justify-start gap-3">
                   <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center animate-bounce">
                      <ArrowDownCircle className="text-slate-400 w-5 h-5" />
                   </div>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Découvrir l'issue</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};