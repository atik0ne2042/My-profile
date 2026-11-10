import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ExternalLink, ArrowUpRight, Star, Smartphone, Globe, Shield, Tv, Play, CheckCircle2 } from 'lucide-react';
import { Project, ProjectImage } from '@/types';
import { IPhone17Mockup } from './IPhone17Mockup';
import { BrowserMockup } from './BrowserMockup';

interface PadmaTVShowcaseProps {
  project: Project;
  onOpenLightbox: (images: ProjectImage[], index: number) => void;
}

export const PadmaTVShowcase: React.FC<PadmaTVShowcaseProps> = ({ project, onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'webapp' | 'website'>('webapp');

  const appScreens = project.images.filter(
    (img) => img.image_type === 'app_screen' || img.image_type === 'admin_screen'
  );

  // Lead public screen for website preview
  const leadPublicScreen = project.images[0] || appScreens[0];

  return (
    <div className="relative group/showcase mb-16 sm:mb-24">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#F07832]/30 via-rose-500/20 to-amber-500/30 blur-xl opacity-50 group-hover/showcase:opacity-80 transition-opacity duration-700" />

      {/* Main Showcase Container */}
      <div className="relative rounded-[2.5rem] bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-[0_20px_50px_rgba(7,20,38,0.9)] transition-colors duration-300">
        {/* Header Tags & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8E5E2] dark:border-[#1E3A63]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F07832] text-white text-xs font-bold shadow-sm">
              <Star className="h-3 w-3 fill-white" />
              <span>Featured Project</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#151515]/5 dark:bg-white/10 text-[#151515] dark:text-[#C6D0DF] text-xs font-mono font-medium">
              Web App + Newsroom Platform
            </span>
          </div>

          {/* Presentation Switcher Toggle (Web App Mobile vs Website Desktop) */}
          <div className="inline-flex p-1 rounded-full bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
            <button
              type="button"
              onClick={() => setActiveTab('webapp')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'webapp'
                  ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white shadow-xs'
                  : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>iPhone 17 Web App</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">5</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('website')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'website'
                  ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white shadow-xs'
                  : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white'
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Website Portal</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center pt-8">
          {/* Left Column: Project Overview & Deep Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F07832] font-semibold uppercase tracking-wider mb-2">
                <Tv className="h-3.5 w-3.5" />
                <span>24/7 Digital News &amp; Broadcast</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] dark:text-white tracking-tight transition-colors">
                {project.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#777777] dark:text-[#C6D0DF] mt-1 font-normal transition-colors">
                {project.subtitle}
              </p>
            </div>

            <p className="text-[#777777] dark:text-[#C6D0DF] text-base leading-relaxed font-normal transition-colors">
              {project.overview}
            </p>

            {/* Editorial Role & Architecture Highlight */}
            <div className="p-4 rounded-2xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] space-y-2 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#777777] dark:text-[#C6D0DF]">Architecture &amp; Role:</span>
                <span className="font-semibold text-[#151515] dark:text-white">{project.my_role}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#777777] dark:text-[#C6D0DF]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#F07832] shrink-0" />
                <span>Full editorial CMS with live streams, 7 upazilas &amp; reader bookmarks</span>
              </div>
            </div>

            {/* Key Capabilities List */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-[#777777] dark:text-[#C6D0DF] font-semibold">
                Demonstrated Features in Screenshots:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#151515] dark:text-[#C6D0DF] font-medium">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F07832]" />
                  <span>24/7 Live TV Stream Player</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F07832]" />
                  <span>Manikganj 7 Upazilas Directory</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F07832]" />
                  <span>Video Newsroom with Tags</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F07832]" />
                  <span>Executive Newsroom Admin CMS</span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white font-semibold text-sm shadow-md hover:bg-[#F07832] dark:hover:bg-[#E45826] transition-colors"
              >
                <span>Explore Full Case Study</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] font-semibold text-sm hover:border-[#151515] dark:hover:border-white/50 hover:text-[#151515] dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-[#F07832]" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Device Showcase (Dynamic according to activeTab) */}
          <div className="flex flex-col items-center justify-center py-4">
            {activeTab === 'webapp' ? (
              <div className="flex flex-col items-center">
                <IPhone17Mockup
                  images={appScreens}
                  alt="Padma TV Web App"
                  onOpenLightbox={(idx) => onOpenLightbox(appScreens, idx)}
                  showSwitcher={true}
                />
                <p className="mt-4 text-xs font-mono text-[#777777] dark:text-[#C6D0DF] text-center transition-colors">
                  iPhone 17 Mockup &bull; Tap dots or arrows to switch between all 5 screens
                </p>
              </div>
            ) : (
              <div className="w-full max-w-lg">
                <BrowserMockup
                  imageSrc={leadPublicScreen.file_path}
                  alt="Padma TV Website News Portal"
                  url={project.live_url || 'https://padmatv.net'}
                  title="Padma TV — 24/7 Digital News Portal"
                  onOpenLightbox={() => onOpenLightbox(project.images, 0)}
                />
                <p className="mt-3 text-xs font-mono text-[#777777] dark:text-[#C6D0DF] text-center transition-colors">
                  Desktop Browser View &bull; Live news feed &amp; broadcast layout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

