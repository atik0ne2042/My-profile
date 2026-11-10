import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Experience, GalleryPhoto, PersonalProfile, Project, ProjectImage, Skill } from '@/types';
import { Navbar } from '@/Components/Navbar';
import { Hero } from '@/Components/Hero';
import { About } from '@/Components/About';
import { Expertise } from '@/Components/Expertise';
import { PadmaTVShowcase } from '@/Components/PadmaTVShowcase';
import { ProjectCard } from '@/Components/ProjectCard';
import { Skills } from '@/Components/Skills';
import { ExperienceTimeline } from '@/Components/ExperienceTimeline';
import { GalleryPreview } from '@/Components/GalleryPreview';
import { ContactSection } from '@/Components/ContactSection';
import { Footer } from '@/Components/Footer';
import { LightboxModal } from '@/Components/LightboxModal';

interface HomeProps {
  profile: PersonalProfile;
  featuredProjects: Project[];
  allProjects: Project[];
  skills: Skill[];
  experiences: Experience[];
  galleryPhotos: GalleryPhoto[];
}

export default function Home({
  profile,
  featuredProjects,
  allProjects,
  skills,
  experiences,
  galleryPhotos,
}: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImages, setLightboxImages] = useState<ProjectImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxTitle, setLightboxTitle] = useState<string>('Project Demonstration');

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web Applications', label: 'Web Applications' },
    { id: 'Mobile Applications', label: 'Mobile Applications' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  // Find Padma TV project
  const padmaTvProject = allProjects.find((p) => p.slug === 'padma-tv');
  // Other projects excluding Padma TV when showing the special showcase
  const otherProjects = filteredProjects.filter((p) => p.slug !== 'padma-tv');

  const openLightbox = (images: ProjectImage[], index: number = 0, title?: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title || 'Application Demonstration');
    setLightboxOpen(true);
  };

  return (
    <>
      <Head>
        <title>{`${profile.full_name} — ${profile.professional_title}`}</title>
        <meta
          name="description"
          content={`Portfolio of ${profile.full_name}. ${profile.hero_description}`}
        />
      </Head>

      <div className="min-h-screen bg-[#F8F7F5] dark:bg-[#071426] text-[#151515] dark:text-[#FFFFFF] flex flex-col justify-between selection:bg-[#F07832]/20 selection:text-[#F07832] transition-colors duration-300">
        {/* Navigation */}
        <Navbar currentPath="/" />

        {/* Hero Section (Reference 01 Inspired) */}
        <Hero profile={profile} />

        {/* About Section */}
        <About profile={profile} />

        {/* Expertise Section (Reference 02 Inspired Dark Panel) */}
        <Expertise />

        {/* Work / Projects Showcase Section */}
        <section id="work" className="py-28 sm:py-36 bg-[#F8F7F5] dark:bg-[#071426] transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Work Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
                  Selected{' '}
                  <span className="font-serif italic font-normal text-[#F07832]">
                    Works &amp; Projects
                  </span>
                </h2>
                <p className="text-[#777777] dark:text-[#C6D0DF] text-sm sm:text-base mt-2 font-normal transition-colors">
                  Authentic applications, web broadcasting platforms, and utility mobile suites presented in realistic iPhone 17 and desktop browser frames.
                </p>
              </div>

              {/* Dynamic Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs self-start md:self-auto transition-colors">
                {categories.map((c) => {
                  const isSelected = selectedCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCategory(c.id)}
                      className={`rounded-xl px-4 py-1.5 text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white shadow-xs'
                          : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white'
                      }`}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SPECIAL FEATURED PROJECT: PADMA TV (Web App + Website Showcase) */}
            {padmaTvProject && (selectedCategory === 'all' || selectedCategory === 'Web Applications') && (
              <PadmaTVShowcase
                project={padmaTvProject}
                onOpenLightbox={(imgs, idx) => openLightbox(imgs, idx, padmaTvProject.title)}
              />
            )}

            {/* Other Projects List (Tour Partner Flagship, Health Assistant, IBW, etc.) */}
            <div className="space-y-12 sm:space-y-16">
              {otherProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  reverse={idx % 2 === 1}
                  onOpenLightbox={(imgs, i) => openLightbox(imgs, i, project.title)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <Skills skills={skills} />

        {/* Experience Timeline */}
        <ExperienceTimeline experiences={experiences} />

        {/* Photo Gallery Preview */}
        <GalleryPreview photos={galleryPhotos} />

        {/* Contact Form Section */}
        <ContactSection profile={profile} />

        {/* Footer */}
        <Footer profile={profile} />

        {/* Central Fullscreen Lightbox Modal */}
        <LightboxModal
          images={lightboxImages}
          initialIndex={lightboxIndex}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          projectName={lightboxTitle}
        />
      </div>
    </>
  );
}

