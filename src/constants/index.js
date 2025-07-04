import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  facebook,
  rar,
  scanner,
  threejs,
  lending,
  pos,
  portfolio,
  mathwork,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "TechTalk",
    icon: eduskill,
    iconBg: "#161329",
    date: "Feb 3 - Present",
    points: [
      "Developed hands-on experience in building scalable web applications using C# and ReactJS.",
      "Strengthened problem-solving and software engineering skills through real-world development tasks and collaborative projects.",
      "Gained practical knowledge of modern development workflows, including API integration, debugging, and code optimization."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "TechTalk",
    icon: mathwork,
    iconBg: "#161329",
    date: "Feb 3 - Present",
    points: [
      "Developed hands-on experience in building scalable web applications using C# and ReactJS.",
      "Strengthened problem-solving and software engineering skills through real-world development tasks and collaborative projects.",
      "Gained practical knowledge of modern development workflows, including API integration, debugging, and code optimization."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "TechTalk",
    icon: edunet,
    iconBg: "#161329",
    date: "Feb 3 - Present",
    points: [
      "Developed hands-on experience in building scalable web applications using C# and ReactJS.",
      "Strengthened problem-solving and software engineering skills through real-world development tasks and collaborative projects.",
      "Gained practical knowledge of modern development workflows, including API integration, debugging, and code optimization."
    ],
  },
];

export const projects = [
  {
    name: "rentaride: Vehicle Rental and Tracking Platform",
    description:
      "RentaRide is a full-stack web application designed for efficient vehicle rental management. Built with Next.js for the frontend and PostgreSQL for the database, the platform allows customers to browse, reserve, and manage vehicle rentals with ease. The project emphasizes performance, security, and a seamless user experience.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Prisma", color: "pink-text-gradient" },
      { name: "NeonDB", color: "pink-text-gradient" },
    ],
    image: rar,
    source_code_link: "https://rentaridev2.vercel.app",
  },
  {
    name: "POS System",
    description:
      "A fully functional Point of Sale (POS) system built with ReactJS for the frontend and PHP for the backend, using MySQL as the database. It features API-based data fetching for smooth and dynamic operations, enabling efficient transaction processing, inventory management, and sales tracking.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
    ],
    image: pos,
    source_code_link: "https://github.com/cygullem/POS_System_ReactVite_PHP",
  },
  {
    name: "Lending App",
    description:
      "A fully functional Lending Application built with C# MVC and Bootstrap, featuring user authentication and a responsive interface. The system allows users to manage loan transactions, track balances, and securely handle account-related operations.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "MVC", color: "green-text-gradient" },
      { name: "Auth", color: "pink-text-gradient" },
      { name: "Bootstrap 5", color: "pink-text-gradient" },
    ],
    image: lending,
    source_code_link:
      "https://github.com/cygullem/GullemsUtanganan",
  },
  {
    name: "Portfolio Website",
    description:
      "A fully functional Portfolio Website built with ReactJS, TailwindCSS, and Framer Motion. This responsive single-page application showcases my skills, projects, and experiences, providing visitors with an interactive and engaging platform to explore.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "ThreeJS", color: "pink-text-gradient" },
      { name: "EmailJS", color: "pink-text-gradient" },
    ],

    image: portfolio,
    source_code_link: "https://github.com/cygullem/Gullem-Portfolio",
  },
  {
    name: "Facebook Clone Project",
    description:
      "A fully functional Facebook clone developed as a midterm project. Built using jQuery, Ajax, and PHP for the backend, with MySQL as the database. The platform includes core social networking features such as user authentication, posting, commenting, and real-time interactions.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "PHP", color: "pink-text-gradient" },
      { name: "Ajax", color: "green-text-gradient" },
    ],
    image: facebook,
    source_code_link: "https://github.com/cygullem/FACEBOOK-Midterm",
  },
  {
    name: "QR Code Scanner",
    description:
      "A fully functional QR Code Scanner built entirely with JavaScript. Designed to work seamlessly on both desktop and mobile devices, it scans QR codes, displays the results, and optionally redirects users to the embedded links for quick access.",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: scanner,
    source_code_link: "https://github.com/cygullem/JS_QR_Code",
  },
];
