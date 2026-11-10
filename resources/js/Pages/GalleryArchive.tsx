import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Folder, FolderOpen, Maximize2, Calendar, Download } from 'lucide-react';
import { GalleryPhoto, PersonalProfile } from '@/types';
import { Navbar } from '@/Components/Navbar';
import { Footer } from '@/Components/Footer';
import { LightboxModal } from '@/Components/LightboxModal';

interface GalleryArchiveProps {
  photos: GalleryPhoto[];
  profile: PersonalProfile;
}

export default function GalleryArchive({ photos, profile }: GalleryArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', count: photos.length, subtitle: 'Complete event archive' },
    { id: 'campus', label: 'Campus & NUBCC', count: photos.filter((p) => p.category === 'campus').length, subtitle: 'NUB CSE club milestones' },
    { id: 'workshops', label: 'Workshops & Contests', count: photos.filter((p) => p.category === 'workshops').length, subtitle: 'Hackathons & live programming' },
    { id: 'community', label: 'Youth & Techboloy', count: photos.filter((p) => p.category === 'community').length, subtitle: 'Ambassadorship & networking' },
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

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
    <>
      <Head>
        <title>Moments &amp; Campus Photo Archive — Atik Hasan</title>
        <meta
          name="description"
          content="Authentic photo archive from university ceremonies, programming hackathons, and youth ambassadorship events."
        />
      </Head>

      <div className="min-h-screen bg-[#F8F7F5] dark:bg-[#071426] text-[#151515] dark:text-[#FFFFFF] flex flex-col justify-between selection:bg-[#F07832]/20 selection:text-[#F07832] transition-colors duration-300">
        <Navbar currentPath="/gallery" />

        <main className="pt-28 sm:pt-36 pb-24 flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {/* Back button */}
            <div className="mb-6">
              <Link
                href="/#gallery"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Header */}
            <div className="max-w-3xl mb-12">
              <h1 className="text-3xl sm:text-5xl font-black text-[#151515] dark:text-white tracking-tight transition-colors">
                Moments &amp;{' '}
                <span className="font-serif italic font-normal text-[#F07832]">
                  Campus Journey
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#777777] dark:text-[#C6D0DF] mt-3 transition-colors">
                All 30 genuine event photographs from university milestones at Northern University Bangladesh, competitive programming hackathons, NUBCC visual branding initiatives, and Techboloy youth ambassadorship.
              </p>
            </div>

            {/* Folder / Category Cards ("File Akare" Organization) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const FolderIcon = isSelected ? FolderOpen : Folder;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setLightboxIndex(null);
                    }}
                    className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white border-[#191919] dark:border-[#F07832] shadow-lg scale-[1.02]'
                        : 'bg-white dark:bg-[#11243D] border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white hover:border-[#F07832]/50 hover:-translate-y-1'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                          isSelected ? 'bg-[#F07832] dark:bg-white/20 text-white' : 'bg-[#F8F7F5] dark:bg-[#0B1B33] text-[#151515] dark:text-white'
                        }`}
                      >
                        <FolderIcon className="h-5 w-5" />
                      </div>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full transition-colors ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-[#F8F7F5] dark:bg-[#0B1B33] text-[#777777] dark:text-[#C6D0DF]'
                        }`}
                      >
                        {cat.count} Photos
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm sm:text-base leading-snug">{cat.label}</h4>
                      <p className={`text-[11px] mt-0.5 font-normal ${isSelected ? 'text-white/80' : 'text-[#777777] dark:text-[#C6D0DF]'}`}>
                        {cat.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer aspect-square"
                >
                  <img
                    src={photo.file_path}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Info Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                    <span className="font-mono text-[10px] text-[#F07832] font-semibold uppercase tracking-wider">
                      {photo.category_label}
                    </span>
                    <p className="font-bold text-xs sm:text-sm line-clamp-1 mt-0.5">
                      {photo.title}
                    </p>
                    <p className="text-[11px] text-white/70 line-clamp-2 mt-1 font-normal">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-white/60 mt-2 pt-2 border-t border-white/20">
                      <span>{photo.date}</span>
                      <span className="inline-flex items-center gap-1 text-[#F07832] font-semibold">
                        <Maximize2 className="h-3 w-3" />
                        <span>Preview</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer profile={profile} />

        {/* Central Fullscreen Lightbox */}
        <LightboxModal
          images={lightboxImages}
          initialIndex={lightboxIndex ?? 0}
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          projectName="Moments &amp; Campus Photo Archive"
        />
      </div>
    </>
  );
}

