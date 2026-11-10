import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isHome = currentPath === '/' || currentPath === '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHome) return;

      const sections = ['home', 'about', 'expertise', 'work', 'skills', 'experience', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: 'Home', href: isHome ? '#home' : '/' },
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Expertise', href: isHome ? '#expertise' : '/#expertise' },
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { label: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      {/* Floating Pill Container (Reference 01 Inspired) */}
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#071426]/90 backdrop-blur-xl shadow-lg dark:shadow-[0_8px_30px_rgba(7,20,38,0.7)] border border-[#E8E5E2] dark:border-[#1E3A63] py-2 sm:py-2.5'
            : 'bg-white/70 dark:bg-[#071426]/80 backdrop-blur-md shadow-sm dark:shadow-[0_4px_20px_rgba(7,20,38,0.5)] border border-[#E8E5E2]/80 dark:border-[#1E3A63]/80'
        }`}
        aria-label="Main Navigation"
      >
        {/* Monogram / Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[#151515] dark:text-white font-bold text-sm tracking-tight"
          aria-label="atik.dev Home"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#191919] dark:bg-[#11243D] text-[#F8F7F5] dark:border dark:border-[#1E3A63] font-extrabold text-sm transition-transform group-hover:scale-105 shadow-sm">
            <span>A</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F07832] -ml-0.5 -mt-2" />
          </div>
          <span className="inline-block font-mono font-bold text-sm sm:text-base tracking-tight text-[#151515] dark:text-white">
            atik<span className="text-[#F07832]">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((link) => {
            const isActive = isHome
              ? activeSection === link.href.replace('#', '')
              : currentPath === link.href;

            return link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#151515] dark:text-white font-semibold bg-[#151515]/5 dark:bg-white/10'
                    : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white hover:bg-[#151515]/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.label === 'Gallery' && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-[#F07832]/10 text-[#F07832] font-mono">
                    30
                  </span>
                )}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#151515] dark:text-white font-semibold bg-[#151515]/5 dark:bg-white/10'
                    : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white hover:bg-[#151515]/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle (Available on both Desktop & Mobile navbar) */}
          <ThemeToggle />

          <a
            href={isHome ? '#contact' : '/#contact'}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white text-xs font-semibold hover:bg-[#F07832] dark:hover:bg-[#E45826] transition-colors shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-[#C6D0DF] hover:bg-[#151515]/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-3xl bg-white/95 dark:bg-[#0B1B33]/95 backdrop-blur-2xl border border-[#E8E5E2] dark:border-[#1E3A63] shadow-2xl pointer-events-auto flex flex-col gap-2 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E5E2] dark:border-[#1E3A63]">
            <span className="font-mono font-bold text-sm tracking-tight text-[#151515] dark:text-white">
              atik<span className="text-[#F07832]">.dev</span>
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle showLabel />
              <span className="text-[11px] font-mono text-[#777777] dark:text-[#C6D0DF]">Dhaka, BD</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#151515] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white hover:bg-[#F8F7F5] dark:hover:bg-[#11243D] border border-transparent hover:border-[#E8E5E2] dark:hover:border-[#1E3A63] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#777777] dark:text-[#C6D0DF]">&rarr;</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E5E2] dark:border-[#1E3A63] flex items-center justify-between text-xs text-[#777777] dark:text-[#C6D0DF]">
            <a
              href="/cv/Atik_Hasan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white text-[11px] font-semibold hover:bg-[#F07832] transition-colors"
            >
              <span>View CV</span>
            </a>
            <span className="flex items-center gap-1.5 text-[11px] font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

