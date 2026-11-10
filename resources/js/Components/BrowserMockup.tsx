import React from 'react';
import { Lock, RefreshCw, Maximize2, ExternalLink } from 'lucide-react';

interface BrowserMockupProps {
  imageSrc: string;
  alt: string;
  url?: string;
  title?: string;
  className?: string;
  onOpenLightbox?: () => void;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  imageSrc,
  alt,
  url = 'https://padmatv.net',
  title = 'Padma TV — 24/7 Digital News & Live Broadcast',
  className = '',
  onOpenLightbox,
}) => {
  return (
    <div className={`rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xl dark:shadow-[0_20px_50px_rgba(7,20,38,0.9)] group/browser transition-colors duration-300 ${className}`}>
      {/* Browser Chrome Header */}
      <div className="px-4 py-3 bg-[#F8F7F5] dark:bg-[#0B1B33] border-b border-[#E8E5E2] dark:border-[#1E3A63] flex items-center justify-between gap-4 transition-colors">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
        </div>

        {/* Address / Search Bar */}
        <div className="flex-1 max-w-md mx-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#071426] border border-[#E8E5E2] dark:border-[#1E3A63] text-xs font-mono text-[#777777] dark:text-[#C6D0DF] shadow-xs transition-colors">
          <Lock className="h-3 w-3 text-emerald-600 shrink-0" />
          <span className="truncate text-[#151515] dark:text-white font-medium">{url}</span>
          <RefreshCw className="h-3 w-3 text-[#777777] dark:text-[#C6D0DF] shrink-0 ml-auto hover:rotate-180 transition-transform duration-500 cursor-pointer" />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {onOpenLightbox && (
            <button
              type="button"
              onClick={onOpenLightbox}
              className="p-1 rounded-md text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white hover:bg-white dark:hover:bg-[#11243D] transition-colors"
              title="Fullscreen Preview"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Website Viewport Content */}
      <div
        className="relative overflow-hidden bg-[#151515] cursor-pointer group/viewport flex items-center justify-center min-h-[300px] max-h-[580px]"
        onClick={() => onOpenLightbox && onOpenLightbox()}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover/viewport:scale-[1.01]"
          loading="lazy"
        />

        {/* Hover Lightbox Indicator */}
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/viewport:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#151515] text-xs font-semibold shadow-lg">
            <Maximize2 className="h-4 w-4 text-[#F07832]" />
            <span>Click to View Full Resolution</span>
          </span>
        </div>
      </div>
    </div>
  );
};

