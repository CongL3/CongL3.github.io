import { AppCategory, AppData, JobData, StatData } from './types';
import { Smartphone, Code2, Download, Trophy } from 'lucide-react';

export const HERO_CONTENT = {
  name: "Cong Le",
  title: "Principal iOS Developer",
  subtitle: "Principal iOS Engineer at Capital One. 10+ years building intuitive, high-impact mobile products.",
  blurb: "I'm a relaxed and diligent individual with a mantra of gravitating towards the positive. From building enterprise-scale banking apps to personal utilities used by over 500k people, I love solving problems with code.",
  profileImage: "https://github.com/CongL3.png",
  email: "anniversarytrackerteamcong@gmail.com",
  appStoreLink: "https://apps.apple.com/gb/developer/cong-le/id954373766",
  githubLink: "https://github.com/CongL3",
  linkedinLink: "https://www.linkedin.com/in/cong-le-ios/",
  xLink: "https://x.com/CongLe",
};

export const STATS: StatData[] = [
  { label: "Experience", value: "10+ Years", icon: Code2, description: "iOS Development" },
  { label: "Apps", value: "12+", icon: Smartphone, description: "On App Store" },
  { label: "Downloads", value: "500k+", icon: Download, description: "Total Users" },
  { label: "Rating", value: "4.7⭐", icon: Trophy, description: "Average" },
];

export const EXPERIENCE: JobData[] = [
  {
    id: "capone-principal",
    role: "Principal iOS Developer",
    company: "Capital One",
    location: "Nottingham, UK",
    period: "Dec 2021 - Present",
    isCurrent: true,
    description: [
      "Highest contributor to the iOS repository across the entire team.",
      "Leading architecture modernization and tackling legacy codebase challenges.",
      "Driving cross-functional collaboration with design, product, and QA.",
      "Mentoring team members and driving best practices."
    ],
    technologies: ["Swift", "SwiftUI", "UIKit", "Architecture", "CI/CD"]
  },
  {
    id: "esl-teacher",
    role: "English Second Language Teacher",
    company: "Career Break / Transition",
    period: "2020 - 2021",
    description: [
      "Developed communication and leadership skills in a different context.",
      "Managed classrooms and educational planning."
    ],
    technologies: ["Communication", "Planning", "Leadership"]
  },
  {
    id: "capone-senior",
    role: "Senior iOS Developer",
    company: "Capital One",
    location: "London, UK",
    period: "2015 - 2018",
    description: [
      "Senior contributor to major banking features.",
      "Collaborated on large-scale enterprise applications."
    ],
    technologies: ["Objective-C", "Swift", "Jenkins", "TDD"]
  },
  {
    id: "wonder-dev",
    role: "iOS Developer",
    company: "Wonder PL",
    location: "London, UK",
    period: "2013 - 2014",
    description: [
      "Early career iOS development focusing on media applications."
    ],
    technologies: ["iOS SDK", "Objective-C", "Xcode"]
  }
];

export const APPS: AppData[] = [
  {
    id: "anniversary",
    name: "Anniversary Tracker",
    category: AppCategory.UTILITIES,
    description: "Record your anniversaries with you and your partner. The most popular app in the portfolio.",
    downloads: "450k+",
    rating: 4.7,
    iconColor: "bg-red-500",
    iconUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=200&h=200&q=80",
    isFeatured: true,
    screenshots: ["https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "linksaver",
    name: "Link Saver",
    category: AppCategory.UTILITIES,
    description: "Fast and easy bookmark management for your favorite URLs.",
    iconColor: "bg-emerald-500",
    iconUrl: "https://images.unsplash.com/photo-1481487484168-9b930d55208d?auto=format&fit=crop&w=200&h=200&q=80",
    screenshots: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "cardvalue",
    name: "Card Value Tracker",
    category: AppCategory.ENTERTAINMENT,
    description: "Track the value of your Pokemon trading card collection.",
    iconColor: "bg-yellow-500",
    iconUrl: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=200&h=200&q=80",
    screenshots: ["https://images.unsplash.com/photo-1601985705806-0b6673209299?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "sunrise",
    name: "Sunrise & Sunset Tracker",
    category: AppCategory.WEATHER,
    description: "Accurate solar tracking for photographers and outdoor enthusiasts.",
    iconColor: "bg-amber-500",
    iconUrl: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&w=200&h=200&q=80",
    screenshots: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop"]
  },
  {
    id: "vidcomp",
    name: "VidCompression",
    category: AppCategory.PHOTO_VIDEO,
    description: "Efficient video compression tool to save space on your device.",
    iconColor: "bg-blue-500",
    iconUrl: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "photocomp",
    name: "Photo Image Compression",
    category: AppCategory.PHOTO_VIDEO,
    description: "Optimize your photo library by compressing images without losing quality.",
    iconColor: "bg-purple-500",
    iconUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "birthday",
    name: "Birthday Tracker",
    category: AppCategory.PRODUCTIVITY,
    description: "Never forget a birthday again with automated reminders.",
    iconColor: "bg-pink-500",
    iconUrl: "https://images.unsplash.com/photo-1557844191-40736d139d25?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "lullaby",
    name: "Lullaby Pal - White Noise",
    category: AppCategory.LIFESTYLE,
    description: "Soothing sounds to help babies and adults sleep better.",
    iconColor: "bg-indigo-400",
    iconUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "todo",
    name: "To Do List - One Focus",
    category: AppCategory.PRODUCTIVITY,
    description: "Minimalist task management focusing on one thing at a time.",
    iconColor: "bg-orange-500",
    iconUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "waterplants",
    name: "Water Them Plants",
    category: AppCategory.LIFESTYLE,
    description: "Plant care reminders to keep your green friends alive. (1k+ downloads)",
    iconColor: "bg-green-600",
    iconUrl: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "pomodoro",
    name: "Pomodoro Timer: Focus",
    category: AppCategory.PRODUCTIVITY,
    description: "Time management technique implementation for better productivity.",
    iconColor: "bg-red-400",
    iconUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "mortgage",
    name: "Mortgage Calculator",
    category: AppCategory.FINANCE,
    description: "Simple financial tool to calculate mortgage repayments.",
    iconColor: "bg-cyan-600",
    iconUrl: "https://images.unsplash.com/photo-1565514020176-dbf2277f230e?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "coupledays",
    name: "Couple Days Counter",
    category: AppCategory.LIFESTYLE,
    description: "Track relationship milestones and days together.",
    iconColor: "bg-rose-500",
    iconUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "driving",
    name: "Driving Theory Test UK 2025",
    category: AppCategory.EDUCATION,
    description: "Complete preparation guide for the UK driving theory test.",
    iconColor: "bg-slate-700",
    iconUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=200&h=200&q=80"
  }
];