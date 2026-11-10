import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Folder, FolderOpen, Image as ImageIcon, ArrowUpRight, Maximize2, Calendar } from 'lucide-react';
import { GalleryPhoto } from '@/types';
import { LightboxModal } from './LightboxModal';

interface GalleryPreviewProps {
  photos: GalleryPhoto[];
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', count: photos.length },
    { id: 'campus', label: 'Campus & NUBCC', count: photos.filter((p) => p.category === 'campus').length },
    { id: 'workshops', label: 'Workshops & Contests', count: photos.filter((p) => p.category === 'workshops').length },
    { id: 'community', label: 'Youth & Techboloy', count: photos.filter((p) => p.category === 'community').length },
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  // Take first 8 for home preview
  const previewPhotos = filteredPhotos.slice(0, 8);

  const lightboxImages = filteredPhotos.map((p) => ({
    id: p.id,
    project_id: 0,
    file_path: p.file_path,
    caption: p.title,
    screen_label: p.category_label,
    image_type: 'app_screen' as const,
    orientation: 'portrait' as const,
    sort_order: p.sort_order,
  }));

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-white/40 dark:bg-[#0B1B33]/40 border-t border-[#E8E5E2]/80 dark:border-[#1E3A63] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
              Moments &amp;{' '}
              <span className="font-serif italic font-normal text-[#F07832]">
                Campus Archives
              </span>
            </h2>
            <p className="text-[#777777] dark:text-[#C6D0DF] text-sm sm:text-base mt-2 font-normal transition-colors">
              Authentic photographic snapshots from Northern University Bangladesh, tech hackathons, programming contests, and youth leadership events.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white text-xs sm:text-sm font-semibold hover:bg-[#F07832] dark:hover:bg-[#E45826] transition-colors shadow-xs"
            >
              <span>Explore All 30 Photos</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white shadow-xs'
                    : 'bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#F8F7F5] dark:bg-[#0B1B33] text-[#777777] dark:text-[#C6D0DF]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {previewPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer aspect-square"
            >
              <img
                src={photo.file_path}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="font-mono text-[10px] text-[#F07832] font-semibold uppercase tracking-wider">
                  {photo.category_label}
                </span>
                <p className="font-bold text-xs sm:text-sm line-clamp-1 mt-0.5">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70 mt-1">
                  <Maximize2 className="h-3 w-3 text-[#F07832]" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Preview */}
      <LightboxModal
        images={lightboxImages}
        initialIndex={lightboxIndex ?? 0}
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        projectName="Event Archive & Campus Memories"
      />
    </section>
  );
};

