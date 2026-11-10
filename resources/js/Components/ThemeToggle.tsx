import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/Context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#F07832]/40 ${
        isDark
          ? 'bg-[#11243D] border border-[#1E3A63] text-[#F5A623] hover:bg-[#163050] hover:border-[#2A4D7E] shadow-inner'
          : 'bg-white/80 border border-[#E8E5E2] text-[#555555] hover:text-[#151515] hover:bg-[#F8F7F5] shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative h-4 w-4 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`h-4 w-4 transition-all duration-300 transform ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-[#FFB020]'
              : 'opacity-0 -rotate-90 scale-0 pointer-events-none absolute'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`h-4 w-4 transition-all duration-300 transform ${
            isDark
              ? 'opacity-0 rotate-90 scale-0 pointer-events-none absolute'
              : 'opacity-100 rotate-0 scale-100 text-[#151515]'
          }`}
        />
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-medium text-[#151515] dark:text-[#C6D0DF]">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

