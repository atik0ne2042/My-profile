import data from './portfolioData.json';
import { PersonalProfile, Project, Skill, Experience, GalleryPhoto } from '@/types';

export const profile: PersonalProfile = data.profile as unknown as PersonalProfile;
export const allProjects: Project[] = data.allProjects as unknown as Project[];
export const featuredProjects: Project[] = data.featuredProjects as unknown as Project[];
export const skills: Skill[] = data.skills as unknown as Skill[];
export const experiences: Experience[] = data.experiences as unknown as Experience[];
export const galleryPhotos: GalleryPhoto[] = data.galleryPhotos as unknown as GalleryPhoto[];

