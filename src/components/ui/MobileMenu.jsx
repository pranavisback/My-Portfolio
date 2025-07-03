import React from 'react';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

const MobileMenu = ({ onLinkClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg p-4 md:hidden z-50">
      <div className="flex justify-around">
        <button onClick={() => onLinkClick('heroRef')} className="flex flex-col items-center text-white">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button onClick={() => onLinkClick('aboutRef')} className="flex flex-col items-center text-white">
          <Info size={24} />
          <span className="text-xs">About</span>
        </button>
        <button onClick={() => onLinkClick('projectsRef')} className="flex flex-col items-center text-white">
          <Briefcase size={24} />
          <span className="text-xs">Projects</span>
        </button>
        <button onClick={() => onLinkClick('contactRef')} className="flex flex-col items-center text-white">
          <Mail size={24} />
          <span className="text-xs">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
