import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Award, Calendar, Clock, Film } from 'lucide-react';
import { WorkItem } from '../types';

interface VideoModalProps {
  work: WorkItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ work, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback: mute and play
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [isOpen, work]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying]);

  if (!isOpen || !work) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  return (
    <div 
      id="cinema-video-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0b0e14] border border-white/20 rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10 z-20">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <div>
              <h2 className="text-sm md:text-base font-bold text-white font-montserrat tracking-wider">
                {work.title}
              </h2>
              {work.nepaliTitle && (
                <p className="text-xs text-slate-400 font-devanagari">
                  {work.nepaliTitle}
                </p>
              )}
            </div>
          </div>

          <button
            id="close-video-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center group">
          <video
            ref={videoRef}
            src={work.videoUrl}
            poster={work.thumbnail}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            playsInline
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Large Center Play Icon when Paused */}
          {!isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
            </div>
          )}

          {/* Player Controls Bar */}
          <div
            className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Progress Scrubber Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all relative mb-3 group/bar"
            >
              <div
                className="h-full bg-white rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md scale-0 group-hover/bar:scale-100 transition-transform" />
              </div>
            </div>

            {/* Controls bottom row */}
            <div className="flex items-center justify-between text-slate-200">
              <div className="flex items-center space-x-4">
                <button
                  id="modal-play-toggle"
                  onClick={togglePlay}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  id="modal-mute-toggle"
                  onClick={toggleMute}
                  className="hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span>{work.duration}</span>
                  <span>•</span>
                  <span className="uppercase">{work.category.replace('_', ' ')}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  id="modal-fullscreen-toggle"
                  onClick={toggleFullScreen}
                  className="hover:text-white transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Film Details & Metadata Section */}
        <div className="p-5 sm:p-6 bg-[#0e131a] border-t border-white/10 flex flex-col sm:flex-row gap-5 justify-between">
          <div className="flex-1 space-y-2.5">
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {work.synopsis}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-montserrat uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:w-64 flex flex-col space-y-2 text-xs text-slate-400 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-5 pt-3 sm:pt-0">
            {work.director && (
              <div className="flex items-center space-x-2">
                <Film className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Dir: <strong className="text-slate-200">{work.director}</strong></span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Released: <strong className="text-slate-200">{work.year}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Runtime: <strong className="text-slate-200">{work.duration}</strong></span>
            </div>
            {work.awards && work.awards.length > 0 && (
              <div className="pt-2 border-t border-white/5 space-y-1">
                <div className="flex items-center space-x-1.5 text-amber-300 font-semibold text-[11px]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Selected Accolades</span>
                </div>
                {work.awards.map((award, i) => (
                  <p key={i} className="text-[11px] text-slate-300 italic">
                    • {award}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
