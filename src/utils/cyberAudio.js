// ==========================================================================
// CINEMATIC SCI-FI AUDIO ENGINE (Web Audio API - Studio Grade Acoustics)
// Designed for tactile haptic feedback, mechanical cockpit switches, 
// and cinematic holographic sweeps. Zero cheap "pop" or "bleep" sounds.
// ==========================================================================

let audioCtx = null;
let soundEnabled = true;
let lastHoverTime = 0;

// Shared noise buffer cache for crisp physical transients
let noiseBuffer = null;

function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Generate pre-rendered white noise buffer for mechanical tactile transients
function getNoiseBuffer(ctx) {
  if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) {
    return noiseBuffer;
  }
  const bufferSize = Math.floor(ctx.sampleRate * 0.1); // 100ms
  noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
}

export function toggleAudio() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playLaserClick();
  }
  return soundEnabled;
}

export function isAudioEnabled() {
  return soundEnabled;
}

/**
 * 1. TACTILE HAPTIC TAP (Hover)
 * Ultra-subtle mechanical glass tick (like macOS/iOS precision haptics).
 * Uses a bandpass-filtered noise transient + damped sub-click.
 * Rate-limited to max 1 trigger every 65ms to prevent rapid mouse chaos.
 */
export function playHoverSound() {
  if (!soundEnabled) return;
  const nowMs = Date.now();
  if (nowMs - lastHoverTime < 65) return;
  lastHoverTime = nowMs;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Transient noise tick
    const noise = ctx.createBufferSource();
    noise.buffer = getNoiseBuffer(ctx);

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(2600, now);
    noiseFilter.Q.setValueAtTime(2.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.015, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.02);

    // Deep micro-thud for physical body
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.022);

    oscGain.gain.setValueAtTime(0.012, now);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.025);
  } catch (e) {
    // Graceful fallback if audio is suspended or restricted
  }
}

/**
 * 2. TACTICAL MECHANICAL SWITCH (Click / Select)
 * Deep cockpit console mechanical switch with crisp snap and satisfying solid thud.
 * No cartoonish pitch drops.
 */
export function playLaserClick() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Layer 1: Crisp physical snap (high-pass filtered click)
    const noise = ctx.createBufferSource();
    noise.buffer = getNoiseBuffer(ctx);

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(3200, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.035, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.03);

    // Layer 2: Solid mechanical switch thock (warm triangle + sub-bass punch)
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.05);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.065);

    // Layer 3: Subtle futuristic harmonic resonant ping
    const ping = ctx.createOscillator();
    const pingGain = ctx.createGain();

    ping.type = 'sine';
    ping.frequency.setValueAtTime(880, now);
    ping.frequency.exponentialRampToValueAtTime(440, now + 0.04);

    pingGain.gain.setValueAtTime(0.015, now);
    pingGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    ping.connect(pingGain);
    pingGain.connect(ctx.destination);

    ping.start(now);
    ping.stop(now + 0.045);
  } catch (e) {}
}

/**
 * 3. CINEMATIC HOLOGRAPHIC SURGE (Power-Up / Launch / Modal Open)
 * Ambient, multi-harmonic resonant filter sweep with sub-bass swell.
 * Sounds like Iron Man HUD activating or high-tech reactor powering up.
 */
export function playPowerUp() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Sub-bass cinematic riser (55Hz -> 110Hz)
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(55, now);
    subOsc.frequency.exponentialRampToValueAtTime(110, now + 0.28);

    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.04, now + 0.08);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    subOsc.start(now);
    subOsc.stop(now + 0.36);

    // Futuristic harmonic pad chord (A minor / Cyberpunk drone: 220Hz, 330Hz, 440Hz, 660Hz)
    const freqs = [220, 330, 440, 660];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.015);

      // Resonant filter sweep from dark to bright
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.22);
      filter.Q.setValueAtTime(3.5, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.02 / freqs.length, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    });

    // High airy shimmer sweep
    const shimmer = ctx.createBufferSource();
    shimmer.buffer = getNoiseBuffer(ctx);

    const shimFilter = ctx.createBiquadFilter();
    shimFilter.type = 'bandpass';
    shimFilter.frequency.setValueAtTime(2000, now);
    shimFilter.frequency.exponentialRampToValueAtTime(5500, now + 0.2);
    shimFilter.Q.setValueAtTime(4.0, now);

    const shimGain = ctx.createGain();
    shimGain.gain.setValueAtTime(0.01, now);
    shimGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    shimmer.connect(shimFilter);
    shimFilter.connect(shimGain);
    shimGain.connect(ctx.destination);

    shimmer.start(now);
    shimmer.stop(now + 0.3);
  } catch (e) {}
}

/**
 * 4. CRYSTALLINE AFFIRMATIVE CHIME (Buffer Copy / Success Confirmation)
 * Pristine, glass-like harmonic two-tone chime.
 * Sounds modern, sophisticated and affirmative (like luxury tech UI feedback).
 */
export function playChime() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Dual-tone harmonic interval (E5 659.25Hz -> B5 987.77Hz)
    const notes = [
      { freq: 659.25, time: now, dur: 0.25, gain: 0.025 },
      { freq: 987.77, time: now + 0.07, dur: 0.35, gain: 0.03 }
    ];

    notes.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.freq, note.time);

      gain.gain.setValueAtTime(0.0001, note.time);
      gain.gain.linearRampToValueAtTime(note.gain, note.time + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, note.time + note.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(note.time);
      osc.stop(note.time + note.dur + 0.02);

      // Subtle warm sub-octave
      const sub = ctx.createOscillator();
      const subGain = ctx.createGain();
      sub.type = 'triangle';
      sub.frequency.setValueAtTime(note.freq / 2, note.time);
      subGain.gain.setValueAtTime(note.gain * 0.25, note.time);
      subGain.gain.exponentialRampToValueAtTime(0.0001, note.time + note.dur * 0.7);

      sub.connect(subGain);
      subGain.connect(ctx.destination);
      sub.start(note.time);
      sub.stop(note.time + note.dur);
    });
  } catch (e) {}
}

/**
 * 5. CYBER TELEMETRY BLIP (Terminal Command Execution)
 * Clean, fast digital frequency shift for terminal lines and shell feedback.
 */
export function playTerminalBlip() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.setValueAtTime(780, now + 0.015);

    gain.gain.setValueAtTime(0.018, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch (e) {}
}
