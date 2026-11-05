import React from 'react';
import { Play } from 'lucide-react';
import { WorkItem } from '../types';

interface MainVideoShowcaseProps {
  currentWork: WorkItem;
  onPlay: () => void;
  categoryName?: string;
}

export const MainVideoShowcase: React.FC<MainVideoShowcaseProps> = ({
  currentWork,
  onPlay,
  categoryName,
}) => {
  return (
    <div className="relative w-full max-w-[620px] sm:max-w-[700px] md:max-w-[760px] lg:max-w-[800px] mx-auto px-4 sm:px-6 mt-0 sm:mt-1 md:mt-2 mb-4 sm:mb-6 md:mb-7">
      {/* Outer ambient glow behind the player */}
      <div 
        className="absolute -inset-1 sm:-inset-2 rounded-2xl md:rounded-3xl opacity-50 blur-xl pointer-events-none -z-10 transition-all duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(120, 160, 200, 0.03) 50%, transparent 80%)'
        }}
      />

      {/* Main Video Screen Container */}
      <div
        id="main-video-player-frame"
        onClick={onPlay}
        className="group relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.9)]"
      >
        {/* The Video Poster / Thumbnail */}
        <img
          src={currentWork.thumbnail}
          alt={currentWork.title}
          className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Dark Vignette gradient on the edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Center Play Button matching reference image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            id="hero-play-button"
            className="w-13 h-13 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_4px_24px_rgba(0,0,0,0.7)] group-hover:bg-black/80 group-hover:scale-110 group-hover:border-white/60 transition-all duration-300"
          >
            <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-white text-white ml-1 transition-transform group-hover:scale-105" />
          </div>
        </div>

        {/* Subtle Film Information badge on bottom left (reveals gently on hover) */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4 flex items-end justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 max-w-[80%]">
            <p className="text-[11px] sm:text-xs font-semibold text-white truncate font-montserrat">
              {currentWork.title}
            </p>
            {currentWork.nepaliTitle && (
              <p className="text-[10px] text-slate-300 font-devanagari truncate">
                {currentWork.nepaliTitle}
              </p>
            )}
          </div>

          <div className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-medium text-slate-200 uppercase tracking-widest font-montserrat border border-white/10">
            {currentWork.duration}
          </div>
        </div>

        {categoryName && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wider font-montserrat uppercase bg-black/50 text-slate-300 border border-white/15 backdrop-blur-sm">
              {categoryName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
