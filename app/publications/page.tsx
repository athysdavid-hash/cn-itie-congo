'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, FileText, Search, Calendar, CheckCircle2 } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  year: string;
  publication_date: string;
  file_size: string;
  file_url: string;
}

const reportsData: Report[] = [
  { id: '1', title: 'Rapport Souple ITIE-Congo 2022-2023', year: '2023', publication_date: 'Décembre 2023', file_size: '4.2 MB', file_url: '#' },
  { id: '2', title: 'Rapport ITIE-Congo 2021', year: '2021', publication_date: 'Novembre 2022', file_size: '8.5 MB', file_url: '#' },
  { id: '3', title: "Rapport d'Assainissement des Entreprises d'État", year: '2021', publication_date: 'Août 2022', file_size: '2.1 MB', file_url: '#' },
  { id: '4', title: 'Cadre Légal et Fiscalité des Hydrocarbures', year: '2020', publication_date: 'Juin 2021', file_size: '3.8 MB', file_url: '#' },
];

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = reportsData.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.year.includes(searchTerm)
  );

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <section className="bg-emerald-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Rapports & Documents</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Consultez et téléchargez l'ensemble des rapports officiels de transparence publiés par le CN-ITIE Congo.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs bg-emerald-800 px-3 py-1 rounded-full text-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Catalogue officiel chargé avec succès</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full">
        {/* Barre de recherche */}
        <div className="mb-8 relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un rapport par titre ou année..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white shadow-sm text-slate-800"
          />
        </div>

        {/* Liste des rapports */}
        {filteredReports.length === 0 ? (
          <p className="text-center text-slate-500 py-12">Aucun rapport trouvé.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full w-fit mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Année : {report.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <FileText className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    {report.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Publié en {report.publication_date} • Taille : {report.file_size}
                  </p>
                </div>

                <a
                  href={report.file_url}
                  download
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-4 py-2 rounded-lg text-sm transition"
                >
                  <Download className="w-4 h-4" />
                  Télécharger le document
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}