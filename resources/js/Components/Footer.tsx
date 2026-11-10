import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { PersonalProfile } from '@/types';

interface FooterProps {
  profile: PersonalProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] dark:bg-[#071426] text-[#F8F7F5] pt-16 pb-12 border-t border-[#222222] dark:border-[#1E3A63] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Brand & Identity Hierarchy */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F07832] text-white font-extrabold text-base shadow-sm mb-1">
            A
          </div>
          <h3 className="font-extrabold text-2xl tracking-tight text-[#F8F7F5]">
            Atik Hasan
          </h3>
          <p className="text-sm font-medium text-[#F07832]/90 tracking-wide font-mono">
            Software Engineer &middot; App Developer
          </p>
        </div>

        {/* Clean Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-medium text-[#777777] dark:text-[#C6D0DF] py-6 border-y border-[#252525] dark:border-[#1E3A63] transition-colors">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#expertise" className="hover:text-white transition-colors">Services &amp; Expertise</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="/gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center justify-center gap-3 pt-6 pb-2">
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] dark:bg-[#11243D] border border-[#333333] dark:border-[#1E3A63] text-[#777777] dark:text-[#C6D0DF] hover:text-[#F07832] dark:hover:text-[#F07832] hover:border-[#F07832] dark:hover:border-[#F07832] transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}

          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F07832] text-white hover:bg-white hover:text-[#151515] transition-colors ml-2 shadow-xs"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
