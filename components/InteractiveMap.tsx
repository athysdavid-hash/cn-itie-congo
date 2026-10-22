'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Layers, 
  X, 
  Download, 
  MapPin, 
  Building2, 
  Calendar, 
  Filter
} from 'lucide-react';

interface Concession {
  id: string;
  name: string;
  sector: 'petrole' | 'mines' | 'foret';
  status: 'production' | 'exploration' | 'attr';
  operator: string;
  substance: string;
  surface: string;
  region: string;
  grantDate: string;
  expiryDate: string;
  contractUrl: string;
  reportUrl: string;
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
    contractUrl: '#',
    reportUrl: '#'
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
    contractUrl: '#',
    reportUrl: '#'
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
    contractUrl: '#',
    reportUrl: '#'
  }
];

export default function InteractiveMap() {
  const [selectedConcession, setSelectedConcession] = useState<Concession | null>(null);
  const [sectorFilter, setSectorFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredData = mockData.filter((item) => {
    const matchesSector = sectorFilter === 'all' || item.sector === sectorFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] flex overflow-hidden bg-slate-900 font-sans">
      {/* Barre de contrôle / Filtres à gauche */}
      <div className="w-80 bg-slate-900 border-r border-slate-800 p-4 flex flex-col z-10 text-white shadow-xl">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
            <Layers className="w-5 h-5" /> Cadastre ITIE Congo
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Cartographie des titres et concessions extractives.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher un permis, une société..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 text-sm text-slate-200 pl-9 pr-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Filtres par secteur */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Secteurs d'activité
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'petrole', label: '🛢️ Pétrole' },
              { id: 'mines', label: '⛏️ Mines' },
              { id: 'foret', label: '🌲 Forêts' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSectorFilter(s.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors text-left ${
                  sectorFilter === s.id
                    ? 'bg-emerald-600 border-emerald-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des concessions */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          <p className="text-xs text-slate-400 mb-1">
            {filteredData.length} zone(s) trouvée(s)
          </p>
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedConcession(item)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedConcession?.id === item.id
                  ? 'bg-slate-800 border-emerald-500 shadow-md'
                  : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  item.sector === 'petrole' ? 'bg-blue-500/20 text-blue-400' :
                  item.sector === 'mines' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {item.sector.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400">{item.surface}</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-100">{item.name}</h4>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-slate-500" /> {item.operator}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Zone d'affichage de la carte (Iframe fiable avec CDN direct) */}
      <div className="flex-1 relative bg-slate-950">
        <iframe
          title="Cartographie ITIE Congo"
          srcDoc={`
            <!DOCTYPE html>
            <html>
            <head>
              <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
              <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
              <style>
                body { margin: 0; padding: 0; background: #0f172a; }
                #map { width: 100vw; height: 100vh; }
              </style>
            </head>
            <body>
              <div id="map"></div>
              <script>
                var map = L.map('map').setView([-0.8, 15.2], 6);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '© OpenStreetMap & ITIE Congo'
                }).addTo(map);
              </script>
            </body>
            </html>
          `}
          className="w-full h-full border-none"
        />
      </div>

      {/* Panneau d'informations à droite */}
      {selectedConcession && (
        <div className="absolute top-4 right-4 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white rounded-xl shadow-2xl p-5 z-20 transition-all">
          <div className="flex items-start justify-between border-b border-slate-800 pb-3 mb-4">
            <div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                selectedConcession.sector === 'petrole' ? 'bg-blue-500/20 text-blue-400' :
                selectedConcession.sector === 'mines' ? 'bg-amber-500/20 text-amber-400' :
                'bg-emerald-500/20 text-emerald-400'
              }`}>
                {selectedConcession.sector.toUpperCase()}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">{selectedConcession.name}</h3>
            </div>
            <button
              onClick={() => setSelectedConcession(null)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400 flex items-center gap-1.5"><Building2 className="w-4 h-4" /> Opérateur :</span>
              <span className="font-semibold text-slate-200 text-right">{selectedConcession.operator}</span>
            </div>

            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Substance :</span>
              <span className="font-semibold text-slate-200">{selectedConcession.substance}</span>
            </div>

            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400 flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Région :</span>
              <span className="font-semibold text-slate-200">{selectedConcession.region}</span>
            </div>

            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400">Superficie :</span>
              <span className="font-semibold text-slate-200">{selectedConcession.surface}</span>
            </div>

            <div className="flex justify-between border-b border-slate-800/60 pb-2">
              <span className="text-slate-400 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Expiration :</span>
              <span className="font-semibold text-emerald-400">{selectedConcession.expiryDate}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <a
              href={selectedConcession.contractUrl}
              className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" /> Télécharger le contrat
            </a>
          </div>
        </div>
      )}
    </div>
  );
}