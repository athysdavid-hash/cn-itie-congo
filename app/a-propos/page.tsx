'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Users, Target, Building2, Award, Landmark, Factory } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* En-tête de la page */}
      <section className="bg-emerald-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">À propos du CN-ITIE Congo</h1>
          <p className="text-emerald-100 max-w-3xl mx-auto text-base md:text-lg">
            Comité National de l'Initiative pour la Transparence dans les Industries Extractives de la République du Congo.
          </p>
        </div>
      </section>

      {/* Section Mission & Présentation Officielle */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-emerald-700 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Notre Mission
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-6">
              Promouvoir la transparence et la bonne gouvernance des ressources naturelles
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Le Comité National de l’Initiative pour la Transparence dans les Industries Extractives (CN-ITIE Congo) œuvre pour une gestion transparente et responsable des ressources naturelles de la République du Congo.
              </p>
              <p>
                À travers la publication des paiements effectués par les entreprises extractives et des revenus perçus par l’État, notamment dans les secteurs pétrolier, minier et gazier, le CN-ITIE contribue au renforcement de la redevabilité publique, à l’amélioration de la gouvernance et à la promotion d’un débat public éclairé sur la gestion des ressources naturelles.
              </p>
              <p className="font-medium text-slate-800">
                Basé à Brazzaville, à l’Immeuble de l’ARC Bleu, 7ᵉ étage, le CN-ITIE Congo inscrit son action dans le cadre de la Norme ITIE, un référentiel international qui promeut la transparence et la bonne gouvernance dans les industries extractives.
              </p>
            </div>
          </div>

          {/* Cartes de valeurs */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Transparence des revenus</h3>
                <p className="text-sm text-slate-600">Publication des paiements effectués par les entreprises et des recettes perçues par l'État.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Redevabilité Publique</h3>
                <p className="text-sm text-slate-600">Renforcement de l'éthique, de la redevabilité et du débat public éclairé.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Norme Internationale</h3>
                <p className="text-sm text-slate-600">Mise en œuvre rigoureuse des exigences de la Norme ITIE en République du Congo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Gouvernance Tripartite */}
      <section className="bg-slate-100 py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-700 font-semibold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Gouvernance
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-4">
              Le Modèle Tripartite
            </h2>
            <p className="text-slate-600 text-sm">
              Le CN-ITIE Congo fonctionne selon le principe inclusif de la collégialité tripartite, associant étroitement trois parties prenantes clés :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Le Gouvernement */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">Le Gouvernement</h3>
              <p className="text-slate-600 text-xs mb-4 text-center font-medium">
                Représenté par les 5 ministères clés sectoriels :
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mt-auto">
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Landmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ministère des Finances, du Budget et du Portefeuille Public</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Landmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ministère des Hydrocarbures</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Landmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ministère des Mines et de la Géologie</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Landmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ministère de l’Environnement et du Développement Durable</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Landmark className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ministère de l’Économie Forestière</span>
                </li>
              </ul>
            </div>

            {/* Les Entreprises Extractives */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shrink-0">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">Les Entreprises Extractives</h3>
              <p className="text-slate-600 text-xs mb-4 text-center font-medium">
                Sociétés pétrolières, gazières, minières et forestières :
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mt-auto">
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SNPC</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>TOTAL EP CONGO</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>PERENCO</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>WING WAH</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SOREMI</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>CONGO MINING</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>SICOFOR</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>TAMAN INDUSTRIE SARL</span>
                </li>
              </ul>
            </div>

            {/* La Société Civile */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">La Société Civile</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Les associations et organisations non gouvernementales indépendantes veillant au contrôle citoyen, à la protection de l'environnement et à la défense de l'intérêt général.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}