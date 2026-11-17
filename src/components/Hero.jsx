import { useState, useRef, useEffect } from 'react';
import { ArrowDown, Download, Radio, Terminal, Sparkles, Send, Play, RotateCcw, Check, ExternalLink, Zap, Shield, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { playHoverSound, playLaserClick, playPowerUp, playChime, playTerminalBlip } from '../utils/cyberAudio';
import { useScramble } from '../utils/textScramble';
import CyberRadar from './CyberRadar';
import WarRoomTelemetry from './WarRoomTelemetry';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('spec');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'output', text: '[SYSTEM_INIT] RA_SYSTEM_OS v2.6 boot successful.' },
    { type: 'output', text: '[INFO] Full Stack MERN & React Native runtime linked.' }
  ]);
  const [manualCmd, setManualCmd] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const cardRef = useRef(null);

  // Scramble decryptor effects for headlines
  const { displayText: titleText, triggerScramble: scrambleTitle } = useScramble('RISHAV AERON', true, 25);
  const { displayText: roleText, triggerScramble: scrambleRole } = useScramble('FULL STACK ARCHITECT // MERN // REACT NATIVE', true, 20);

  // Hover lock: ensures animation triggers only once per hover and never loops while cursor stays on element
  const hasTitleHoveredRef = useRef(false);
  const hasRoleHoveredRef = useRef(false);

  const handleTitleMouseEnter = () => {
    if (hasTitleHoveredRef.current) return;
    hasTitleHoveredRef.current = true;
    playHoverSound();
    scrambleTitle();
  };

  const handleTitleMouseLeave = () => {
    hasTitleHoveredRef.current = false;
  };

  const handleRoleMouseEnter = () => {
    if (hasRoleHoveredRef.current) return;
    hasRoleHoveredRef.current = true;
    playHoverSound();
    scrambleRole();
  };

  const handleRoleMouseLeave = () => {
    hasRoleHoveredRef.current = false;
  };

  const scrollToSection = (id) => {
    playLaserClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3D Perspective Tilt Physics on Terminal Card with cursor glare (Zero React re-renders)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.setProperty('--glare-x', `${x}px`);
    cardRef.current.style.setProperty('--glare-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Interactive Terminal Command Execution
  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    playTerminalBlip();
    setIsTyping(true);

    if (cmd === 'clear') {
      setTerminalLogs([]);
      setIsTyping(false);
      return;
    }

    if (cmd === 'help') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'input', text: `> ${rawCmd}` },
        { type: 'output', text: 'AVAILABLE PROTOCOLS:' },
        { type: 'output', text: '  launch_crm   -> Open live full-stack CRM web deployment' },
        { type: 'output', text: '  run_mobile   -> Metro bundle React Native Groot e-commerce app' },
        { type: 'output', text: '  cat_skills   -> Inspect technical stack matrix' },
        { type: 'output', text: '  status       -> Display system health and telemetry' },
        { type: 'output', text: '  contact      -> Open communications channels' },
        { type: 'output', text: '  clear        -> Clear terminal log buffer' }
      ]);
      setIsTyping(false);
      return;
    }

    if (cmd === 'launch_crm' || cmd === 'crm') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'input', text: `> ${rawCmd}` },
        { type: 'output', text: '[CONN] Establishing encrypted uplink to https://crm-frontend-l6tb.onrender.com/ ...' },
        { type: 'success', text: '[SUCCESS] Full Stack CRM web application deployed live.' }
      ]);
      playPowerUp();
      setTimeout(() => {
        setIsTyping(false);
        window.open('https://crm-frontend-l6tb.onrender.com/', '_blank');
      }, 700);
      return;
    }

    if (cmd === 'run_mobile' || cmd === 'mobile' || cmd === 'groot') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'input', text: `> ${rawCmd}` },
        { type: 'output', text: '[EXPO] Initializing Metro bundler for Groot E-Commerce Mobile App...' },
        { type: 'success', text: '[SUCCESS] Cross-platform iOS/Android package deployed on Expo CLI.' }
      ]);
      playPowerUp();
      setIsTyping(false);
      return;
    }

    if (cmd === 'cat_skills' || cmd === 'skills' || cmd === 'stack') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'input', text: `> ${rawCmd}` },
        { type: 'output', text: 'CORE_STACK: [React.js, React Native, Vue.js, Node.js, Express.js, MongoDB, PostgreSQL, Firebase, Docker]' },
        { type: 'output', text: 'CREDENTIALS: WsCubeTech MERN Certification, Groot Academy React Native' }
      ]);
      setIsTyping(false);
      return;
    }

    if (cmd === 'status') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'input', text: `> ${rawCmd}` },
        { type: 'output', text: '[TELEMETRY] STATUS: ONLINE (100%) | LOCATION: Jaipur, Rajasthan | RADAR: ACTIVE' },
        { type: 'success', text: '[AVAILABILITY] OPEN FOR FULL-STACK & MOBILE ROLES' }
      ]);
      setIsTyping(false);
      return;
    }

    if (cmd === 'contact') {
      setTerminalLogs((prev) => [
        ...prev,
        { type: 'input', text: `> ${rawCmd}` },
        { type: 'output', text: 'EMAIL: rishavaeron80235@gmail.com' },
        { type: 'output', text: 'PHONE: +91 9929873530' },
        { type: 'output', text: 'GITHUB: github.com/Rishav80235' }
      ]);
      setIsTyping(false);
      return;
    }

    // Default unknown command
    setTerminalLogs((prev) => [
      ...prev,
      { type: 'input', text: `> ${rawCmd}` },
      { type: 'error', text: `[ERROR] Command "${rawCmd}" unrecognized. Type "help" for protocol list.` }
    ]);
    setIsTyping(false);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualCmd.trim()) return;
    executeCommand(manualCmd);
    setManualCmd('');
  };

  const coreModules = [
    { name: "React.js", level: "v19.0", status: "ONLINE" },
    { name: "React Native", level: "Mobile", status: "ACTIVE" },
    { name: "Vue.js", level: "Frontend", status: "ACTIVE" },
    { name: "Redux", level: "State Mgmt", status: "SYNCED" },
    { name: "Node.js", level: "Backend", status: "ONLINE" },
    { name: "Express.js", level: "REST API", status: "ACTIVE" },
    { name: "MongoDB", level: "NoSQL DB", status: "INDEXED" },
    { name: "Firebase", level: "Cloud/Auth", status: "LINKED" },
    { name: "PostgreSQL", level: "SQL DB", status: "VERIFIED" },
    { name: "Docker", level: "Container", status: "READY" }
  ];

  return (
    <section id="hero" className="scifi-hero-section">
      <div className="hero-corner corner-tl"></div>
      <div className="hero-corner corner-tr"></div>

      <div className="hero-grid-deck">
        {/* Left Column: Mission Brief & Headlines */}
        <div className="hero-intel-col">
          {/* Cyber Classified Tag with Decrypt Action */}
          <div
            className="cyber-eyebrow-pill"
            onMouseEnter={handleRoleMouseEnter}
            onMouseLeave={handleRoleMouseLeave}
          >
            <Radio size={14} className="pulse-cyan" />
            <span className="font-mono">{roleText}</span>
          </div>

          <h1
            className="cyber-main-title cursor-pointer"
            onMouseEnter={handleTitleMouseEnter}
            onMouseLeave={handleTitleMouseLeave}
            onClick={() => {
              playLaserClick();
              scrambleTitle();
            }}
            title="Click to scramble cyber decryptor"
          >
            <span className="cyber-neon-glow glitch-effect" data-text={titleText}>
              {titleText}
            </span>
          </h1>

          <div className="cyber-role-banner">
            <span className="bracket">[</span>
            <span className="role-text">FULL STACK DEVELOPER | MERN STACK | REACT NATIVE SPECIALIST</span>
            <span className="bracket">]</span>
          </div>

          <p className="cyber-lead-desc">
            Building scalable web applications, robust backend architectures, and high-performance cross-platform mobile apps with React.js, React Native, Node.js, Express.js, and MongoDB.
          </p>

          {/* Interactive Live Metrics Ticker */}
          <div className="cyber-quick-stats-row">
            <div className="quick-stat-box" onMouseEnter={playHoverSound}>
              <span className="stat-num text-cyan">100%</span>
              <span className="stat-label">RBAC &amp; AUTH INTEGRITY</span>
            </div>
            <div className="quick-stat-box" onMouseEnter={playHoverSound}>
              <span className="stat-num text-violet">02</span>
              <span className="stat-label">FLAGSHIP SYSTEMS</span>
            </div>
            <div className="quick-stat-box" onMouseEnter={playHoverSound}>
              <span className="stat-num text-emerald">&lt;15ms</span>
              <span className="stat-label">SYS RESPONSE TIME</span>
            </div>
          </div>

          {/* Tactical Action Buttons */}
          <div className="cyber-action-row">
            <button
              onClick={() => scrollToSection('missions')}
              onMouseEnter={playHoverSound}
              className="cyber-btn-primary"
            >
              <span className="btn-bracket">[</span>
              <span>EXPLORE MISSIONS</span>
              <ArrowDown size={17} className="btn-icon" />
              <span className="btn-bracket">]</span>
            </button>

            <a
              href="/Rishav-Aeron.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playChime}
              className="cyber-btn-secondary"
            >
              <Download size={16} />
              <span>ACCESS RESUME.PDF</span>
            </a>

            <button
              onClick={() => scrollToSection('comms')}
              onMouseEnter={playHoverSound}
              className="cyber-btn-ghost"
            >
              <Send size={15} />
              <span>TRANSMIT COMMS</span>
            </button>
          </div>

          {/* Social Frequency Nodes */}
          <div className="cyber-social-nodes">
            <span className="social-sublabel">SECURE UPLINKS:</span>
            <div className="nodes-group">
              <a
                href="https://github.com/Rishav80235"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                className="cyber-node-btn"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishav-aeron-344048208/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                className="cyber-node-btn"
                aria-label="LinkedIn Network"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://x.com/AeronRishav54"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                className="cyber-node-btn"
                aria-label="Twitter Uplink"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Cyber Terminal & 3D Tilt HUD */}
        <div className="hero-hud-col">
          {/* Tactical Radar Telemetry Cluster */}
          <div className="hud-radar-and-status-row">
            <CyberRadar />
            <div className="hud-radar-companion-box">
              <div className="companion-item">
                <span className="comp-lbl font-mono">// CORE_CLEARANCE</span>
                <span className="comp-val text-cyan font-mono">LEVEL_4_FULL_STACK</span>
              </div>
              <div className="companion-item">
                <span className="comp-lbl font-mono">// RADAR_TARGET_01</span>
                <span className="comp-val text-emerald font-mono">CRM_SYSTEM (LIVE)</span>
              </div>
              <div className="companion-item">
                <span className="comp-lbl font-mono">// RADAR_TARGET_02</span>
                <span className="comp-val text-violet font-mono">GROOT_APP (MOBILE)</span>
              </div>
            </div>
          </div>

          <div
            ref={cardRef}
            className="scifi-terminal-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-sheen-overlay"></div>

            {/* Terminal Window Header */}
            <div className="terminal-topbar">
              <div className="term-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-cyan"></span>
              </div>
              <div className="term-title">
                <Terminal size={13} className="text-cyan" />
                <span>RISHAV_OS // INTERACTIVE_HUD_DECK.sh</span>
              </div>
              <div className="term-status-tag">3D_INTERACTIVE</div>
            </div>

            {/* Interactive Terminal Mode Switcher */}
            <div className="terminal-tab-bar">
              <button
                className={`term-tab ${activeTab === 'spec' ? 'active' : ''}`}
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playLaserClick();
                  setActiveTab('spec');
                }}
              >
                // SYSTEM_SPEC
              </button>
              <button
                className={`term-tab ${activeTab === 'modules' ? 'active' : ''}`}
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playLaserClick();
                  setActiveTab('modules');
                }}
              >
                // MODULES ({coreModules.length})
              </button>
              <button
                className={`term-tab ${activeTab === 'shell' ? 'active' : ''}`}
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playLaserClick();
                  setActiveTab('shell');
                }}
              >
                // LIVE_SHELL.exe
              </button>
            </div>

            {/* Terminal Screen Body */}
            <div className="terminal-screen-content">
              {activeTab === 'spec' && (
                <div className="terminal-code-view">
                  <div className="code-line">
                    <span className="code-prompt">&gt;</span> <span className="code-key">const</span> <span className="code-var">developer</span> = &#123;
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">name:</span> <span className="code-str">"Rishav Aeron"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">role:</span> <span className="code-str">"Full Stack &amp; React Native"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">frontend:</span> [<span className="code-str">"React.js"</span>, <span className="code-str">"Vue.js"</span>, <span className="code-str">"Redux"</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">mobile:</span> [<span className="code-str">"React Native"</span>, <span className="code-str">"Expo"</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">backend:</span> [<span className="code-str">"Node.js"</span>, <span className="code-str">"Express.js"</span>, <span className="code-str">"REST APIs"</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">databases:</span> [<span className="code-str">"MongoDB"</span>, <span className="code-str">"PostgreSQL"</span>, <span className="code-str">"Firebase"</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">certifications:</span> [<span className="code-str">"WsCubeTech MERN"</span>, <span className="code-str">"Groot Academy Mobile"</span>]
                  </div>
                  <div className="code-line">
                    <span className="code-prompt">&gt;</span> &#125;;
                  </div>
                  <div className="code-line blink-line">
                    <span className="code-prompt">&gt;</span> system.status_check() === 200 OK<span className="cursor-blink">_</span>
                  </div>
                </div>
              )}

              {activeTab === 'modules' && (
                <div className="terminal-modules-view">
                  <div className="modules-grid">
                    {coreModules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="module-chip interactive-chip"
                        onMouseEnter={playHoverSound}
                      >
                        <div className="chip-indicator"></div>
                        <span className="chip-name">{mod.name}</span>
                        <span className="chip-level">{mod.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'shell' && (
                <div className="terminal-interactive-shell">
                  <div className="shell-command-buttons">
                    <span className="shell-hint">CLICK PROTOCOL RUNNERS:</span>
                    <div className="quick-cmds-row">
                      <button
                        onClick={() => executeCommand('launch_crm')}
                        onMouseEnter={playHoverSound}
                        className="quick-cmd-btn"
                      >
                        <Play size={11} className="text-cyan" />
                        <span>launch_crm</span>
                      </button>
                      <button
                        onClick={() => executeCommand('run_mobile')}
                        onMouseEnter={playHoverSound}
                        className="quick-cmd-btn"
                      >
                        <Play size={11} className="text-violet" />
                        <span>run_mobile</span>
                      </button>
                      <button
                        onClick={() => executeCommand('cat_skills')}
                        onMouseEnter={playHoverSound}
                        className="quick-cmd-btn"
                      >
                        <Play size={11} className="text-emerald" />
                        <span>cat_skills</span>
                      </button>
                      <button
                        onClick={() => executeCommand('status')}
                        onMouseEnter={playHoverSound}
                        className="quick-cmd-btn"
                      >
                        <Play size={11} className="text-cyan" />
                        <span>status</span>
                      </button>
                      <button
                        onClick={() => executeCommand('clear')}
                        onMouseEnter={playHoverSound}
                        className="quick-cmd-btn clear-btn"
                      >
                        <RotateCcw size={11} />
                        <span>clear</span>
                      </button>
                    </div>
                  </div>

                  {/* Terminal Log Output */}
                  <div className="shell-output-log">
                    {terminalLogs.map((log, lIdx) => (
                      <div key={lIdx} className={`log-line ${log.type}`}>
                        <span>{log.text}</span>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="log-line typing">
                        <span className="text-cyan">Executing sub-routine...</span>
                      </div>
                    )}
                  </div>

                  {/* Real Interactive Command Input Line */}
                  <form onSubmit={handleManualSubmit} className="shell-input-form">
                    <span className="input-prompt text-cyan">&gt;</span>
                    <input
                      type="text"
                      value={manualCmd}
                      onChange={(e) => setManualCmd(e.target.value)}
                      placeholder="Type command (help, crm, mobile, skills, status, clear)..."
                      className="shell-text-input"
                    />
                    <button type="submit" className="shell-run-icon-btn" title="Execute Command">
                      <Play size={12} />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Terminal Holographic Footer Badges */}
            <div className="terminal-footer-metrics">
              <div className="metric-cell">
                <span className="metric-val text-cyan">CRM</span>
                <span className="metric-lbl">FULL STACK DEPLOYED</span>
              </div>
              <div className="metric-sep">|</div>
              <div className="metric-cell">
                <span className="metric-val text-violet">GROOT</span>
                <span className="metric-lbl">REACT NATIVE MOBILE</span>
              </div>
              <div className="metric-sep">|</div>
              <div className="metric-cell">
                <span className="metric-val text-emerald">&lt;24H</span>
                <span className="metric-lbl">COMMS LATENCY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Cluster War Room Telemetry */}
      <WarRoomTelemetry />

      {/* Cyber Infinitude Marquee Scanner */}
      <div className="cyber-marquee-scanner">
        <div className="scanner-line"></div>
        <div className="marquee-track">
          <span>// RISHAV AERON</span>
          <span>// FULL STACK ARCHITECT</span>
          <span>// MERN STACK &amp; REACT NATIVE</span>
          <span>// VUE.JS &amp; REDUX ARCHITECTURE</span>
          <span>// NODE.JS &amp; EXPRESS BACKEND</span>
          <span>// MONGODB, POSTGRESQL &amp; FIREBASE</span>
          <span>// RISHAV AERON</span>
          <span>// FULL STACK ARCHITECT</span>
          <span>// MERN STACK &amp; REACT NATIVE</span>
          <span>// VUE.JS &amp; REDUX ARCHITECTURE</span>
          <span>// NODE.JS &amp; EXPRESS BACKEND</span>
          <span>// MONGODB, POSTGRESQL &amp; FIREBASE</span>
        </div>
      </div>
    </section>
  );
}
