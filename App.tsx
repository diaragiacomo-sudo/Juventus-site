import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCenter from './components/MatchCenter';
import Squad from './components/Squad';
import Trophies from './components/Trophies';
import NewsSection from './components/NewsSection';
import Shop from './components/Shop';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { LeftSidebar, RightSidebar } from './components/Sidebars';
import { HistoryPage, StadiumPage, MembershipPage, MuseumPage } from './components/SubPages';
import { NewsItem } from './types';

// Define the expanded view type
type ViewType = 'home' | 'admin' | 'history' | 'stadium' | 'membership' | 'museum';

const INITIAL_ARTICLES: NewsItem[] = [
    {
        id: 1,
        title: "Vlahovic: 'Vogliamo tutto'",
        summary: "Il bomber serbo suona la carica in vista del big match: 'Siamo la Juve, non esistono limiti. Lavoriamo duro ogni giorno per regalare gioie ai nostri tifosi'.",
        category: "Prima Squadra",
        date: "25/05/2024",
        imageUrl: "https://picsum.photos/600/400?random=20"
    },
    {
        id: 2,
        title: "Continassa, report allenamento",
        summary: "Doppia seduta oggi al JTC. Lavoro tattico al mattino e partitella a campo ridotto nel pomeriggio. Rientrati in gruppo tutti i nazionali.",
        category: "Club",
        date: "24/05/2024",
        imageUrl: "https://picsum.photos/600/400?random=21"
    },
    {
        id: 3,
        title: "Next Gen, che rimonta!",
        summary: "I ragazzi di Montero ribaltano il risultato nel finale grazie a una doppietta spettacolare di Yildiz. Tre punti fondamentali per la classifica.",
        category: "Settore Giovanile",
        date: "23/05/2024",
        imageUrl: "https://picsum.photos/600/400?random=22"
    }
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [articles, setArticles] = useState<NewsItem[]>(INITIAL_ARTICLES);

  const navigateHome = () => setView('home');

  if (view === 'admin') {
      return (
          <AdminDashboard 
            articles={articles} 
            setArticles={setArticles} 
            onClose={navigateHome} 
          />
      );
  }

  // Render the specific content based on view state
  const renderContent = () => {
    switch (view) {
      case 'history': return <HistoryPage onBack={navigateHome} />;
      case 'stadium': return <StadiumPage onBack={navigateHome} />;
      case 'membership': return <MembershipPage onBack={navigateHome} />;
      case 'museum': return <MuseumPage onBack={navigateHome} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <MatchCenter />
            <NewsSection articles={articles} />
            <Squad />
            <Trophies />
            <Shop />
            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-white">
                    <img src="https://picsum.photos/1920/600?grayscale&blur=4" className="w-full h-full object-cover opacity-20" alt="bg"/>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6 uppercase">Entra nella Famiglia</h2>
                    <p className="text-gray-600 mb-8 text-lg">Iscriviti alla newsletter per ricevere aggiornamenti esclusivi, analisi delle partite e offerte sullo store.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input type="email" placeholder="La tua email" className="w-full px-6 py-4 bg-gray-100 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-juve-gold" />
                        <button className="bg-black text-white px-8 py-4 font-bold uppercase hover:bg-juve-gold hover:text-black transition-colors">Iscriviti</button>
                    </div>
                </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-juve-gold selection:text-black flex flex-col">
      <Navbar />
      
      {/* Main Layout Container with Sidebars */}
      <div className="flex pt-20">
        
        {/* Left Sidebar - Hidden on smaller screens */}
        <LeftSidebar onNavigate={(v) => setView(v as ViewType)} currentView={view} />
        
        {/* Main Content Area */}
        {/* Padding matches sidebar width on large screens to avoid overlap if using fixed sidebars, 
            or use flex-1 if sidebars are sticky/relative. 
            Here we use margins to accommodate the fixed sidebars on XL screens.
        */}
        <main className="flex-1 min-w-0 transition-all duration-300 xl:mx-20 2xl:mx-64">
           {renderContent()}
        </main>

        {/* Right Sidebar - Hidden on smaller screens */}
        <RightSidebar onNavigate={(v) => setView(v as ViewType)} currentView={view} />

      </div>

      <Footer onAdminClick={() => setView('admin')} />
    </div>
  );
};

export default App;