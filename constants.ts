import { Project, Experience, SkillCategory } from "./types";

// Import images from the images folder
import task from "./images/task.png";
import learn from "./images/learn.png";
import blog from "./images/blog.png";
import wedding from "./images/wedding.png";
import shop from "./images/shop.png";
import agric from "./images/agric.png";

export const PORTFOLIO_DATA = {
  name: "Tinomudaishe Kutama",
  title: "Software Developer",
  tagline: "Innovative software solutions that make a difference.",
  about:
    "I am a passionate software engineer with a strong background in web development, UI/UX design, and digital marketing. I love creating applications that are not only functional but also visually stunning and user-friendly.",
  location: "Harare, Zimbabwe",
  email: "tino@example.com",
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Software Development",
    skills: ["JavaScript", "React", "HTML/CSS", "Python", "Node.js"],
  },
  {
    name: "Design",
    skills: ["Figma", "UI/UX Principles"],
  },
  {
    name: "Marketing",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"],
  },
  {
    name: "AI & Tools",
    skills: ["Gemini API", "Git", "VS Code"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Junior Developer",
    company: "Tech Solutions",
    period: "2025 - Present",
    description: [
      "Leading frontend development teams.",
      "Implementing responsive designs.",
      "Optimizing web performance.",
    ],
  },
  {
    id: "2",
    role: "UI/UX Designer",
    company: "Creative Studio",
    period: "2025 - 2025",
    description: [
      "Designed user interfaces for mobile and web.",
      "Conducted user research.",
      "Created high-fidelity prototypes.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p0",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and boosting personal efficiency.",
    tags: ["React", "Productivity", "Task Management"],
    imageUrl: task,
    liveUrl: "https://task-omega-brown-70.vercel.app/",
  },
  {
    id: "p1",
    title: "Learning Platform",
    description:
      "An interactive platform for online learning and course management.",
    tags: ["React", "Education", "E-Learning"],
    imageUrl: learn,
    liveUrl: "https://brave-new-learn.vercel.app/",
  },
  {
    id: "p2",
    title: "Blog CMS",
    description:
      "A full-featured content management system for managing and publishing blog posts.",
    tags: ["React", "CMS", "Blog"],
    imageUrl: blog,
    liveUrl: "https://blogcms-4xsp.vercel.app/",
  },
  {
    id: "p3",
    title: "Portfolio Website",
    description:
      "A professional portfolio website showcasing various projects and skills.",
    tags: ["React", "UI/UX", "Website"],
    imageUrl: shop,
    liveUrl: "https://ty-6959.vercel.app/",
  },
  {
    id: "p4",
    title: "Wedding Website",
    description:
      "A beautiful and elegant wedding website to share the special day with loved ones.",
    tags: ["React", "UI/UX", "Website"],
    imageUrl: wedding,
    liveUrl: "https://wedding-chi-flame.vercel.app/",
  },
  {
    id: "p5",
    title: "Agriculture Platform",
    description:
      "An innovative digital solution for modern farming and agricultural management.",
    tags: ["React", "Agriculture", "Website"],
    imageUrl: agric,
    liveUrl: "https://farm7-pypo.vercel.app/",
  },
];