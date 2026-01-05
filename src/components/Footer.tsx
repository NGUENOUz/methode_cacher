import { ShieldCheck, Globe, Mail, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070A] pt-20 pb-10 px-4 overflow-hidden border-t border-white/5">
      {/* Glow de rappel pour la cohérence visuelle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-black font-black text-xl italic">C.</span>
              </div>
              <span className="text-xl font-black text-white tracking-tighter uppercase italic">
                C.A.C.H.E.R. <span className="text-blue-500 text-[10px] align-top tracking-widest ml-1">SYSTEM</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              La méthode définitive pour transformer chaque échec en un levier de croissance exponentielle. Conçu pour les bâtisseurs de demain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-slate-500 hover:text-blue-400 text-xs font-bold transition-colors uppercase tracking-wider">Introduction</a></li>
              <li><a href="#method-section" className="text-slate-500 hover:text-blue-400 text-xs font-bold transition-colors uppercase tracking-wider">La Méthode</a></li>
              <li><a href="#offer-section" className="text-slate-500 hover:text-blue-400 text-xs font-bold transition-colors uppercase tracking-wider">Accès Immédiat</a></li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-400 text-xs font-bold transition-colors uppercase tracking-wider">Conditions de Vente</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-400 text-xs font-bold transition-colors uppercase tracking-wider">Confidentialité</a></li>
              <li className="flex items-center gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">100% Sécurisé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-slate-500">
              <Globe className="w-3 h-3" />
              <span>SERVER_REGION: GLOBAL_EDGE</span>
            </div>
            <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">
              © {currentYear} C.A.C.H.E.R. - TOUS DROITS RÉSERVÉS
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Système Opérationnel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};