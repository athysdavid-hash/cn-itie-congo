import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Share2 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Bannière Call To Action (CTA) */}
      <div className="bg-sky-900 border-b border-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-sky-800/80 rounded-2xl text-sky-300 hidden sm:block shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Ensemble pour plus de transparence
                </h3>
                <p className="text-sky-100 text-sm mt-1">
                  Vous êtes une entreprise, un journaliste, un chercheur ou un citoyen ? Accédez aux données et participez au changement.
                </p>
              </div>
            </div>

            <Link 
              href="#" 
              className="inline-flex items-center gap-2 bg-white text-sky-900 font-bold px-6 py-3 rounded-lg hover:bg-sky-50 transition shrink-0 text-sm shadow-md"
            >
              ACCÉDER AUX DONNÉES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Pied de page principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Colonne 1 : À propos & Logo */}
          <div className="space-y-4">
            <div className="relative w-48 h-12 bg-white/10 p-2 rounded-lg">
              <Image 
                src="/images/logo.png" 
                alt="Logo CN-ITIE Congo" 
                fill 
                className="object-contain object-left p-1"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Le Comité National ITIE Congo promeut la transparence, la redevabilité et la bonne gouvernance dans le secteur extractif.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="hover:text-sky-400 transition flex items-center gap-1 text-xs">
                <Share2 className="w-4 h-4" />
                <span>Réseaux sociaux</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2">
              LIENS RAPIDES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-sky-400 transition">Accueil</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">À propos</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">ITIE en Congo</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Publications</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Données</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Médias</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Ressources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2">
              RESSOURCES
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="#" className="hover:text-sky-400 transition">Rapports ITIE</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Données ouvertes</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Documents clés</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition">Glossaire</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2">
              CONTACT
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>Immeuble Cheick Tower<br />3e étage, Centre-ville<br />Brazzaville, République du Congo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                <span>+242 06 665 48 65</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <span>contact@itie.cg</span>
              </div>
            </div>
          </div>

        </div>

        {/* Droits d'auteur & Mentions Légales */}
        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Comité National ITIE Congo. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-400 transition">Mentions légales</Link>
            <Link href="#" className="hover:text-slate-400 transition">Politique de confidentialité</Link>
            <Link href="#" className="hover:text-slate-400 transition">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}