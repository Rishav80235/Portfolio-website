import { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseOnScreen = false;

    // Shockwave ripples and spark particles on click
    const shockwaves = [];
    const sparks = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseOnScreen = true;
    };

    const handleMouseLeave = () => {
      isMouseOnScreen = false;
    };

    const handlePointerDown = (e) => {
      // Add primary shockwave ring
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 140,
        alpha: 0.85,
        color: Math.random() > 0.3 ? '#00f0ff' : '#8b5cf6'
      });

      // Add high-velocity cyber sparks
      for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.4 ? '#00f0ff' : '#a78bfa'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes
    const nodeCount = Math.min(Math.floor((width * height) / 24000), 45);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1,
        color: Math.random() > 0.35 ? 'rgba(0, 240, 255, ' : 'rgba(139, 92, 246, '
      });
    }

    // Floating cyber data runes
    const runesList = ['[200_OK]', 'MERN', 'REACT_NATIVE', 'JWT_AUTH', 'RBAC', 'VUE', 'EXPO', 'API', '0xFA'];
    const runes = [];
    for (let i = 0; i < 8; i++) {
      runes.push({
        text: runesList[i % runesList.length],
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.35 + 0.15,
        alpha: Math.random() * 0.12 + 0.04
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating subtle runes in background
      ctx.font = '10px "Space Grotesk", monospace';
      for (let i = 0; i < runes.length; i++) {
        const r = runes[i];
        r.y -= r.speed;
        if (r.y < -20) {
          r.y = height + 20;
          r.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(0, 240, 255, ${r.alpha})`;
        ctx.fillText(r.text, r.x, r.y);
      }

      // Render Constellation Nodes & Connections (Clean, Zero ShadowBlur Thrash)
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Interactive mouse connection
        if (isMouseOnScreen) {
          const mouseDist = Math.hypot(n1.x - mouseX, n1.y - mouseY);
          if (mouseDist < 150) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - mouseDist / 150) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            n1.x += (mouseX - n1.x) * 0.005;
            n1.y += (mouseY - n1.y) * 0.005;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color + '0.75)';
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 105) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 105) * 0.14})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Render Shockwave Rings on click
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 4;
        sw.alpha -= 0.025;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.globalAlpha = sw.alpha;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // Render High-Velocity Click Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.94;
        sp.vy *= 0.94;
        sp.alpha -= 0.035;

        if (sp.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cyber-bg-container">
      <canvas ref={canvasRef} className="cyber-canvas" />
      <div className="cyber-grid-overlay" />
      <div className="cyber-glow-orb orb-cyan" />
      <div className="cyber-glow-orb orb-violet" />
    </div>
  );
}
