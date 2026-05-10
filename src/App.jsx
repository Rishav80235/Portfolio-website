import "./App.css";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    {
      title: "Easy Shop",
      description: "An ecommerce website offering a seamless shopping experience with modern UI, product browsing, and secure checkout. Built for performance and user-friendliness.",
      image: "/easyshop.jpg",
      technologies: ["React.js", "CSS3", "JavaScript", "Ecommerce", "Responsive Design"],
      liveLink: "https://e-commerce-website-mu-blond.vercel.app/",
      githubLink: "https://github.com/Rishav80235/E-Commerce-Website",
      features: ["Product Catalog", "Shopping Cart", "User Authentication", "Responsive Design"]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills and projects. Features a clean, mobile-first design with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000",
      technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design", "Glass Morphism"],
      liveLink: "https://vite-react-delta-wine-35.vercel.app/",
      githubLink: "https://github.com/Rishav80235/Portfolio-Website",
      features: ["Modern UI/UX", "Responsive Design", "Interactive Elements", "Smooth Animations"]
    },
    {
      title: "To-Do List App",
      description: "A feature-rich todo application with CRUD operations, local storage persistence, and a clean user interface. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000",
      technologies: ["React.js", "LocalStorage", "CSS3", "JavaScript", "CRUD Operations"],
      liveLink: "https://todo-list-rho-nine-17.vercel.app/",
      githubLink: "https://github.com/Rishav80235/Todo-List",
      features: ["Task Management", "Local Storage", "Filter & Search", "Responsive Design"]
    },
    {
      title: "Weather App",
      description: "A real-time weather application that provides accurate weather forecasts using the OpenWeatherMap API. Features temperature, humidity, and detailed weather conditions.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
      technologies: ["React.js", "REST API", "OpenWeatherMap", "CSS3", "JavaScript"],
      liveLink: "https://a-weather-app-ashy.vercel.app/",
      githubLink: "https://github.com/Rishav80235/Weather-App",
      features: ["Real-time Weather", "Location Search", "Weather Forecast", "Responsive UI"]
    },
    {
      title: "Gym Management System",
      description: "A comprehensive gym management system built with Vue.js, Redux, and Firebase. Features member management, workout tracking, and administrative tools for gym operations.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
      technologies: ["Vue.js", "Redux", "Firebase", "React Hooks", "JavaScript"],
      liveLink: "https://gym-managment-system-e8mc.vercel.app/",
      githubLink: "https://github.com/Rishav80235/Gym-Managment-System",
      features: ["Member Management", "Workout Tracking", "Admin Dashboard", "Real-time Updates"]
    },
    {
      title: "Student Teacher Appointment App",
      description: "An appointment scheduling application for students and teachers. Built with Vue.js, Redux, and Firebase, featuring real-time booking, calendar integration, and notification system.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
      technologies: ["Vue.js", "Redux", "Firebase", "React Hooks", "JavaScript"],
      liveLink: "https://student-teacher-appoinment.vercel.app/",
      githubLink: "https://github.com/Rishav80235/Student-Teacher-Appoinment",
      features: ["Appointment Booking", "Calendar Integration", "Real-time Notifications", "User Management"]
    }
  ]

  const skills = {
    languages: [
      { name: "JavaScript (ES6+)", level: "advanced" },
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" }
    ],
    frameworks: [
      { name: "React.js", level: "intermediate" },
      { name: "Vue.js", level: "intermediate" },
      { name: "Redux", level: "intermediate" },
      { name: "Bootstrap", level: "advanced" }
    ],
    tools: [
      { name: "Git", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "Firebase", level: "intermediate" },
      { name: "VS Code", level: "advanced" }
    ],
    other: [
      { name: "RESTful API", level: "intermediate" },
      { name: "Responsive Design", level: "advanced" },
      { name: "SEO Basics", level: "intermediate" }
    ],
    softSkills: [
      { name: "Quick Learner", level: "advanced" },
      { name: "Team Collaboration", level: "advanced" },
      { name: "Problem Solving", level: "advanced" },
      { name: "Time Management", level: "intermediate" }
    ]
  }

  const documents = [
    {
      title: "Resume",
      description: "My professional resume showcasing my skills, experience, and education",
      icon: "📄",
      file: "../public/Rishav Aeron.pdf"
    },
    {
      title: "MERN Stack Certification",
      description: "Certification in MERN Stack Development from WsCube Tech",
      icon: "🏆",
      file: "/Rishav-certificate.pdf"
    }
  ]

  return (
    <>
      <header className="header">
        <h1>RISHAV AERON</h1>
        <nav>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setActiveSection('about')}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </a>
          <a
            href="#connect"
            className={activeSection === 'connect' ? 'active' : ''}
            onClick={() => setActiveSection('connect')}
          >
            Connect
          </a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-main">
                <div className="about-header">
                  <div className="about-avatar">
                    <img src="/RishavAeron.jpg" alt="Rishav Aeron" />
                  </div>
                  <div className="about-title">
                    <h3>Frontend Developer</h3>
                    <p className="about-location">📍 Hindaun, Rajasthan, India</p>
                  </div>
                </div>
                <p className="objective">
                  Aspiring Frontend Developer with a recent certification in MERN stack development.
                  I am passionate about building responsive and scalable web applications using modern
                  technologies like React.js, Bootstrap, and REST APIs. Seeking an internship opportunity
                  to contribute to impactful projects and grow my frontend development skills.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎓</span>
                    <span className="highlight-text">Computer Science Graduate</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💻</span>
                    <span className="highlight-text">3+ Projects Completed</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span className="highlight-text">MERN Stack Certified</span>
                  </div>
                </div>
              </div>

              <div className="about-details">
                <div className="education">
                  <div className="detail-header">
                    <span className="detail-icon">🎓</span>
                    <h3>Education</h3>
                  </div>
                  <div className="detail-content">
                    <h4>Bachelor of Science in Computer Applications</h4>
                    <p className="institution">Nirwan University, Jaipur</p>
                    <p className="duration">2024 – Present</p>
                    <div className="detail-tags">
                      <span className="detail-tag">Computer Science</span>
                      <span className="detail-tag">Web Development</span>
                    </div>
                  </div>
                </div>

                <div className="certification">
                  <div className="detail-header">
                    <span className="detail-icon">🏆</span>
                    <h3>Certification</h3>
                  </div>
                  <div className="detail-content">
                    <h4>MERN Stack Developer</h4>
                    <p className="institution">WsCube Tech</p>
                    <p className="duration">2025</p>
                    <div className="detail-tags">
                      <span className="detail-tag">Full Stack</span>
                      <span className="detail-tag">MongoDB</span>
                      <span className="detail-tag">Express.js</span>
                      <span className="detail-tag">React.js</span>
                      <span className="detail-tag">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="documents">
          <h2>Documents</h2>
          <div className="documents-grid">
            {documents.map((doc, index) => (
              <div key={index} className="document-card">
                <div className="document-icon">{doc.icon}</div>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  View Document
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category frontend">
              <h3>Languages</h3>
              <div className="skills-list">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="tech-tag">{skill.name}</span>
                    <div className="skill-level" data-level={skill.level}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category backend">
              <h3>Frameworks & Libraries</h3>
              <div className="skills-list">
                {skills.frameworks.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="tech-tag">{skill.name}</span>
                    <div className="skill-level" data-level={skill.level}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category tools">
              <h3>Tools</h3>
              <div className="skills-list">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="tech-tag">{skill.name}</span>
                    <div className="skill-level" data-level={skill.level}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category database">
              <h3>Other Skills</h3>
              <div className="skills-list">
                {skills.other.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="tech-tag">{skill.name}</span>
                    <div className="skill-level" data-level={skill.level}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category soft-skills">
              <h3>Soft Skills</h3>
              <div className="skills-list">
                {skills.softSkills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="tech-tag soft-skill">{skill.name}</span>
                    <div className="skill-level" data-level={skill.level}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-features">
                    {project.features.map((feature, i) => (
                      <span key={i} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>View Live</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link secondary"
                    >
                      <span>Source Code</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="connect" className="connect-section">
          <div className="connect-header">
            <h2>Let's Connect</h2>
            <p className="connect-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          <div className="connect-container">
            <div className="connect-grid">
              <div className="connect-info">
                <div className="connect-info-item location">
                  <div className="connect-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="connect-text">
                    <h3>Location</h3>
                    <p>Jaipur, Rajasthan, India</p>
                    <span className="connect-tag">Available for Work</span>
                  </div>
                </div>

                <div className="connect-info-item contact">
                  <div className="connect-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="connect-text">
                    <h3>Phone</h3>
                    <a href="tel:+919929873530">+91 9929873530</a>
                    <span className="connect-tag">Mon-Fri, 9AM-6PM IST</span>
                  </div>
                </div>

                <div className="connect-info-item email">
                  <div className="connect-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="connect-text">
                    <h3>Email</h3>
                    <a href="mailto:rishavaeron80235@gmail.com">rishavaeron80235@gmail.com</a>
                    <span className="connect-tag">Response within 24 hours</span>
                  </div>
                </div>

                <div className="connect-info-item availability">
                  <div className="connect-icon">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                  <div className="connect-text">
                    <h3>Availability</h3>
                    <p>Open to New Opportunities</p>
                    <span className="connect-tag">Full-time & Freelance</span>
                  </div>
                </div>
              </div>

              <div className="connect-social">
                <h3>Connect on Social Media</h3>
                <p className="social-subtitle">Let's stay connected and share our journey</p>

                <div className="social-links">
                  <a href="https://github.com/Rishav80235"
                    className="social-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile">
                    <img src="/github.png" alt="GitHub" />
                    <span className="icon-label">GitHub</span>
                  </a>

                  <a href="https://www.linkedin.com/in/rishav-aeron-344048208/"
                    className="social-link linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile">
                    <img src="/linkedin.png" alt="LinkedIn" />
                    <span className="icon-label">LinkedIn</span>
                  </a>

                  <a href="https://x.com/AeronRishav54"
                    className="social-link twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile">
                    <img src="/Twitter.png" alt="Twitter" />
                    <span className="icon-label">Twitter</span>
                  </a>
                </div>

                <div className="connect-cta">
                  <p>Interested in working together?</p>
                  <a href="mailto:rishavaeron80235@gmail.com" className="cta-button">
                    Send me a message
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Rishav Aeron. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
