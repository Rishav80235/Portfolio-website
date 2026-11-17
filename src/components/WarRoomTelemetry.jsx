import { useState } from 'react';
import { Cpu, ShieldCheck, Activity, Smartphone, Database, Server, Zap, Radio } from 'lucide-react';
import { playHoverSound } from '../utils/cyberAudio';

export default function WarRoomTelemetry() {
  const telemetryData = [
    {
      id: '01',
      title: 'MERN FULL-STACK DEPLOYMENT',
      spec: 'React.js 19 + Node.js + Express.js',
      sub: 'JWT Auth // Role-Based Access // Live on Render',
      metric: '98%',
      metricLabel: 'API HEALTH',
      color: 'cyan',
      icon: <Server size={18} className="text-cyan" />
    },
    {
      id: '02',
      title: 'REACT NATIVE MOBILE ENGINE',
      spec: 'Expo Framework + React Native',
      sub: 'iOS & Android Ready // Metro Bundled // Groot App',
      metric: '95%',
      metricLabel: 'NATIVE VELOCITY',
      color: 'violet',
      icon: <Smartphone size={18} className="text-violet" />
    },
    {
      id: '03',
      title: 'DATABASE & DATA ARCHITECTURE',
      spec: 'MongoDB Atlas + PostgreSQL + Firebase',
      sub: 'Indexed Queries // Relational Schemas // Cloud Sync',
      metric: '92%',
      metricLabel: 'IOPS EFFICIENCY',
      color: 'emerald',
      icon: <Database size={18} className="text-emerald" />
    },
    {
      id: '04',
      title: 'SECURITY & VERIFIED CREDENTIALS',
      spec: 'WsCubeTech MERN + Groot Academy RN',
      sub: 'BCA (Nirwan Univ) // 100% RBAC Compliance',
      metric: '100%',
      metricLabel: 'CLEARANCE LEVEL',
      color: 'cyan',
      icon: <ShieldCheck size={18} className="text-cyan" />
    }
  ];

  return (
    <div className="war-room-telemetry-deck">
      <div className="war-room-header">
        <div className="war-room-left">
          <Activity size={14} className="pulse-cyan" />
          <span className="font-mono text-cyan">// TACTICAL_TELEMETRY // LIVE_CLUSTER_MONITOR</span>
        </div>
        <div className="war-room-right">
          <span className="war-room-pulse-dot"></span>
          <span className="font-mono text-emerald">STATUS: NOMINAL // ALL SYSTEMS GO</span>
        </div>
      </div>

      <div className="war-room-grid">
        {telemetryData.map((item) => (
          <div
            key={item.id}
            className={`telemetry-module-box border-${item.color}`}
            onMouseEnter={playHoverSound}
          >
            <div className="module-corner corner-tl"></div>
            <div className="module-corner corner-tr"></div>
            <div className="module-corner corner-bl"></div>
            <div className="module-corner corner-br"></div>

            <div className="module-head-row">
              <div className="module-title-group">
                <span className="module-seq font-mono text-muted">SYS_{item.id}</span>
                <span className="module-main-name font-mono">{item.title}</span>
              </div>
              <div className="module-icon-wrap">{item.icon}</div>
            </div>

            <div className="module-specs-text">
              <span className="module-tech-line text-white font-mono">{item.spec}</span>
              <span className="module-sub-line text-muted">{item.sub}</span>
            </div>

            <div className="module-gauge-row">
              <div className="gauge-track">
                <div
                  className={`gauge-fill fill-${item.color}`}
                  style={{ width: item.metric }}
                ></div>
              </div>
              <div className="gauge-readout">
                <span className={`readout-val text-${item.color} font-mono`}>{item.metric}</span>
                <span className="readout-lbl text-muted font-mono">{item.metricLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
