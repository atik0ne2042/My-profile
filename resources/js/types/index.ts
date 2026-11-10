export interface PersonalProfile {
  id: number;
  full_name: string;
  bengali_name?: string;
  professional_title: string;
  hero_badge: string;
  hero_headline: string;
  hero_italic_phrase: string;
  hero_description: string;
  about_story: string;
  email: string;
  phone?: string;
  location: string;
  university: string;
  degree: string;
  github_url?: string;
  linkedin_url?: string;
  facebook_url?: string;
  resume_url?: string;
  cv_url?: string;
  years_experience: string;
  apps_shipped: string;
  happy_clients: string;
  profile_image: string;
  campus_image: string;
}

export interface ProjectImage {
  id: number;
  project_id: number;
  file_path: string;
  caption: string;
  screen_label: string;
  image_type: 'app_screen' | 'website_screen' | 'admin_screen' | 'preview';
  orientation: 'portrait' | 'landscape';
  sort_order: number;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  description: string;
  objective: string;
  features: string[];
  technologies: string[];
  my_role: string;
  live_url?: string | null;
  github_url?: string | null;
  is_featured: boolean;
  accent_gradient: string;
  display_type: 'mobile_device' | 'browser_window' | 'hybrid';
  sort_order: number;
  images: ProjectImage[];
}

export interface Skill {
  id: number;
  name: string;
  category: 'mobile' | 'backend' | 'languages' | 'design';
  level: number;
  rating: 'Expert' | 'Advanced' | 'Proficient';
  icon_name: string;
  color_gradient: string;
  sort_order: number;
}

export interface Experience {
  id: number;
  type: 'experience' | 'education' | 'leadership';
  period: string;
  title: string;
  organization: string;
  description: string;
  is_current: boolean;
  sort_order: number;
}

export interface GalleryPhoto {
  id: number;
  title: string;
  category: 'campus' | 'workshops' | 'community';
  category_label: string;
  date: string;
  description: string;
  file_path: string;
  sort_order: number;
}

