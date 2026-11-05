import heroPagodaImg from '../assets/images/hero_pagoda_temple_1790008901202.jpg';
import docWomanImg from '../assets/images/doc_elderly_woman_1790008913446.jpg';
import commBottlesImg from '../assets/images/commercial_product_bottles_1790008929432.jpg';
import shortFilmImg from '../assets/images/short_film_dialogue_1790008940822.jpg';
import newLogoImg from '../assets/images/falcha_new_logo_1790009341436.jpg';
import phoenixMarkImg from '../assets/images/falcha_phoenix_cinema_logo_1790009581979.jpg';
import fullBrandLogoImg from '../assets/images/falcha_full_brand_logo_1790009602460.jpg';
import asdLogoImg from '../assets/images/falcha_asd_logo_1790009819892.jpg';

import { CategoryInfo, WorkItem } from '../types';

export const ASSETS = {
  heroPagoda: heroPagodaImg,
  docWoman: docWomanImg,
  commercialBottles: commBottlesImg,
  shortFilm: shortFilmImg,
  emblem: newLogoImg,
  phoenixMark: phoenixMarkImg,
  fullBrandLogo: fullBrandLogoImg,
  asdLogo: asdLogoImg,
};

// Main Featured Showreel (The Pagoda Temple in the center)
export const MAIN_SHOWREEL: WorkItem = {
  id: 'falcha-main-showreel',
  category: 'documentaries',
  title: 'The Stone Whispers: Heritage of the Kathmandu Valley',
  nepaliTitle: 'ढुङ्गाका स्वरहरू : उपत्यकाको सम्पदा',
  clientOrFestival: 'Official Studio Showreel 2026',
  year: '2026',
  duration: '03:45',
  thumbnail: heroPagodaImg,
  // High quality royalty-free cinematic video sample
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  synopsis:
    'An evocative cinematic celebration of Nepal’s architectural sanctuary, ancient courtyards, and communal Falchas where human tales have been woven for centuries.',
  director: 'John Rai Thakuri',
  cinematographer: 'Falcha Collective',
  awards: ['Best Cinematography - Himalayan Film Festival', 'Official Selection - Mountain Echoes'],
  tags: ['Showreel', 'Cinematography', 'Cultural Heritage', '4K Drone & 35mm'],
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'documentaries',
    title: 'DOCUMENTARIES',
    devanagari: 'डकुमेन्टारिज',
    borderColorClass: 'border-[#5cb8b2]',
    borderHex: '#5cb8b2',
    glowHex: 'rgba(92, 184, 178, 0.35)',
    thumbnail: docWomanImg,
    description: 'Immersive non-fiction stories grounded in lived human dignity, oral traditions, and mountain culture.',
    featuredWork: {
      id: 'doc-elders-valley',
      category: 'documentaries',
      title: 'Voices of the Hearth',
      nepaliTitle: 'चुल्हाका सुस्केराहरू',
      clientOrFestival: 'KIMFF (Kathmandu International Mountain Film Festival)',
      year: '2025',
      duration: '28:12',
      thumbnail: docWomanImg,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      synopsis:
        'A poignant portrait of Aama and her generation preserving indigenous textile weaving and songs across the changing valleys of the Himalayas.',
      director: 'Falcha Documentary Unit',
      cinematographer: 'P. Shrestha',
      awards: ['Audience Choice - KIMFF 2025', 'Special Jury Mention - South Asian Heritage Cinema'],
      tags: ['Indigenous Heritage', 'Portrait', 'Human Rights', 'Highlands'],
    },
  },
  {
    id: 'commercials',
    title: 'COMMERCIALS',
    devanagari: 'कमर्सियल्स',
    borderColorClass: 'border-white/70',
    borderHex: '#e2e8f0',
    glowHex: 'rgba(255, 255, 255, 0.28)',
    thumbnail: commBottlesImg,
    description: 'High-production value television commercials, brand manifestos, and product launches with cinematic flair.',
    featuredWork: {
      id: 'comm-himalayan-elixir',
      category: 'commercials',
      title: 'Himalayan Nectar: Pure Reserve',
      nepaliTitle: 'हिमालयन नेक्टर : मौलिक स्वाद',
      clientOrFestival: 'Himalayan Craft Beverage Co.',
      year: '2026',
      duration: '01:00',
      thumbnail: commBottlesImg,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      synopsis:
        'Tactile macro cinematography, fluid physics, and dramatic studio chiaroscuro highlighting pure botanical ingredients and artisanal glasswork.',
      director: 'Commercial Studio Dept.',
      cinematographer: 'Falcha High-Speed Camera Unit',
      awards: ['Best Commercial Campaign - Brand Nepal Gala 2025'],
      tags: ['Product Cinematography', 'Phantom High Speed', 'Lighting Design'],
    },
  },
  {
    id: 'short_films',
    title: 'SHORT FILMS',
    devanagari: 'सर्ट फिल्म्स',
    borderColorClass: 'border-[#e07a68]',
    borderHex: '#e07a68',
    glowHex: 'rgba(224, 122, 104, 0.35)',
    thumbnail: shortFilmImg,
    description: 'Narrative cinema exploring intimate human connections, love, nostalgia, and psychological realism.',
    featuredWork: {
      id: 'short-evening-light',
      category: 'short_films',
      title: 'The Evening Light',
      nepaliTitle: 'साँझको किरण',
      clientOrFestival: 'Pokhara Indie Shorts & Clermont-Ferrand Market',
      year: '2025',
      duration: '16:40',
      thumbnail: shortFilmImg,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      synopsis:
        'Two childhood friends reunite in a warm Kathmandu apartment after seven years apart, unraveling promises spoken in their youth.',
      director: 'Falcha Narrative Team',
      cinematographer: 'S. Bajracharya',
      awards: ['Best Narrative Short - Nepal Cine Guild', 'Winner Best Screenplay - Indie Focus'],
      tags: ['Narrative Fiction', 'Drama', '35mm Aesthetic', 'Original Score'],
    },
  },
];

export const STUDIO_SERVICES = [
  {
    title: 'Cinematic Direction & Production',
    nepali: 'चलचित्र निर्देशन तथा निर्माण',
    desc: 'Complete end-to-end film production from script development, location scouting in the Himalayas, casting, and multi-camera 4K/6K cinema pipeline.',
  },
  {
    title: 'Documentary Research & Field Crews',
    nepali: 'वृत्तचित्र अनुसन्धान र फिल्ड टिम',
    desc: 'Deep ethnographical research, ethical community engagement, high-altitude expedition filming, and sensitive interview direction.',
  },
  {
    title: 'Commercials & Brand Storytelling',
    nepali: 'व्यापारिक विज्ञापन र ब्रान्डिङ',
    desc: 'High-concept television commercials, social-first films, product tabletop cinematography, and brand launch films.',
  },
  {
    title: 'Post-Production, Color & Sound',
    nepali: 'रङ्ग संयोजन र साउन्ड डिजाइन',
    desc: 'DaVinci Resolve HDR color grading, original orchestral & indigenous musical scoring, Dolby Atmos 7.1 sound mixing.',
  },
];

export const STUDIO_ABOUT = {
  title: 'Falcha Filmation Studio',
  tagline: 'Storytelling in Motion',
  nepaliTagline: 'कथाको जीवन्त गतिशीलता',
  story:
    'A "Falcha" (फल्चा) in traditional Newar architecture is an open public pavilion where travelers rest, community elders converse, and generations have shared folk tales under carved wooden eaves. Falcha Filmation Studio was founded on this very philosophy: an open creative haven where authentic stories from the heart of Nepal meet contemporary cinematic craft.',
  stats: [
    { label: 'Festival Laurels', value: '24+' },
    { label: 'Commercial Campaigns', value: '60+' },
    { label: 'Documentaries Produced', value: '18' },
    { label: '4K Cinema Pipeline', value: 'HDR / RAW' },
  ],
};
