import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiRedux,
  SiChakraui,
  SiReactquery,
} from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io5"

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
]

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
]

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Real Projects Developed" },
  { value: 1000, suffix: "+", label: "Hours Spent Solving Problems" },
  { value: 10, suffix: "+", label: "Core Skills (React, Next, TS, Sass...)" },
]

const iconSkills = [
  { imgPath: "/i-s/icon1.svg" },
  { imgPath: "/i-s/icon2.png" },
  { imgPath: "/i-s/icon10.svg" },
  { imgPath: "/i-s/icon11.png" },
  { imgPath: "/i-s/icon12.svg" },
  { imgPath: "/i-s/icon3.svg" },
  { imgPath: "/i-s/icon4.svg" },
  { imgPath: "/i-s/icon5.svg" },
  { imgPath: "/i-s/icon6.svg" },
  { imgPath: "/i-s/icon7.svg" },
  { imgPath: "/i-s/icon8.svg" },
  { imgPath: "/i-s/icon9.png" },
]

const expCards = [
  {
    review:
      "Frontend-focused developer with strong experience in React and Next.js. Specialized in building dynamic, high-performance web applications and transforming designs into clean, scalable UI components.",

    imgPath: "/images/logo.webp",
    logoPath: "/images/logo.webp",

    title: "React & Next.js Developer",
    date: "Jan 2023 – Present",

    strengths: [
      "Scalable React Architecture",
      "Performance Optimization",
      "Reusable UI Components",
      "API Integration & Auth Flows",
      "Responsive & Accessible UI",
    ],

    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Git",
    ],

    responsibilities: [
      "Developed and maintained production-ready web applications using React.js and Next.js.",
      "Converted static websites into fully dynamic platforms with improved UI/UX and animations.",
      "Built a full Content Management Dashboard (CMS) for managing services, projects, and media.",
      "Implemented authentication, API integrations, and data validation.",
      "Optimized application performance and responsiveness across devices.",
    ],
  },
]

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
]

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
]

const socialImgs = [
  {
    name: "Linkedin",
    imgPath: FaLinkedin,
    link: "https://www.linkedin.com/in/amr-emam-0558b4246/",
  },
  {
    name: "Github",
    imgPath: FaGithub,
    link: "https://github.com/Amremam-1",
  },
  {
    name: "Facebook",
    imgPath: FaFacebook,
    link: "https://www.facebook.com/amr.emam.335602/",
  },
  {
    name: "Whatsapp",
    imgPath: IoLogoWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=201065621168&text&type=phone_number&app_absent=0",
  },
]

const mainProject = {
  title: "Nestretto Coffee",
  description:
    "An App built with React.js for a fast, user-friendly experience",
  image: "/images/project1.jpeg",
  alt: "Nestretto Coffee",
  tools: [SiReact, FaSass, SiFirebase, SiRedux],
  liveLink: "https://nestrettocoffee.com/",
}

const otherProjects = [
  {
    title: "Video Games Explorer",
    image: "/images/2.jpg",
    alt: "Video Games Explorer",
    tools: [SiNextdotjs, SiTypescript, SiTailwindcss, SiChakraui, SiReactquery],
    liveLink: "https://gamevortex.netlify.app/",
  },
  {
    title: "OpenWeather Forecast",
    image: "/images/dd.png",
    alt: "OpenWeather Forecast",
    tools: [SiNextdotjs, SiTailwindcss],
    liveLink: "https://weather-app-blush-psi-75.vercel.app/",
  },
]

export {
  counterItems,
  words,
  expCards,
  abilities,
  expLogos,
  socialImgs,
  navLinks,
  iconSkills,
  mainProject,
  otherProjects,
}
