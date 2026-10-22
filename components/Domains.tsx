import React from 'react';
import Link from 'next/link';
import { FileSearch, Users, Database, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';

export default function Domains() {
  const domains = [
    {
      icon: FileSearch,
      title: 'Transparence des revenus',
      desc: 'Publication des revenus perçus par l\'État et payés par les entreprises extractives.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: 'Participation multi-acteurs',
      desc: 'Dialogue et collaboration entre le gouvernement, les entreprises et la société civile.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: Database,
      title: 'Données ouvertes',
      desc: 'Mise à disposition des données fiables et accessibles à tous les citoyens.',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: ShieldCheck,
      title: 'Bonne gouvernance',
      desc: 'Renforcer la redevabilité et l\'intégrité dans la gestion des ressources naturelles.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Leaf,
      title: 'Développement durable',
      desc: 'Contribuer à une gestion responsable au bénéfice des générations futures.',
      color: 'bg-lime-100 text-lime-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Titre et description à gauche */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Nos domaines de travail
            </h2>
            <div className="w-12 h-1 bg-sky-600 rounded-full" />
            <p className="text-slate-600 leading-relaxed text-sm">
              L&apos;ITIE Congo œuvre pour la transparence et la bonne gouvernance dans le secteur extractif à travers les axes suivants :
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-3 transition-all pt-2"
            >
              DÉCOUVRIR TOUS LES DOMAINES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grille des 5 cartes à droite */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-base group-hover:text-sky-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}