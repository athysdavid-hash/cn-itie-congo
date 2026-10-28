import React from 'react';
import { Users, FileText, Calendar, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '3 Collèges',
    label: 'Gouvernement, Entreprises, Société civile',
  },
  {
    icon: Calendar,
    value: 'Depuis 2004',
    label: 'Le Congo est pays membre de l\'ITIE',
  },
  {
    icon: FileText,
    value: '16 Rapports ITIE',
    label: 'Publiés et accessibles au public',
  },
  {
    icon: ShieldCheck,
    value: 'Transparence',
    label: 'Norme internationale de bonne gouvernance',
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 border-t border-slate-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}