import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Quote } from "lucide-react";

export const AuthorSection = ({ t }: any) => {
  return (
    <section className="py-16 lg:py-32 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* IMAGE DE L'AUTEUR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-[8px] lg:border-[12px] border-white">
              <img 
                src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622960/IMG_0967-removebg-preview_b1ej8j.png" 
                alt="Jean-Noël Gehy - Expert MBA"
                className="w-full aspect-[4/5] object-cover bg-slate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Badge flottant : Adapté au style du bouton Hero */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-6 bg-slate-900 text-white p-5 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl z-20 border border-white/10"
            >
              <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400 mb-2" />
              <div className="text-lg lg:text-xl font-black italic tracking-tighter leading-none uppercase">Expert MBA</div>
              <div className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400/80 mt-1">Jean-Noël Gehy</div>
            </motion.div>
          </motion.div>

          {/* CONTENU TEXTE */}
          <div className="lg:col-span-7 space-y-8 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-2 bg-blue-50 border border-blue-100 rounded-full">
                <Award className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" />
                <span className="text-[9px] lg:text-[10px] font-black tracking-widest text-blue-600 uppercase">Expertise_Vérifiée</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] italic uppercase">
                Derrière la <br /> <span className="text-blue-600">Méthode.</span>
              </h2>
            </div>

            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              <p>
                Avec plus de <span className="text-slate-900 font-black">12 ans d'expérience</span>, j'ai accompagné des structures complexes dans la transformation de leurs échecs en leviers de croissance.
              </p>
              <p className="italic border-l-4 border-blue-600/20 pl-6 text-slate-500 bg-slate-50 py-4 rounded-r-xl">
                "Mon approche combine la rigueur académique d'un MBA avec la réalité brute du terrain. C'est de cette fusion qu'est née la méthode C.A.C.H.E.R."
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-2">
              <div className="p-5 lg:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-3xl lg:text-4xl font-black text-blue-600 italic mb-1">12+</div>
                <div className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Années <br /> d'Expérience</div>
              </div>
              <div className="p-5 lg:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-3xl lg:text-4xl font-black text-slate-900 italic mb-1">MBA</div>
                <div className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Master of Business <br /> Administration</div>
              </div>
            </div>

            {/* SOCIAL PROOF TAG */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i+20}`}
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm"
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">
                Approuvé par +500 professionnels
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};