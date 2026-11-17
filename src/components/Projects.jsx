import { useState, useRef } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Radio, Check, Sparkles, Terminal, X, Cpu, Shield, Layers, Server, Database } from 'lucide-react';
import { GithubIcon, ArrowUpRightIcon } from './SocialIcons';
import { playHoverSound, playLaserClick, playPowerUp } from '../utils/cyberAudio';

export default function Projects() {
  const [filter, setFilter] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filtered = projects.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'MERN') return p.technologies.includes('Node.js') || p.technologies.includes('MongoDB');
    if (filter === 'MOBILE') return p.technologies.includes('React Native') || p.technologies.includes('Expo');
    return true;
  });

  const openModal = (proj) => {
    playPowerUp();
    setActiveModalProject(proj);
  };

  const closeModal = () => {
    playLaserClick();
    setActiveModalProject(null);
  };

  return (
    <section id="missions" className="scifi-section missions-section">
      <div className="section-hud-header">
        <div className="hud-eyebrow" onMouseEnter={playHoverSound}>
          <Terminal size={14} className="text-cyan" />
          <span>PROJECT_REGISTRY // ARCHIVE_V2.6</span>
        </div>
        <h2 className="hud-section-title">
          TACTICAL <span className="text-cyan">MISSIONS</span>
        </h2>
        <p className="hud-section-desc">
          Deployed production systems, full-stack architectures, and cross-platform mobile applications.
        </p>

        {/* Filter Protocols */}
        <div className="missions-filter-row">
          <button
            onClick={() => {
              playLaserClick();
              setFilter('ALL');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${filter === 'ALL' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>ALL_SYSTEMS ({projects.length})</span>
            <span className="btn-bracket">]</span>
          </button>
          <button
            onClick={() => {
              playLaserClick();
              setFilter('MERN');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${filter === 'MERN' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>MERN_STACK_WEB</span>
            <span className="btn-bracket">]</span>
          </button>
          <button
            onClick={() => {
              playLaserClick();
              setFilter('MOBILE');
            }}
            onMouseEnter={playHoverSound}
            className={`filter-tactical-btn ${filter === 'MOBILE' ? 'active' : ''}`}
          >
            <span className="btn-bracket">[</span>
            <span>REACT_NATIVE_MOBILE</span>
            <span className="btn-bracket">]</span>
          </button>
        </div>
      </div>

      {/* Tactical Missions Cards Grid */}
      <div className="missions-cards-grid">
        {filtered.map((project, idx) => {
          const isMobile = project.id === 'groot-mobile';

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isMobile={isMobile}
              onInspect={() => openModal(project)}
            />
          );
        })}
      </div>

      {/* Holographic System Architecture Modal */}
      {activeModalProject && (
        <div className="hologram-modal-backdrop" onClick={closeModal}>
          <div className="hologram-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="card-corner corner-top-l"></div>
            <div className="card-corner corner-top-r"></div>
            <div className="card-corner corner-bottom-l"></div>
            <div className="card-corner corner-bottom-r"></div>

            <div className="modal-header">
              <div className="modal-title-meta">
                <Terminal size={16} className="text-cyan" />
                <span className="text-cyan font-mono">SYS_ARCH // {activeModalProject.id.toUpperCase()}</span>
              </div>
              <button onClick={closeModal} className="modal-close-btn" title="Close Dossier">
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <h3 className="modal-proj-title">{activeModalProject.title}</h3>
              <span className="modal-role-pill">{activeModalProject.role}</span>
              <p className="modal-proj-desc">{activeModalProject.description}</p>

              {/* Architecture Blueprint Subsystems */}
              <div className="architecture-blueprint-grid">
                <div className="blueprint-cell">
                  <div className="blueprint-cell-head">
                    <Layers size={14} className="text-cyan" />
                    <span>CLIENT_TIER</span>
                  </div>
                  <span className="blueprint-val">
                    {activeModalProject.technologies.slice(0, 2).join(', ')}
                  </span>
                </div>

                <div className="blueprint-cell">
                  <div className="blueprint-cell-head">
                    <Server size={14} className="text-violet" />
                    <span>BACKEND_TIER</span>
                  </div>
                  <span className="blueprint-val">
                    {activeModalProject.technologies.includes('Node.js') ? 'Node.js & Express.js REST API' : 'Expo & React Native Runtime'}
                  </span>
                </div>

                <div className="blueprint-cell">
                  <div className="blueprint-cell-head">
                    <Database size={14} className="text-emerald" />
                    <span>DATA_STORAGE</span>
                  </div>
                  <span className="blueprint-val">
                    {activeModalProject.technologies.includes('MongoDB') ? 'MongoDB Atlas Cluster' : 'Local State / AsyncStorage'}
                  </span>
                </div>

                <div className="blueprint-cell">
                  <div className="blueprint-cell-head">
                    <Shield size={14} className="text-cyan" />
                    <span>SECURITY</span>
                  </div>
                  <span className="blueprint-val">
                    {activeModalProject.id === 'crm-system' ? 'JWT Auth & Role-Based Access (RBAC)' : 'Secure Storage & API Headers'}
                  </span>
                </div>
              </div>

              {/* Features List */}
              {activeModalProject.features && (
                <div className="modal-features-section">
                  <span className="modal-subhead font-mono text-cyan">// SYSTEM SPECIFICATIONS:</span>
                  <div className="modal-features-grid">
                    {activeModalProject.features.map((feat, fIdx) => (
                      <div key={fIdx} className="modal-feat-item">
                        <Check size={13} className="text-cyan" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="modal-actions-row">
                {activeModalProject.liveLink && (
                  <a
                    href={activeModalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playPowerUp}
                    className="modal-action-primary"
                  >
                    <span>LAUNCH LIVE DEPLOYMENT</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                <a
                  href={activeModalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playLaserClick}
                  className="modal-action-secondary"
                >
                  <GithubIcon size={16} />
                  <span>INSPECT SOURCE CODE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Subcomponent: Tactical Mission Card with 3D Mouse Tilt & Glare Spot (Zero React re-renders)
function ProjectCard({ project, index, isMobile, onInspect }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
    cardRef.current.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <article
      ref={cardRef}
      className="mission-hud-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-spotlight-overlay" />
      <div className="card-corner corner-top-l"></div>
      <div className="card-corner corner-top-r"></div>
      <div className="card-corner corner-bottom-l"></div>
      <div className="card-corner corner-bottom-r"></div>

      {/* Mission Card Header */}
      <div className="mission-card-topbar">
        <div className="mission-id-pill">
          <span className="text-cyan">MISSION // 0{index + 1}</span>
          <span className="mission-year">{project.year}</span>
        </div>

        <div className="mission-status-pill">
          <span className="pulse-dot"></span>
          <span>{isMobile ? 'MOBILE_APP' : 'DEPLOYED_LIVE'}</span>
        </div>
      </div>

      {/* Mission Media Preview */}
      <div className="mission-media-box">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="mission-img"
        />
        <div className="media-scanline-fx"></div>
        <div className="media-category-overlay">
          <span>{project.category}</span>
        </div>
      </div>

      {/* Mission Content */}
      <div className="mission-body">
        <div className="title-and-inspect-row">
          <h3 className="mission-title">{project.title}</h3>
          <button
            onClick={onInspect}
            onMouseEnter={playHoverSound}
            className="inspect-blueprint-btn"
            title="Inspect Architecture Specs"
          >
            <span>[ ARCHITECTURE ]</span>
          </button>
        </div>

        <span className="mission-role-tag">{project.role}</span>
        <p className="mission-description">{project.description}</p>

        {/* Tech Matrix Chips */}
        <div className="mission-tech-chips">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="tech-matrix-tag"
              onMouseEnter={playHoverSound}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features Checkpoints */}
        {project.features && (
          <div className="mission-features-box">
            <span className="features-subhead">SYSTEM SPECIFICATIONS:</span>
            <ul className="features-list">
              {project.features.slice(0, 3).map((feat, fIdx) => (
                <li key={fIdx} className="feature-item">
                  <Check size={13} className="text-cyan check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Launch Buttons */}
        <div className="mission-actions-row">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playPowerUp}
              className="mission-launch-btn"
            >
              <span>LAUNCH DEPLOYMENT</span>
              <ExternalLink size={15} />
            </a>
          )}

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            onClick={playLaserClick}
            className="mission-code-btn"
          >
            <GithubIcon size={15} />
            <span>SOURCE CODE</span>
          </a>
        </div>
      </div>
    </article>
  );
}
