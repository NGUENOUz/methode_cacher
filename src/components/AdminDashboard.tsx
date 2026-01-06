import { Users, Clock, Globe, ArrowUpRight, MousePointer2, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminDashboard = () => {
  // Données simulées (que tu recevras de ton outil analytics)
  const stats = [
    { label: 'Visiteurs uniques', value: '1,284', icon: Users, trend: '+12.5%' },
    { label: 'Temps moyen', value: '2m 45s', icon: Clock, trend: '+0.4s' },
    { label: 'Taux de clic CTA', value: '18.2%', icon: MousePointer2, trend: '+2.1%' },
    { label: 'Conversions (8$)', value: '42', icon: BarChart3, trend: '+5' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DASHBOARD */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">Analytics_Studio</h1>
            <p className="text-slate-500 font-medium">Suivi des performances en temps réel — Méthode C.A.C.H.E.R.</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-600">Live_Tracking_Active</span>
          </div>
        </div>

        {/* GRILLE DES STATS PRINCIPALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-emerald-500 text-xs font-black bg-emerald-50 px-2 py-1 rounded-lg">{stat.trend}</span>
              </div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black italic text-slate-900 tracking-tighter">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* DEUXIÈME SECTION : PAYS & HEURES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* TOP PAYS */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-xl font-black italic uppercase mb-8 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" /> Top_Géographies
            </h3>
            <div className="space-y-6">
              {[
                { country: 'France', code: 'FR', percent: 45 },
                { country: 'Côte d\'Ivoire', code: 'CI', percent: 22 },
                { country: 'Sénégal', code: 'SN', percent: 15 },
                { country: 'Cameroun', code: 'CM', percent: 10 },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-black uppercase italic tracking-wider">
                    <span>{item.country}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-slate-900"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HEURES D'AFFLUENCE (SIMULÉ) */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
            <h3 className="text-xl font-black italic uppercase mb-8">Heures_D_Abondance</h3>
            <div className="flex items-end justify-between h-48 gap-2">
              {[40, 70, 45, 90, 65, 30, 85, 100, 50, 75, 60, 40].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="w-full bg-blue-500/40 hover:bg-blue-500 rounded-t-lg transition-colors cursor-pointer relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[9px] font-black py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                    </div>
                  </motion.div>
                  <span className="text-[8px] font-black opacity-40">{i*2}h</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};