import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Lock } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-juve-gray border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="font-display font-bold text-3xl tracking-tighter text-white block mb-6">JUVENTUS</span>
            <p className="text-gray-400 text-sm">
              Sito dimostrativo non ufficiale creato per scopi educativi. Tutti i marchi registrati appartengono ai legittimi proprietari.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Club</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-juve-gold">Contatti</a></li>
              <li><a href="#" className="hover:text-juve-gold">Lavora con noi</a></li>
              <li><a href="#" className="hover:text-juve-gold">Sostenibilità</a></li>
              <li><a href="#" className="hover:text-juve-gold">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Fans</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-juve-gold">Membership</a></li>
              <li><a href="#" className="hover:text-juve-gold">Official Fan Club</a></li>
              <li><a href="#" className="hover:text-juve-gold">Juventus TV</a></li>
              <li><a href="#" className="hover:text-juve-gold">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Seguici</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-juve-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-juve-gold hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-juve-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-juve-gold hover:text-black transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Juventus Fan Page Demo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 items-center">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <button onClick={onAdminClick} className="hover:text-juve-gold flex items-center gap-1">
                <Lock className="w-3 h-3" /> Area Riservata
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;