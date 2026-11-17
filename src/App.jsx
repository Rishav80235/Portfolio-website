import CyberBackground from './components/CyberBackground';
import CyberCursor from './components/CyberCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SectorDivider from './components/SectorDivider';
import './App.css';

export default function App() {
  return (
    <div className="scifi-portfolio-root">
      <CyberCursor />
      <CyberBackground />
      <Navbar />
      <main className="scifi-main-deck">
        <Hero />
        <SectorDivider from="00_COMMAND" to="01_MISSIONS" label="TACTICAL_OPERATIONS" />
        <Projects />
        <SectorDivider from="01_MISSIONS" to="02_INTEL" label="OPERATOR_DOSSIER" />
        <About />
        <SectorDivider from="02_INTEL" to="03_STACK" label="TECHNICAL_MATRIX" />
        <Skills />
        <SectorDivider from="03_STACK" to="04_COMMS" label="TRANSMISSION_UPLINK" />
      </main>
      <Footer />
    </div>
  );
}
