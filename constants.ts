import { AppCategory, AppData, JobData, StatData } from './types';
import { Smartphone, Code2, Download, Trophy } from 'lucide-react';

export const HERO_CONTENT = {
  name: "Cong Le",
  title: "Principal iOS Engineer",
  subtitle: "Principal iOS Engineer at Capital One. 10+ years building intuitive, high-impact mobile products.",
  blurb: "I build iOS products that are clean, fast, and genuinely useful — from enterprise banking experiences to indie utilities used by 500k+ people.",
  profileImage: "https://github.com/CongL3.png",
  email: "anniversarytrackerteamcong@gmail.com",
  appStoreLink: "https://apps.apple.com/gb/developer/cong-le/id954373766",
  githubLink: "https://github.com/CongL3",
  linkedinLink: "https://www.linkedin.com/in/cong-le-ios/",
  xLink: "https://x.com/CongLe",
};

export const STATS: StatData[] = [
  { label: "Experience", value: "10+ Years", icon: Code2, description: "iOS Engineering" },
  { label: "Apps", value: "11+", icon: Smartphone, description: "Live on App Store" },
  { label: "Downloads", value: "500k+", icon: Download, description: "Portfolio-wide" },
  { label: "Flagship", value: "250k+", icon: Trophy, description: "Anniversary Tracker" },
];

export const EXPERIENCE: JobData[] = [
  {
    id: "capone-principal",
    role: "Principal iOS Engineer",
    company: "Capital One",
    location: "Nottingham, UK",
    period: "Dec 2021 - Present",
    isCurrent: true,
    description: [
      "Leading architecture modernization across a large iOS codebase.",
      "Driving delivery across product, design, and QA in a regulated environment.",
      "Raising engineering quality through testing, CI/CD, and team standards.",
      "Mentoring engineers and shaping technical direction for long-term scalability."
    ],
    technologies: ["Swift", "SwiftUI", "UIKit", "Architecture", "CI/CD"]
  },
  {
    id: "career-break",
    role: "Career Break",
    company: "Teaching & Personal Development",
    period: "2019 - 2021",
    description: [
      "Focused on communication, mentoring, and leadership in education settings.",
      "Strengthened coaching and people skills now applied to engineering leadership."
    ],
    technologies: ["Communication", "Leadership", "Coaching"]
  },
  {
    id: "capone-senior",
    role: "Senior iOS Engineer",
    company: "Capital One",
    location: "London, UK",
    period: "2015 - 2018",
    description: [
      "Built and shipped core banking features used by large customer cohorts.",
      "Partnered across disciplines to maintain reliability and release quality."
    ],
    technologies: ["Objective-C", "Swift", "Jenkins", "TDD"]
  }
];

export const APPS: AppData[] = [
  {
    id: "anniversary",
    name: "Anniversary Tracker",
    category: AppCategory.UTILITIES,
    description: "The flagship relationship tracker for anniversaries, countdowns, and meaningful milestones.",
    downloads: "250k+",
    rating: 4.7,
    iconColor: "bg-rose-500",
    iconUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=200&h=200&q=80",
    isFeatured: true,
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766",
    screenshots: ["https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "cardvalue",
    name: "Card Value Tracker for Pokemon",
    category: AppCategory.ENTERTAINMENT,
    description: "Track Pokémon card prices and monitor collection value in one place.",
    iconColor: "bg-yellow-500",
    iconUrl: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766",
    screenshots: ["https://images.unsplash.com/photo-1601985705806-0b6673209299?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "kids-timer",
    name: "Kids Timer - Visual Countdown",
    category: AppCategory.PRODUCTIVITY,
    description: "Visual routine timers designed to help kids stay focused and independent.",
    iconColor: "bg-blue-500",
    iconUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "sunrise",
    name: "Sunrise & Sunset Tracker",
    category: AppCategory.WEATHER,
    description: "Accurate daylight and golden-hour timing for creators and outdoor plans.",
    iconColor: "bg-amber-500",
    iconUrl: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766",
    screenshots: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "vidcompress",
    name: "VidCompress - Video Compressor",
    category: AppCategory.PHOTO_VIDEO,
    description: "Compress large videos quickly while keeping quality good enough to share.",
    iconColor: "bg-indigo-500",
    iconUrl: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "photo-compression",
    name: "Photo Image Compression",
    category: AppCategory.PHOTO_VIDEO,
    description: "Reduce image size to save storage and speed up sharing.",
    iconColor: "bg-purple-500",
    iconUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "birthday",
    name: "Birthday Reminder & Countdowns",
    category: AppCategory.PRODUCTIVITY,
    description: "Smart birthday reminders with countdowns so important dates never slip.",
    iconColor: "bg-pink-500",
    iconUrl: "https://images.unsplash.com/photo-1557844191-40736d139d25?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "link-saver",
    name: "Link Saver - fast and easy",
    category: AppCategory.UTILITIES,
    description: "Lightweight link manager to quickly save and organize useful URLs.",
    iconColor: "bg-emerald-500",
    iconUrl: "https://images.unsplash.com/photo-1481487484168-9b930d55208d?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766",
    screenshots: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "lullaby",
    name: "Lullaby Pal - White Noise",
    category: AppCategory.LIFESTYLE,
    description: "Calming white noise and ambient sounds for sleep and focus.",
    iconColor: "bg-sky-500",
    iconUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "learn-japanese",
    name: "Learn Japanese",
    category: AppCategory.EDUCATION,
    description: "Build Japanese vocabulary and daily language habits with bite-sized practice.",
    iconColor: "bg-red-400",
    iconUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "fish-finder",
    name: "Fish Finder · AI Identifier",
    category: AppCategory.LIFESTYLE,
    description: "Identify fish species with AI and keep useful details close while outdoors.",
    iconColor: "bg-cyan-600",
    iconUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  },
  {
    id: "pomodoro",
    name: "Pomodoro timer: Focus",
    category: AppCategory.PRODUCTIVITY,
    description: "Simple focus sessions and breaks based on the Pomodoro method.",
    iconColor: "bg-orange-500",
    iconUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=200&h=200&q=80",
    url: "https://apps.apple.com/gb/developer/cong-le/id954373766"
  }
];