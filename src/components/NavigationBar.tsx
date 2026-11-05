import React from 'react';
import { NavSection } from '../types';
import { ASSETS } from '../data/studioData';
import { Download } from 'lucide-react';

interface NavigationBarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  onLogoClick?: () => void;
  onOpenPhpDownload?: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  activeSection,
  onSelectSection,
  onLogoClick,
  onOpenPhpDownload,
}) => {
  const navItems: { id: NavSection; label: string }[] = [
    { id: 'work', label: 'WORK' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="w-full pt-4 md:pt-6 pb-2 px-4 sm:px-8 md:px-12 flex justify-between items-center z-30 select-none">
      {/* Brand Logo on the left of Header matching asd.png reference image */}
      <div
        id="header-brand-logo"
        onClick={onLogoClick}
        className="flex items-center space-x-3 sm:space-x-3.5 cursor-pointer group transition-transform duration-200 hover:scale-[1.02]"
        title="Falcha Filmation Studio — Storytelling in Motion"
      >
        {/* 3D Embossed Logo Mark from asd.png */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl overflow-hidden bg-black/60 border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-hover:border-amber-400/50 transition-colors">
          <img
            src={ASSETS.asdLogo}
            alt="Falcha Filmation Studio Logo"
            className="w-full h-full object-cover filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gold-teal ambient shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Studio Title and Tagline in Header */}
        <div className="flex flex-col text-left">
          <span 
            id="header-brand-title"
            className="font-montserrat text-base sm:text-lg md:text-xl font-black tracking-[0.16em] text-white leading-tight uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-amber-100 transition-colors"
          >
            FALCHA
          </span>
          <span 
            id="header-brand-tagline"
            className="font-montserrat text-[8.5px] sm:text-[9.5px] md:text-[10px] font-bold tracking-[0.22em] text-slate-300 uppercase leading-none mt-0.5"
          >
            FILMATION STUDIO
          </span>
        </div>
      </div>

      {/* Navigation Links and Download PHP action on the right */}
      <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-8">
        <nav id="main-navigation" className="flex items-center space-x-4 sm:space-x-7 md:space-x-9 text-xs sm:text-[13px] tracking-[0.2em] font-medium font-montserrat">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectSection(item.id)}
                className={`relative py-1 transition-colors duration-200 uppercase cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span 
                    id="active-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.7)]" 
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Direct Download / Export PHP Button */}
        {onOpenPhpDownload && (
          <button
            id="nav-download-php"
            onClick={onOpenPhpDownload}
            className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-[10px] sm:text-[11px] font-semibold text-amber-300 hover:text-amber-200 transition-all duration-200 tracking-wider uppercase group cursor-pointer shadow-[0_2px_8px_rgba(245,158,11,0.15)]"
            title="Download website package in PHP (.zip)"
          >
            <Download className="w-3.5 h-3.5 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
            <span className="hidden xs:inline">PHP ZIP</span>
          </button>
        )}
      </div>
    </header>
  );
};
