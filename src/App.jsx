import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>RISHAV AERON</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Aspiring Frontend Developer with a recent certification in MERN stack development.
             I am passionate about building responsive and scalable web applications using modern 
             technologies like React.js, Bootstrap, and REST APIs. Seeking an internship opportunity 
             to contribute to impactful projects and grow my frontend development skills.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Project One</strong>: Description of your project.
            </li>
            <li>
              <strong>Project Two</strong>: Description of your project.
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </>
  )
}

export default App
