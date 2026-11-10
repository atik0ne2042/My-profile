import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Smartphone, Eye } from 'lucide-react';
import { ProjectImage } from '@/types';

interface IPhone17MockupProps {
  images: ProjectImage[];
  alt?: string;
  className?: string;
  onOpenLightbox?: (index: number) => void;
  showSwitcher?: boolean;
}

export const IPhone17Mockup: React.FC<IPhone17MockupProps> = ({
  images,
  alt = 'Application Screenshot',
  className = '',
  onOpenLightbox,
  showSwitcher = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Outer iPhone 17 Contoured Chassis */}
      <div className="relative w-[240px] sm:w-[265px] md:w-[285px] aspect-[9/19.5] rounded-[3rem] p-[8px] bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0d0d0d] shadow-2xl ring-1 ring-white/20 transition-transform duration-500 hover:scale-[1.01]">
        
        {/* Hardware Action Button & Volume Keys (Left) */}
        <div className="absolute -left-[7px] top-20 w-[3px] h-6 bg-[#3a3a3a] rounded-l-xs shadow-inner" />
        <div className="absolute -left-[7px] top-32 w-[3px] h-12 bg-[#3a3a3a] rounded-l-xs shadow-inner" />
        <div className="absolute -left-[7px] top-48 w-[3px] h-12 bg-[#3a3a3a] rounded-l-xs shadow-inner" />

        {/* Hardware Power / Side Button (Right) */}
        <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-[#3a3a3a] rounded-r-xs shadow-inner" />

        {/* Inner OLED Display Container with iPhone 17 Screen Radii — Clean Full Screen Viewport */}
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black flex flex-col justify-between group/screen">
          
          {/* Screenshot Display Area — 100% Full Screen Edge-to-Edge with Zero Cutout */}
          <div
            className="relative w-full h-full overflow-hidden flex items-center justify-center bg-black cursor-pointer"
            onClick={() => onOpenLightbox && onOpenLightbox(currentIndex)}
            title="Click to view full-resolution lightbox"
          >
            <img
              src={currentImage.file_path}
              alt={`${alt} — ${currentImage.caption || currentImage.screen_label}`}
              className="w-full h-full object-fill object-top transition-opacity duration-300"
              loading="lazy"
            />

            {/* Subtle Screen Glare Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-lg">
                <Maximize2 className="h-3.5 w-3.5 text-[#F07832]" />
                <span>Fullscreen</span>
              </span>
            </div>
          </div>

          {/* Screen Navigation Arrows on Phone Mockup */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover/screen:opacity-100 transition-opacity hover:bg-[#F07832]"
                aria-label="Previous Screen"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover/screen:opacity-100 transition-opacity hover:bg-[#F07832]"
                aria-label="Next Screen"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Screen Switcher Thumbnails / Dots below Phone */}
      {showSwitcher && images.length > 1 && (
        <div className="mt-4 flex flex-col items-center gap-2">
          {/* Active Screen Label */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#777777] dark:text-[#C6D0DF] transition-colors">
            <Eye className="h-3 w-3 text-[#F07832]" />
            <span className="font-semibold text-[#151515] dark:text-white transition-colors">{currentImage.screen_label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#151515]/5 dark:bg-white/10 dark:text-[#C6D0DF] transition-colors">
              {currentIndex + 1}/{images.length}
            </span>
          </div>

          {/* Interactive Screen Dots / Pills */}
          <div className="flex items-center gap-1.5">
            {images.map((img, idx) => (
              <button
                key={img.id || idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View screen: ${img.screen_label}`}
                title={img.screen_label}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-[#F07832]'
                    : 'w-2 h-2 bg-[#E8E5E2] dark:bg-[#1E3A63] hover:bg-[#777777] dark:hover:bg-[#C6D0DF]'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

