import React from 'react';
import { X, Play, Award, Film, Clock, Calendar } from 'lucide-react';
import { CategoryInfo, WorkItem } from '../types';

interface CategoryExplorerModalProps {
  category: CategoryInfo | null;
  isOpen: boolean;
  onClose: () => void;
  onPlayWork: (work: WorkItem) => void;
}

export const CategoryExplorerModal: React.FC<CategoryExplorerModalProps> = ({
  category,
  isOpen,
  onClose,
  onPlayWork,
}) => {
  if (!isOpen || !category) return null;

  return (
    <div
      id="category-explorer-modal"
      className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1017] border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.borderHex }}
              />
              <h2 className="font-montserrat text-xl sm:text-2xl font-extrabold tracking-widest text-white uppercase">
                {category.title}
              </h2>
              <span className="font-devanagari text-base text-slate-300">
                ({category.devanagari})
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light mt-1">
              {category.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Work in Category */}
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-white/20 bg-black/60 group">
            <div className="aspect-video w-full relative">
              <img
                src={category.featuredWork.thumbnail}
                alt={category.featuredWork.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => {
                    onPlayWork(category.featuredWork);
                  }}
                  className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 hover:bg-white/40 transition-all text-white cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                    Featured Production
                  </span>
                  <h3 className="font-montserrat text-lg font-bold text-white mt-1">
                    {category.featuredWork.title}
                  </h3>
                  {category.featuredWork.nepaliTitle && (
                    <p className="font-devanagari text-xs text-slate-300">
                      {category.featuredWork.nepaliTitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-300 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{category.featuredWork.duration}</span>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3 bg-[#0e131b]">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {category.featuredWork.synopsis}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10 text-xs text-slate-400">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Film className="w-3.5 h-3.5 text-slate-400" />
                    <span>{category.featuredWork.director}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{category.featuredWork.year}</span>
                  </div>
                </div>

                {category.featuredWork.awards && category.featuredWork.awards.length > 0 && (
                  <div className="flex items-center space-x-1 text-amber-300">
                    <Award className="w-3.5 h-3.5" />
                    <span className="text-[11px] truncate max-w-xs">{category.featuredWork.awards[0]}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
