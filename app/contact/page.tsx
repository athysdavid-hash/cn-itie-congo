'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contacts').insert([formData]);

      if (error) {
        throw error;
      }

      setStatus('success');
      setFormData({ full_name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('Erreur d\'envoi :', err);
      setStatus('error');
      setErrorMessage(err.message || "Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* En-tête de la page */}
      <section className="bg-emerald-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base md:text-lg">
            Vous avez une question, une demande d'information ou un partenariat ? Écrivez-nous ou rendez-nous visite.
          </p>
        </div>
      </section>

      {/* Section Principale */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coordonnées */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Nos Coordonnées</h2>
              <p className="text-sm text-slate-600">
                Le Secrétariat Permanent du CN-ITIE Congo est à votre disposition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Siège Social</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Avenue Amilcar Cabral<br />
                    Immeuble de l'ARC bleu, 7ᵉ étage<br />
                    Brazzaville, République du Congo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Adresse Email</h3>
                  <a href="mailto:itiecg1@gmail.com" className="text-xs text-emerald-700 hover:underline font-medium">
                    itiecg1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-700 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Téléphone</h3>
                  <a href="tel:+242066766444" className="text-xs text-slate-600 hover:text-emerald-700 font-medium">
                    +242 066 766 444
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-sm font-medium">
                  Votre message a été envoyé avec succès ! Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom et prénom"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre.email@exemple.cg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Sujet du message
                </label>
                <input
                  type="text"
                  placeholder="Objet de votre demande"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Rédigez votre message ici..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition disabled:opacity-50"
              >
                {loading ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}