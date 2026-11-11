// Tiny interface sounds, made with the Web Audio API (no audio files).
// Off by default. The visitor's choice is remembered in their browser.

const KEY = 'sound-on';
let ctx = null;
let on = false;
try { on = localStorage.getItem(KEY) === '1'; } catch {}

const listeners = new Set();

export function isSoundOn() { return on; }

export function onSoundChange(fn) { listeners.add(fn); fn(on); return () => listeners.delete(fn); }

export function setSound(value) {
  on = value;
  try { localStorage.setItem(KEY, on ? '1' : '0'); } catch {}
  if (on) ensureContext();
  listeners.forEach((fn) => fn(on));
  if (on) tick(1800);
}

function ensureContext() {
  if (!ctx) {
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { ctx = null; }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume();
  return ctx;
}

// A short, soft blip. Higher pitch feels lighter.
export function tick(pitch = 1500) {
  if (!on) return;
  const c = ensureContext();
  if (!c) return;
  const t = c.currentTime;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(pitch, t);
  o.frequency.exponentialRampToValueAtTime(pitch * 0.6, t + 0.05);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.05, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  o.connect(g).connect(c.destination);
  o.start(t);
  o.stop(t + 0.08);
}

export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
