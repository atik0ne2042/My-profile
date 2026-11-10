import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Star, 
  CheckCircle2, 
  Tv, 
  Layers, 
  Maximize2 
} from 'lucide-react';
import { GithubIcon } from '@/Components/SocialIcons';
import { PersonalProfile, Project, ProjectImage } from '@/types';
import { Navbar } from '@/Components/Navbar';
import { Footer } from '@/Components/Footer';
import { IPhone17Mockup } from '@/Components/IPhone17Mockup';
import { BrowserMockup } from '@/Components/BrowserMockup';
import { LightboxModal } from '@/Components/LightboxModal';

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
  profile: PersonalProfile;
}

export default function ProjectDetail({ project, relatedProjects, profile }: ProjectDetailProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isPadmaTv = project.slug === 'padma-tv';

  const appScreens = project.images.filter(
    (img) => img.image_type === 'app_screen' || img.image_type === 'admin_screen'
  );

  const websiteScreens = project.images.filter(
    (img) => img.image_type === 'website_screen'
  );

  return (
    <>
      <Head>
        <title>{`${project.title} — Case Study`}</title>
        <meta name="description" content={project.overview} />
      </Head>

      <div className="min-h-screen bg-[#F8F7F5] dark:bg-[#071426] text-[#151515] dark:text-[#FFFFFF] flex flex-col justify-between selection:bg-[#F07832]/20 selection:text-[#F07832] transition-colors duration-300">
        <Navbar currentPath={`/work/${project.slug}`} />

        <main className="pt-28 sm:pt-36 pb-24 flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {/* Back to Work Link */}
            <div className="mb-8">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Projects</span>
              </Link>
            </div>

            {/* SECTION 1: Project Header & Overview */}
            <div className="max-w-4xl space-y-4 mb-14">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F07832]/10 border border-[#F07832]/20 text-[#F07832] text-xs font-mono font-semibold">
                  {project.category}
                </span>
                {project.is_featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191919] dark:bg-[#0B1B33] text-[#F8F7F5] dark:text-white border border-transparent dark:border-[#1E3A63] text-xs font-bold">
                    <Star className="h-3 w-3 text-[#F07832] fill-[#F07832]" />
                    <span>FEATURED PROJECT</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#151515] dark:text-white tracking-tight leading-[1.08] transition-colors">
                {project.title}
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#777777] dark:text-[#C6D0DF] transition-colors">
                {project.subtitle}
              </p>

              <p className="text-base sm:text-lg text-[#777777] dark:text-[#C6D0DF] leading-relaxed pt-2 transition-colors">
                {project.overview}
              </p>
            </div>

            {/* Quick Metadata Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] mb-16 transition-colors">
              <div>
                <p className="text-xs font-mono text-[#777777] dark:text-[#C6D0DF]">Role &amp; Responsibility</p>
                <p className="text-sm sm:text-base font-bold text-[#151515] dark:text-white mt-1 transition-colors">{project.my_role}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-[#777777] dark:text-[#C6D0DF]">Category</p>
                <p className="text-sm sm:text-base font-bold text-[#151515] dark:text-white mt-1 transition-colors">{project.category}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-[#777777] dark:text-[#C6D0DF]">Demonstrated Screens</p>
                <p className="text-sm sm:text-base font-bold text-[#151515] dark:text-white mt-1 transition-colors">
                  {project.images.length} Verified UI Screens
                </p>
              </div>

              <div>
                <p className="text-xs font-mono text-[#777777] dark:text-[#C6D0DF]">Live Actions</p>
                <div className="flex items-center gap-3 mt-1">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#151515] dark:text-white hover:text-[#F07832] transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#F07832] hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* IF PADMA TV: Custom Multi-Section Showcase */}
            {isPadmaTv ? (
              <div className="space-y-20 mb-20">
                {/* SECTION 2: Web App Showcase (iPhone 17 Mockup with ALL 5 Screenshots) */}
                <div className="rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] p-8 sm:p-12 shadow-sm dark:shadow-[0_10px_30px_rgba(7,20,38,0.7)] transition-colors">
                  <div className="max-w-2xl mb-10">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F07832] font-semibold uppercase mb-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Mobile Web App Showcase</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#151515] dark:text-white transition-colors">
                      Padma TV Web App in iPhone 17 Frame
                    </h2>
                    <p className="text-sm sm:text-base text-[#777777] dark:text-[#C6D0DF] mt-2 transition-colors">
                      Interactive demonstration of all 5 Padma TV mobile screens. Tap the navigation arrows or dots to inspect each screen inside the authentic device chassis.
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center py-6">
                    <IPhone17Mockup
                      images={project.images}
                      alt="Padma TV Web App"
                      onOpenLightbox={(idx) => setLightboxIndex(idx)}
                      showSwitcher={true}
                    />
                  </div>
                </div>

                {/* SECTION 3: Website Showcase (Browser Mockup) */}
                <div className="rounded-3xl bg-[#191919] dark:bg-[#0B1B33] border border-transparent dark:border-[#1E3A63] text-[#F8F7F5] p-8 sm:p-12 shadow-xl dark:shadow-[0_20px_50px_rgba(7,20,38,0.9)] transition-colors">
                  <div className="max-w-2xl mb-10">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F07832] font-semibold uppercase mb-2">
                      <Globe className="h-4 w-4" />
                      <span>Desktop Newsroom Portal</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                      Associated Website &amp; Broadcasting Portal
                    </h2>
                    <p className="text-sm sm:text-base text-[#777777] dark:text-[#C6D0DF] mt-2 transition-colors">
                      The desktop and browser-responsive representation of the Padma TV news platform, equipped with real-time video feeds and editorial publishing controls.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <BrowserMockup
                      imageSrc={project.images[0]?.file_path}
                      alt="Padma TV Website Portal"
                      url={project.live_url || 'https://padmatv.net'}
                      onOpenLightbox={() => setLightboxIndex(0)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* STANDARD APP SHOWCASE (e.g. Tour Partner, Health Assistant) */
              <div className="rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] p-8 sm:p-12 shadow-sm dark:shadow-[0_10px_30px_rgba(7,20,38,0.7)] mb-20 flex flex-col items-center transition-colors">
                <div className="max-w-xl text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#151515] dark:text-white transition-colors">
                    Interactive iPhone 17 Device Presentation
                  </h2>
                  <p className="text-xs sm:text-sm text-[#777777] dark:text-[#C6D0DF] mt-1 font-mono transition-colors">
                    Explore all top-to-bottom UI screens and interaction states
                  </p>
                </div>

                <IPhone17Mockup
                  images={project.images}
                  alt={project.title}
                  onOpenLightbox={(idx) => setLightboxIndex(idx)}
                  showSwitcher={true}
                />
              </div>
            )}

            {/* SECTION 4: In-depth Description & Key Features */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start mb-20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#151515] dark:text-white transition-colors">
                    Project Objective &amp; Background
                  </h3>
                  <p className="text-[#777777] dark:text-[#C6D0DF] text-base sm:text-lg leading-relaxed mt-3 whitespace-pre-line font-normal transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
                  <h4 className="font-bold text-lg text-[#151515] dark:text-white mb-2 transition-colors">Key Problem Solved:</h4>
                  <p className="text-[#777777] dark:text-[#C6D0DF] text-sm sm:text-base leading-relaxed font-normal transition-colors">
                    {project.objective}
                  </p>
                </div>
              </div>

              {/* Features & Technologies */}
              <div className="space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] transition-colors">
                  <h4 className="font-bold text-base text-[#151515] dark:text-white uppercase tracking-wider text-xs font-mono mb-4 text-[#F07832]">
                    Core Technical Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151515] dark:text-[#C6D0DF] transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-[#F07832] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] transition-colors">
                  <h4 className="font-bold text-base text-[#151515] dark:text-white uppercase tracking-wider text-xs font-mono mb-3 text-[#F07832]">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-xs font-mono font-medium text-[#151515] dark:text-[#C6D0DF] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 5: Complete Image Gallery (Every screenshot visible with thumbnails) */}
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#151515] dark:text-white transition-colors">
                    Complete Demonstration Gallery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] dark:text-[#C6D0DF] mt-1 font-mono transition-colors">
                    All {project.images.length} authentic screenshots cataloged for {project.title}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#191919] dark:bg-[#0B1B33] text-white dark:border dark:border-[#1E3A63]">
                  {project.images.length} Screens
                </span>
              </div>

              {/* Responsive Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {project.images.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[9/16] bg-black overflow-hidden">
                      <img
                        src={img.file_path}
                        alt={img.caption || img.screen_label}
                        className="w-full h-full object-fill object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-white/90 text-[#151515] shadow-lg">
                          <Maximize2 className="h-4 w-4 text-[#F07832]" />
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-white dark:bg-[#11243D] border-t border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
                      <p className="text-xs font-bold text-[#151515] dark:text-white line-clamp-1 transition-colors">{img.screen_label}</p>
                      <p className="text-[10px] text-[#777777] dark:text-[#C6D0DF] font-mono line-clamp-1 mt-0.5 transition-colors">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Projects Navigation */}
            {relatedProjects.length > 0 && (
              <div className="pt-12 border-t border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
                <h4 className="text-xl font-bold text-[#151515] dark:text-white mb-6 transition-colors">Explore Other Projects</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/work/${rel.slug}`}
                      className="group p-5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-md transition-all flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-[#F07832] uppercase">{rel.category}</span>
                        <h5 className="font-bold text-sm text-[#151515] dark:text-white group-hover:text-[#F07832] transition-colors">{rel.title}</h5>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[#777777] dark:text-[#C6D0DF] group-hover:text-[#F07832] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer profile={profile} />

        {/* Lightbox for Gallery */}
        <LightboxModal
          images={project.images}
          initialIndex={lightboxIndex ?? 0}
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          projectName={project.title}
        />
      </div>
    </>
  );
}
