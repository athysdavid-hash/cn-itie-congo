import React from 'react';
import Header from '@/components/Header';
import { FileText, Download, Mail, Phone, Calendar } from 'lucide-react';

export default function MediasPage() {
  const pressReleases = [
    {
      title: "Publication du 16ème Rapport ITIE de la République du Congo",
      date: "15 Septembre 2026",
      category: "Communiqué de presse",
      description: "Le Comité National de l'ITIE Congo a rendu public son 16ème rapport s'inscrivant dans la lignée des exigences de transparence et de bonne gouvernance des revenus extractifs."
    },
    {
      title: "Atelier de sensibilisation sur la redevabilité dans le secteur minier",
      date: "02 Août 2026",
      category: "Événement",
      description: "Renforcement des capacités des représentants de la société civile et des administrations publiques sur l'exploitation et la traçabilité des données."
    },
    {
      title: "Mise à jour du cadastre minier et forestier",
      date: "12 Juin 2026",
      category: "Ressource",
      description: "Consultation publique des données cartographiques et des attributions de permis dans le respect des standards internationaux."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* En-tête de la page */}
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Espace Médias</h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-base md:text-lg">
            Retrouvez ici tous les communiqués de presse, les actualités officielles, ainsi que les ressources et contacts dédiés aux journalistes.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Liste des communiqués / actualités (2 colonnes) */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Actualités et Communiqués</h2>
          
          {pressReleases.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between text-xs text-emerald-600 font-semibold mb-2">
                <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{item.category}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" /> {item.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-2">{item.title}</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Sidebar : Kit média & Contacts (1 colonne) */}
        <div className="space-y-8">
          
          {/* Bloc Kit Média */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-emerald-600" /> Kit Média & Logos
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Téléchargez les éléments graphiques officiels de l'ITIE Congo, les logos haute résolution et les visuels institutionnels.
            </p>
            <button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors text-center block">
              Télécharger le kit (ZIP)
            </button>
          </div>

          {/* Bloc Contact Presse */}
          <div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" /> Contact Presse
            </h3>
            <p className="text-sm text-emerald-100 mb-4">
              Pour toute demande d'interview, d'accréditation ou d'information complémentaire :
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-emerald-100">
                <Mail className="w-4 h-4 text-emerald-400" /> presse@itie-congo.org
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <Phone className="w-4 h-4 text-emerald-400" /> +242 XX XXX XXXX
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}