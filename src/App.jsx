import "./App.css";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js and Bootstrap. Features a clean, mobile-first design showcasing my skills and projects.",
      technologies: ["React.js", "Bootstrap", "CSS3", "Responsive Design"],
      link: "https://vite-react-delta-wine-35.vercel.app/"
    },
    {
      title: "To-Do List App",
      description: "A feature-rich todo application with CRUD operations and local storage persistence. Built with React.js and styled using Bootstrap.",
      technologies: ["React.js", "LocalStorage", "Bootstrap", "CRUD Operations"],
      link: "https://todo-list-rho-nine-17.vercel.app/"
    },
    {
      title: "Weather App",
      description: "A real-time weather application that fetches and displays weather data using the OpenWeatherMap API. Features temperature, humidity, and weather conditions.",
      technologies: ["React.js", "REST API", "OpenWeatherMap", "Responsive Design"],
      link: "https://weather-app-livid-one-99.vercel.app/"
    }
  ]

  const skills = {
    languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    frameworks: ["React.js", "Bootstrap"],
    tools: ["Git", "GitHub", "VS Code"],
    other: ["RESTful API Integration", "Responsive Design", "SEO Basics"],
    softSkills: ["Quick Learner", "Team Collaboration", "Problem Solving", "Attention to Detail", "Time Management", "Communication"]
  }

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
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <p className="objective">
              Aspiring Frontend Developer with a recent certification in MERN stack development. 
              I am passionate about building responsive and scalable web applications using modern 
              technologies like React.js, Bootstrap, and REST APIs. Seeking an internship opportunity 
              to contribute to impactful projects and grow my frontend development skills.
            </p>
            <div className="education">
              <h3>Education</h3>
              <p>Bachelor of Science in Computer Applications</p>
              <p>Nirwan University, Jaipur — 2024 – Present</p>
            </div>
            <div className="certification">
              <h3>Certification</h3>
              <p>MERN Stack Developer Certification – WsCube Tech (2025)</p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="tech-stack">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="tech-stack">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="tech-stack">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Skills</h3>
              <div className="tech-stack">
                {skills.other.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="tech-stack">
                {skills.softSkills.map((skill, i) => (
                  <span key={i} className="tech-tag soft-skill">{skill}</span>
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
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-details">
              <p>📍 Hindaun, Rajasthan, India</p>
              <p>📞 +91-9929873530</p>
              <a href="mailto:rishavaeron80235@email.com">✉️ rishavaeron80235@email.com</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Rishav80235" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://vite-react-delta-wine-35.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
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
