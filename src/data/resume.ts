export const profile = {
  name: "Ahmed Hassan Khawaja",
  role: "AI / Software Engineer",
  tagline:
    "Software engineering student at UNSW who builds automation pipelines, AI powered applications, and full stack products that solve real problems for real users.",
  location: "Sydney, NSW, Australia",
  email: "ahmedhkhawaja@gmail.com",
  phone: "+61 468 362 846",
  availability: "Open to opportunities. Full work rights in Australia.",
  links: {
    github: "https://github.com/Ahmedhkhawaja",
    linkedin: "https://www.linkedin.com/in/ahmed-hassan-khawaja-075bab330/",
    cv: "/Ahmed_Khawaja_CV.pdf",
  },
};

export const stats = [
  { value: 10000, suffix: "+", label: "records processed daily by my pipeline at Effi" },
  { value: 99, suffix: "%", label: "data accuracy after resilient scraping and parsing" },
  { value: 15, suffix: "h", label: "of manual work saved per week through automation" },
  { value: 6, suffix: "M+", label: "students reached by my Z-Notes revision content" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tech: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
    company: "Effi Technologies",
    role: "AI Software Engineer Intern",
    period: "May 2026 to Jul 2026",
    location: "Sydney, NSW",
    summary:
      "Built and shipped an AI powered data pipeline that became part of the company platform.",
    points: [
      "Built an automated cashback ingestion pipeline in Python and Playwright that scrapes offers from 50+ banking partners and loads them into the platform daily, saving around 15 hours of manual effort per week.",
      "Deployed the pipeline on AWS with ECS, EC2, Lambda, and Docker, cutting end to end processing time from several hours to under 20 minutes.",
      "Engineered resilient scraping and parsing logic handling 10,000+ records per day, lifting data accuracy above 99% and reducing failed runs by around 90%.",
      "Integrated LLM based extraction to normalise unstructured offer data across bank formats, cutting manual correction by around 70%.",
    ],
    tech: ["Python", "Playwright", "AWS", "Docker", "LLMs"],
  },
  {
    company: "Nextbridge",
    role: "Software Engineer Intern",
    period: "Dec 2025 to Feb 2026",
    location: "Remote",
    summary:
      "Delivered production features across client projects on the MERN stack.",
    points: [
      "Built and deployed scalable MERN stack web applications in production, delivering features across 3+ client workflows.",
      "Developed RESTful APIs with Node.js and Express, and implemented secure event driven payment processing via Stripe webhooks with near zero failed transactions.",
      "Implemented real time client and server communication with WebSockets to power live updates and reduce user facing latency.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "WebSockets"],
  },
  {
    company: "Sydney Design & Development",
    role: "Founder & Full-Stack Developer",
    period: "2024 to Present",
    location: "Sydney, NSW",
    summary:
      "Founded a web studio that ships full stack products for Sydney businesses.",
    points: [
      "Launched a live marketplace platform serving Sydney based businesses at sydneydesigndevelopment.com.au.",
      "Architected and managed database systems supporting 1,500+ products, with secure payment integration and an admin dashboard.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Payments"],
    link: "https://sydneydesigndevelopment.com.au",
  },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  award?: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: "Live" | "In Progress";
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "teapot-invoicing",
    title: "Teapots Invoicing",
    year: "2026",
    award: "UNSW Faculty of Engineering Top Software Engineering Team",
    description:
      "AI document automation platform that creates invoices, despatch advices, and order documents, with AI assisted generation and validation of document data.",
    highlights: [
      "Deployed on AWS and published live at teapotinvoicing.app.",
      "Recognised by the UNSW Faculty of Engineering as the Top Software Engineering Team in Term 1 2026 for technical work, adaptability, and user centred design.",
      "Delivered as a 4 person team using Agile, iterating on real user feedback.",
    ],
    tech: ["React", "Node.js", "AWS", "AI"],
    image: "/projects/happy_teapot.gif",
    liveUrl: "https://teapotinvoicing.app",
    status: "Live",
    featured: true,
  },
  {
    slug: "serviceunsw-digital-identity",
    title: "ServiceUNSW Digital Identity",
    year: "2026",
    description:
      "NFC enabled digital identity system for secure campus access and authentication, built through the UNSW Vertically Integrated Projects program.",
    highlights: [
      "Architecting backend identity and access control infrastructure with data security controls.",
      "Designing real time verification workflows for campus wide use.",
    ],
    tech: ["NFC", "Backend", "Security"],
    image: "/projects/vip.png",
    status: "In Progress",
    featured: true,
  },
  {
    slug: "sydney-design-development",
    title: "Sydney Design & Development",
    year: "2024",
    description:
      "Live marketplace platform for my own web studio, supporting 1,500+ products with secure payments and an admin dashboard.",
    highlights: [
      "Full brand, design, build, and deployment owned end to end.",
      "Database architecture, payment integration, and admin tooling in production.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/sdd.png",
    liveUrl: "https://sydneydesigndevelopment.com.au",
    status: "Live",
    featured: true,
  },
  {
    slug: "farm-fresh",
    title: "Farm Fresh",
    year: "2025",
    description:
      "Inventory management platform that helps a produce farm in the United States track stock in real time across 100+ produce records.",
    highlights: [
      "React UI and REST APIs on Node.js, Express, and MongoDB with role based access control.",
      "Deployed to production on Vercel and Render.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/ff.png",
    liveUrl: "https://farming-project-steel.vercel.app/",
    status: "Live",
    featured: true,
  },
  {
    slug: "gym-store",
    title: "Gym Store E-Commerce",
    year: "2025",
    description:
      "Full stack e-commerce platform with JWT auth, Stripe checkout, an admin dashboard, automated tests, and CI.",
    highlights: [
      "Stripe webhooks, Cloudinary uploads, Swagger documented REST API.",
      "Jest and Supertest suites running in GitHub Actions.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    image: "/projects/gs.png",
    liveUrl: "https://internship-e-commerce-project.vercel.app/",
    githubUrl: "https://github.com/Ahmedhkhawaja/Internship-E-Commerce-Project",
    status: "Live",
    featured: false,
  },
  {
    slug: "sydney-wide-fittings",
    title: "Sydney Wide Fittings",
    year: "2025",
    description:
      "Business website for a construction fittings supplier, focused on clear service discovery and fast load times.",
    highlights: ["Built with Svelte and Tailwind, shipped to production."],
    tech: ["Svelte", "Tailwind"],
    image: "/projects/swf.png",
    liveUrl: "https://sydneywidefittings.com.au",
    status: "Live",
    featured: false,
  },
  {
    slug: "all-time-boxing",
    title: "All Time Boxing",
    year: "2026",
    description:
      "Website for All Time Boxing, designed and built end to end and running live in production.",
    highlights: ["Built with Next.js and shipped at alltimeboxing.com.au."],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/alltimeboxing.jpg",
    liveUrl: "https://www.alltimeboxing.com.au/",
    status: "Live",
    featured: false,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C", "C++"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Vector Databases",
      "Data Extraction",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS ECS", "AWS EC2", "AWS Lambda", "Docker", "Git", "CI/CD"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Playwright", "Pandas", "NumPy"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Vector DBs"],
  },
];

export const education = {
  university: {
    name: "University of New South Wales",
    degree: "Bachelor of Engineering (Honours), Software",
    period: "Expected 2028",
    detail: "Distinction WAM. Ranked Australia's number 1 university and top 20 globally (QS 2026).",
    courses: [
      { name: "Database Systems", code: "COMP3311", mark: 88 },
      { name: "Programming Fundamentals", code: "COMP1511", mark: 87 },
      { name: "Requirements & Design Workshop", code: "SENG2021", mark: 85 },
      { name: "Data Structures & Algorithms", code: "COMP2521", mark: 84 },
      { name: "Computer Networks", code: "COMP3331", mark: 80 },
    ],
  },
  school: {
    name: "Aitchison College",
    detail: "A-Levels: 1A* 3A, ATAR equivalent 99.00.",
  },
};

export const recognition = [
  {
    title: "Top Software Engineering Team, UNSW Faculty of Engineering",
    detail: "Awarded in Term 1 2026 for the Teapots Invoicing project.",
  },
  {
    title: "Marketing Executive, Arc @ UNSW",
    detail: "Led a team of 10+ designers producing brand assets for club events and campaigns.",
  },
  {
    title: "Course Contributor, Z-Notes",
    detail: "Authored IGCSE Computer Science revision content used by 6M+ students.",
  },
  {
    title: "General Secretary, Computer Society, Aitchison College",
    detail: "Organised hackathons and a national STEM Olympiad with 1,000+ delegates.",
  },
  {
    title: "FinTech Judge, Aitchison Business Concept",
    detail: "Selected to judge fintech startup pitches at the college's flagship competition.",
  },
];
