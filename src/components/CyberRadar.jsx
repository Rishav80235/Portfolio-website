import { useEffect, useRef } from 'react';
import { playHoverSound } from '../utils/cyberAudio';

export default function CyberRadar() {
  const bearingRef = useRef(null);

  // Direct DOM ref mutation: 100% linear, ZERO React re-renders, ZERO flicker!
  useEffect(() => {
    let animId;
    const updateBearing = () => {
      const now = performance.now();
      const currentAngle = Math.floor(((now % 4000) / 4000) * 360);
      if (bearingRef.current) {
        bearingRef.current.textContent = `${String(currentAngle).padStart(3, '0')}° AZ`;
      }
      animId = requestAnimationFrame(updateBearing);
    };
    animId = requestAnimationFrame(updateBearing);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="cyber-radar-hud" onMouseEnter={playHoverSound} title="Tactical Radar Telemetry">
      <div className="radar-top-meta">
        <div className="radar-live-indicator">
          <span className="radar-live-dot"></span>
          <span>RADAR // ACTIVE</span>
        </div>
        <span ref={bearingRef} className="radar-bearing-text font-mono">000° AZ</span>
      </div>

      <div className="radar-screen">
        {/* Concentric distance rings */}
        <div className="radar-ring ring-outer"></div>
        <div className="radar-ring ring-mid"></div>
        <div className="radar-ring ring-inner"></div>

        {/* Crosshair axis lines */}
        <div className="radar-axis axis-h"></div>
        <div className="radar-axis axis-v"></div>

        {/* Sweeping laser beam - 100% Linear Continuous Rotation */}
        <div className="radar-sweeper"></div>

        {/* Tactical target blips */}
        <div className="radar-blip blip-crm" title="TARGET: CRM Deployment">
          <span className="blip-dot"></span>
          <span className="blip-label">CRM_LIVE</span>
        </div>

        <div className="radar-blip blip-groot" title="TARGET: Groot Mobile App">
          <span className="blip-dot"></span>
          <span className="blip-label">GROOT_RN</span>
        </div>

        <div className="radar-blip blip-core" title="TARGET: Core Operator">
          <span className="blip-center-dot"></span>
        </div>

        {/* HUD Corner Accents */}
        <div className="radar-corner corner-tl"></div>
        <div className="radar-corner corner-tr"></div>
        <div className="radar-corner corner-bl"></div>
        <div className="radar-corner corner-br"></div>
      </div>

      <div className="radar-bottom-meta font-mono">
        <span>LOC: JAIPUR // RANGE: 100KM</span>
      </div>
    </div>
  );
}
