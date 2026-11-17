import { useEffect, useRef } from 'react';

export default function CyberCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringInnerRef = useRef(null);

  useEffect(() => {
    // Only enable on fine pointer (desktop mouse), ignore touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Direct GPU transform on dot: 0ms instantaneous response
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hover state on interactive targets
      const target = e.target;
      const isInteractive = !!target.closest(
        'button, a, input, textarea, select, .mission-hud-card, .matrix-module-card, .cyber-tech-pill, .terminal-tab, .quick-cmd-btn, .interactive-chip, .credential-dossier, .cyber-main-title, .inspect-blueprint-btn'
      );

      if (isInteractive !== isHovering) {
        isHovering = isInteractive;
        if (ringInnerRef.current) {
          if (isHovering) {
            ringInnerRef.current.classList.add('hovering');
          } else {
            ringInnerRef.current.classList.remove('hovering');
          }
        }
      }
    };

    const onMouseDown = () => {
      if (dotRef.current) dotRef.current.classList.add('clicking');
      if (ringInnerRef.current) ringInnerRef.current.classList.add('clicking');
    };

    const onMouseUp = () => {
      if (dotRef.current) dotRef.current.classList.remove('clicking');
      if (ringInnerRef.current) ringInnerRef.current.classList.remove('clicking');
    };

    const onMouseLeaveDoc = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseEnterDoc = () => {
      if (hasMoved) {
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeaveDoc);
    document.addEventListener('mouseenter', onMouseEnterDoc);

    // Butter-smooth 60-120fps trailing loop (never resets to -100)
    let animId;
    const followLoop = () => {
      if (hasMoved) {
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
      }

      animId = requestAnimationFrame(followLoop);
    };

    animId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
      cancelAnimationFrame(animId);
    };
  }, []); // Run ONCE on mount: never re-runs or resets on mouse moves!

  return (
    <div className="cyber-cursor-root" aria-hidden="true">
      {/* 1. Precision Center Dot (Instant Response) */}
      <div ref={dotRef} className="cursor-dot-wrapper" style={{ opacity: 0 }}>
        <div className="cursor-dot" />
      </div>

      {/* 2. Trailing Reticle Ring (Glides smoothly behind cursor) */}
      <div ref={ringRef} className="cursor-ring-wrapper" style={{ opacity: 0 }}>
        <div ref={ringInnerRef} className="cursor-ring-inner">
          <div className="reticle-notch notch-t" />
          <div className="reticle-notch notch-b" />
          <div className="reticle-notch notch-l" />
          <div className="reticle-notch notch-r" />
          <div className="reticle-crosshair-center" />
        </div>
      </div>
    </div>
  );
}
