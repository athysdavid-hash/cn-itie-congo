'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Calendar, ArrowRight, Newspaper } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  published_date: string;
  image_url: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Atelier de validation du 13e Rapport ITIE Congo',
    slug: 'atelier-validation-13e-rapport',
    summary: 'Les parties prenantes du processus ITIE Congo se sont réunies à Brazzaville pour valider les données et recommandations du dernier rapport officiel.',
    published_date: '24 Mai 2024',
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    category: 'Rapports & Ateliers',
  },
  {
    id: '2',
    title: 'Rencontre du Comité National ITIE Congo',
    slug: 'rencontre-comite-national',
    summary: 'Examen des avancées sur l’intégration des données environnementales et forestières dans la gouvernance des industries extractives.',
    published_date: '12 Avril 2024',
    image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    category: 'Gouvernance',
  },
  {
    id: '3',
    title: 'Publication du Rapport Souple ITIE-Congo 2022-2023',
    slug: 'publication-rapport-souple',
    summary: 'Le Secrétariat Permanent met à disposition du public la synthèse actualisée des revenus pétroliers, miniers et forestiers.',
    published_date: '28 Mars 2024',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    category: 'Publications',
  },
];

export default function ActualitesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* En-tête de la page */}
      <section className="bg-emerald-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Actualités & Communiqués</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base md:text-lg">
            Suivez l'actualité de la transparence extractive, des réunions du Comité et des réformes en République du Congo.
          </p>
        </div>
      </section>

      {/* Section Principale */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex-grow w-full">
        {/* Barre de recherche */}
        <div className="mb-10 relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher une actualité..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white shadow-sm text-slate-800"
          />
        </div>

        {/* Grille des Actualités */}
        {filteredNews.length === 0 ? (
          <p className="text-center text-slate-500 py-12">Aucune actualité ne correspond à votre recherche.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition hover:scale-105 duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-emerald-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.published_date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}