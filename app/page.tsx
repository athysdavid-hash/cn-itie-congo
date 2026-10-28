import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Domains from '../components/Domains';
import InteractiveMap from '../components/InteractiveMap';
import NewsAndReports from '../components/NewsAndReports';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Stats />
      <Domains />

      {/* Carte interactive du Cadastre Extractif intégrée directement */}
      <InteractiveMap />

      <NewsAndReports />
      <Footer />
    </main>
  );
}