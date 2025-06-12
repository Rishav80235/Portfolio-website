import "./App.css";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"]
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
          <p>
            I'm a passionate Frontend Developer with a recent certification in MERN stack development.
            My journey in web development is driven by a love for creating beautiful, responsive, and
            user-friendly applications. I specialize in modern technologies like React.js, TypeScript,
            and REST APIs, always focusing on writing clean, maintainable code and following best practices.
          </p>
          <p>
            Currently seeking opportunities to contribute to meaningful projects where I can apply my
            skills and continue growing as a developer. I'm particularly interested in building
            applications that make a positive impact on users' lives.
          </p>
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
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
