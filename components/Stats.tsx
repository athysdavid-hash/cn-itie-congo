import { Users, Calendar, FileText, ShieldCheck } from 'lucide-react';

export default function Stats() {
  return (
    <section className="bg-slate-950 text-white border-b border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 py-8">
        {/* Carte 1 */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">3 Collèges</h3>
            <p className="text-xs text-slate-400 mt-1">Gouvernement, Entreprises, Société civile</p>
          </div>
        </div>

        {/* Carte 2 : Date d'adhésion */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">10 Juin 2004</h3>
            <p className="text-xs text-slate-400 mt-1">Date d'adhésion du Congo à l'ITIE</p>
          </div>
        </div>

        {/* Carte 3 : Nombre de rapports */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">16 Rapports ITIE</h3>
            <p className="text-xs text-slate-400 mt-1">Publiés et accessibles au public</p>
          </div>
        </div>

        {/* Carte 4 */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Transparence</h3>
            <p className="text-xs text-slate-400 mt-1">Redevabilité et bonne gouvernance</p>
          </div>
        </div>
      </div>
    </section>
  );
}