import { Users, Briefcase, GraduationCap, TrendingUp, Check, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudienceSectionProps {
  t: {
    title: string;
    profiles: string[];
  };
}

const icons = [Briefcase, TrendingUp, GraduationCap, Users];

export const AudienceSection = ({ t }: AudienceSectionProps) => {
  return (
    <section className="py-32 px-4 bg-[#0A0C10] relative overflow-hidden">
      
      {/* Background Decor : Effet de profondeur nocturne */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER DE SECTION STYLE "ELITE" */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md"
          >
            <Target className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-100 uppercase italic">Public_Cible // Sélection</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-[0.9] max-w-4xl">
            {t.title}
          </h2>
          
          <p className="mt-8 text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed italic">
            "Que vous soyez au début de votre parcours ou en pleine transition, la méthode s'adapte à votre réalité."
          </p>
        </div>

        {/* GRID DES PROFILS : Cartes "Dark Studio" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.profiles.map((profile, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Lueur au survol */}
                <div className="absolute inset-0 bg-blue-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/[0.06] group-hover:-translate-y-3 shadow-2xl">
                  
                  {/* Icon Container Sculpté */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transform group-hover:rotate-[10deg] transition-transform duration-500 shadow-inner">
                      <Icon className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:text-blue-400 transition-all" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-6 leading-tight tracking-tight uppercase italic">
                    {profile}
                  </h3>

                  {/* Badge de validation discret */}
                  <div className="mt-auto flex items-center gap-2 px-4 py-1.5 bg-black/40 rounded-full border border-white/5 group-hover:border-blue-500/30 transition-colors">
                    <Check className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-200 transition-colors">Eligibilité_OK</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ligne de footer de section */}
        <div className="mt-24 flex flex-col items-center gap-6">
           <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
           <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">Optimisé pour la croissance exponentielle</p>
        </div>
      </div>
    </section>
  );
};