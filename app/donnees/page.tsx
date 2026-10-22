'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Database, Download, FileSpreadsheet, Search, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const datasets = [
  {
    id: '1',
    title: 'Paiements des entreprises extractives (2020-2022)',
    category: 'Finances',
    format: 'CSV / XLSX',
    size: '2.4 Mo',
    date: '2024-03-15',
    description: 'Revenus déclarés par les sociétés pétrolières, minières et forestières payés à l’État congolais.'
  },
  {
    id: '2',
    title: 'Production et exportation de pétrole brut',
    category: 'Hydrocarbures',
    format: 'XLSX',
    size: '1.1 Mo',
    date: '2024-02-10',
    description: 'Volume annuel produit et part attribuée à la Société Nationale des Pétroles du Congo (SNPC).'
  },
  {
    id: '3',
    title: 'Octroi des permis miniers et forestiers',
    category: 'Mines & Forêts',
    format: 'PDF / CSV',
    size: '3.8 Mo',
    date: '2023-11-20',
    description: 'Registre des concessions, propriétaires effectifs et dates de validité des titres extractifs.'
  },
  {
    id: '4',
    title: 'Transferts sociaux et environnementaux',
    category: 'Social',
    format: 'XLSX',
    size: '850 Ko',
    date: '2023-09-05',
    description: 'Paiements directs et contributions locales réalisés par les entreprises extractives dans les départements.'
  }
];

export default function DonneesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDatasets = datasets.filter(data => 
    data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Hero Banner */}
      <section className="bg-emerald-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 px-3 py-1.5 rounded-full text-emerald-200 text-xs font-semibold mb-4">
            <Database className="w-4 h-4" />
            <span>PORTAIL OPEN DATA ITIE CONGO</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Données Ouvertes Extractives</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base md:text-lg">
            Accédez aux jeux de données officiels sur la production, les revenus, les octrois de licences et la contribution du secteur au Congo.
          </p>
        </div>
      </section>

      {/* Statistiques Rapides */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Transparence Budgétaire</p>
              <p className="text-lg font-bold text-slate-900">100% Des Revenus Tracez</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Secteurs Couverts</p>
              <p className="text-lg font-bold text-slate-900">Pétrole, Mines, Forêt</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700">
              <PieChart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Format Téléchargeable</p>
              <p className="text-lg font-bold text-slate-900">Excel / CSV / Open Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue des Données */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Jeux de Données Disponibles</h2>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher un fichier de données..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800 text-sm"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredDatasets.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-200 transition flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-slate-500 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 max-w-2xl">{item.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {item.format} ({item.size})
                </span>
                <button className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition">
                  <Download className="w-4 h-4" />
                  <span>Télécharger</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}