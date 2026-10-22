import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Promouvoir la transparence pour une gestion durable des ressources naturelles
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            L&apos;ITIE Congo rassemble le gouvernement, les entreprises et la société civile pour plus de transparence et de redevabilité dans la gestion des revenus extractifs.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-md"
            >
              EN SAVOIR PLUS
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 border border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              DÉCOUVRIR L&apos;ITIE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}