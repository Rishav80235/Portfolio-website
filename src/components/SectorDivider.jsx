export default function SectorDivider({ from, to, label }) {
  return (
    <div className="sector-hud-divider">
      <div className="sector-laser-track">
        <div className="sector-laser-beam"></div>
      </div>
      <div className="sector-telemetry-badge">
        <span className="bracket text-muted">[</span>
        <span className="badge-sector text-cyan font-mono">SECTOR_{from} &gt;&gt; SECTOR_{to}</span>
        <span className="badge-sep text-muted">//</span>
        <span className="badge-label font-mono">{label}</span>
        <span className="badge-sep text-muted">//</span>
        <span className="badge-status text-emerald font-mono">SYNCED 100%</span>
        <span className="bracket text-muted">]</span>
      </div>
      <div className="sector-laser-track">
        <div className="sector-laser-beam"></div>
      </div>
    </div>
  );
}
