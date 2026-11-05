import React, { useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { MainVideoShowcase } from './components/MainVideoShowcase';
import { CategoryCards } from './components/CategoryCards';
import { VideoModal } from './components/VideoModal';
import { SectionDrawer } from './components/SectionDrawer';
import { CategoryExplorerModal } from './components/CategoryExplorerModal';
import { PhpDownloadModal } from './components/PhpDownloadModal';
import { MAIN_SHOWREEL, CATEGORIES } from './data/studioData';
import { NavSection, CategoryInfo, WorkItem } from './types';
import { Download } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState<NavSection>('work');
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo | null>(null);
  const [activeWork, setActiveWork] = useState<WorkItem>(MAIN_SHOWREEL);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isPhpModalOpen, setIsPhpModalOpen] = useState(false);

  // Handle navigation click
  const handleNavSelect = (section: NavSection) => {
    setActiveNav(section);
  };

  // Handle category card selection
  const handleCategorySelect = (category: CategoryInfo) => {
    if (selectedCategory?.id === category.id) {
      // Toggle modal details on second click
      setIsCategoryModalOpen(true);
    } else {
      setSelectedCategory(category);
      // Update main showcase video to preview this category's featured work
      setActiveWork(category.featuredWork);
    }
  };

  // Reset to default main showreel (when clicking the logo or WORK nav)
  const handleResetToMain = () => {
    setSelectedCategory(null);
    setActiveWork(MAIN_SHOWREEL);
    setActiveNav('work');
  };

  // Handle Play trigger from main frame
  const handlePlayHero = () => {
    setIsVideoModalOpen(true);
  };

  // Handle direct play from sub-modals
  const handlePlaySpecificWork = (work: WorkItem) => {
    setActiveWork(work);
    setIsCategoryModalOpen(false);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#070a0e] text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Cinematic Background Lighting Layers */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-80"
        style={{
          background: 'radial-gradient(circle at 50% 22%, rgba(20, 32, 48, 0.45) 0%, rgba(10, 15, 22, 0.9) 60%, #06080b 100%)'
        }}
      />

      {/* Subtle projector beam effect from top center */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 60% 45% at 50% 12%, rgba(255, 255, 255, 0.05) 0%, rgba(160, 200, 240, 0.015) 50%, transparent 80%)'
        }}
      />

      {/* Top Header Navigation */}
      <NavigationBar
        activeSection={activeNav}
        onSelectSection={handleNavSelect}
        onLogoClick={handleResetToMain}
        onOpenPhpDownload={() => setIsPhpModalOpen(true)}
      />

      {/* Main Center Content: Hero Showcase and 3 Category Cards */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-2 sm:px-4 my-auto py-2 sm:py-4">
        {/* Featured Video Player Frame */}
        <MainVideoShowcase
          currentWork={activeWork}
          onPlay={handlePlayHero}
          categoryName={selectedCategory ? selectedCategory.title : undefined}
        />

        {/* Category Cards (DOCUMENTARIES, COMMERCIALS, SHORT FILMS) */}
        <CategoryCards
          activeCategory={selectedCategory?.id || null}
          onSelectCategory={handleCategorySelect}
        />
      </main>

      {/* Video Player Modal */}
      <VideoModal
        work={activeWork}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Slide-over sections for SERVICES, ABOUT, CONTACT */}
      <SectionDrawer
        activeSection={activeNav}
        onClose={() => setActiveNav('work')}
      />

      {/* Category Explorer Modal (opened when exploring category details) */}
      <CategoryExplorerModal
        category={selectedCategory}
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onPlayWork={handlePlaySpecificWork}
      />

      {/* PHP Download Modal with Direct Link and Setup Guide */}
      <PhpDownloadModal
        isOpen={isPhpModalOpen}
        onClose={() => setIsPhpModalOpen(false)}
      />

      {/* Bottom subtle copyright / craft footnote and download link */}
      <footer className="w-full py-2.5 sm:py-3 px-4 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-slate-500/80 tracking-widest uppercase font-montserrat select-none gap-2">
        <span>FALCHA FILMATION STUDIO • ALL RIGHTS RESERVED</span>
        <div className="flex items-center space-x-3">
          <a
            id="footer-download-php"
            href="/falcha-filmation-studio-php.zip"
            download="falcha-filmation-studio-php.zip"
            className="flex items-center space-x-1.5 text-slate-400 hover:text-amber-300 transition-colors cursor-pointer py-0.5"
            title="Download complete PHP website package (.zip)"
          >
            <Download className="w-3 h-3 text-amber-400" />
            <span className="font-semibold">Download PHP Version (.zip)</span>
          </a>
          <span className="text-slate-600">•</span>
          <button
            onClick={() => setIsPhpModalOpen(true)}
            className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            Instructions
          </button>
        </div>
      </footer>
    </div>
  );
}
