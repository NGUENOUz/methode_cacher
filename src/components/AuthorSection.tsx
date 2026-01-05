import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle, Quote } from "lucide-react";

export const AuthorSection = ({ t }: any) => {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Background : Subtile touche de profondeur */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* IMAGE DE L'AUTEUR - Le Mockup Physique */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white">
              <img 
                src="https://res.cloudinary.com/dcsl6xhli/image/upload/v1767622960/IMG_0967-removebg-preview_b1ej8j.png" 
                alt="Auteur - Expert MBA"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Overlay Gradient pour le style */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Badge flottant : L'autorité MBA */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl z-20"
            >
              <GraduationCap className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-xl font-black italic tracking-tighter leading-none">Auteur</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-50 mt-1">jean-Noel Gehy</div>
            </motion.div>
          </motion.div>

          {/* CONTENU TEXTE - L'Expertise */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">Expertise_Vérifiée</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] italic uppercase">
                Derrière la <br /> <span className="text-blue-600">Méthode.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              <p>
                Avec plus de <span className="text-slate-900 font-black">12 ans d'expérience</span> sur le terrain, j'ai accompagné des structures complexes dans la transformation de leurs échecs opérationnels en leviers de croissance.
              </p>
              <p className="italic border-l-4 border-slate-100 pl-6 text-slate-400">
                "Mon approche combine la rigueur académique d'un MBA avec la réalité brute du terrain. C'est de cette fusion qu'est née la méthode C.A.C.H.E.R."
              </p>
            </div>

            {/* GRID DE STATS D'AUTORITÉ */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="text-4xl font-black text-slate-900 italic mb-1">12+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Années <br /> d'Expérience</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="text-4xl font-black text-slate-900 italic mb-1">MBA</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Master of Business <br /> Administration</div>
              </div>
            </div>

            {/* Signature ou Preuve finale */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Rejoint par +500 professionnels cette année
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};