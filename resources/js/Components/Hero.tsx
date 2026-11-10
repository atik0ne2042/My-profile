import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, MessageSquare, FileText, CheckCircle2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { PersonalProfile } from '@/types';

interface HeroProps {
  profile: PersonalProfile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [isMobileInCenter, setIsMobileInCenter] = useState<boolean>(false);

  // Animated professional designation alternation
  const designations = ['Software Engineer', 'App Developer'];
  const [designationIndex, setDesignationIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setDesignationIndex((prev) => (prev + 1) % designations.length);
        setIsFading(false);
      }, 400);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // Phone / Mobile only: when photo scrolls into the middle zone of the screen, turn colorful automatically
  useEffect(() => {
    const checkMobileCenter = () => {
      // ONLY apply automated scroll centering on mobile / phone viewports (< 1024px)
      if (typeof window === 'undefined' || window.innerWidth >= 1024) {
        setIsMobileInCenter(false);
        return;
      }

      if (!portraitRef.current) return;
      const rect = portraitRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;

      // In phone version, when element center is within the middle 40% of the screen (30% to 70% height)
      const inCenter = elementCenter >= windowHeight * 0.30 && elementCenter <= windowHeight * 0.70;
      setIsMobileInCenter(inCenter);
    };

    window.addEventListener('scroll', checkMobileCenter, { passive: true });
    window.addEventListener('resize', checkMobileCenter, { passive: true });
    checkMobileCenter();

    return () => {
      window.removeEventListener('scroll', checkMobileCenter);
      window.removeEventListener('resize', checkMobileCenter);
    };
  }, []);

  const cvPath = profile.cv_url || '/cv/Atik_Hasan_CV.pdf';

  return (
    <section id="home" className="relative min-h-[660px] lg:min-h-[760px] flex items-center pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden transition-colors duration-300">
      {/* Light Mode Soft Ambient Radial Peach & Pink Glow */}
      <div
        className="absolute top-10 right-0 sm:right-10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full pointer-events-none opacity-80 blur-3xl dark:hidden"
        style={{
          background: 'radial-gradient(circle, #F6D5CB 0%, #F9E9E7 45%, rgba(248, 247, 245, 0) 75%)',
        }}
        aria-hidden="true"
      />

      {/* Dark Mode Ambient Midnight Navy & Cyan Glow */}
      <div
        className="absolute top-10 right-0 sm:right-10 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full pointer-events-none opacity-60 blur-3xl hidden dark:block"
        style={{
          background: 'radial-gradient(circle, rgba(16, 47, 86, 0.8) 0%, rgba(14, 116, 144, 0.25) 45%, rgba(7, 20, 38, 0) 75%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial CTAs */}
          <div className="space-y-6 sm:space-y-7 max-w-2xl">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#11243D]/90 border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs text-xs font-medium text-[#151515] dark:text-[#C6D0DF] transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F07832] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F07832]" />
              </span>
              <span>{profile.hero_badge || 'Available for Freelance & Software Roles'}</span>
            </div>

            {/* Prominent Personal Identity with Animated Gradient Designation */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#151515] dark:text-white leading-[1.04] transition-colors">
                Atik Hasan
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-[#151515] dark:text-white flex items-center gap-2.5 sm:gap-3 flex-wrap transition-colors">
                <span className="text-[#151515]/80 dark:text-[#C6D0DF] font-normal transition-colors">I am</span>
                <span
                  className={`inline-block font-bold bg-gradient-to-r from-[#F07832] via-[#E45826] to-[#F58F54] bg-clip-text text-transparent transition-all duration-400 ease-out transform ${
                    isFading ? 'opacity-0 -translate-y-2.5 scale-95' : 'opacity-100 translate-y-0 scale-100'
                  }`}
                >
                  {designations[designationIndex]}
                </span>
              </div>
            </div>

            {/* Sub-intro Text starting directly with specialization */}
            <p className="text-base sm:text-lg text-[#777777] dark:text-[#C6D0DF] leading-relaxed max-w-xl font-normal transition-colors">
              Specializing in mobile application and web development with Flutter, Dart, Laravel, and React. Passionate about clean code, efficient problem-solving, application performance, and delivering reliable software through modern development practices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white font-semibold text-sm shadow-md hover:bg-[#F07832] dark:hover:bg-[#E45826] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white font-semibold text-sm shadow-xs hover:border-[#151515] dark:hover:border-white/40 hover:bg-[#F8F7F5] dark:hover:bg-[#163050] transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 text-[#777777] dark:text-[#C6D0DF]" />
                <span>Let's Talk</span>
              </a>

              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-3.5 rounded-full bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] text-xs font-semibold text-[#151515] dark:text-[#C6D0DF] shadow-xs hover:border-[#F07832] hover:text-[#F07832] dark:hover:text-[#F07832] transition-all duration-200"
                title="Open and view CV (PDF) with download option"
              >
                <FileText className="h-3.5 w-3.5 text-[#F07832]" />
                <span>View CV</span>
              </a>
            </div>

            {/* Metrics & Social Link Bar */}
            <div className="pt-4 border-t border-[#E8E5E2] dark:border-[#1E3A63] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {[
                  { href: profile.github_url || 'https://github.com/atik0ne2042', Icon: GithubIcon, label: 'GitHub' },
                  { href: profile.linkedin_url, Icon: LinkedinIcon, label: 'LinkedIn' },
                  { href: profile.facebook_url, Icon: FacebookIcon, label: 'Facebook' },
                  { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
                ].filter(s => s.href).map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#777777] dark:text-[#C6D0DF] hover:text-[#F07832] hover:border-[#F07832] dark:hover:text-[#F07832] dark:hover:border-[#F07832] transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex items-center gap-4 text-xs font-mono text-[#777777] dark:text-[#C6D0DF] transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#F07832]" />
                  <span>{profile.apps_shipped || '10+'} Apps Built</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#F07832]" />
                  <span>60fps Native UI</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Portrait with Light Mode Peach & Dark Mode Navy-Cyan Glow */}
          <div className="relative flex justify-center items-end lg:justify-end">
            <div
              ref={portraitRef}
              className="relative max-w-sm sm:max-w-md w-full group/portrait"
              title="Hover on desktop or scroll to center on mobile to reveal full color"
            >
              {/* Light Mode: Ambient Glow backing */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#F6D5CB]/40 to-transparent blur-2xl -z-10 dark:hidden" />

              {/* Dark Mode: Multi-layer soft Navy-Blue and Blue-Cyan gradient glow behind portrait */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-[#102F56]/90 via-[#0E7490]/35 to-[#1E3A63]/80 blur-2xl -z-10 hidden dark:block transition-all duration-500"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#102F56]/60 to-[#0B1B33]/80 blur-lg -z-10 hidden dark:block"
                aria-hidden="true"
              />

              {/* Portrait Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(7,20,38,0.9),0_0_30px_rgba(16,47,86,0.6)] border border-white/60 dark:border-[#1E3A63] bg-gradient-to-b from-white/40 to-white/10 dark:from-[#11243D]/90 dark:to-[#0B1B33]/90 transition-all duration-300">
                <img
                  src={profile.profile_image}
                  alt={profile.full_name}
                  className={`w-full h-auto object-cover object-top filter transition-all duration-700 ease-out max-h-[520px] ${
                    isMobileInCenter
                      ? 'grayscale-0 contrast-100 scale-[1.01]'
                      : 'grayscale contrast-105 group-hover/portrait:grayscale-0 group-hover/portrait:contrast-100 group-hover/portrait:scale-[1.01]'
                  }`}
                  loading="eager"
                />

                {/* Soft Bottom Gradient Fade into canvas */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F7F5] dark:from-[#071426] via-[#F8F7F5]/70 dark:via-[#071426]/70 to-transparent pointer-events-none transition-colors duration-300" />

                {/* Floating Monogram Verification Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/85 dark:bg-[#0B1B33]/90 backdrop-blur-md border border-[#E8E5E2] dark:border-[#1E3A63] shadow-lg dark:shadow-[0_10px_30px_rgba(7,20,38,0.8)] flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#191919] dark:bg-[#11243D] text-white text-[11px] font-bold dark:border dark:border-[#1E3A63]">
                      A
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#151515] dark:text-white leading-none transition-colors">{profile.full_name}</p>
                      <p className="text-[10px] font-mono text-[#777777] dark:text-[#C6D0DF] mt-0.5 transition-colors">{profile.professional_title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {/* Color Active: Off by default on desktop, visible on hover. On phone, visible when scrolled to center. */}
                    <span
                      className={`items-center gap-1 text-[9px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800 px-1.5 py-0.5 rounded-full border border-emerald-200 transition-all duration-300 ${
                        isMobileInCenter
                          ? 'inline-flex opacity-100'
                          : 'hidden opacity-0 group-hover/portrait:inline-flex group-hover/portrait:opacity-100'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Color Active
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#F07832]/10 text-[#F07832] border border-[#F07832]/20">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle floating badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#11243D]/90 backdrop-blur-md border border-[#E8E5E2] dark:border-[#1E3A63] shadow-sm text-[11px] font-mono text-[#151515] dark:text-white transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F07832]" />
                <span>Flutter &bull; Laravel &bull; React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
