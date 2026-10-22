import React from 'react';
import Link from 'next/link';
import { Share2, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full">
      {/* Topbar supérieure */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-700 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Nom du pays + Drapeau officiel du Congo (CG) */}
          <div className="flex items-center gap-2 font-bold tracking-wide text-slate-800">
            <span>RÉPUBLIQUE DU CONGO</span>
            {/* Emoji drapeau officiel Congo Brazzaville (🇨🇬) */}
            <span className="text-base leading-none">🇨🇬</span>
          </div>

          {/* Liens de droite : Espace médias, FAQ, Contacts, Réseaux */}
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

            {/* Menu Réseaux sociaux */}
            <div className="flex items-center gap-1.5 hover:text-emerald-600 cursor-pointer transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              <span>Réseaux</span>
            </div>

            {/* Bouton Recherche */}
            <button aria-label="Rechercher" className="text-slate-600 hover:text-emerald-600 transition-colors ml-1">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Reste du Header (Logo, Menu principal, etc.) */}
      {/* ... */}
    </header>
  );
}