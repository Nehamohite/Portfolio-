import {
 web,
 mobile,
 backend,
 creator,
  bharat,
  AI,
  Modernbank,
  Hotstar,
  threejs,
  html,
  css,
  tailwind,
  react,
  programmer,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "UI Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
const technologies = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "React JS",
    icon: react,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    "title": "Freelancer",
    "date": "June 2022 - Present",
    icon:programmer,
    "points": [
        "Building custom web applications and components using React.js and associated libraries for various clients and projects.",
        "Working closely with clients to understand project requirements, provide technical guidance, and deliver solutions that meet their needs.",
        "Implementing responsive designs and ensuring optimal performance across different devices and browsers.",
        "Participating in regular client meetings, providing project updates, and incorporating feedback to iterate on project deliverables.",
        "Maintaining code quality through thorough testing, code reviews, and documentation to ensure scalability and maintainability of the codebase."
    ]
}
,
{
  "title": "Frontend Developer Intern",
  "date": "November 2023",
  icon:bharat,
  "points": [
      "Assisting in frontend development tasks, including implementing user interface components and layouts using HTML, CSS, and JavaScript.",
      "Contributing to small-scale projects or specific features under the guidance of senior team members.",
      "Participating in code reviews and receiving feedback to improve coding skills and understanding.",
      "Gaining exposure to industry-standard tools and technologies used in frontend development.",
      "Supporting the team in testing and debugging frontend code to ensure functionality and performance.",
      "Completing assigned tasks and projects within the one-month internship period."
  ]
}


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
    name: "Modern Bank",
    description:
      "Crafted a cutting-edge landing page for a contemporary bank using React.js and Tailwind CSS. Highlighting the bank's groundbreaking services and offerings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Modernbank,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hotstar Clone",
    description:
      "Developed a dynamic streaming platform inspired by hotstar,leveraging React.js for front-end functionality and Tailwind CSS for sleek, responsive design. ",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
     
    ],
    image: Hotstar,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Website",
    description:
      "Step into the future of communication with our AI-powered chatbot website developed using React.js and Tailwind CSS. Seamlessly integrated with Brainwave AI technology.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: AI,
    source_code_link: "https://github.com/",
  },
];

export { services,  experiences, testimonials, projects, technologies };
