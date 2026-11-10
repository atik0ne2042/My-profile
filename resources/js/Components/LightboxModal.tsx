import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Eye } from 'lucide-react';
import { ProjectImage } from '@/types';

interface LightboxModalProps {
  images: ProjectImage[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
  projectName?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  initialIndex = 0,
  open,
  onClose,
  projectName = 'Project Demonstration',
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
      setZoomed(false);
    }
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, images.length]);

  if (!open || !images || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-6 select-none animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls Bar */}
      <div
        className="flex items-center justify-between w-full max-w-7xl mx-auto z-20 pb-3 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F07832] text-white font-bold">
            <Eye className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1">
              {current.caption || current.screen_label}
            </h4>
            <p className="text-xs font-mono text-white/60">
              {projectName} &bull; Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoomed(!zoomed)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            title={zoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {zoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
          </button>

          <a
            href={current.file_path}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            title="Download Full Resolution"
          >
            <Download className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all ml-1"
            title="Close Lightbox"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Center Image Display Area */}
      <div
        className="relative flex-1 flex items-center justify-center my-3 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => {
                setCurrentIndex((i) => (i - 1 + images.length) % images.length);
                setZoomed(false);
              }}
              className="absolute left-2 sm:left-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F07832] transition-colors shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => {
                setCurrentIndex((i) => (i + 1) % images.length);
                setZoomed(false);
              }}
              className="absolute right-2 sm:right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F07832] transition-colors shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div
          className={`max-h-[72vh] max-w-[90vw] transition-all duration-300 flex items-center justify-center ${
            zoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setZoomed(!zoomed)}
        >
          <img
            src={current.file_path}
            alt={current.caption || current.screen_label}
            className="max-h-[72vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl border border-white/10"
          />
        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="w-full max-w-7xl mx-auto z-20 pt-3 border-t border-white/10 space-y-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-center">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                setZoomed(false);
              }}
              className={`relative shrink-0 h-14 w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                idx === currentIndex
                  ? 'border-[#F07832] scale-105 shadow-md'
                  : 'border-white/20 opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={img.file_path}
                alt={img.caption || img.screen_label}
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute bottom-0.5 right-1 text-[9px] font-mono text-white bg-black/70 px-1 rounded">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

