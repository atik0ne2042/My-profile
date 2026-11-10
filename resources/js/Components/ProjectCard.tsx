import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, ExternalLink, Smartphone, Star, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project, ProjectImage } from '@/types';
import { IPhone17Mockup } from './IPhone17Mockup';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  onOpenLightbox: (images: ProjectImage[], index: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  reverse = false,
  onOpenLightbox,
}) => {
  return (
    <div className="relative group">
      {/* Background container */}
      <div className="relative rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] p-6 sm:p-10 hover:border-[#F07832]/40 dark:hover:border-[#F07832]/60 transition-all duration-500 shadow-sm dark:shadow-[0_10px_30px_rgba(7,20,38,0.7)] hover:shadow-lg">
        {project.is_featured && (
          <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191919] dark:bg-[#0B1B33] text-[#F8F7F5] dark:text-white border border-transparent dark:border-[#1E3A63] text-xs font-bold shadow-xs">
            <Star className="h-3 w-3 text-[#F07832] fill-[#F07832]" />
            <span>FLAGSHIP</span>
          </div>
        )}

        <div
          className={`grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Details Column */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-[#F07832] font-semibold">
                <Smartphone className="h-3.5 w-3.5" />
                <span>{project.subtitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-[#777777] dark:text-[#C6D0DF] text-sm sm:text-base leading-relaxed font-normal transition-colors">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#F07832] dark:hover:bg-[#E45826] transition-colors"
              >
                <span>View Project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] text-xs sm:text-sm font-semibold hover:border-[#151515] dark:hover:border-white/40 hover:text-[#151515] dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}

              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] text-xs sm:text-sm font-semibold hover:border-[#151515] dark:hover:border-white/40 hover:text-[#151515] dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-[#F07832]" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* iPhone 17 Showcase Frame */}
          <div className="flex justify-center items-center py-2">
            <IPhone17Mockup
              images={project.images}
              alt={project.title}
              onOpenLightbox={(idx) => onOpenLightbox(project.images, idx)}
              showSwitcher={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
