import React from 'react';
import { CATEGORIES } from '../data/studioData';
import { CategoryInfo } from '../types';

interface CategoryCardsProps {
  activeCategory: string | null;
  onSelectCategory: (category: CategoryInfo) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full max-w-[820px] mx-auto px-4 sm:px-6 mt-1 mb-8 md:mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 md:gap-6 items-start">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory(cat)}
              className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card Image with distinctive colored border */}
              <div
                className={`relative w-full aspect-[16/10] sm:aspect-[16/10.5] rounded-xl sm:rounded-2xl overflow-hidden bg-black transition-all duration-300 shadow-lg ${
                  isSelected ? 'scale-[1.03]' : 'hover:scale-[1.01]'
                }`}
                style={{
                  border: `2px solid ${cat.borderHex}`,
                  boxShadow: isSelected
                    ? `0 0 20px ${cat.glowHex}, 0 8px 24px rgba(0,0,0,0.8)`
                    : `0 4px 16px rgba(0,0,0,0.6)`,
                }}
              >
                <img
                  src={cat.thumbnail}
                  alt={cat.title}
                  className="w-full h-full object-cover filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Active indicator dot */}
                {isSelected && (
                  <div 
                    className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: cat.borderHex }}
                  />
                )}
              </div>

              {/* Text Labels below thumbnail exactly matching reference image */}
              <div className="flex flex-col items-center mt-2.5 sm:mt-3 text-center">
                {/* English Category Title */}
                <h3 
                  id={`title-${cat.id}`}
                  className="font-montserrat text-xs sm:text-[13px] md:text-sm font-extrabold tracking-[0.16em] text-white uppercase group-hover:text-slate-100 transition-colors"
                >
                  {cat.title}
                </h3>

                {/* Devanagari Subtitle */}
                <p 
                  id={`devanagari-${cat.id}`}
                  className="font-devanagari text-[11px] sm:text-xs text-slate-300/90 tracking-wider mt-0.5"
                >
                  {cat.devanagari}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
