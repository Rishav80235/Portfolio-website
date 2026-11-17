import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Radio, ShieldCheck, Zap, Volume2, VolumeX, Activity } from 'lucide-react';
import { toggleAudio, isAudioEnabled, playHoverSound, playLaserClick } from '../utils/cyberAudio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveTime, setLiveTime] = useState('');
  const [audioActive, setAudioActive] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Track active section for HUD telemetry
      const sections = ['hero', 'missions', 'intel', 'matrix', 'comms'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      setLiveTime(
        new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now)
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleAudioToggle = () => {
    const state = toggleAudio();
    setAudioActive(state);
  };

  const scrollTo = (id) => {
    playLaserClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`scifi-navbar ${scrolled ? 'hud-scrolled' : ''}`}>
      {/* HUD Telemetry Top Ribbon */}
      <div className="hud-top-ribbon">
        <div className="ribbon-inner">
          <div className="telemetry-node">
            <Radio size={12} className="pulse-cyan" />
            <span>LOC: 26.91°N, 75.78°E [JAIPUR]</span>
          </div>
          <div className="telemetry-separator">//</div>
          <div className="telemetry-node">
            <Activity size={12} className="text-cyan animate-pulse" />
            <span>RADAR_NODE: {activeSection.toUpperCase()}</span>
          </div>
          <div className="telemetry-separator">//</div>
          <div className="telemetry-node">
            <ShieldCheck size={12} className="text-emerald" />
            <span>CORE: ONLINE (100%)</span>
          </div>
          <div className="telemetry-separator">//</div>
          <div className="telemetry-node time-node">
            <span>SYS_TIME: {liveTime || '00:00:00'} IST</span>
          </div>
        </div>
      </div>

      {/* Main HUD Nav Bar */}
      <div className="hud-main-bar">
        <div className="hud-nav-container">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="hud-brand"
            onMouseEnter={playHoverSound}
            onClick={(e) => {
              e.preventDefault();
              playLaserClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="hud-brand-box">
              <Terminal size={16} className="brand-term-icon" />
              <span className="brand-code">RA//SYS</span>
            </div>
            <span className="brand-sub">OS_v2.6</span>
          </a>

          {/* Desktop HUD Navigation Capsules */}
          <nav className="hud-desktop-links">
            <button
              onClick={() => scrollTo('missions')}
              onMouseEnter={playHoverSound}
              className={`hud-nav-item ${activeSection === 'missions' ? 'active-section' : ''}`}
            >
              <span className="hud-link-prefix">// 01</span>
              <span>MISSIONS</span>
            </button>
            <button
              onClick={() => scrollTo('intel')}
              onMouseEnter={playHoverSound}
              className={`hud-nav-item ${activeSection === 'intel' ? 'active-section' : ''}`}
            >
              <span className="hud-link-prefix">// 02</span>
              <span>INTEL</span>
            </button>
            <button
              onClick={() => scrollTo('matrix')}
              onMouseEnter={playHoverSound}
              className={`hud-nav-item ${activeSection === 'matrix' ? 'active-section' : ''}`}
            >
              <span className="hud-link-prefix">// 03</span>
              <span>STACK</span>
            </button>
            <button
              onClick={() => scrollTo('comms')}
              onMouseEnter={playHoverSound}
              className={`hud-nav-item ${activeSection === 'comms' ? 'active-section' : ''}`}
            >
              <span className="hud-link-prefix">// 04</span>
              <span>TRANSMIT</span>
            </button>
          </nav>

          {/* Audio Synthesizer Toggle & EQ Spectrum */}
          <div className="hud-nav-actions">
            <button
              onClick={handleAudioToggle}
              className={`hud-audio-toggle-btn ${audioActive ? 'audio-live' : 'audio-muted'}`}
              title="Toggle Cyber SFX"
              onMouseEnter={playHoverSound}
            >
              {/* Animated 5-Bar Cyber Audio Spectrum */}
              <div className="cyber-eq-bars">
                <span className="eq-bar bar-1"></span>
                <span className="eq-bar bar-2"></span>
                <span className="eq-bar bar-3"></span>
                <span className="eq-bar bar-4"></span>
                <span className="eq-bar bar-5"></span>
              </div>
              <span className="audio-label">{audioActive ? 'SFX: ON' : 'SFX: OFF'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="hud-mobile-toggle"
              onClick={() => {
                playLaserClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Deck"
            >
              {mobileMenuOpen ? <X size={20} className="text-cyan" /> : <Menu size={20} className="text-cyan" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Holographic Menu Overlay */}
      {mobileMenuOpen && (
        <div className="hud-mobile-dropdown">
          <nav className="mobile-links-list">
            <button
              onClick={() => scrollTo('missions')}
              onMouseEnter={playHoverSound}
              className="mobile-nav-link"
            >
              <span className="text-cyan">// 01</span>
              <span>MISSIONS [PROJECTS]</span>
            </button>
            <button
              onClick={() => scrollTo('intel')}
              onMouseEnter={playHoverSound}
              className="mobile-nav-link"
            >
              <span className="text-cyan">// 02</span>
              <span>INTEL [ABOUT &amp; CERTIFICATIONS]</span>
            </button>
            <button
              onClick={() => scrollTo('matrix')}
              onMouseEnter={playHoverSound}
              className="mobile-nav-link"
            >
              <span className="text-cyan">// 03</span>
              <span>STACK [TECHNICAL MATRIX]</span>
            </button>
            <button
              onClick={() => scrollTo('comms')}
              onMouseEnter={playHoverSound}
              className="mobile-nav-link"
            >
              <span className="text-cyan">// 04</span>
              <span>TRANSMIT [CONTACT]</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
