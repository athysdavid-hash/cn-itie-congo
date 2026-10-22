import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* 1. Topbar supérieure */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-700 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold tracking-wide text-slate-800">
            <span>RÉPUBLIQUE DU CONGO</span>
            <span className="text-base leading-none">🇨🇬</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/medias" className="hover:text-emerald-600 transition-colors">
              Espace médias
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/faq" className="hover:text-emerald-600 transition-colors font-medium">
              FAQ
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/contact" className="hover:text-emerald-600 transition-colors">
              Contacts
            </Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 hover:text-emerald-600 cursor-pointer transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              <span>Réseaux</span>
            </div>
            <button aria-label="Rechercher" className="text-slate-600 hover:text-emerald-600 transition-colors ml-1">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Barre de navigation principale avec Logo et "Accueil" */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Logo ITIE Congo" width={45} height={45} />
          <div>
            <span className="font-extrabold text-slate-900 text-lg block leading-tight">ITIE CONGO</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Initiative pour la Transparence dans les Industries Extractives</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 transition-colors">
            Accueil
          </Link>
          <Link href="/a-propos" className="hover:text-emerald-600 transition-colors">
            À propos
          </Link>
          <Link href="/donnees" className="hover:text-emerald-600 transition-colors">
            Données
          </Link>
          <Link href="/cadastre" className="hover:text-emerald-600 transition-colors">
            Cadastre
          </Link>
          <Link href="/publications" className="hover:text-emerald-600 transition-colors">
            Publications
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}