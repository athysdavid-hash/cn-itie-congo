import React from 'react';
import { Users, Calendar, FileText, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      title: '3 Collèges',
      desc: 'Gouvernement, Entreprises, Société civile'
    },
    {
      icon: Calendar,
      title: 'Depuis 2005',
      desc: 'Le Congo est pays membre de l\'ITIE'
    },
    {
      icon: FileText,
      title: '13 Rapports ITIE',
      desc: 'Publiés et accessibles au public'
    },
    {
      icon: ShieldCheck,
      title: 'Transparence',
      desc: 'Redevabilité et bonne gouvernance'
    }
  ];

  return (
    <section className="bg-sky-900 text-white border-b border-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 division-y sm:division-y-0">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-2">
                <div className="p-3 bg-sky-800/80 rounded-lg text-sky-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-sky-100 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}