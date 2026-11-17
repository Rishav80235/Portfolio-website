import { useState } from 'react';
import { capabilities, skillsByCategory } from '../data/skills';
import { Cpu, Terminal, ShieldAlert, Database, Layers, Wrench, Smartphone, Zap, CheckCircle2, Activity } from 'lucide-react';
import { playHoverSound, playLaserClick } from '../utils/cyberAudio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layers size={18} className="text-cyan" />;
      case 'Mobile':
        return <Smartphone size={18} className="text-violet" />;
      case 'Backend':
        return <Cpu size={18} className="text-cyan" />;
      case 'Database':
      case 'Database & Cloud':
        return <Database size={18} className="text-emerald" />;
      case 'Tools':
      case 'Tools & DevOps':
        return <Wrench size={18} className="text-yellow" />;
      case 'Core Focus':
        return <ShieldAlert size={18} className="text-cyan" />;
      default:
        return <Terminal size={18} className="text-cyan" />;
    }
  };

  const getGroupLevel = (category) => {
    switch (category) {
      case 'Frontend':
        return { level: '96%', status: 'OPTIMAL' };
      case 'Mobile':
        return { level: '94%', status: 'ACCELERATED' };
      case 'Backend':
        return { level: '95%', status: 'ACTIVE' };
      case 'Database':
      case 'Database & Cloud':
        return { level: '92%', status: 'SYNCHRONIZED' };
      case 'Tools':
      case 'Tools & DevOps':
        return { level: '90%', status: 'DEPLOYED' };
      default:
        return { level: '95%', status: 'NOMINAL' };
    }
  };

  const filteredGroups = skillsByCategory.filter((g) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'FRONTEND') return g.category === 'Frontend' || g.category === 'Mobile';
    if (activeCategory === 'BACKEND') return g.category === 'Backend' || g.category === 'Database' || g.category === 'Database & Cloud';
    if (activeCategory === 'TOOLS') return g.category === 'Tools' || g.category === 'Tools & DevOps';
    return true;
  });

  return (
    <section id="matrix" className="scifi-section matrix-section">
      <div className="section-hud-header">
        <div className="hud-eyebrow" onMouseEnter={playHoverSound}>
          <Cpu size={14} className="text-cyan" />
          <span>SUBSYSTEMS // CORE_CAPABILITIES</span>
        </div>
        <h2 className="hud-section-title">
          TECHNICAL <span className="text-cyan">MATRIX</span>
        </h2>
        <p className="hud-section-desc">
          Architecture protocols, full-stack technologies, databases, state engines, and developer tools.
        </p>

        {/* Subsystem Telemetry Ribbon */}
        <div className="matrix-telemetry-ribbon">
          <div className="ribbon-metric">
            <span className="ribbon-lbl font-mono text-muted">// TOTAL_STACK</span>
            <span className="ribbon-val font-mono text-cyan">22+ TECHNOLOGIES</span>
          </div>
          <div className="ribbon-sep text-muted">|</div>
          <div className="ribbon-metric">
            <span className="ribbon-lbl font-mono text-muted">// RUNTIMES</span>
            <span className="ribbon-val font-mono text-white">REACT 19 + NODE 22 + EXPO</span>
          </div>
          <div className="ribbon-sep text-muted">|</div>
          <div className="ribbon-metric">
            <span className="ribbon-lbl font-mono text-muted">// DATA_ENGINES</span>
            <span className="ribbon-val font-mono text-emerald">MONGODB + POSTGRESQL + FIREBASE</span>
          </div>
          <div className="ribbon-sep text-muted">|</div>
          <div className="ribbon-metric">
            <span className="ribbon-lbl font-mono text-muted">// SECURITY</span>
            <span className="ribbon-val font-mono text-cyan">100% RBAC &amp; JWT</span>
          </div>
        </div>

        {/* Subsystem Filter Toggles */}
        <div className="missions-filter-row">
          <button
            onClick={() => {
              playLaserClick();
              setActiveCategory('ALL');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${activeCategory === 'ALL' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>ALL_SUBSYSTEMS</span>
            <span className="btn-bracket">]</span>
          </button>
          <button
            onClick={() => {
              playLaserClick();
              setActiveCategory('FRONTEND');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${activeCategory === 'FRONTEND' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>FRONTEND_&amp;_MOBILE</span>
            <span className="btn-bracket">]</span>
          </button>
          <button
            onClick={() => {
              playLaserClick();
              setActiveCategory('BACKEND');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${activeCategory === 'BACKEND' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>BACKEND_&amp;_DATABASES</span>
            <span className="btn-bracket">]</span>
          </button>
          <button
            onClick={() => {
              playLaserClick();
              setActiveCategory('TOOLS');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${activeCategory === 'TOOLS' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>DEVOPS_&amp;_TOOLS</span>
            <span className="btn-bracket">]</span>
          </button>
        </div>
      </div>

      {/* Cyber Subsystem Category Grid */}
      <div className="cyber-matrix-grid">
        {filteredGroups.map((group, idx) => {
          const groupMeta = getGroupLevel(group.category);
          return (
            <div key={idx} className="matrix-module-card">
              <div className="card-corner corner-top-l"></div>
              <div className="card-corner corner-top-r"></div>
              <div className="card-corner corner-bottom-l"></div>
              <div className="card-corner corner-bottom-r"></div>

              <div className="module-card-header">
                <div className="module-icon-wrap">
                  {getCategoryIcon(group.category)}
                </div>
                <div className="module-title-box">
                  <span className="module-serial">MODULE // 0{idx + 1}</span>
                  <h3 className="module-name">{group.category}</h3>
                </div>
              </div>

              {/* Live Subsystem Gauge */}
              <div className="module-gauge-bar-wrap">
                <div className="module-gauge-track">
                  <div className="module-gauge-fill" style={{ width: groupMeta.level }}></div>
                </div>
                <div className="module-gauge-meta">
                  <span className="font-mono text-cyan">{groupMeta.level} CAPACITY</span>
                  <span className="font-mono text-emerald">{groupMeta.status}</span>
                </div>
              </div>

              <div className="module-chips-area">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="cyber-tech-pill interactive-pill"
                    onMouseEnter={playHoverSound}
                  >
                    <span className="pill-dot"></span>
                    <span className="pill-text">{skill}</span>
                    <span className="pill-signal">ONLINE</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Architectural Capabilities Dossier */}
      <div className="capabilities-spec-panel">
        <div className="panel-header">
          <Terminal size={15} className="text-cyan" />
          <span>SYSTEM_CAPABILITY_SPECIFICATIONS</span>
        </div>

        <div className="capability-specs-list">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="cap-spec-row"
              onMouseEnter={playHoverSound}
            >
              <div className="cap-spec-left">
                <span className="cap-spec-num text-cyan">[{cap.number}]</span>
                <span className="cap-spec-title">{cap.title}</span>
              </div>
              <div className="cap-spec-right">
                <p className="cap-spec-desc">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
