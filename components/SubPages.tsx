import React from 'react';
import { Trophy, MapPin, CreditCard, Crown, ArrowLeft } from 'lucide-react';

interface PageLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  onBack: () => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, image, children, icon, onBack }) => (
  <div className="bg-white min-h-screen animate-fade-in pb-20">
    {/* Header Image */}
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black to-transparent">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-juve-gold mb-4 uppercase text-sm font-bold tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Torna alla Home
        </button>
        <div className="flex items-center gap-4">
          <div className="text-juve-gold p-3 bg-black/50 rounded-full backdrop-blur-sm border border-white/20">
            {icon}
          </div>
          <div>
            <h3 className="text-juve-gold font-bold uppercase tracking-widest text-sm">{subtitle}</h3>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase">{title}</h1>
          </div>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none text-gray-700">
        {children}
      </div>
    </div>
  </div>
);

export const HistoryPage: React.FC<{onBack: () => void}> = ({onBack}) => (
  <PageLayout 
    title="La Nostra Storia" 
    subtitle="Dal 1897" 
    image="https://picsum.photos/1920/600?grayscale&blur=1&random=99"
    icon={<Crown className="w-8 h-8" />}
    onBack={onBack}
  >
    <p className="lead text-xl font-medium text-black mb-6 border-l-4 border-juve-gold pl-4">
      La storia della Juventus è la storia del calcio italiano. Un racconto fatto di passione, trionfi e di uno stile unico che ci distingue nel mondo.
    </p>
    <p className="mb-4">
      Tutto iniziò su una panchina di Corso Re Umberto, uno dei corsi nobili del centro di Torino. Lì si ritrovava un gruppo di liceali con la passione per il football, gioco che da poco era stato "importato" dall'Inghilterra. C'era un'idea che li stuzzicava: fondare una società sportiva che fosse proprio per loro, per i ragazzi, per gli studenti.
    </p>
    <p className="mb-4">
      Era il 1° novembre del 1897. Non potevano sapere, quei ragazzi, che stavano scrivendo l'incipit di una leggenda. Scelsero un nome che, in latino, significa "gioventù": Juventus.
    </p>
    <h3 className="text-2xl font-display font-bold text-black mt-8 mb-4">L'Era Agnelli</h3>
    <p>
      Il legame tra la famiglia Agnelli e la Juventus è il più longevo nella storia dello sport mondiale. Una continuità che ha garantito solidità, visione e un'incessante fame di vittorie. Dagli anni di Boniperti e Trapattoni, passando per l'era Lippi, fino ai 9 scudetti consecutivi, il mantra è rimasto lo stesso: vincere non è importante, è l'unica cosa che conta.
    </p>
  </PageLayout>
);

export const StadiumPage: React.FC<{onBack: () => void}> = ({onBack}) => (
  <PageLayout 
    title="Allianz Stadium" 
    subtitle="La nostra casa" 
    image="https://picsum.photos/1920/600?grayscale&blur=1&random=98"
    icon={<MapPin className="w-8 h-8" />}
    onBack={onBack}
  >
    <p className="lead text-xl font-medium text-black mb-6">
      Un impianto all'avanguardia, eco-sostenibile e privo di barriere architettoniche. L'Allianz Stadium non è solo uno stadio, è un tempio del calcio.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-black">
            <h4 className="font-bold text-xl mb-2">Capienza</h4>
            <p className="text-4xl font-display font-bold text-juve-gold">41.507</p>
            <p className="text-sm text-gray-500">Posti a sedere</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-black">
            <h4 className="font-bold text-xl mb-2">Inaugurazione</h4>
            <p className="text-4xl font-display font-bold text-juve-gold">2011</p>
            <p className="text-sm text-gray-500">8 Settembre</p>
        </div>
    </div>
    <p>
      Progettato per garantire la massima visibilità da ogni settore, lo stadio offre un'esperienza immersiva unica. Le tribune sono a pochi metri dal campo, creando un'atmosfera infuocata che spinge la squadra verso la vittoria. Oltre al campo, la struttura ospita il J-Museum, il Megastore e diverse aree hospitality esclusive.
    </p>
  </PageLayout>
);

export const MembershipPage: React.FC<{onBack: () => void}> = ({onBack}) => (
  <PageLayout 
    title="Membership" 
    subtitle="Entra nella famiglia" 
    image="https://picsum.photos/1920/600?grayscale&blur=1&random=97"
    icon={<CreditCard className="w-8 h-8" />}
    onBack={onBack}
  >
    <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* J1897 */}
        <div className="border-2 border-juve-gold bg-black text-white p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-juve-gold text-black text-xs font-bold px-3 py-1">PREMIUM</div>
            <h3 className="text-3xl font-display font-bold mb-2">J1897</h3>
            <p className="text-gray-400 mb-6">L'esperienza definitiva per il vero bianconero.</p>
            <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">✓ Welcome Pack Esclusivo</li>
                <li className="flex items-center gap-2">✓ Prelazione Biglietti Anticipata</li>
                <li className="flex items-center gap-2">✓ Eventi VIP con la squadra</li>
            </ul>
            <button className="w-full bg-juve-gold text-black font-bold py-3 uppercase hover:bg-white transition-colors">
                Iscriviti - €180/anno
            </button>
        </div>

        {/* Black & White */}
        <div className="border border-gray-200 bg-white p-8">
             <h3 className="text-3xl font-display font-bold mb-2 text-black">Black & White</h3>
            <p className="text-gray-600 mb-6">Per chi vuole essere sempre vicino alla squadra.</p>
            <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✓ Welcome Pack Standard</li>
                <li className="flex items-center gap-2">✓ Accesso alla vendita riservata</li>
                <li className="flex items-center gap-2">✓ Sconto 10% sullo Store</li>
            </ul>
            <button className="w-full bg-black text-white font-bold py-3 uppercase hover:bg-juve-gold hover:text-black transition-colors">
                Iscriviti - €65/anno
            </button>
        </div>
    </div>
  </PageLayout>
);

export const MuseumPage: React.FC<{onBack: () => void}> = ({onBack}) => (
  <PageLayout 
    title="J-Museum" 
    subtitle="Dove vive la leggenda" 
    image="https://picsum.photos/1920/600?grayscale&blur=1&random=96"
    icon={<Trophy className="w-8 h-8" />}
    onBack={onBack}
  >
    <p className="lead text-xl font-medium text-black mb-6">
      Un viaggio multimediale attraverso oltre un secolo di successi. Rivivi le emozioni più grandi e ammira i trofei che hanno fatto la storia.
    </p>
    <p className="mb-6">
      Il Juventus Museum non è solo una celebrazione del passato, ma un luogo dove la passione prende forma. Attraverso tecnologie interattive, cimeli storici e la sala dei trofei, potrai immergerti nel DNA bianconero.
    </p>
    <div className="bg-juve-gold/10 p-6 border-l-4 border-juve-gold">
        <h4 className="font-bold text-black uppercase mb-2">Orari di Apertura</h4>
        <ul className="text-sm space-y-1">
            <li><span className="font-bold">Lunedì - Venerdì:</span> 10:30 - 18:00</li>
            <li><span className="font-bold">Sabato - Domenica:</span> 10:30 - 19:30</li>
            <li><span className="font-bold">Giorni Partita:</span> Orari speciali</li>
        </ul>
    </div>
  </PageLayout>
);