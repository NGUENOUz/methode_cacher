import { motion } from "framer-motion";
import { Globe, Smartphone, ChevronRight } from "lucide-react";

export const GlobalAfricaBanner = () => {
  return (
    // Changement : fixed top-0, w-full et z-index élevé pour rester au-dessus de tout
    <div className="fixed top-0 left-0 w-full z-[100] overflow-hidden bg-slate-900 py-2 lg:py-2.5 px-4 shadow-lg">
      
      {/* Effet de lueur en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20 opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 relative z-10">
        
        {/* Message Principal */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
            <Globe className="w-3 h-3 text-blue-400" />
            <span className="text-[9px] font-black text-white uppercase tracking-wider">International</span>
          </div>
          <p className="text-[10px] lg:text-xs font-bold text-slate-200 tracking-tight">
            Disponible partout en Afrique : <span className="text-white font-black">5 000 FCFA (8$)</span>
          </p>
        </div>

        {/* Séparateur discret sur Desktop */}
        <div className="hidden md:block h-4 w-[1px] bg-white/20" />

        {/* Moyens de Paiement */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">Mobile Money</span>
          </div>
          
          <div className="flex items-center gap-2">
             <div className="flex -space-x-1">
                <div title="Orange Money" className="w-5 h-5 rounded-full bg-[#FF6600] border border-slate-900 flex items-center justify-center text-[7px] font-black text-white shadow-sm">O</div>
                <div title="Wave" className="w-5 h-5 rounded-full bg-[#00adef] border border-slate-900 flex items-center justify-center text-[7px] font-black text-white shadow-sm">W</div>
                <div title="MTN MoMo" className="w-5 h-5 rounded-full bg-[#ffcc00] border border-slate-900 flex items-center justify-center text-[7px] font-black text-black shadow-sm">M</div>
             </div>
             <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">+ Plus</span>
          </div>

          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center"
          >
            <ChevronRight className="w-3 h-3 text-white/40" />
          </motion.div>
        </div>
      </div>

      {/* Animation de scan lumineux */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
      />
    </div>
  );
};