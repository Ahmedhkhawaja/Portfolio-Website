export const profile = {
  name: "Ahmed Hassan Khawaja",
  role: "AI / Software Engineer",
  tagline: "I build AI tools, apps and websites that real people use.",
  location: "Sydney, Australia",
  email: "ahmedhkhawaja@gmail.com",
  phone: "+61 468 362 846",
  availability: "Open to internships and grad roles",
  links: {
    github: "https://github.com/Ahmedhkhawaja",
    linkedin: "https://www.linkedin.com/in/ahmed-hassan-khawaja-075bab330/",
    cv: "/Ahmed_Khawaja_CV.pdf",
  },
};

export const stats = [
  { value: 10000, suffix: "+", label: "records a day through my AI pipeline" },
  { value: 99, suffix: "%", label: "data accuracy in production" },
  { value: 15, suffix: "h", label: "of manual work saved every week" },
  { value: 6, suffix: "M+", label: "students reached by my Z-Notes content" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  year: string;
  logo: string;
  /** Tile colour behind the logo so it stays readable. */
  logoBg: string;
  summary: string;
  points: string[];
  tech: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
    company: "Effi Technologies",
    role: "AI Software Engineer Intern",
    period: "May to Jul 2026",
    year: "2026",
    logo: "/logos/effi.svg",
    logoBg: "#1c2038",
    summary: "Built an AI data pipeline that now runs inside the product.",
    points: [
      "Scrapes cashback offers from 50+ banks every day.",
      "Runs on AWS in under 20 minutes, down from hours.",
      "Uses LLMs to clean messy data, cutting manual fixes by 70%.",
    ],
    tech: ["Python", "Playwright", "AWS", "Docker", "LLMs"],
  },
  {
    company: "Nextbridge",
    role: "Software Engineer Intern",
    period: "Dec 2025 to Feb 2026",
    year: "2025",
    logo: "/logos/nextbridge.png",
    logoBg: "#ffffff",
    summary: "Shipped features for client apps on the MERN stack.",
    points: [
      "Built REST APIs and Stripe payments with near zero failures.",
      "Added live updates with WebSockets.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    company: "Sydney Design & Development",
    role: "Co-founder & Developer",
    period: "2024 to now",
    year: "2024",
    logo: "/logos/sdd.png",
    logoBg: "#ffffff",
    summary: "My software solutions company. We build websites, apps and online stores for businesses.",
    points: [
      "Shipped sites and apps for real Sydney clients.",
      "Built our marketplace with 1,500+ products and secure payments.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://sydneydesigndevelopment.com.au",
  },
];

export type ProjectTag = "app" | "ai" | "web";

export const projectTags: { id: ProjectTag | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "app", label: "Apps" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Websites" },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: ProjectTag[];
  /** One short line shown on the card. */
  tagline: string;
  /** Two or three short sentences shown in the detail view. */
  about: string;
  highlights: string[];
  tech: string[];
  image: string;
  /** Backdrop behind the image so logos and screenshots blend in. */
  imageBg?: string;
  imageFit?: "contain" | "cover";
  award?: string;
  badge?: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
  status: "Live" | "In progress" | "Done";
};

export const projects: Project[] = [
  {
    slug: "uniblud",
    title: "UniBlud",
    year: "2026",
    tags: ["app"],
    badge: "New",
    tagline: "The all in one campus app for UNSW students.",
    about:
      "Uni life is spread across too many apps. UniBlud puts your timetable, campus map, study rooms, food deals and societies in one place.",
    highlights: [
      "Live on the App Store.",
      "Designed, built and launched solo.",
      "Sign in with Apple, Google or email.",
    ],
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    image: "/projects/uniblud.png",
    imageBg: "#051530",
    imageFit: "contain",
    liveUrl: "https://apps.apple.com/au/app/uniblud/id6797505071",
    liveLabel: "Get it on the App Store",
    status: "Live",
  },
  {
    slug: "teapot-invoicing",
    title: "Teapots Invoicing",
    year: "2025",
    tags: ["ai", "web"],
    award: "Best SE Team, UNSW",
    tagline: "AI that writes and checks business documents for you.",
    about:
      "Creates invoices, orders and despatch documents, then uses AI to fill in and check the details.",
    highlights: [
      "Won Best Software Engineering Team at UNSW.",
      "Built by a team of 4 and deployed on AWS.",
    ],
    tech: ["React", "Node.js", "AWS", "AI"],
    image: "/projects/happy_teapot.gif",
    imageBg: "#010101",
    imageFit: "contain",
    status: "Done",
  },
  {
    slug: "ai-hackathon",
    title: "Atlassian × Mistral Hackathon",
    year: "2026",
    tags: ["ai"],
    award: "3rd place",
    tagline: "My first hackathon, and we placed 3rd.",
    about:
      "An AI hackathon run by UNSW AISoc with Atlassian and Mistral. Our team built Mysti, a swipe to decide app, and took 3rd place.",
    highlights: [
      "3rd place with Mysti.",
      "My first ever hackathon.",
      "Hosted by UNSW AISoc, Atlassian and Mistral AI.",
    ],
    tech: ["AI", "LLMs", "Mistral"],
    image: "/projects/hackathonpic.jpg",
    status: "Done",
  },
  {
    slug: "serviceunsw-digital-identity",
    title: "ServiceUNSW Digital ID",
    year: "2026",
    tags: ["app"],
    tagline: "Tap your phone to get into campus buildings.",
    about:
      "An NFC digital ID for secure campus access, built in the UNSW Vertically Integrated Projects program.",
    highlights: [
      "I work on the backend and access control.",
      "Real time checks for campus wide use.",
    ],
    tech: ["NFC", "Backend", "Security"],
    image: "/projects/vip.png",
    status: "In progress",
  },
  {
    slug: "sydney-design-development",
    title: "Sydney Design & Development",
    year: "2024",
    tags: ["web"],
    tagline: "The software solutions company I co-founded.",
    about:
      "We build websites, apps and online stores for businesses. I look after the tech, from design to launch.",
    highlights: [
      "Marketplace with 1,500+ products and secure payments.",
      "Real clients, live in production.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/sdd.png",
    imageBg: "#fefefe",
    imageFit: "contain",
    liveUrl: "https://sydneydesigndevelopment.com.au",
    status: "Live",
  },
  {
    slug: "all-time-boxing",
    title: "All Time Boxing",
    year: "2026",
    tags: ["web"],
    tagline: "A fast, modern website for a Sydney boxing gym.",
    about: "Designed and built end to end, and live in production.",
    highlights: ["Built with Next.js and Tailwind.", "Works great on mobile."],
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/alltimeboxing.jpg",
    liveUrl: "https://www.alltimeboxing.com.au/",
    status: "Live",
  },
  {
    slug: "mysti",
    title: "Mysti",
    year: "2026",
    tags: ["ai", "app"],
    award: "3rd, AI Hackathon",
    tagline: "Can't decide? Swipe left or right and let Mysti help.",
    about:
      "A fun decision making tool. Swipe through your options like cards and Mysti helps you pick. Our team built it at the Atlassian × Mistral hackathon and placed 3rd.",
    highlights: [
      "3rd place at the Atlassian × Mistral × AISoc hackathon.",
      "Made at my first ever hackathon.",
      "Live and ready to try.",
    ],
    tech: ["AI", "Web app", "Vercel"],
    image: "/projects/mysti.png",
    imageBg: "#6d563b",
    imageFit: "contain",
    // TODO: add the public URL (the "Visit" link on the Vercel dashboard) as liveUrl.
    status: "Live",
  },
  {
    slug: "sydney-wide-fittings",
    title: "Sydney Wide Fittings",
    year: "2025",
    tags: ["web"],
    tagline: "A clean, quick site for a construction supplier.",
    about: "Helps customers find services fast. Built with Svelte and Tailwind.",
    highlights: ["Fast load times.", "Shipped to production."],
    tech: ["Svelte", "Tailwind"],
    image: "/projects/swf.png",
    liveUrl: "https://sydneywidefittings.com.au",
    status: "Live",
  },
  {
    slug: "farm-fresh",
    title: "Farm Fresh",
    year: "2025",
    tags: ["app", "web"],
    tagline: "Live stock tracking for a US produce farm.",
    about: "Tracks 100+ produce items in real time, with different access for each role.",
    highlights: ["React front end with a Node and MongoDB API.", "Deployed on Vercel and Render."],
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/ff.png",
    liveUrl: "https://farming-project-steel.vercel.app/",
    status: "Live",
  },
  {
    slug: "gym-store",
    title: "Gym Store",
    year: "2025",
    tags: ["app", "web"],
    tagline: "A full online store with payments and an admin panel.",
    about: "Login, Stripe checkout, image uploads and an admin dashboard, all tested in CI.",
    highlights: ["Stripe webhooks and Cloudinary uploads.", "Automated tests on every push."],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/gs.png",
    liveUrl: "https://internship-e-commerce-project.vercel.app/",
    githubUrl: "https://github.com/Ahmedhkhawaja/Internship-E-Commerce-Project",
    status: "Live",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "C", "C++"] },
  { group: "AI", items: ["LLMs", "RAG", "AI Agents", "Prompting", "Vector DBs"] },
  { group: "Build", items: ["React", "React Native", "Next.js", "Node.js", "Express", "Playwright"] },
  { group: "Cloud", items: ["AWS", "Docker", "Supabase", "CI/CD", "Git"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Pandas"] },
];

export const education = {
  university: {
    name: "UNSW Sydney",
    degree: "Software Engineering (Honours)",
    period: "Graduating 2028",
    detail: "Distinction average. Australia's #1 uni (QS 2026).",
    courses: [
      { name: "Databases", code: "COMP3311", mark: 88 },
      { name: "Programming", code: "COMP1511", mark: 87 },
      { name: "Software Design", code: "SENG2021", mark: 85 },
      { name: "Algorithms", code: "COMP2521", mark: 84 },
      { name: "Networks", code: "COMP3331", mark: 80 },
    ],
  },
  school: {
    name: "Aitchison College",
    detail: "A-Levels 1A* 3A, ATAR equivalent 99.00",
  },
};

export type Achievement = {
  title: string;
  detail: string;
  tier: "gold" | "silver" | "bronze";
  project?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Best SE Team, UNSW",
    detail: "UNSW Engineering award for Teapots Invoicing.",
    tier: "gold",
    project: "teapot-invoicing",
  },
  {
    title: "3rd at AI Hackathon",
    detail: "Built Mysti at Atlassian × Mistral × AISoc. My first hackathon.",
    tier: "bronze",
    project: "mysti",
  },
  {
    title: "Shipped to the App Store",
    detail: "UniBlud is live for UNSW students.",
    tier: "gold",
    project: "uniblud",
  },
  {
    title: "6M+ Students Reached",
    detail: "Wrote IGCSE Computer Science notes for Z-Notes.",
    tier: "silver",
  },
  {
    title: "Marketing Exec, Arc UNSW",
    detail: "Led 10+ designers on club campaigns.",
    tier: "silver",
  },
  {
    title: "Ran a 1,000+ Person Olympiad",
    detail: "General Secretary, Aitchison Computer Society.",
    tier: "silver",
  },
];
