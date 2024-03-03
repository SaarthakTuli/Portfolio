import { FaGithub, FaLinkedin, FaDribbble, FaItchIo } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  nextjs,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  buildnow,
  aws,
  cpp,
  java,
  ml,
  mysql,
  python,
  swiftui,
  shoppy,
  dashy,
  metaverses,
  vionix,
  sggscc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "IOS Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SwiftUI",
    icon: swiftui,
  },
];

const experiences = [
  {
    title: "Machine Learning Resarch Intern",
    company_name: "SGGSCC, DU",
    company_website: "https://www.sggscc.ac.in/",
    icon: sggscc,
    date: "June 2022 - present",
    points: [
      "Research Project - A Solution on effective ailment analysis: Case Study on COVID During Pandemic",
      "Research Paper - Analysis of Computational Intelligence Techniques for COVID-19 Prediction",
      "Research Paper - Detection of COVID-19 using Stacked Machine Learning Models: An Empirical Investigation",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Buildnow",
    company_website: "https://www.buildnow.sa/",
    icon: buildnow,
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining the software using React.js and other related technologies",
      "Collaborating with backend team to work on API call fixes",
      "Implimenting and Unit Testing design Components in Storybook for the new NextJS Application",
      "Participating in design and code reviews for Version 3.0",
    ],
  },
  {
    title: "Machine Learning Resarch Intern",
    company_name: "Vionix Biosciences",
    company_website: "https://www.vionix.bio/",
    icon: vionix,
    date: "September 2023 - present",
    points: [
      "Developing models for Analysis of Mass Spectometry Data",
      "Running Automated ML tests in Azure on the models",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shoppy-IO",
    description:
      "Web-based E-Commerce platform with intergrated payment services for Boat products",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: shoppy,
    source_code_link: "https://github.com/SaarthakTuli/shoppy-io",
    live_site_link: "https://shoppy-io.netlify.app",
  },
  {
    name: "Dashy",
    description:
      "A React Web application that acts as a dashboard viewing to supercharge managers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: dashy,
    source_code_link: "https://github.com/SaarthakTuli/admin-dashboard",
    live_site_link: "https://dashy-admin.netlify.app/",
  },
  {
    name: "Metaverses",
    description:
      "Web-based Application which shows the power of 3D Rendering and smooth motion animations with NextJS",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "motion",
        color: "pink-text-gradient",
      },
    ],
    image: metaverses,
    source_code_link: "https://github.com/SaarthakTuli/metaverses",
    live_site_link: "https://multiverse-madness.netlify.app/",
  },
];

const contactLinks = [
  {
    icon: FaLinkedin,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/saarthak-tuli-5395aa1ab/",
  },
  {
    icon: FaGithub,
    name: "Github",
    href: "https://github.com/SaarthakTuli",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    href: "https://dribbble.com/Saarthak_Tuli",
  },
  {
    icon: FaItchIo,
    name: "Itch.io",
    href: "https://codertuli.itch.io/",
  },
  {
    icon: MdEmail,
    name: "Email",
    href: "mailto:saarthaktuli@gmail.com",
  },
  // {
  //   icon: SiGooglescholar,
  //   name: "Google Scholar",
  //   href: "",
  // },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contactLinks,
};
