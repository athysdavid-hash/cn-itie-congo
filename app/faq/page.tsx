'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { ChevronDown, HelpCircle, Search, Mail } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "Qu'est-ce que l'ITIE Congo ?",
      answer: "L'Initiative pour la Transparence dans les Industries Extractives (ITIE) Congo est une norme internationale visant à promouvoir une gestion transparente et redevable des ressources pétrolières, minières et forestières du pays."
    },
    {
      question: "Quels sont les secteurs couverts par l'ITIE Congo ?",
      answer: "L'ITIE Congo couvre l'ensemble du secteur extractif et des ressources naturelles du pays, notamment le secteur pétrolier et gazier, le secteur minier ainsi que le secteur forestier."
    },
    {
      question: "Qui compose le Comité National de l'ITIE Congo ?",
      answer: "Le Comité National est une structure tripartite (multi-parties prenantes) composée de représentants du Gouvernement, des Entreprises extractives et de la Société Civile."
    },
    {
      question: "Où puis-je consulter les rapports ITIE de la République du Congo ?",
      answer: "Tous les rapports ITIE publiés depuis l'adhésion du Congo en 2004 sont gratuitement téléchargeables dans la section 'Publications' de ce portall."
    },
    {
      question: "À quelle fréquence les rapports ITIE sont-ils publiés ?",
      answer: "Les rapports ITIE sont publiés sur une base annuelle. Ils rapprochent les données des paiements effectués par les entreprises et des recettes perçues par l'État."
    },
    {
      question: "Comment la société civile participe-t-elle à la démarche ITIE ?",
      answer: "La société civile dispose de représentants au sein du Collège triparti. Elle participe aux décisions, au suivi des recommandations et aux ateliers de vulgarisation auprès des populations locales."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* En-tête */}
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Foire Aux Questions (FAQ)</h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Retrouvez les réponses aux questions les plus fréquentes sur le fonctionnement, les rapports et l'impact de l'ITIE en République du Congo.
          </p>

          {/* Barre de recherche dans la FAQ */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher une question ou un terme..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Accordéon FAQ */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-base md:text-lg flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500">Aucune question ne correspond à votre recherche.</p>
            </div>
          )}
        </div>

        {/* Bloc d'aide si la réponse n'est pas trouvée */}
        <div className="mt-12 bg-emerald-900 text-white rounded-2xl p-8 text-center shadow-md">
          <h3 className="text-xl font-bold">Vous n'avez pas trouvé réponse à votre question ?</h3>
          <p className="text-emerald-100 text-sm mt-2 max-w-xl mx-auto">
            Notre équipe se tient à votre disposition pour vous fournir toutes les informations complémentaires nécessaires.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-md"
          >
            <Mail className="w-4 h-4" /> Poser une question directement
          </Link>
        </div>
      </div>
    </div>
  );
}