import React from 'react';
import { Trophy } from '../types';

const TROPHIES: Trophy[] = [
  { id: 1, name: "Scudetti", count: 36, icon: "🇮🇹" },
  { id: 2, name: "Coppe Italia", count: 14, icon: "🏆" },
  { id: 3, name: "Supercoppe Italiane", count: 9, icon: "🥇" },
  { id: 4, name: "Champions League", count: 2, icon: "🇪🇺" },
];

const Trophies: React.FC = () => {
  return (
    <section id="storia" className="py-24 bg-black text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">IL PALMARES</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TROPHIES.map((trophy) => (
            <div key={trophy.id} className="p-6 border border-gray-800 rounded-lg hover:border-juve-gold transition-colors duration-300 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{trophy.icon}</div>
              <div className="text-5xl font-display font-bold text-juve-gold mb-2">{trophy.count}</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-bold">{trophy.name}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
            <p className="text-gray-500 max-w-2xl mx-auto">
                La vittoria non è importante, è l'unica cosa che conta. Una storia fatta di successi, sofferenze e rinascite. Dal 1897, leggenda.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Trophies;