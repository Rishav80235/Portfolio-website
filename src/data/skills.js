export const capabilities = [
  {
    number: "01",
    title: "Frontend & Mobile Engineering",
    description: "Developing responsive web applications and cross-platform mobile apps with modern component architectures, state management, and fluid UI experiences.",
    skills: ["React.js", "Vue.js", "Redux", "React Native", "Expo", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    number: "02",
    title: "Backend & Systems Architecture",
    description: "Architecting structured backend systems, RESTful API endpoints, server-side business logic, and role-based security workflows.",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Role-Based Access Control (RBAC)", "API Integration"]
  },
  {
    number: "03",
    title: "Databases & Cloud Storage",
    description: "Designing scalable database schemas, indexing data structures, and managing relational, document, and real-time cloud databases.",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Mongoose", "Database Optimization"]
  },
  {
    number: "04",
    title: "Developer Tools & DevOps",
    description: "Version control workflows, API testing suites, containerization, and modern build pipelines.",
    skills: ["Git", "GitHub", "Postman", "Docker", "VS Code", "Vercel"]
  }
];

export const skillsByCategory = [
  { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Redux"] },
  { category: "Mobile", skills: ["React Native", "Expo"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database & Cloud", skills: ["MongoDB", "PostgreSQL", "Firebase", "Mongoose"] },
  { category: "Tools & DevOps", skills: ["Git", "GitHub", "Postman", "Docker"] },
  { category: "Core Focus", skills: ["Authentication", "RBAC", "API Integration", "State Management"] }
];

export const educationAndCert = {
  education: {
    title: "Bachelor of Science in Computer Applications (BCA)",
    institution: "Nirwan University, Jaipur",
    period: "2024 – Present",
    details: "Foundational computer science, software engineering principles, and application development."
  },
  certifications: [
    {
      title: "MERN Stack Development",
      institution: "WsCubeTech Career Institute, Jaipur",
      period: "Certified",
      details: "Comprehensive full-stack engineering covering MongoDB, Express.js, React.js, Node.js, and production backend development.",
      file: "/Rishav-certificate.pdf"
    },
    {
      title: "React Native Development",
      institution: "Groot Academy",
      period: "Certified",
      details: "Cross-platform mobile application development using React Native and Expo framework.",
      file: null
    }
  ],
  resume: {
    file: "/Rishav-Aeron.pdf",
    label: "Download Full Resume"
  }
};
