'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Inbox, Newspaper, LogOut, ShieldCheck, Mail } from 'lucide-react';

interface ContactMessage {
  id: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUserAndFetchData();
  }, []);

  const checkUserAndFetchData = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/admin/login');
      return;
    }

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Navbar Admin */}
      <header className="bg-emerald-900 text-white px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <span className="font-bold text-lg tracking-wide">CN-ITIE Admin Panel</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-xs font-semibold bg-emerald-800 hover:bg-emerald-700 px-3 py-2 rounded-lg transition cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </button>
      </header>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto w-full px-6 py-8 flex-grow">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Tableau de bord</h1>

        {/* Cartes Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700">
                <Inbox className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Messages reçus</p>
                <p className="text-2xl font-bold text-slate-900">{messages.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700">
                <Newspaper className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Gestion Actualités</p>
                <p className="text-sm font-semibold text-emerald-700">Module prêt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des Messages de Contact */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-700" />
              Derniers messages reçus
            </h2>
          </div>

          {loading ? (
            <p className="text-xs text-slate-500 py-4">Chargement des messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-xs text-slate-500 py-4">Aucun message reçu pour le moment.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{msg.full_name}</h3>
                      <p className="text-xs text-emerald-700 font-medium">{msg.email}</p>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {new Date(msg.created_at).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  {msg.subject && (
                    <p className="text-xs font-semibold text-slate-700">Sujet : {msg.subject}</p>
                  )}
                  <p className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}