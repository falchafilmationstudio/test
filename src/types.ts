export interface WorkItem {
  id: string;
  category: 'documentaries' | 'commercials' | 'short_films';
  title: string;
  nepaliTitle?: string;
  clientOrFestival?: string;
  year: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  synopsis: string;
  director?: string;
  cinematographer?: string;
  awards?: string[];
  tags: string[];
}

export interface CategoryInfo {
  id: 'documentaries' | 'commercials' | 'short_films';
  title: string;
  devanagari: string;
  borderColorClass: string;
  borderHex: string;
  glowHex: string;
  thumbnail: string;
  featuredWork: WorkItem;
  description: string;
}

export type NavSection = 'work' | 'services' | 'about' | 'contact';
