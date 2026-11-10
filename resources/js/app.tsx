import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './Context/ThemeContext';

const appName = import.meta.env.VITE_APP_NAME || 'Atik Hasan';

createInertiaApp({
  title: (title) => (title ? `${title} — ${appName}` : `${appName} — Software Engineer & Mobile Specialist`),
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
    const page = pages[`./Pages/${name}.tsx`];
    if (!page) {
      throw new Error(`Page "./Pages/${name}.tsx" not found.`);
    }
    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <ThemeProvider>
        <App {...props} />
      </ThemeProvider>
    );
  },
  progress: {
    color: '#F07832',
  },
});

