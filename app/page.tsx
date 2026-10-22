import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Domains from '../components/Domains';
import NewsAndReports from '../components/NewsAndReports';
import Footer from '../components/Footer';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Stats />
      <Domains />

      {/* Bloc d'accès rapide vers le Cadastre Interactif */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
              <MapPin className="w-4 h-4" />
              <span>SIG & Système Foncier Extractif</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Cadastre Extractif & Concessions ITIE
            </h2>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              Explorez la cartographie officielle des permis miniers, blocs pétroliers et concessions forestières de la République du Congo. Consultez les opérateurs, les statuts et les contrats en toute transparence.
            </p>
          </div>
          <div>
            <Link
              href="/cadastre"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg transition-colors text-sm whitespace-nowrap"
            >
              Lancer la carte interactive <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <NewsAndReports />
      <Footer />
    </main>
  );
}