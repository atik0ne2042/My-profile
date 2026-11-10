import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Globe, Database, Palette, Cpu } from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const capabilities = [
    {
      num: '01',
      title: 'MOBILE APPLICATION ARCHITECTURE',
      short: 'Production-ready cross-platform iOS & Android engineering with Flutter & Dart, native Android Java, Provider state management, and 60fps fluid UI.',
      icon: Smartphone,
      tags: ['Flutter', 'Dart', 'Android Java', 'Clean Architecture', '60fps UI'],
    },
    {
      num: '02',
      title: 'FULL-STACK WEB DEVELOPMENT',
      short: 'Robust web applications and digital broadcasting systems built with modern Laravel, PHP, React, Inertia.js, TypeScript, and responsive Tailwind CSS.',
      icon: Globe,
      tags: ['Laravel', 'PHP', 'React', 'Inertia.js', 'TypeScript', 'Tailwind'],
    },
    {
      num: '03',
      title: 'CLOUD BACKENDS & REALTIME DATA',
      short: 'Reactive data architectures powered by Firebase (Firestore, Auth, Storage) and Supabase PostgreSQL with realtime synchronization and offline-first caching.',
      icon: Database,
      tags: ['Firebase', 'Cloud Firestore', 'Supabase', 'RESTful APIs', 'Offline-First'],
    },
    {
      num: '04',
      title: 'UI/UX DESIGN & ACCURATE MOCKUPS',
      short: 'Human-centered user experience design, high-fidelity wireframing, design systems, and pixel-perfect mobile device presentations with realistic device chassis.',
      icon: Palette,
      tags: ['UI/UX Design', 'Device Mockups', 'Design Systems', 'Micro-Interactions'],
    },
    {
      num: '05',
      title: 'SYSTEM RELIABILITY & PERFORMANCE',
      short: 'Engineering high-concurrency systems, video streaming pipelines, optimized SQL queries, form validation with rate limiting, and zero-latency loading.',
      icon: Cpu,
      tags: ['Performance', 'Video Streaming', 'SQLite/MySQL', 'Security'],
    },
  ];

  return (
    <section id="expertise" className="relative py-28 sm:py-36 bg-[#191919] dark:bg-[#071426] text-[#F8F7F5] overflow-hidden transition-colors duration-300 dark:border-y dark:border-[#1E3A63]">
      {/* Subtle ambient orange glow */}
      <div
        className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F07832 0%, rgba(240, 120, 50, 0) 70%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1.35fr] gap-12 lg:gap-16 items-start">
          {/* Left Column (Reference 02 Inspired) */}
          <div className="space-y-6 lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F8F7F5] leading-[1.05]">
              Services &amp; <br />
              <span className="bg-gradient-to-r from-[#F07832] via-[#FF8A48] to-[#FFB088] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <p className="text-[#777777] dark:text-[#C6D0DF] text-base sm:text-lg leading-relaxed font-normal max-w-lg transition-colors">
              I bridge creative visual design and disciplined software engineering. From architectural diagrams and mobile UI kits to production deployment on Google Play and high-traffic web environments.
            </p>

            {/* Compact Stats Panel (Reference 02 Inspired) */}
            <div className="pt-4 grid grid-cols-2 gap-3 max-w-md">
              <div className="p-4 rounded-2xl bg-[#222222] dark:bg-[#11243D] border border-[#333333] dark:border-[#1E3A63] transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F07832]">10+</p>
                <p className="text-xs text-[#F8F7F5] font-semibold mt-0.5">Shipped Apps</p>
                <p className="text-[11px] text-[#777777] dark:text-[#C6D0DF] font-mono mt-0.5">Flutter &amp; Web</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#222222] dark:bg-[#11243D] border border-[#333333] dark:border-[#1E3A63] transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F8F7F5]">60fps</p>
                <p className="text-xs text-[#F8F7F5] font-semibold mt-0.5">Native UI</p>
                <p className="text-[11px] text-[#777777] dark:text-[#C6D0DF] font-mono mt-0.5">Zero Lag</p>
              </div>
            </div>

            {/* Availability Note */}
            <div className="pt-2 flex items-center gap-2.5 text-xs font-mono text-[#777777] dark:text-[#C6D0DF]">
              <span className="h-2 w-2 rounded-full bg-[#F07832] animate-pulse" />
              <span>Open for Contract, Full-Stack &amp; Mobile Roles</span>
            </div>
          </div>

          {/* Right Column: Numbered Bordered Expertise Accordion/List (Reference 02 Inspired) */}
          <div className="divide-y divide-[#333333] dark:divide-[#1E3A63] border-t border-b border-[#333333] dark:border-[#1E3A63] transition-colors">
            {capabilities.map((item, idx) => {
              const isOpen = activeItem === idx;
              const Icon = item.icon;

              return (
                <div
                  key={item.num}
                  className="group py-6 sm:py-8 transition-colors cursor-pointer"
                  onClick={() => setActiveItem(isOpen ? null : idx)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-mono text-sm text-[#F07832] font-semibold mt-1">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide group-hover:text-[#F07832] transition-colors flex items-center gap-2.5">
                          <span>{item.title}</span>
                        </h3>
                        <p className="mt-2 text-sm text-[#777777] dark:text-[#C6D0DF] leading-relaxed max-w-xl font-normal transition-colors">
                          {item.short}
                        </p>

                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 mt-3.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#222222] dark:bg-[#0B1B33] text-[#F8F7F5]/80 dark:text-[#C6D0DF] border border-[#333333] dark:border-[#1E3A63] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#333333] dark:border-[#1E3A63] group-hover:border-[#F07832] group-hover:bg-[#F07832] text-[#F8F7F5] group-hover:text-white transition-all shrink-0">
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

