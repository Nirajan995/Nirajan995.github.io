import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  beyondid,
  okta,
  auth0,
  mavens,
  encoders,
  Spiralogics,
  discussion,
  thirdParty,
  application,
  uiDesign,
  portpro,
  coding,
  devops,
  database,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Application Development",
    icon: coding,
  },
  {
    title: "Mobile App Development",
    icon: application,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Frontend Development",
    icon: uiDesign,
  },
  {
    title: "DevOps and Deployment",
    icon: devops,
  },
  {
    title: "Database Design and Management",
    icon: database,
  },
  {
    title: "Consulting and Training",
    icon: discussion,
  },
  {
    title: "Third-Party Integration",
    icon: thirdParty,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "okta",
    icon: okta,
  },
  {
    name: "auth0",
    icon: auth0,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "PortPro.",
    icon: portpro,
    iconBg: "#f2fcfc",
    date: "Feb 2025 - Present",
  },
  {
    title: "Full Stack Developer",
    company_name: "BeyondID.",
    icon: beyondid,
    iconBg: "#f2fcfc",
    date: "Jan 2023 - Feb 2025",
  },
  {
    title: "Software Engineer",
    company_name: "Spiralogics International.",
    icon: Spiralogics,
    iconBg: "#f2fcfc",
    date: "Feb 2022 - Jan 2023",
  },
  {
    title: "MERN STACK DEVELOPER",
    company_name: "Encoders Inc.",
    icon: encoders,
    iconBg: "#f2fcfc",
    date: "Feb 2021 - Jan 2022",
  },
  {
    title: "Maven Solutions",
    company_name: "MERN DEVELOPER.",
    icon: mavens,
    iconBg: "#f2fcfc",
    date: "Feb 2020 - Jan 2021",
  },
];

const educations = [
  {
    title: "Masters's in Computer Science",
    schoolname: "Lincoln International College.",
    icon: "https://lincoln.edu.my/wp-content/uploads/2021/06/cropped-logoLincoln.png",
    iconBg: "#f2fcfc",
    date: "2023 - 2025",
  },
  {
    title: " Bachelor's in Computer Engineering",
    schoolname: "Advanced College of Engineering.",
    icon: "https://acem.edu.np/assets/images/300xNxacem-logo.png.pagespeed.ic.CJ0_AoG-XF.webp",
    iconBg: "#f2fcfc",
    date: "2017 - 2021",
  },

];

const projects = [
  {
    id: "project-1",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, educations, technologies, experiences, projects };
