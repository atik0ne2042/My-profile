import React, { useState } from 'react';
import { 
  Smartphone, 
  Database, 
  Code2, 
  Palette, 
  Terminal, 
  Flame, 
  Cpu, 
  Layers, 
  Globe, 
  FileCode2, 
  Boxes
} from 'lucide-react';
import { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'languages', label: 'Languages' },
    { id: 'design', label: 'UI/UX & Web' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'Code2': return Code2;
      case 'Terminal': return Terminal;
      case 'Flame': return Flame;
      case 'Globe': return Globe;
      case 'Database': return Database;
      case 'Boxes': return Boxes;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Palette': return Palette;
      case 'FileCode2': return FileCode2;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#F8F7F5] dark:bg-[#071426] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] dark:text-white tracking-tight transition-colors">
              Skills &amp;{' '}
              <span className="font-serif italic font-normal text-[#F07832]">
                Technologies
              </span>
            </h2>
            <p className="text-[#777777] dark:text-[#C6D0DF] text-sm sm:text-base mt-2 font-normal transition-colors">
              A comprehensive breakdown of programming languages, frameworks, design tools, and platforms actively used in production.
            </p>
          </div>

          {/* Minimal Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] shadow-xs self-start md:self-auto transition-colors">
            {categories.map((c) => {
              const isSelected = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((s) => {
            const Icon = getIcon(s.icon_name);

            return (
              <div
                key={s.name}
                className="group p-5 rounded-2xl bg-white dark:bg-[#11243D] border border-[#E8E5E2] dark:border-[#1E3A63] hover:border-[#F07832]/50 dark:hover:border-[#F07832]/70 transition-all duration-300 hover:-translate-y-1 shadow-xs dark:shadow-[0_10px_25px_rgba(7,20,38,0.7)] hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F7F5] dark:bg-[#0B1B33] border border-[#E8E5E2] dark:border-[#1E3A63] text-[#151515] dark:text-white group-hover:text-[#F07832] group-hover:border-[#F07832]/30 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#151515] dark:text-white transition-colors">
                      {s.level}%
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#151515] dark:text-white group-hover:text-[#F07832] transition-colors">
                    {s.name}
                  </h3>
                  <span className="font-mono text-[11px] text-[#777777] dark:text-[#C6D0DF] transition-colors">
                    {s.rating}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="pt-4 mt-2 border-t border-[#E8E5E2]/60 dark:border-[#1E3A63] transition-colors">
                  <div className="h-1.5 rounded-full bg-[#E8E5E2] dark:bg-[#0B1B33] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#F07832] transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

