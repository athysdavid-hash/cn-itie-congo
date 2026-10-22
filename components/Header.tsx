'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Menu, X, Share2 } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Drapeau République du Congo */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">RÉPUBLIQUE DU CONGO</span>
            <div className="flex h-3 w-5 overflow-hidden rounded-xs border border-slate-200">
              <div className="w-1/3 bg-[#009543]"></div>
              <div className="w-1/3 bg-[#FBDE4A]"></div>
              <div className="w-1/3 bg-[#DC241F]"></div>
            </div>
          </div>

          {/* Liens secondaires & Réseaux sociaux */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-4 text-slate-600">
              <Link href="/actualites" className="hover:text-emerald-700 transition">Espace médias</Link>
              <span>|</span>
              <Link href="#" className="hover:text-emerald-700 transition">FAQ</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-emerald-700 transition">Contacts</Link>
            </nav>

            <div className="flex items-center gap-3 border-l border-slate-300 pl-4 text-slate-600">
              <a href="#" className="hover:text-emerald-700 flex items-center gap-1 font-medium">
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Réseaux</span>
              </a>
              <button className="ml-2 hover:text-emerald-700">
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-52 h-14">
            <Image 
              src="/images/logo.png" 
              alt="Logo CN-ITIE Congo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-emerald-700 transition">ACCUEIL</Link>
          <Link href="/a-propos" className="hover:text-emerald-700 transition">À PROPOS</Link>
          <Link href="/donnees" className="hover:text-emerald-700 transition">DONNÉES</Link>
          <Link href="/actualites" className="hover:text-emerald-700 transition">MÉDIAS</Link>
          <Link href="/contact" className="hover:text-emerald-700 transition">CONTACT</Link>
        </nav>

        {/* Bouton Mobile */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden p-2 text-slate-700 hover:text-emerald-700"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 font-semibold text-slate-700">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-700">ACCUEIL</Link>
          <Link href="/a-propos" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-700">À PROPOS</Link>
          <Link href="/donnees" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-700">DONNÉES</Link>
          <Link href="/actualites" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-700">MÉDIAS</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-700">CONTACT</Link>
        </div>
      )}
    </header>
  );
}