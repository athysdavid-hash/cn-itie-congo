import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white min-h-[520px] flex items-center py-20 px-6 overflow-hidden">
      {/* Image de fond composite */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpeg')"
        }}
      />
      
      {/* Overlay beaucoup plus clair et subtil pour laisser voir le secteur minier */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/45 to-slate-950/20" />

      {/* Contenu textuel avec ombre portée renforcée pour la lisibilité */}
      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
            Promouvoir la transparence pour une gestion durable des ressources naturelles
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-sm">
            L'ITIE Congo rassemble le gouvernement, les entreprises et la société civile pour plus de transparence et de redevabilité dans la gestion des revenus extractifs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/a-propos"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-emerald-950/50 inline-flex items-center gap-2"
            >
              En savoir plus <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/publications"
              className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-600 font-semibold text-sm rounded-xl transition-colors inline-flex items-center gap-2 backdrop-blur-md shadow-md"
            >
              Découvrir l'ITIE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}