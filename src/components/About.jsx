import { useState } from 'react';
import { educationAndCert } from '../data/skills';
import { ArrowUpRightIcon } from './SocialIcons';
import { Terminal, Shield, Award, GraduationCap, Smartphone, FileText, CheckCircle2, Cpu } from 'lucide-react';
import { playHoverSound, playLaserClick, playPowerUp, playChime } from '../utils/cyberAudio';

export default function About() {
  const { education, certifications, resume } = educationAndCert;

  return (
    <section id="intel" className="scifi-section intel-section">
      <div className="section-hud-header">
        <div className="hud-eyebrow" onMouseEnter={playHoverSound}>
          <Shield size={14} className="text-cyan" />
          <span>DOSSIER // OPERATOR_PROFILE</span>
        </div>
        <h2 className="hud-section-title">
          SYSTEM <span className="text-cyan">INTEL</span>
        </h2>
        <p className="hud-section-desc">
          Professional architecture, engineering principles, and verified credentials.
        </p>
      </div>

      <div className="intel-dossier-grid">
        {/* Left Column: Operator Narrative Statement */}
        <div className="dossier-card narrative-card">
          <div className="card-corner corner-top-l"></div>
          <div className="card-corner corner-top-r"></div>

          <div className="dossier-card-header">
            <Terminal size={16} className="text-cyan" />
            <span className="card-header-label">// OPERATOR_DIRECTIVE</span>
          </div>

          <div className="dossier-narrative-text">
            <p className="dossier-paragraph highlight-lead" onMouseEnter={playHoverSound}>
              I'm a <span className="text-cyan">Full Stack Developer</span> specializing in the MERN stack and React Native, with a focused drive for building modern, scalable, and high-performance digital products.
            </p>
            <p className="dossier-paragraph" onMouseEnter={playHoverSound}>
              I architect web applications and backend systems using React.js, Node.js, Express.js, and MongoDB. Simultaneously, I construct cross-platform mobile applications for iOS &amp; Android utilizing React Native and the Expo framework.
            </p>
            <p className="dossier-paragraph" onMouseEnter={playHoverSound}>
              My engineering experience encompasses developing a production-level CRM application equipped with secure JWT authentication, Role-Based Access Control (RBAC), activity scheduling, business analytics, and invoice management, alongside e-commerce platforms.
            </p>
            <p className="dossier-paragraph" onMouseEnter={playHoverSound}>
              I am committed to clean code standards, continuous learning, and seeking opportunities to deploy impactful digital solutions with forward-thinking engineering teams.
            </p>
          </div>

          {/* Tactical Biometric & Specification Grid */}
          <div className="dossier-biometrics-grid">
            <div className="bio-cell">
              <span className="bio-label font-mono text-muted">// DESIGNATION</span>
              <span className="bio-val font-mono text-cyan">Rishav Aeron</span>
            </div>
            <div className="bio-cell">
              <span className="bio-label font-mono text-muted">// CORE_SPECIALIZATION</span>
              <span className="bio-val font-mono text-white">Full Stack &amp; React Native</span>
            </div>
            <div className="bio-cell">
              <span className="bio-label font-mono text-muted">// ACTIVE_BASE</span>
              <span className="bio-val font-mono text-emerald">Jaipur, Rajasthan (26.91°N)</span>
            </div>
            <div className="bio-cell">
              <span className="bio-label font-mono text-muted">// ACADEMIC_TRACK</span>
              <span className="bio-val font-mono text-white">BCA Degree (Nirwan Univ, '27)</span>
            </div>
            <div className="bio-cell">
              <span className="bio-label font-mono text-muted">// VERIFIED_CERTS</span>
              <span className="bio-val font-mono text-cyan">WsCubeTech MERN + Groot RN</span>
            </div>
            <div className="bio-cell">
              <span className="bio-label font-mono text-muted">// DEPLOYMENT_STATUS</span>
              <span className="bio-val font-mono text-emerald">OPEN FOR PRODUCTION ROLES</span>
            </div>
          </div>

          <div className="dossier-action-bar">
            <a
              href={resume.file}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playChime}
              className="dossier-cta-btn"
            >
              <FileText size={16} />
              <span>ACCESS VERIFIED RESUME</span>
              <ArrowUpRightIcon size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Verified Certifications & Academic Clearance */}
        <div className="dossier-col-right">
          {/* MERN Stack Certification */}
          <div
            className="dossier-card credential-dossier interactive-dossier"
            onMouseEnter={playHoverSound}
          >
            <div className="card-corner corner-top-l"></div>
            <div className="card-corner corner-top-r"></div>

            <div className="credential-topline">
              <Award size={18} className="text-cyan" />
              <span className="credential-badge">VERIFIED CERTIFICATION</span>
            </div>
            <h4 className="credential-title">MERN Stack Development</h4>
            <p className="credential-institution">WsCubeTech Career Institute, Jaipur</p>
            <p className="credential-details">
              Comprehensive full-stack training covering MongoDB, Express.js, React.js, Node.js, REST APIs, and production server architectures.
            </p>
            <a
              href="/Rishav-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playChime}
              className="credential-doc-link"
            >
              <span>INSPECT WSCUBETECH CERTIFICATE</span>
              <ArrowUpRightIcon size={15} />
            </a>
          </div>

          {/* React Native Development Certification */}
          <div
            className="dossier-card credential-dossier interactive-dossier"
            onMouseEnter={playHoverSound}
          >
            <div className="card-corner corner-top-l"></div>
            <div className="card-corner corner-top-r"></div>

            <div className="credential-topline">
              <Smartphone size={18} className="text-violet" />
              <span className="credential-badge badge-violet">MOBILE SPECIALIZATION</span>
            </div>
            <h4 className="credential-title">React Native Development</h4>
            <p className="credential-institution">Groot Academy</p>
            <p className="credential-details">
              Cross-platform mobile application development with React Native, Expo CLI, native device hardware integrations, and component performance optimization.
            </p>
          </div>

          {/* Academic Clearance */}
          <div
            className="dossier-card credential-dossier interactive-dossier"
            onMouseEnter={playHoverSound}
          >
            <div className="card-corner corner-top-l"></div>
            <div className="card-corner corner-top-r"></div>

            <div className="credential-topline">
              <GraduationCap size={18} className="text-emerald" />
              <span className="credential-badge badge-emerald">ACADEMIC CLEARANCE</span>
            </div>
            <h4 className="credential-title">{education.title}</h4>
            <p className="credential-institution">{education.institution}</p>
            <p className="credential-details">{education.details} (Expected Graduation: 2027)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
