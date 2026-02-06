const BASE_IMG = "https://joncms95.github.io/static/assets";

export const profile = {
  name: "Jonathan Chan",
  shortName: "Jonathan Chan",
  initials: "JC",
  title: "Senior Software Engineer",
  company: "Dynamite Games",
  tagline: "From competitive gaming arenas to elegant code architecture — building fast, scalable, and meaningful products.",
  bio: [
    "An avid gamer turned tech enthusiast, with a diverse journey from accounting to esports to software engineering.",
    "Mildly obsessed with clean code, I have a deep appreciation for elegant code and take pride in keeping systems tidy and well-structured. I optimize workflows and systems to empower others and myself to build fast, scalable, and meaningful products."
  ],
  image: `${BASE_IMG}/profile.png`,
  location: "Kuala Lumpur, Malaysia",
  phone: "+60 16-5105019",
  email: "joncms95@hotmail.com",
  resumeUrl: "https://joncms95.github.io/resume.pdf",
  links: {
    liquipedia: "https://liquipedia.net/wildrift/Chilly",
    lolFandom: "https://lol.fandom.com/wiki/Chilly"
  }
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Gallery", href: "#gallery" },
];

export const experiences = [
  {
    id: "dynamite",
    company: "Dynamite Games Sdn Bhd",
    location: "Kuala Lumpur, Malaysia",
    overallPeriod: "Jun 2023 – Present",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Jul 2025 – Present",
        current: true,
        description: "Working with the backend team in web game development, collaborating with operations, QA and game design teams.",
        achievements: [
          "Spearheaded CI testing integration with real-time logging and TDD enforcement",
          "Designed and built a localization module for multi-language support",
          "Revamped web page load speed from 13s to 0.5s using lazy loading",
          "Lead 8+ production deployments monthly",
          "Drive technical excellence through sharing sessions and code reviews",
          "Designed technical assessment programs for new joiners",
          "Onboard and mentor new team members"
        ]
      },
      {
        title: "Software Engineer",
        period: "Jun 2023 – Jun 2025",
        duration: "2 years 1 month",
        achievements: [
          "End-to-end game development lifecycle involvement",
          "Implemented Finite State Machines (FSM) for complex game logic",
          "Developed simulations and unit tests for product accuracy",
          "Managed Kubernetes resources via Rancher/Lens",
          "Provided 24/7 on-call support for production incidents"
        ]
      }
    ],
    tech: ["Ruby on Rails", "Sidekiq", "Socket.IO", "RSpec", "Haml", "MongoDB", "Redis", "Jenkins", "Docker", "Kubernetes", "AWS"],
    type: "tech"
  },
  {
    id: "sem9",
    company: "SEM9 Holding Sdn Bhd",
    location: "Petaling Jaya, Malaysia",
    overallPeriod: "Nov 2021 – Apr 2023",
    duration: "1 year 6 months",
    roles: [
      {
        title: "Administrative Executive",
        period: "Jan 2023 – Apr 2023",
        duration: "4 months",
        achievements: [
          "Set up email automation for improved work efficiency",
          "Generated contracts with Autocrat",
          "Managed e-commerce platforms (Shopee, Lazada, Shopify, TikTok)",
          "Coordinated with tournament organizers for merchandise sales"
        ]
      },
      {
        title: "Professional Player (Wild Rift)",
        period: "Nov 2021 – Dec 2022",
        duration: "1 year 2 months",
        description: "League of Legends: Wild Rift professional player under SEM9",
        achievements: [
          "National representative for Esports in SEA Games",
          "Player coach — managing daily operations and training",
          "Champions in MYSG Region",
          "4th place in SEA Games Hanoi",
          "Multiple Regional Tournament Participant"
        ]
      }
    ],
    tech: [],
    type: "esports",
    achievementLink: "https://liquipedia.net/wildrift/Chilly"
  },
  {
    id: "berjaya",
    company: "Berjaya Esports Sdn Bhd",
    companyShort: "Berjaya Dragons",
    location: "Kuala Lumpur, Malaysia",
    overallPeriod: "Jan 2020 – Oct 2021",
    duration: "1 year 10 months",
    roles: [
      {
        title: "Professional Player (Wild Rift)",
        period: "May 2021 – Oct 2021",
        duration: "6 months",
        achievements: [
          "Team captain and shotcaller",
          "Icon Series Malaysia Champions",
          "Participated in SEA Icon Series and SEA Championship 2021"
        ]
      },
      {
        title: "Assistant Manager / Esports Coach",
        period: "Jan 2021 – Apr 2021",
        duration: "4 months",
        achievements: [
          "Managed various esports teams under Berjaya Dragons",
          "Coaching Wild Rift team"
        ]
      },
      {
        title: "Professional Player (League of Legends PC)",
        period: "Jan 2020 – Dec 2020",
        duration: "1 year",
        achievements: [
          "Participated in Pacific Championship Series (PCS)",
          "Competed against teams from Taiwan, Hong Kong, Macao and SEA"
        ]
      }
    ],
    tech: [],
    type: "esports",
    achievementLink: "https://lol.fandom.com/wiki/Chilly"
  },
  {
    id: "fdg",
    company: "Fire Dragoon Esports Sdn Bhd",
    companyShort: "Fire Dragoon",
    location: "Petaling Jaya, Malaysia",
    overallPeriod: "Jun 2017 – May 2018",
    duration: "1 year",
    roles: [
      {
        title: "Professional Player (League of Legends PC)",
        period: "Jun 2017 – May 2018",
        duration: "1 year",
        achievements: [
          "Rank 1 (Top 0.01%) on MY/SG server for multiple seasons",
          "Team captain",
          "Participated in national league (LCM) and LOC in Bangkok"
        ]
      }
    ],
    tech: [],
    type: "esports",
    achievementLink: "https://lol.fandom.com/wiki/Chilly"
  },
  {
    id: "jblau",
    company: "JB Lau & Khoo",
    location: "Petaling Jaya, Malaysia",
    overallPeriod: "Jun 2018 – Jun 2019",
    duration: "1 year 1 month",
    roles: [
      {
        title: "Audit Associate",
        period: "Jun 2018 – Jun 2019",
        achievements: [
          "Complete audit assignments from pre-engagement to finalization",
          "Statutory audits for dormant companies and SMEs",
          "Draft and final reports of consolidated accounts"
        ]
      }
    ],
    tech: ["Audit Express"],
    type: "accounting"
  },
  {
    id: "kpmg",
    company: "KPMG",
    location: "Perak, Malaysia",
    overallPeriod: "Oct 2016 – Jan 2017",
    duration: "4 months",
    roles: [
      {
        title: "Audit Trainee",
        period: "Oct 2016 – Jan 2017",
        achievements: [
          "Conducting audit fieldwork and preparing working papers",
          "Audit sampling, walk-through tests, and journal entries review",
          "Financial statement amendments and various audit procedures"
        ]
      }
    ],
    tech: [],
    type: "accounting"
  }
];

export const education = [
  {
    institution: "HarvardX",
    degree: "CS50 Introduction to Computer Science",
    period: "Dec 2022 – Apr 2023",
    description: "Harvard University's introduction to computer science and the art of programming"
  },
  {
    institution: "Universiti Tunku Abdul Rahman",
    degree: "Bachelor of Commerce (Hons) Accounting",
    period: "May 2014 – May 2017",
    gpa: "CGPA: 3.1368 / Honours Degree with Merit",
    achievements: ["Dean's List", "Final Year Project Presenter", "MUET Band 5"]
  },
  {
    institution: "Universiti Tunku Abdul Rahman",
    degree: "Foundation in Arts (Management & Accountancy)",
    period: "May 2013 – May 2014",
    gpa: "CGPA: 3.7340"
  },
  {
    institution: "SMK Bercham",
    degree: "Sijil Pelajaran Malaysia (SPM), Science",
    period: "Jan 2008 – Dec 2012",
    gpa: "8As 2Bs"
  }
];

export const skills = {
  languages: ["Ruby", "Python", "Haml", "HTML", "CSS", "JavaScript"],
  frameworks: ["Ruby on Rails", "Sidekiq", "Socket.IO", "Flask", "RESTful API", "gRPC", "Bootstrap"],
  databases: ["MongoDB", "SQLite", "Redis"],
  devops: ["Docker", "Kubernetes", "Jenkins", "Nginx", "Gunicorn", "AWS", "Digital Ocean", "Vercel"],
  tools: ["Bash", "Git", "GitHub", "GitLab", "Sourcetree", "Postman", "Lens", "Rancher"],
  ai: ["ChatGPT", "Google Gemini", "GitHub Copilot", "Cursor"],
  practices: ["Agile", "Jira", "Trello", "Slack"],
  communication: ["English", "Mandarin", "Malay", "Cantonese"]
};

export const projects = [
  {
    id: "banpick",
    title: "Ban Pick Tool",
    subtitle: "Mobile Legends Draft Simulator",
    description: "Ban pick tool simulating the Mobile Legends Draft Pick selection phase for competitive tournaments.",
    link: "https://www.mlbbdraft.xyz/",
    tech: ["Flask", "Python", "Socket.IO", "JavaScript", "MongoDB", "Nginx"],
    features: [
      "Draft creation with team name customization",
      "Unique links for Blue Team, Red Team, and Spectator",
      "Real-time ban pick simulation with countdown timer",
      "Hero search and selection interface"
    ],
    images: [
      { src: `${BASE_IMG}/projects/mlbb_ban_pick/create.png`, caption: "Team setup page" },
      { src: `${BASE_IMG}/projects/mlbb_ban_pick/links.png`, caption: "Draft links page" },
      { src: `${BASE_IMG}/projects/mlbb_ban_pick/draft.png`, caption: "Draft simulation" }
    ],
    period: "Jan 2023 – Present"
  },
  {
    id: "mortgage",
    title: "Mortgage Calculator",
    subtitle: "Streamlit App",
    description: "A mortgage calculator built with Streamlit for monthly estimation, affordability, and upfront costs.",
    link: "https://my-mortgage-calculator.streamlit.app/",
    tech: ["Streamlit", "Python", "Plotly"],
    features: [
      "Monthly Mortgage Estimation",
      "Home Affordability Estimation",
      "Upfront Costs Estimation"
    ],
    images: [
      { src: `${BASE_IMG}/projects/mortgage_calculator/preview.gif`, caption: "Calculator preview" }
    ],
    period: "Aug 2024 – Present"
  },
  {
    id: "puttputt",
    title: "Putt-Putt Enters The Race",
    subtitle: "CS50 Scratch Project",
    description: "A fun racing game created for Harvard CS50 coursework — avoid obstacles and race to the finish!",
    link: "https://scratch.mit.edu/projects/794999078/",
    tech: ["Scratch"],
    features: [
      "Cursor-controlled driving",
      "Increasing speed challenge",
      "Sound effects with Spacebar honk"
    ],
    images: [],
    period: "Jan 2023"
  }
];

export const galleryImages = [
  { src: `${BASE_IMG}/experience/sem9_1.jpg`, caption: "SEA Games Hanoi", category: "SEM9" },
  { src: `${BASE_IMG}/experience/sem9_2.jpg`, caption: "Game win against Team Philippines", category: "SEM9" },
  { src: `${BASE_IMG}/experience/sem9_3.jpg`, caption: "Departure to Hanoi for SEA Games", category: "SEM9" },
  { src: `${BASE_IMG}/experience/sem9_4.jpg`, caption: "SEM9 Office in Petaling Jaya", category: "SEM9" },
  { src: `${BASE_IMG}/experience/bjd_1.png`, caption: "Pacific Championship Series (PCS)", category: "Berjaya Dragons" },
  { src: `${BASE_IMG}/experience/bjd_2.jpg`, caption: "Training facilities in Taiwan", category: "Berjaya Dragons" },
  { src: `${BASE_IMG}/experience/bjd_3.png`, caption: "Ready to soar — The Sun Malaysia", category: "Berjaya Dragons" },
  { src: `${BASE_IMG}/experience/bjd_4.png`, caption: "Berjaya Dragons Wild Rift", category: "Berjaya Dragons" },
  { src: `${BASE_IMG}/experience/bjd_5.jpg`, caption: "Icon Series Malaysia Champions", category: "Berjaya Dragons" },
  { src: `${BASE_IMG}/experience/fdg_1.jpg`, caption: "Fire Dragoon — The Star Newspaper", category: "Fire Dragoon" },
  { src: `${BASE_IMG}/experience/fdg_2.jpg`, caption: "Colorcaster at Garena All-Stars", category: "Fire Dragoon" },
  { src: `${BASE_IMG}/experience/fdg_3.jpg`, caption: "Champions of LoC Malaysia", category: "Fire Dragoon" },
  { src: `${BASE_IMG}/experience/kpmg.jpg`, caption: "Internship at KPMG", category: "KPMG" }
];
