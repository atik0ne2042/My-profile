import React, { useState } from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const workItems = experiences.filter((e) => e.type === 'experience');
  const educationItems = experiences.filter((e) => e.type === 'education');

  const activeItems = activeTab === 'work' ? workItems : educationItems;

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-white/50 dark:bg-[#0B1B33]/50 border-t border-[#E8E5E2]/80 dark:border-[#1E3A63] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
            Experience &amp;{' '}
            <span className="font-serif italic font-normal text-[#F07832]">
              Education
            </span>
          </h2>
          <p className="text-[#777777] dark:text-[#C6D0DF] text-sm sm:text-base max-w-xl mx-auto mt-2 font-normal transition-colors">
            A verified timeline of my engineering roles, independent client projects, leadership responsibilities, and academic training.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs mt-8 transition-colors">
            <button
              type="button"
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white shadow-xs'
                  : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              <span>Work &amp; Leadership</span>
              <span className="text-[10px] font-mono opacity-70">({workItems.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-[#191919] dark:bg-[#F07832] text-[#F8F7F5] dark:text-white shadow-xs'
                  : 'text-[#777777] dark:text-[#C6D0DF] hover:text-[#151515] dark:hover:text-white'
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Education &amp; Campus</span>
              <span className="text-[10px] font-mono opacity-70">({educationItems.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-4">
          {activeItems.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/50 dark:hover:border-[#F07832]/70 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F07832]" />
                  <h3 className="font-bold text-base sm:text-lg text-[#151515] dark:text-white group-hover:text-[#F07832] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <span
                  className={`font-mono text-xs px-3 py-1 rounded-full self-start sm:self-auto ${
                    item.is_current
                      ? 'bg-[#F07832]/10 border border-[#F07832]/30 text-[#F07832] font-semibold'
                      : 'bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#777777] dark:text-[#C6D0DF]'
                  }`}
                >
                  {item.period}
                </span>
              </div>

              <p className="font-mono text-xs text-[#151515] dark:text-white font-semibold mb-2 pl-5 transition-colors">
                {item.organization}
              </p>

              <p className="text-xs sm:text-sm text-[#777777] dark:text-[#C6D0DF] leading-relaxed pl-5 font-normal transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

