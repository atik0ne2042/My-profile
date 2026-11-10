import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    // Default to Light Mode. Only use Dark Mode if visitor explicitly saved 'dark' or ?theme=dark
    let initialTheme: Theme = 'light';
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme') as Theme | null;
      if (themeParam === 'dark' || themeParam === 'light') {
        localStorage.setItem('theme', themeParam);
        initialTheme = themeParam;
      } else {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme === 'dark') {
          initialTheme = 'dark';
        } else {
          initialTheme = 'light';
        }
      }
    } catch (_) {}

    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (t: Theme) => {
    if (typeof document === 'undefined') return;
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (_) {}
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
