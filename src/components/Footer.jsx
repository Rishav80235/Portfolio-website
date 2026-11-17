import { useState } from 'react';
import { Mail, Phone, MapPin, Radio, Copy, Check, Send, ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowUpRightIcon } from './SocialIcons';
import { playHoverSound, playLaserClick, playPowerUp, playChime } from '../utils/cyberAudio';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "rishavaeron80235@gmail.com";
  const phoneNumber = "+91 9929873530";

  const copyEmail = () => {
    playChime();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    playLaserClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="comms" className="scifi-footer">
      <div className="footer-hud-wrapper">
        {/* Transmission Banner */}
        <div className="transmission-banner">
          <div className="banner-topline" onMouseEnter={playHoverSound}>
            <Radio size={14} className="pulse-cyan" />
            <span>COMMUNICATION_UPLINK // ACTIVE_BEACON</span>
          </div>
          <h2 className="transmission-title">
            INITIATE <span className="text-cyan">TRANSMISSION</span>
          </h2>
          <p className="transmission-desc">
            Seeking a dedicated Full Stack Developer or React Native Mobile Specialist? Open a direct communication channel.
          </p>

          <div className="transmission-cta-group">
            <a
              href={`mailto:${emailAddress}?subject=Project%20Inquiry%20/%20Opportunity`}
              onMouseEnter={playHoverSound}
              onClick={playPowerUp}
              className="cyber-cta-primary"
            >
              <Send size={16} />
              <span>TRANSMIT DIRECT MESSAGE</span>
            </a>

            <button
              onClick={copyEmail}
              onMouseEnter={playHoverSound}
              className="cyber-cta-copy"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald" />
                  <span className="text-emerald">[ BUFFER SECURED // COPIED ]</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>[ COPY FREQUENCY // EMAIL ]</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Telemetry Contact Nodes */}
        <div className="footer-telemetry-grid">
          <div className="telemetry-card" onMouseEnter={playHoverSound}>
            <span className="telemetry-label">// DIRECT_EMAIL</span>
            <a href={`mailto:${emailAddress}`} onClick={playLaserClick} className="telemetry-val-link">
              <Mail size={16} className="text-cyan" />
              <span>{emailAddress}</span>
            </a>
          </div>

          <div className="telemetry-card" onMouseEnter={playHoverSound}>
            <span className="telemetry-label">// VOICE_FREQUENCY</span>
            <a href="tel:+919929873530" onClick={playLaserClick} className="telemetry-val-link">
              <Phone size={16} className="text-cyan" />
              <span>{phoneNumber}</span>
            </a>
          </div>

          <div className="telemetry-card" onMouseEnter={playHoverSound}>
            <span className="telemetry-label">// BASE_STATION</span>
            <div className="telemetry-val-text">
              <MapPin size={16} className="text-cyan" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>
        </div>

        <div className="footer-laser-divider"></div>

        {/* Bottom Orbit Bar */}
        <div className="footer-orbit-bar">
          <div className="footer-social-cluster">
            <a
              href="https://github.com/Rishav80235"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playLaserClick}
              className="cyber-social-node"
            >
              <GithubIcon size={16} />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rishav-aeron-344048208/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playLaserClick}
              className="cyber-social-node"
            >
              <LinkedinIcon size={16} />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://x.com/AeronRishav54"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playLaserClick}
              className="cyber-social-node"
            >
              <TwitterIcon size={15} />
              <span>TWITTER/X</span>
            </a>
          </div>

          <div className="footer-telemetry-meta">
            <span className="telemetry-code">SYS_STATUS: OPTIMAL</span>
            <span className="telemetry-sep">|</span>
            <span className="telemetry-code">BUILD: v2.6-PRODUCTION</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="footer-ascend-btn"
            title="Ascend to Bridge"
          >
            <span>ASCEND TO BRIDGE</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
