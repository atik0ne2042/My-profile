import React from 'react';
import { GraduationCap, Code2, Rocket, Users, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';
import { PersonalProfile } from '@/types';

interface AboutProps {
  profile: PersonalProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const stats = [
    {
      Icon: Code2,
      value: profile.years_experience || '3+',
      label: 'Years Experience',
      detail: 'Mobile & Web Development',
    },
    {
      Icon: Rocket,
      value: profile.apps_shipped || '10+',
      label: 'Apps Shipped',
      detail: 'Flutter, Android & Web',
    },
    {
      Icon: Users,
      value: profile.happy_clients || '20+',
      label: 'Happy Clients',
      detail: 'Freelance & Production Work',
    },
    {
      Icon: ShieldCheck,
      value: '60fps',
      label: 'Native Performance',
      detail: 'Smooth Responsive Architecture',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white/40 dark:bg-[#0B1B33]/60 border-y border-[#E8E5E2]/80 dark:border-[#1E3A63] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Identity */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151515] dark:text-white tracking-tight transition-colors">
                Authentic Drive,{' '}
                <span className="font-serif italic font-normal text-[#F07832]">
                  Meticulous Craft.
                </span>
              </h2>
            </div>

            {/* University Tag */}
            <div className="inline-flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#191919] dark:bg-[#0B1B33] text-[#F8F7F5] shadow-xs dark:border dark:border-[#1E3A63]">
                <GraduationCap className="h-5 w-5 text-[#F07832]" />
              </div>
              <div>
                <p className="text-xs text-[#777777] dark:text-[#C6D0DF] font-mono">{profile.degree || 'B.Sc. in Computer Science & Eng.'}</p>
                <p className="text-sm font-bold text-[#151515] dark:text-white">{profile.university || 'Northern University Bangladesh'}</p>
              </div>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-[#777777] dark:text-[#C6D0DF] text-base sm:text-lg leading-relaxed font-normal transition-colors">
              <p>
                I'm <strong className="text-[#151515] dark:text-white font-semibold">Atik Hasan</strong> — a Software Developer specializing in mobile application and web development based in Dhaka, Bangladesh. I design, develop, and optimize responsive, scalable, and user-friendly software solutions with a strong focus on clean code, efficient problem-solving, and reliable performance.
              </p>
              <p>
                My core expertise spans cross-platform mobile engineering with <strong className="text-[#151515] dark:text-white font-semibold">Flutter &amp; Dart</strong>, robust backend APIs with <strong className="text-[#151515] dark:text-white font-semibold">Laravel &amp; PHP</strong>, reactive data stores with <strong className="text-[#151515] dark:text-white font-semibold">MySQL &amp; Firebase</strong>, and modern frontends with <strong className="text-[#151515] dark:text-white font-semibold">React &amp; Tailwind CSS</strong>.
              </p>
              <p>
                Currently pursuing my B.Sc. in Computer Science &amp; Engineering at <strong className="text-[#151515] dark:text-white font-semibold">Northern University Bangladesh (2024 – Present)</strong>. In addition to engineering, I serve as <strong className="text-[#151515] dark:text-white font-semibold">Senior Graphic Secretary at NUB Computer Club (NUBCC)</strong> and contributed as Junior Software Developer at <strong className="text-[#151515] dark:text-white font-semibold">Neurootix IT</strong>.
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
                <Compass className="h-4 w-4 text-[#F07832] shrink-0" />
                <span className="text-xs font-semibold text-[#151515] dark:text-white">Avid Traveler &amp; Explorer</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] transition-colors">
                <HeartHandshake className="h-4 w-4 text-[#191919] dark:text-[#F07832] shrink-0" />
                <span className="text-xs font-semibold text-[#151515] dark:text-white">Community Builder &amp; Mentor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics Panel Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
            {stats.map(({ Icon, value, label, detail }, idx) => (
              <div
                key={label}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs hover:border-[#F07832]/60 dark:hover:border-[#F07832]/80 hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(7,20,38,0.7)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white group-hover:text-[#F07832] group-hover:border-[#F07832]/30 mb-5 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
                  {value}
                </div>
                <p className="mt-2 text-sm font-bold text-[#151515] dark:text-white transition-colors">{label}</p>
                <p className="text-xs text-[#777777] dark:text-[#C6D0DF] mt-0.5 font-mono transition-colors">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

