import React, { useEffect, useState } from 'react';
import { getMatchPrediction } from '../services/geminiService';
import { Calendar, MapPin, Activity, Ticket } from 'lucide-react';

const MatchCenter: React.FC = () => {
  const [analysis, setAnalysis] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    const fetchAnalysis = async () => {
      const text = await getMatchPrediction();
      if (isMounted) setAnalysis(text);
    };
    fetchAnalysis();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="biglietti" className="py-20 bg-white text-black clip-path-slant relative z-20 -mt-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Next Match Info */}
          <div className="space-y-6">
            <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm">Prossima Partita</h3>
            <div className="flex items-center gap-8">
                <div className="text-center">
                    <img src="https://picsum.photos/80/80?random=10" alt="Juve" className="w-20 h-20 rounded-full bg-gray-100 mb-2 mx-auto grayscale" />
                    <span className="font-display font-bold text-2xl block">JUV</span>
                </div>
                <div className="text-4xl font-display font-bold text-gray-300">VS</div>
                <div className="text-center">
                    <img src="https://picsum.photos/80/80?random=11" alt="Opponent" className="w-20 h-20 rounded-full bg-gray-100 mb-2 mx-auto grayscale" />
                    <span className="font-display font-bold text-2xl block">INT</span>
                </div>
            </div>
            
            <div className="flex flex-col gap-3 text-gray-700 font-medium mb-6">
                <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-juve-gold" />
                    <span>Domenica, 20:45</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-juve-gold" />
                    <span>Allianz Stadium, Torino</span>
                </div>
            </div>

            <button className="flex items-center gap-2 bg-black text-white px-8 py-3 font-bold uppercase hover:bg-juve-gold hover:text-black transition-colors">
                <Ticket className="w-5 h-5" /> Acquista Biglietti
            </button>
          </div>

          {/* AI Tactical Analysis */}
          <div className="bg-gray-100 p-8 rounded-xl border-l-4 border-black shadow-lg">
            <div className="flex items-center gap-2 mb-4">
                <Activity className="w-6 h-6 text-juve-gold" />
                <h3 className="font-bold text-xl uppercase font-display">Analisi Tattica Pre-Match</h3>
            </div>
            <p className="text-gray-600 leading-relaxed italic mb-6">
                "{analysis || "Caricamento analisi tattica..."}"
            </p>
            <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-300 pt-4">
                <div>
                    <span className="block text-2xl font-bold font-display">54%</span>
                    <span className="text-xs uppercase text-gray-500">Vittoria</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold font-display">26%</span>
                    <span className="text-xs uppercase text-gray-500">Pareggio</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold font-display">20%</span>
                    <span className="text-xs uppercase text-gray-500">Sconfitta</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MatchCenter;