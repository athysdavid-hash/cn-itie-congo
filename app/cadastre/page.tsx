'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Layers, 
  Search, 
  Building2, 
  MapPin, 
  Calendar, 
  Download, 
  CheckCircle2,
  FileText
} from 'lucide-react';

interface Concession {
  id: string;
  name: string;
  sector: 'petrole' | 'mines' | 'foret';
  status: string;
  operator: string;
  substance: string;
  surface: string;
  region: string;
  grantDate: string;
  expiryDate: string;
  contractUrl: string;
}

const mockData: Concession[] = [
  {
    id: 'M-01',
    name: 'Permis Mayoko-Moussondji',
    sector: 'mines',
    status: 'exploration',
    operator: 'Sapro Mayoko / Congo Mining',
    substance: 'Minerai de Fer',
    surface: '850 km²',
    region: 'Niari',
    grantDate: '2014-06-12',
    expiryDate: '2029-06-12',
    contractUrl: '#'
  },
  {
    id: 'P-02',
    name: 'Bloc Marine XII',
    sector: 'petrole',
    status: 'production',
    operator: 'Eni Congo',
    substance: 'Pétrole Brut & Gaz Naturel (GNL)',
    surface: '580 km²',
    region: 'Kouilou (Offshore)',
    grantDate: '2008-04-18',
    expiryDate: '2033-04-18',
    contractUrl: '#'
  },
  {
    id: 'F-03',
    name: 'UFA Kabo (Concession Forestière)',
    sector: 'foret',
    status: 'production',
    operator: 'IFO (Interholco)',
    substance: 'Bois d\'œuvre (Sapelli, Sipo, Ayous)',
    surface: '2 670 km²',
    region: 'Sangha',
    grantDate: '2006-11-03',
    expiryDate: '2031-11-03',
    contractUrl: '#'
  }
];

export default function CadastrePage() {
  const [selected, setSelected] = useState<Concession>(mockData[0]);
  const [sectorFilter, setSectorFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filtered = mockData.filter((item) => {
    const matchSector = sectorFilter === 'all' || item.sector === sectorFilter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                        item.operator.toLowerCase().includes(search.toLowerCase()) ||
                        item.region.toLowerCase().includes(search.toLowerCase());
    return matchSector && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
      <Header />

      <div className="bg-slate-900 border-b border-slate-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1 uppercase tracking-wider">
              <Layers className="w-4 h-4" /> Cadastre Extractif Officiel
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Répertoire National des Concessions & Permis
            </h1>
          </div>
          <div className="text-sm text-slate-400">
            {filtered.length} concession(s) répertoriée(s)
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto w-full px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Colonne de Gauche : Filtres & Liste */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un permis, opérateur, région..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 text-sm text-slate-200 pl-9 pr-3 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'petrole', label: '🛢️ Pétrole' },
              { id: 'mines', label: '⛏️ Mines' },
              { id: 'foret', label: '🌲 Forêts' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSectorFilter(s.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all whitespace-nowrap ${
                  sectorFilter === s.id
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/30'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="space-y-3 mt-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selected?.id === item.id
                    ? 'bg-slate-900 border-emerald-500 shadow-xl ring-1 ring-emerald-500/50'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    item.sector === 'petrole' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    item.sector === 'mines' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {item.sector.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-400">{item.surface}</span>
                </div>
                <h3 className="text-base font-bold text-slate-100">{item.name}</h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" /> {item.operator}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne de Droite : Fiche détaillée dynamique */}
        <div className="lg:col-span-7">
          {selected ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-3">
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block ${
                    selected.sector === 'petrole' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    selected.sector === 'mines' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    Secteur {selected.sector.toUpperCase()}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2">{selected.name}</h2>
                </div>
                <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Statut : {selected.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-400 block mb-1">Société / Opérateur</span>
                  <p className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400 shrink-0" /> <span>{selected.operator}</span>
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-400 block mb-1">Région / Localisation</span>
                  <p className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" /> <span>{selected.region}</span>
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-400 block mb-1">Substance exploitée</span>
                  <p className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400 shrink-0" /> <span>{selected.substance}</span>
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <span className="text-xs text-slate-400 block mb-1">Date d'expiration</span>
                  <p className="font-semibold text-emerald-400 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" /> <span>{selected.expiryDate}</span>
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={selected.contractUrl}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-900/20"
                >
                  <Download className="w-4 h-4" /> Télécharger la convention officielle
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
              Sélectionnez une concession dans la liste pour afficher ses détails.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}