import React from 'react';
import { Player } from '../types';

const PLAYERS: Player[] = [
  { id: 1, name: "Vlahovic", position: "Attaccante", number: 9, imageUrl: "https://picsum.photos/400/600?random=1" },
  { id: 2, name: "Chiesa", position: "Attaccante", number: 7, imageUrl: "https://picsum.photos/400/600?random=2" },
  { id: 3, name: "Bremer", position: "Difensore", number: 3, imageUrl: "https://picsum.photos/400/600?random=3" },
  { id: 4, name: "Locatelli", position: "Centrocampista", number: 5, imageUrl: "https://picsum.photos/400/600?random=4" },
];

const Squad: React.FC = () => {
  return (
    <section id="squadra" className="py-20 bg-juve-gray relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-juve-gold font-bold uppercase tracking-widest text-sm mb-2">La Rosa 2024/25</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">I NOSTRI GUERRIERI</h2>
          </div>
          <a href="#" className="hidden md:block text-white hover:text-juve-gold transition-colors font-bold uppercase text-sm tracking-wider border-b border-juve-gold pb-1">Vedi tutta la rosa</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLAYERS.map((player) => (
            <div key={player.id} className="group relative overflow-hidden bg-black h-[500px] cursor-pointer">
              <img 
                src={player.imageUrl} 
                alt={player.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-6xl font-display font-bold text-gray-800 absolute -top-12 right-4 opacity-50 group-hover:text-juve-gold group-hover:opacity-20 transition-all">
                  {player.number}
                </span>
                <p className="text-juve-gold font-bold uppercase text-xs tracking-wider mb-1">{player.position}</p>
                <h3 className="text-3xl font-display font-bold text-white uppercase">{player.name}</h3>
              </div>
              
              {/* Decorative stripes */}
              <div className="absolute top-0 right-0 w-2 h-0 bg-juve-gold group-hover:h-full transition-all duration-500 delay-100"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-white hover:text-juve-gold transition-colors font-bold uppercase text-sm tracking-wider border-b border-juve-gold pb-1">Vedi tutta la rosa</a>
        </div>
      </div>
    </section>
  );
};

export default Squad;