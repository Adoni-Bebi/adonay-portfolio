export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI / Systems' | 'Frontend / UI';
  featured: boolean;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  keyChallenge?: string;
  githubUrl?: string;
  liveUrl?: string;
  isCollaborative: boolean;
  teamDetails?: string;
  isVerificationPending?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  status: string;
  cgpa: string;
  relevantCoursework: string[];
}

export interface Leadership {
  title: string;
  organization: string;
  credential?: string;
  description: string;
  impact: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Adonay Alemu Bezabih",
    preferredName: "Adonay Alemu",
    location: "Addis Ababa, Ethiopia",
    email: "adonayalemu21@gmail.com",
    github: "https://github.com/Adoni-Bebi",
    headline: "Full-Stack Developer building practical web and AI-powered applications.",
    bio: [
      "Final-year Computer Science and Engineering student at Adama Science and Technology University with demonstrated experience in full-stack web platforms and applied AI integrations.",
      "Committed to building reliable, high-utility software solutions designed to solve tangible socio-economic and technological challenges in Ethiopia and beyond."
    ],
    resumeUrl: "/resume.pdf",
    resumeAvailable: false,
  },

  skills: {
    languages: ["Python", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Vite", "Responsive Design"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "bcrypt"],
    databases: ["MongoDB", "MongoDB Atlas", "Mongoose"],
    aiAndTools: ["Google Gemini API", "Vercel AI SDK", "RAG Fundamentals", "Git", "GitHub", "Render", "Vercel"],
    spokenLanguages: [
      { name: "Amharic", proficiency: "Native / Bilingual" },
      { name: "English", proficiency: "Professional Working" }
    ]
  },

  projects: [
    {
      id: "mint-hub",
      title: "Digital Innovation Hub for MinT",
      tagline: "National platform connecting Ethiopian startups, founders, investors, and ministry verification programs.",
      category: "Full-Stack",
      featured: true,
      isCollaborative: true,
      teamDetails: "Collaborative project developed during MinT internship alongside engineering teammates.",
      problem: "Startups and innovators across Ethiopia lacked a centralized, authenticated hub to submit documents, track formal MinT verification, and engage with verified angel investors.",
      solution: "Engineered a decoupled web ecosystem with JWT role-based access control, moderated opportunity boards, secure document storage via Cloudinary, and transactional alerts via Brevo API.",
      myRole: "Collaborated on core repository architecture, designed responsive UI layouts, and engineered the complete Citizen authentication system and profile management portal.",
      technologies: ["React 19", "Node.js", "Express 5", "MongoDB Atlas", "Tailwind CSS", "Vercel", "Render"],
      keyChallenge: "Handling single-page application route rewrites on Vercel while ensuring authenticated JWT states persisted across sleeping Render backend free-tier instances.",
      githubUrl: "https://github.com/Adoni-Bebi/Digital-Innovation-Hub-For-MINT",
      liveUrl: "https://digital-innovation-hub-for-mint.vercel.app"
    },
    {
      id: "ai-gemini-rag",
      title: "Conversational Intelligence & RAG Exploration",
      tagline: "Exploratory AI assistant harnessing the Gemini API and AI SDK for context-aware document answering.",
      category: "AI / Systems",
      featured: true,
      isCollaborative: false,
      isVerificationPending: true,
      problem: "Generic large language model completions often lack grounding in localized or user-specific documents, leading to vague or generic responses.",
      solution: "Constructed an experimental prototype experimenting with prompt engineering, retrieval pipelines, and streaming chat interfaces using Google Gemini and Vercel AI SDK.",
      myRole: "Solo architect and developer investigating chunking strategies, prompt grounding, and latency optimization.",
      technologies: ["Python", "Node.js", "Gemini API", "Vercel AI SDK", "Vector Indexing"],
      keyChallenge: "Managing token window constraints while maintaining conversational history and relevant retrieved document context.",
      githubUrl: undefined
    },
    {
      id: "fidoria-dining",
      title: "Fidoria Dining Platform",
      tagline: "Modern digital dining interface and catalog built for Fidoria Noodles & Chicken in Adama.",
      category: "Frontend / UI",
      featured: true,
      isCollaborative: false,
      problem: "Regional culinary establishments often rely solely on social media pages, lacking unified menu presentation, direct ordering pathways, and branded web identity.",
      solution: "Engineered a high-performance web experience with fluid food catalogs, responsive navigation, and accessible mobile ordering views.",
      myRole: "Lead developer and UI designer.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Radix UI", "TanStack Start"],
      githubUrl: "https://github.com/Adoni-Bebi/fidoria-dining-experience"
    },
    {
      id: "auth-secrets",
      title: "Authentication & Cryptographic Engine",
      tagline: "Server-side security lab implementing password hashing, session tokens, and protected routes.",
      category: "Full-Stack",
      featured: false,
      isCollaborative: false,
      problem: "Hands-on architectural exploration of backend credential persistence and defense against common injection and leakage risks.",
      solution: "Developed an isolated Express API enforcing strict environment variable segregation, salt rounds via bcrypt, and safe MongoDB schema definitions.",
      myRole: "Solo developer.",
      technologies: ["Node.js", "Express", "Mongoose", "MongoDB", "bcrypt"],
      githubUrl: "https://github.com/Adoni-Bebi/Authentication-secret"
    }
  ] as Project[],

  experience: [
    {
      company: "Ministry of Innovation and Technology (MinT), Ethiopia",
      role: "Software Engineering Intern",
      location: "Addis Ababa, Ethiopia",
      period: "Internship [Dates to be confirmed]",
      summary: "Contributed to digital public goods and platform engineering supporting the Ethiopian technology and startup ecosystem.",
      highlights: [
        "Collaborated on the Digital Innovation Hub web platform connecting Ethiopian founders, mentors, and investors.",
        "Built and integrated responsive citizen authentication views and data validation layers connecting to Express/MongoDB services.",
        "Participated in agile code reviews, Git branching workflows, and deployment cycles on Vercel and Render."
      ],
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "Git"]
    },
    {
      company: "Commercial Bank of Ethiopia (CBE)",
      role: "Engineering / IT Intern",
      location: "Addis Ababa, Ethiopia",
      period: "Internship [Dates to be confirmed]",
      summary: "Gained exposure to enterprise financial infrastructure, data processing workflows, and mission-critical system standards.",
      highlights: [
        "Observed institutional software operations and enterprise digital banking service flows.",
        "Collaborated with technical staff on system maintenance, diagnostic routines, and operational reporting."
      ],
      technologies: ["Enterprise Systems", "Troubleshooting", "Data Analysis"]
    }
  ] as Experience[],

  education: {
    institution: "Adama Science and Technology University (ASTU)",
    degree: "BSc in Computer Science and Engineering",
    location: "Adama, Ethiopia",
    status: "Final-Year Student [Expected Graduation: July 202X — Pending Confirmation]",
    cgpa: "3.47 / 4.0 (Verified Cumulative GPA)",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Object-Oriented Programming",
      "Software Engineering",
      "Computer Networks",
      "Web Programming"
    ]
  } as Education,

  leadership: [
    {
      title: "Leadership Recognition in Conflict Resolution & Peacebuilding",
      organization: "Recognized Initiative",
      credential: "Certificate in Conflict Resolution and Peacebuilding from Wollo University",
      description: "Spearheaded student-led initiatives to foster constructive cross-community dialogue, mutual understanding, and collaborative consensus.",
      impact: "Demonstrated emotional intelligence, active listening, and calm mediation during high-stakes group dynamics—skills directly applicable to engineering leadership."
    }
  ] as Leadership[]
};
