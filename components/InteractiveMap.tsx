'use client';

import React, { useState } from 'react';
import { MapPin, Layers, Compass, ExternalLink } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  sector: 'Pétrole' | 'Mines' | 'Forêt';
  region: string;
  status: string;
  operator: string;
  coordinates: { top: string; left: string }; // Position visuelle sur la carte
}

const zonesData: Zone[] = [
  {
    id: '1',
    name: 'Champs Off-shore Pointe-Noire',
    sector: 'Pétrole',
    region: 'Kouilou / Pointe-Noire',
    status: 'En exploitation',
    operator: 'TotalEnergies / Eni Congo',
    coordinates: { top: '82%', left: '18%' },
  },
  {
    id: '2',
    name: 'Gisement de Fer de Mayoko',
    sector: 'Mines',
    region: 'Niari',
    status: 'Permis d\'exploitation',
    operator: 'Sapro Mayoko',
    coordinates: { top: '68%', left: '28%' },
  },
  {
    id: '3',
    name: 'Concession Forestière Pokola',
    sector: 'Forêt',
    region: 'Sangha',
    status: 'Gestion durable (FSC)',
    operator: 'CIB-Olam',
    coordinates: { top: '25%', left: '60%' },
  },
  {
    id: '4',
    name: 'Gisement de Potasse du Kouilou',
    sector: 'Mines',
    region: 'Kouilou',
    status: 'Développement',
    operator: 'Kore Potash',
    coordinates: { top: '78%', left: '22%' },
  },
  {
    id: '5',
    name: 'Bloc Forestier de Likouala',
    sector: 'Forêt',
    region: 'Likouala',
    status: 'Concession attribuée',
    operator: 'Société Forestière de la Likouala',
    coordinates: { top: '18%', left: '75%' },
  },
];

export default function InteractiveMap() {
  const [selectedZone, setSelectedZone] = useState<Zone>(zonesData[0]);
  const [filter, setFilter] = useState<string>('Tous');

  const filteredZones = filter === 'Tous' 
    ? zonesData 
    : zonesData.filter(z => z.sector === filter);

  const getBadgeColor = (sector: string) => {
    switch (sector) {
      case 'Pétrole': return 'bg-sky-500 text-white';
      case 'Mines': return 'bg-amber-500 text-white';
      case 'Forêt': return 'bg-emerald-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  return (
    <section className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Compass className="w-4 h-4" /> Cadastre Extractif Interactif
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Aperçu des Titres & Concessions</h2>
          </div>

          {/* Filtres par secteur */}
          <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl border border-slate-700 self-start md:self-auto">
            {['Tous', 'Pétrole', 'Mines', 'Forêt'].map((sec) => (
              <button
                key={sec}
                onClick={() => setFilter(sec)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === sec
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Carte + Panneau d'informations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Carte visuelle SVG du Congo */}
          <div className="lg:col-span-2 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 relative min-h-[380px] flex items-center justify-center overflow-hidden">
            
            {/* Arrière-plan graphique de carte */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Représentation schématique légère du Congo */}
            <div className="relative w-full max-w-md h-[340px] flex items-center justify-center">
              
              <div className="absolute text-slate-700 text-xs font-bold tracking-widest top-4 right-6 uppercase">
                République du Congo
              </div>

              {/* Points d'intérêt interactifs */}
              {filteredZones.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone)}
                    style={{ top: zone.coordinates.top, left: zone.coordinates.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                    }`}
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        zone.sector === 'Pétrole' ? 'bg-sky-400' : zone.sector === 'Mines' ? 'bg-amber-400' : 'bg-emerald-400'
                      }`} />
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-slate-900 ${
                        zone.sector === 'Pétrole' ? 'bg-sky-500' : zone.sector === 'Mines' ? 'bg-amber-500' : 'bg-emerald-500'
                      }`} />
                    </span>

                    {/* Infobulle au survol */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-slate-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-md border border-slate-700">
                      {zone.name}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Fiche d'information du point sélectionné */}
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${getBadgeColor(selectedZone.sector)}`}>
                  {selectedZone.sector}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {selectedZone.region}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{selectedZone.name}</h3>
              
              <div className="space-y-3 mt-6 text-sm">
                <div className="border-b border-slate-700/60 pb-2">
                  <span className="text-xs text-slate-400 block">Opérateur / Titulaire</span>
                  <span className="font-semibold text-slate-200">{selectedZone.operator}</span>
                </div>
                
                <div className="border-b border-slate-700/60 pb-2">
                  <span className="text-xs text-slate-400 block">Statut du permis</span>
                  <span className="font-semibold text-emerald-400">{selectedZone.status}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80">
              <a
                href="/cadastre"
                className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Accéder au cadastre complet <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}