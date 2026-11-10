import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import Home from './Pages/Home';
import ProjectDetail from './Pages/ProjectDetail';
import GalleryArchive from './Pages/GalleryArchive';
import {
  profile,
  allProjects,
  featuredProjects,
  skills,
  experiences,
  galleryPhotos,
} from './data/portfolioData';

export function StandaloneApp() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Handle /resume redirect
  if (currentPath === '/resume' || currentPath === '/resume/') {
    window.location.href = '/cv/Atik_Hasan_CV.pdf';
    return null;
  }

  // Handle /gallery
  if (currentPath === '/gallery' || currentPath === '/gallery/') {
    return (
      <ThemeProvider>
        <GalleryArchive photos={galleryPhotos} profile={profile} />
      </ThemeProvider>
    );
  }

  // Handle /work/:slug
  if (currentPath.startsWith('/work/')) {
    const slug = currentPath.replace(/^\/work\//, '').replace(/\/$/, '');
    const project = allProjects.find((p) => p.slug === slug);

    if (project) {
      const relatedProjects = allProjects
        .filter((p) => p.id !== project.id)
        .slice(0, 3);

      return (
        <ThemeProvider>
          <ProjectDetail project={project} relatedProjects={relatedProjects} />
        </ThemeProvider>
      );
    }
  }

  // Default: Home Page
  return (
    <ThemeProvider>
      <Home
        profile={profile}
        featuredProjects={featuredProjects}
        allProjects={allProjects}
        skills={skills}
        experiences={experiences}
        galleryPhotos={galleryPhotos}
      />
    </ThemeProvider>
  );
}
