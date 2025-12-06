import React from 'react';
import { BookOpen, Map, Users, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const SidebarLink: React.FC<{
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  side: 'left' | 'right';
}> = ({ label, icon, active, onClick, side }) => (
  <button 
    onClick={onClick}
    className={`
      group flex items-center gap-4 w-full p-4 transition-all duration-300
      ${active ? 'bg-juve-gold text-black' : 'text-gray-400 hover:text-white hover:bg-gray-900'}
      ${side === 'left' ? 'flex-row' : 'flex-row-reverse text-right'}
    `}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="font-display font-bold uppercase tracking-wider text-sm hidden 2xl:block">
      {label}
    </span>
  </button>
);

export const LeftSidebar: React.FC<SidebarProps> = ({ onNavigate, currentView }) => {
  return (
    <aside className="hidden xl:flex flex-col w-20 2xl:w-64 fixed left-0 top-20 bottom-0 bg-black border-r border-gray-800 z-40 overflow-y-auto">
      <div className="py-8 flex flex-col gap-2">
        <div className="px-4 mb-4 2xl:mb-8 text-center 2xl:text-left">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest hidden 2xl:block">Il Club</span>
          <div className="h-[1px] bg-gray-800 w-full mt-2 2xl:hidden"></div>
        </div>

        <SidebarLink 
          side="left"
          label="Storia del Club" 
          icon={<BookOpen className="w-6 h-6" />} 
          active={currentView === 'history'}
          onClick={() => onNavigate('history')}
        />
        <SidebarLink 
          side="left"
          label="Lo Stadio" 
          icon={<Map className="w-6 h-6" />} 
          active={currentView === 'stadium'}
          onClick={() => onNavigate('stadium')}
        />
        
        {/* Decorative element */}
        <div className="mt-auto px-6 py-8 hidden 2xl:block opacity-30">
            <h2 className="text-6xl font-display font-bold text-gray-800 leading-none">JUV</h2>
        </div>
      </div>
    </aside>
  );
};

export const RightSidebar: React.FC<SidebarProps> = ({ onNavigate, currentView }) => {
  return (
    <aside className="hidden xl:flex flex-col w-20 2xl:w-64 fixed right-0 top-20 bottom-0 bg-black border-l border-gray-800 z-40 overflow-y-auto">
      <div className="py-8 flex flex-col gap-2">
        <div className="px-4 mb-4 2xl:mb-8 text-center 2xl:text-right">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest hidden 2xl:block">Fan Zone</span>
          <div className="h-[1px] bg-gray-800 w-full mt-2 2xl:hidden"></div>
        </div>

        <SidebarLink 
          side="right"
          label="Membership" 
          icon={<Users className="w-6 h-6" />} 
          active={currentView === 'membership'}
          onClick={() => onNavigate('membership')}
        />
        <SidebarLink 
          side="right"
          label="J-Museum" 
          icon={<Trophy className="w-6 h-6" />} 
          active={currentView === 'museum'}
          onClick={() => onNavigate('museum')}
        />

         {/* Decorative element */}
         <div className="mt-auto px-6 py-8 hidden 2xl:block opacity-30 text-right">
            <h2 className="text-6xl font-display font-bold text-gray-800 leading-none">1897</h2>
        </div>
      </div>
    </aside>
  );
};