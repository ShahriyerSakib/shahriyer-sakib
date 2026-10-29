// Edit this file to update the site. Values set to null render as clearly marked placeholders.
export const profile = {
  name: "Md. Shahriyer Hossain",
  shortName: "Shahriyer",
  designation: "AI-Powered Web Developer | MERN Stack Developer",
  headline: "Building Digital Experiences That Feel Like the Future.",
  intro:
    "I'm Md. Shahriyer Hossain, an AI-powered web developer focused on building modern, responsive, and scalable web experiences using the MERN stack and AI-assisted development workflows.",
  startYear: 2019,
};

export const contact = {
  email: "shahriyer333@gmail.com" as string | null, // from your GitHub profile
  phone: "+8801718958526" as string | null,
  whatsapp: "8801718958526" as string | null, // digits only; assumes same number. Set null to hide.
  github: "https://github.com/ShahriyerSakib" as string | null,
  linkedin: "https://www.linkedin.com/in/shahriyerhsakib" as string | null,
  facebook: "https://www.facebook.com/shahriyerhsakib" as string | null,
  instagram: "https://www.instagram.com/shahriyerhsakib" as string | null,
  youtube: "https://www.youtube.com/@ShahriyerHSakib" as string | null,
  resume: null as string | null, // when ready: put resume.pdf in /public and set "/resume.pdf"
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I started learning technology and development in 2019 and haven't stopped since. Today I'm studying Computer Science & Engineering at Uttara University while building full-stack web applications with JavaScript, React and Node.js.",
    "I enjoy building modern, high-performance web applications and turning ideas into working products. I'm currently expanding my knowledge in GraphQL and Docker, and I use AI-assisted workflows to move faster while keeping my code readable.",
    "I try to bring three things to every project: creativity in design, curiosity about new tools, and reliability in delivery. My first team project, Code Path, was built with the Code Crafter team, and I enjoy open-source and tech conversations.",
  ],
  facts: [
    { label: "Work I enjoy", text: "Modern, responsive web apps and full-stack products." },
    { label: "Goal", text: "Become a strong full-stack software engineer and build useful digital products." },
    // PLACEHOLDER: replace with your real hobbies and interests.
    { label: "Hobbies & interests", text: "Outside programming, I enjoy staying curious, exploring new ideas, and learning how digital products are designed and built. Replace this with your real hobbies and interests before publishing.", placeholder: true },
  ],
};

// Skills taken from the tech stack listed on your GitHub profile README.
export const skillGroups = [
  { title: "Frontend", icon: "monitor", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript"] },
  { title: "Backend", icon: "server", items: ["Node.js", "Express.js", "PHP"] },
  { title: "Database", icon: "database", items: ["MongoDB", "MySQL"] },
  { title: "Tools", icon: "wrench", items: ["Git", "VS Code", "Postman", "Figma", "WordPress", "AI-assisted workflows"] },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    school: "Uttara University",
    status: "Currently pursuing",
    period: "Currently pursuing · Graduation date not yet specified",
    detail: "Studying core computer science and engineering while building web projects alongside my coursework.",
  },
  // PLACEHOLDER: add HSC / SSC details if you want them shown.
];

export const experience = [
  {
    role: "Team project: Code Path",
    org: "Code Crafter (university team)",
    period: "University team project",
    text: "Worked with a team on an interactive learning platform for beginners. It was my first project built together with a team.",
  },
];

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  github: string | null;
  live: string | null;
  challenges: string[];
  improvements: string[];
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    slug: "code-path",
    title: "Code Path",
    summary: "An interactive learning platform for beginners.",
    description:
      "Code Path is an interactive learning platform for beginners, built as a university web design course project with the Code Crafter team. It includes a landing page and HTML lesson pages.",
    stack: ["HTML", "CSS"],
    image: "/projects/code-path.svg",
    github: "https://github.com/ShahriyerSakib/Code_Path",
    live: "https://shahriyersakib.github.io/Code_Path/",
    challenges: ["This was the team's first project built together, so coordinating work and combining everyone's code was a new experience."],
    improvements: ["The team planned to scale the project up before the final exam.", "Placeholder: add your own next steps, such as more lessons or interactive exercises."],
  },
  {
    slug: "dev-conference",
    title: "Dev Conference Landing Page",
    summary: "A landing page for Developers Conference 2026.",
    description: "A landing page created for Developers Conference 2026.",
    stack: ["HTML"],
    image: "/projects/dev-conference.svg",
    github: "https://github.com/ShahriyerSakib/Dev_Conference_Landing_Page",
    live: null,
    challenges: ["Placeholder: describe the real challenges you faced (layout, responsiveness, performance, and so on)."],
    improvements: ["Placeholder: describe your future plans for this project."],
  },
  {
    slug: "shahriyer-portfolio",
    title: "AI-Powered Developer Portfolio",
    summary: "A responsive portfolio showcasing my profile, skills, education, and selected work.",
    description: "This portfolio is built with React, TypeScript, Vite, Tailwind CSS, and Motion. It uses reusable components, responsive layouts, animated section entrances, and dedicated project-detail views. Update this description after deployment with any additional features you implement.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    image: "/projects/project-three.svg",
    github: null,
    live: null,
    challenges: ["Creating a visual style that feels distinctive while keeping navigation clear, animations subtle, and layouts usable across screen sizes."],
    improvements: ["Add a deployed live link and public repository after launch.", "Replace placeholder project artwork with final screenshots and add verified performance and accessibility checks."],
  },
];
