import React from 'react';
import { ASSETS } from '../data/studioData';

interface EmblemHeaderProps {
  onTitleClick?: () => void;
}

export const EmblemHeader: React.FC<EmblemHeaderProps> = ({ onTitleClick }) => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-2 sm:pt-4 md:pt-6 pb-0 sm:pb-1 text-center select-none w-full">
      {/* Hidden semantic heading for SEO & Accessibility */}
      <h1 className="sr-only">Falcha Filmation Studio — Storytelling in Motion</h1>

      {/* Atmospheric center spotlight glow behind the logo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[700px] h-[180px] sm:h-[220px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255, 255, 255, 0.12) 0%, rgba(180, 210, 240, 0.035) 45%, transparent 75%)',
        }}
      />

      {/* Interactive Logo Container matching CSS selector targeting */}
      <div
        id="falcha-brand-logo"
        onClick={onTitleClick}
        className="relative group cursor-pointer w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[720px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.015]"
        title="Falcha Filmation Studio — Storytelling in Motion"
      >
        <div className="relative w-full aspect-[16/9] flex items-center justify-center">
          <img
            src={ASSETS.emblem}
            alt="Falcha Filmation Studio - Storytelling in Motion"
            className="w-full h-full object-contain mix-blend-screen filter contrast-125 brightness-110 drop-shadow-[0_0_24px_rgba(255,255,255,0.22)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
