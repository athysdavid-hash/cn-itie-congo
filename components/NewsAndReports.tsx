'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Download, FileText } from 'lucide-react';

const latestNews = [
  {
    id: '1',
    title: 'Atelier de validation du 13e Rapport ITIE Congo',
    date: '24 MAI 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Rencontre du Comité National ITIE Congo',
    date: '12 AVRIL 2024',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Publication du Rapport ITIE Congo 2022',
    date: '28 MARS 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  },
];

const latestReports = [
  { title: 'Rapport ITIE Congo 2022', size: 'PDF - 6.4 Mo' },
  { title: 'Rapport ITIE Congo 2020', size: 'PDF - 5.7 Mo' },
  { title: 'Rapport ITIE Congo 2018', size: 'PDF - 4.8 Mo' },
];

export default function NewsAndReports() {
  return (
    <section className="py-16 bg-white px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Bloc Actualités (2 colonnes) */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Actualités</h2>
              <Link 
                href="/actualites" 
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 uppercase tracking-wider"
              >
                Toutes les actualités <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {latestNews.map((news) => (
                <div key={news.id} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="h-36 w-full overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 mb-2">
                        <Calendar className="w-3 h-3 text-sky-600" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-800 group-hover:text-sky-600 transition line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link href="/actualites" className="text-[11px] font-semibold text-sky-600 flex items-center gap-1">
                      Lire la suite <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc Dernières publications (1 colonne) */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Dernières publications</h2>
              <Link 
                href="/publications" 
                className="text-xs font-bold text-sky-600 hover:text-sky-700 uppercase tracking-wider"
              >
                Voir plus
              </Link>
            </div>

            <div className="space-y-4">
              {latestReports.map((report, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:shadow-xs transition">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-50 p-2.5 rounded-lg text-red-600">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{report.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">{report.size}</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-emerald-700 p-2">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <Link 
              href="/publications"
              className="mt-6 w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center transition"
            >
              Tous les rapports ITIE Congo
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}