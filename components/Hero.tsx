import React, { useEffect, useState } from 'react';
import { getJuveInsights } from '../services/geminiService';
import { ChevronRight, Loader2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [aiText, setAiText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchInsight = async () => {
      const text = await getJuveInsights();
      if (isMounted) {
        setAiText(text);
        setLoading(false);
      }
    };
    fetchInsight();
    return () => { isMounted = false; };
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Stadium Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-juve-gold font-bold tracking-[0.2em] text-sm md:text-lg mb-4 uppercase animate-pulse">
          Il Club Più Titolato d'Italia
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter leading-none">
          FINO ALLA <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">FINE</span>
        </h1>
        
        {/* AI Content Section */}
        <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-sm border-l-4 border-juve-gold p-6 mb-8 text-left rounded-r-lg">
          <h3 className="text-juve-gold text-xs font-bold uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Gemini AI Fan Insight
          </h3>
          {loading ? (
            <div className="flex items-center gap-2 text-gray-400">
               <Loader2 className="h-4 w-4 animate-spin" /> Generazione manifesto in corso...
            </div>
          ) : (
            <p className="text-gray-200 font-light italic text-sm md:text-base leading-relaxed">
              "{aiText}"
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#biglietti" className="bg-white text-black font-display font-bold text-lg py-4 px-10 hover:bg-juve-gold transition-all duration-300 uppercase transform hover:-translate-y-1 block text-center">
            Abbonati Ora
          </a>
          <a href="#news" className="border border-white text-white font-display font-bold text-lg py-4 px-10 hover:bg-white hover:text-black transition-all duration-300 uppercase flex items-center justify-center gap-2">
            Ultime News <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-juve-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;