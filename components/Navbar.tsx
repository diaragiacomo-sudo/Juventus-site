import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[60] bg-juve-black/90 backdrop-blur-md border-b border-juve-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-white fill-current group-hover:text-juve-gold transition-colors" />
            <span className="font-display font-bold text-2xl tracking-tighter text-white">JUVENTUS</span>
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-juve-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider">Home</a>
              <a href="#news" className="hover:text-juve-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider">News</a>
              <a href="#squadra" className="hover:text-juve-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider">Squadra</a>
              <a href="#storia" className="hover:text-juve-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider">Storia</a>
              <a href="#shop" className="hover:text-juve-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider">Shop</a>
              <a href="#biglietti" className="bg-juve-gold text-black font-bold py-2 px-6 rounded-none hover:bg-white transition-colors duration-300 uppercase clip-path-slant inline-block">
                Biglietti
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-juve-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#news" onClick={() => setIsOpen(false)} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">News</a>
            <a href="#squadra" onClick={() => setIsOpen(false)} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Squadra</a>
            <a href="#storia" onClick={() => setIsOpen(false)} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Storia</a>
            <a href="#shop" onClick={() => setIsOpen(false)} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Shop</a>
            <a href="#biglietti" onClick={() => setIsOpen(false)} className="text-juve-gold block px-3 py-2 rounded-md text-base font-medium font-bold">Biglietti</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;