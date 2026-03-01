export type ProjectCategory =
  | "Internship"
  | "Web"
  | "Backend"
  | "Uni"
  | "Mobile"
  | "Business"
  | "AI";

export type ProjectStatus = "In Progress" | "Shipped";

export type ProjectBodySection = {
  title: "Overview" | "What I built" | "Challenges" | "What I learned" | string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  techStack: string[];
  thumbnail: string;
  images?: string[];
  youtubeUrl?: string;
  githubUrl?: string;
  githubPrivate?: boolean;
  liveUrl?: string;
  docsUrl?: string;
  featured?: boolean;
  status?: ProjectStatus;
  date: string; // ISO
  role?: string;
  timeframe?: string;
  body: {
    sections: ProjectBodySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "swipe-news-ai",
    title: "Swipe News - AI-Powered News App",
    description:
      "TikTok-style mobile news app with AI summaries and a personalized feed.",
    categories: ["Mobile", "AI"],
    techStack: ["React Native", "TypeScript", "News API", "AI Integration"],
    thumbnail: "/projects/tt.png",
    featured: false,
    status: "In Progress",
    date: "2026-02-01",
    role: "Solo Developer",
    timeframe: "Ongoing",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Swipe News is a mobile application designed to make news consumption faster and more efficient through AI-powered summaries and a swipe-based interface.",
            "The app retrieves articles using the News API and applies AI summarization to present concise, readable insights while maintaining access to full articles.",
            "A ranking algorithm prioritizes relevant content based on recency, category, and engagement signals to create a personalized feed.",
          ],
        },
        {
          title: "What I built",
          paragraphs: [
            "Swipe-based mobile UI optimized for fast, distraction-free content consumption.",
            "Integration with News API to retrieve live article data across multiple categories.",
            "AI-powered summarization pipeline to convert long-form articles into concise summaries.",
            "Feed ranking logic to improve content relevance and user experience.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "Designing a responsive mobile interface that balances speed and readability.",
            "Integrating external APIs while maintaining performance and reliability.",
            "Structuring content pipelines to support AI processing efficiently.",
          ],
        },
        {
          title: "What I learned",
          paragraphs: [
            "How to integrate AI services into real-world applications.",
            "How recommendation and ranking algorithms impact user experience.",
            "Mobile architecture patterns and API-driven application design.",
          ],
        },
      ],
    },
  },
  {
    slug: "serviceunsw-vip-challeng",
    title: "ServiceUNSW - VIP ChallENG",
    description:
      "User-centric mobile platform integrating UNSW student services with a focus on accessibility, usability, and data security.",
    categories: ["Uni", "Mobile", "Backend"],
    techStack: ["Mobile", "Backend", "UX Research", "Security & Privacy"],
    thumbnail: "/projects/vip.png",
    featured: true,
    status: "In Progress",
    githubPrivate: true,
    date: "2025-01-01",
    role: "Project Engineer (VIP Team)",
    timeframe: "2025 - Present",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "ServiceUNSW is a Vertically Integrated Project (VIP ChallENG) aimed at simplifying how students access key university services through a single mobile experience.",
            "The project prioritises user-centric design, accessibility, and data security to build a trustworthy platform intended for real-world use at UNSW.",
          ],
        },
        {
          title: "Project focus areas",
          paragraphs: [
            "User needs analysis through surveys, interviews, and feedback-driven iteration.",
            "Designing an intuitive interface that remains accessible and inclusive.",
            "Integrating multiple university services into one streamlined platform.",
            "Data security and privacy best practices to protect student information.",
          ],
        },
        {
          title: "My contribution",
          paragraphs: [
            "Contributing to engineering deliverables and team workflows across backend/platform thinking and mobile-facing requirements.",
            "Working collaboratively in a long-running multi-disciplinary team environment with an emphasis on professional development.",
          ],
        },
      ],
    },
  },
  {
    slug: "ubl-invoice-platform",
    title: "UBL Invoice Automation Platform",
    description:
      "Cloud-hosted invoicing system using UBL XML with payments and analytics.",
    categories: ["Backend", "Uni"],
    techStack: ["Node.js", "AWS", "UBL XML", "Payments", "React"],
    thumbnail: "/projects/in.png",
    featured: false,
    status: "In Progress",
    date: "2026-02-01",
    role: "Backend Developer",
    timeframe: "2026 – Ongoing",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "This project focuses on building a cloud-based invoice automation system using the UBL XML standard, which is widely used in enterprise financial systems.",
            "The platform will generate structured invoice documents, send them via email, and track invoice lifecycle and payment status.",
          ],
        },
        {
          title: "What the system will support",
          paragraphs: [
            "Generation of structured invoices using UBL XML format.",
            "Automated delivery of invoices to recipients.",
            "Payment integration to support invoice settlement.",
            "A dashboard for tracking invoices, payment status, and analytics.",
          ],
        },
        {
          title: "Architecture focus",
          paragraphs: [
            "Cloud deployment using AWS infrastructure.",
            "Backend APIs to generate, store, and retrieve invoice data.",
            "Analytics dashboards to visualize invoice metrics and usage.",
          ],
        },
        {
          title: "What I aim to learn",
          paragraphs: [
            "Enterprise system design and financial document standards.",
            "Cloud deployment and backend scalability using AWS.",
            "Designing reliable systems for real-world financial workflows.",
          ],
        },
      ],
    },
  },
  {
    slug: "sydney-design-development",
    title: "Sydney Design Development Website",
    description:
      "Business website for a Sydney-based digital studio: clean design, fast performance, scalable build.",
    categories: ["Business", "Web"],
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    thumbnail: "/projects/sdd.png",
    // images: ["/projects/lavender-01.svg", "/projects/lavender-02.svg"],
    youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    githubUrl: "https://github.com/",
    liveUrl: "https://sydneydesigndevelopment.com.au",
    featured: true,
    status: "Shipped",
    date: "2025-01-18",
    role: "Designer + Developer",
    timeframe: "2 weeks",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Sydney Design Development is a digital studio I created to design and develop modern websites and software solutions for businesses in Sydney. The goal was to provide businesses with fast, professional, and scalable digital platforms that strengthen their online presence.",
            "This project marked my transition from building academic projects to developing real-world production websites. It involved creating a professional brand, launching a live website, and establishing a complete deployment pipeline accessible to real users.",
          ],
        },
        {
          title: "What I built",
          paragraphs: [
            "A fully responsive business website built with Next.js, designed to showcase services, past work, and contact information in a clean and professional format.",
            "A modern UI system with consistent typography, spacing, and reusable components to ensure scalability and maintainability.",
            "A complete deployment workflow using GitHub for version control and Vercel for production hosting, enabling fast global delivery and continuous deployment.",
            "SEO optimization including metadata, semantic structure, and performance best practices to improve discoverability on search engines.",
            "Domain registration, DNS configuration, and integration with Vercel to connect the live domain to the deployed application.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "Learning the Next.js framework and understanding its architecture, including routing, layouts, and server/client components.",
            "Configuring domain settings, DNS records, and deployment environments to ensure reliable hosting and correct domain resolution.",
            "Designing a website that balances aesthetic quality with performance, responsiveness, and accessibility.",
            "Implementing SEO best practices correctly so the website can be indexed and discovered online.",
          ],
        },
        {
          title: "What I learned",
          paragraphs: [
            "How to use Next.js to build production-ready, scalable web applications with modern architecture.",
            "How to deploy real-world applications using Vercel, connect custom domains, and manage live production environments.",
            "The importance of SEO, performance optimization, and semantic structure in making websites discoverable and professional.",
            "How to manage a full development lifecycle, from initial concept and design to deployment and live hosting.",
            "How to build software not just for functionality, but for real users, real businesses, and real-world impact.",
          ],
        },
      ],
    },
  },
  {
    slug: "sydney-wide-fittings",
    title: "Sydney Wide Fittings Website",
    description:
      "Business site for a construction fittings supplier with clear service discovery and fast load times.",
    categories: ["Business", "Web"],
    techStack: ["Svelte", "Tailwind"],
    thumbnail: "/projects/swf.png",
    githubPrivate: true,
    // githubUrl: "https://github.com/",
    // youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    liveUrl: "https://sydneywidefittings.com.au",
    featured: true,
    status: "Shipped",
    date: "2025-11-06",
    role: "Software Engineer Intern",
    timeframe: "1 month",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "A full-stack e-commerce marketplace built using the MERN stack to simulate a real-world production system. The platform supports secure authentication, product management, and end-to-end order processing with integrated payments.",
            "The application is deployed with the frontend hosted on Vercel and the backend hosted on Render, reflecting a modern cloud deployment workflow used in production environments.",
            "This project focused on building scalable backend architecture, a responsive frontend, and production-ready workflows including testing, CI, API documentation, and cloud deployment.",
          ],
        },
        {
          title: "What I built",
          paragraphs: [
            "A complete MERN application with a React (Vite) frontend deployed on Vercel and a Node.js/Express backend deployed on Render, connected to MongoDB.",
            "Secure authentication and authorization using JWT, refresh tokens, and role-based access control for admin and customer routes.",
            "Admin dashboard with product CRUD, image uploads via Cloudinary, and order management with status tracking.",
            "Stripe Checkout integration with webhook handling for secure and reliable payment processing.",
            "REST API with clear controller/model separation, documented using Swagger to improve maintainability and developer usability.",
            "Automated backend tests using Jest and Supertest, with CI configured using GitHub Actions to ensure reliability and code quality.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "Designing a clean and scalable backend architecture with proper separation of concerns between routes, controllers, and models.",
            "Implementing secure authentication flows with token validation, refresh handling, and protected frontend routes.",
            "Configuring and deploying separate frontend and backend services using Vercel and Render while ensuring secure communication.",
            "Integrating Stripe webhooks reliably while maintaining order consistency and security.",
          ],
        },
        {
          title: "What I learned",
          paragraphs: [
            "How to design and deploy production-ready full-stack applications using modern cloud platforms like Vercel and Render.",
            "Best practices for authentication, API design, and secure handling of user data and payments.",
            "How to implement automated testing and CI pipelines to improve reliability and maintainability.",
            "How to structure scalable full-stack systems that reflect real-world engineering practices used in industry.",
          ],
        },
      ],
    },
  },
  {
    slug: "gym-store-project",
    title: "Gym Store Internship Project",
    description:
      "Internship full-stack e-commerce build with secure auth, payments, and an admin workflow.",
    categories: ["Internship", "Backend", "Web"],
    techStack: ["MongoDB", "Express", "React", "Node", "Stripe", "Cloudinary"],
    thumbnail: "/projects/gs.png",
    githubUrl: "https://github.com/Ahmedhkhawaja/Internship-E-Commerce-Project",
    youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    liveUrl: "https://internship-e-commerce-project.vercel.app/",
    featured: true,
    status: "Shipped",
    date: "2025-11-06",
    role: "Software Engineer Intern",
    timeframe: "2 months",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "A full-stack e-commerce marketplace built using the MERN stack to simulate a real-world production system. The platform supports secure authentication, product management, and end-to-end order processing with integrated payments.",
            "The application is deployed with the frontend hosted on Vercel and the backend hosted on Render, reflecting a modern cloud deployment workflow used in production environments.",
            "This project focused on building scalable backend architecture, a responsive frontend, and production-ready workflows including testing, CI, API documentation, and cloud deployment.",
          ],
        },
        {
          title: "What I built",
          paragraphs: [
            "A complete MERN application with a React (Vite) frontend deployed on Vercel and a Node.js/Express backend deployed on Render, connected to MongoDB.",
            "Secure authentication and authorization using JWT, refresh tokens, and role-based access control for admin and customer routes.",
            "Admin dashboard with product CRUD, image uploads via Cloudinary, and order management with status tracking.",
            "Stripe Checkout integration with webhook handling for secure and reliable payment processing.",
            "REST API with clear controller/model separation, documented using Swagger to improve maintainability and developer usability.",
            "Automated backend tests using Jest and Supertest, with CI configured using GitHub Actions to ensure reliability and code quality.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "Designing a clean and scalable backend architecture with proper separation of concerns between routes, controllers, and models.",
            "Implementing secure authentication flows with token validation, refresh handling, and protected frontend routes.",
            "Configuring and deploying separate frontend and backend services using Vercel and Render while ensuring secure communication.",
            "Integrating Stripe webhooks reliably while maintaining order consistency and security.",
          ],
        },
        {
          title: "What I learned",
          paragraphs: [
            "How to design and deploy production-ready full-stack applications using modern cloud platforms like Vercel and Render.",
            "Best practices for authentication, API design, and secure handling of user data and payments.",
            "How to implement automated testing and CI pipelines to improve reliability and maintainability.",
            "How to structure scalable full-stack systems that reflect real-world engineering practices used in industry.",
          ],
        },
      ],
    },
  },
  {
    slug: "farming-project",
    title: "Farm Fresh",
    description:
      "Internship inventory system for tracking produce stock movement with a clean, role-based workflow.",
    categories: ["Internship", "Web", "Backend"],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Vercel", "Render"],
    thumbnail: "/projects/ff.png",
    githubPrivate: true,
    youtubeUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    liveUrl: "https://farming-project-steel.vercel.app/",
    featured: true,
    status: "Shipped",
    date: "2026-02-10",
    role: "Software Engineer Intern",
    timeframe: "February 2026 – April 2026",
    body: {
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "During my internship, I contributed to the development of a farm stock management system designed to help managers and staff track produce inventory and monitor stock movement in real time.",
            "The platform enables farms to record when products such as vegetables enter and leave inventory, improving operational visibility and replacing manual tracking processes.",
            "The frontend is hosted on Vercel and the backend is deployed on Render, reflecting a modern cloud architecture used in production environments.",
          ],
        },
        {
          title: "What I built",
          paragraphs: [
            "Contributed to a full-stack MERN application enabling inventory tracking, stock updates, and product management.",
            "Developed responsive React components to display inventory data clearly for staff and management users.",
            "Assisted in building backend REST APIs using Node.js and Express to handle inventory operations and database interactions with MongoDB.",
            "Implemented role-based access logic supporting different permissions for managers and staff.",
            "Participated in deploying and maintaining the frontend on Vercel and backend on Render, ensuring reliable production hosting.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "Working within an existing team codebase and maintaining consistency with established architecture and coding standards.",
            "Ensuring accurate stock tracking logic to reflect real-world inventory changes reliably.",
            "Designing a clear and intuitive interface suitable for non-technical users managing inventory.",
            "Coordinating frontend and backend deployment across separate cloud platforms.",
          ],
        },
        {
          title: "What I learned",
          paragraphs: [
            "Real-world experience contributing to a production full-stack system using React, Node.js, and MongoDB.",
            "How to deploy and manage distributed applications using Vercel (frontend) and Render (backend).",
            "How backend APIs, databases, and frontend interfaces integrate to form scalable software systems.",
            "How to collaborate effectively within a development team using version control and structured workflows.",
            "Professional engineering practices including deployment, debugging, and maintaining live systems.",
          ],
        },
      ],
    },
  },
];

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Internship",
  "Web",
  "Mobile",
  "Backend",
  "Uni",
  "Business",
  "AI",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getSortedProjects(list: Project[] = projects) {
  return [...list].sort((a, b) => {
    const fa = a.featured ? 1 : 0;
    const fb = b.featured ? 1 : 0;
    if (fa !== fb) return fb - fa;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

