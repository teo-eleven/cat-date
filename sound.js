// Retro 8-Bit Web Audio Synthesizer & Sound Effects
// Pure Web Audio API: Zero external audio files required!
// 100% crash-proof with try/catch wrapping and Safari-compatible linear ramps

const SoundEffects = {
  ctx: null,
  enabled: true,
  bgmPlaying: false,
  bgmTimeout: null,

  init() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch (e) {
      console.warn('AudioContext init error:', e);
    }
  },

  toggleMute() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.bgmPlaying) {
      this.stopBGM();
    }
    return this.enabled;
  },

  // Play a cute 8-bit meow sound
  playMeow(pitch = 'cute') {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';

      if (pitch === 'sad') {
        // Mournful sliding meow
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.linearRampToValueAtTime(560, now + 0.1);
        osc.frequency.linearRampToValueAtTime(260, now + 0.5);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.08);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.55);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.55);
      } else {
        // Cute upbeat chirpy meow "Mee-ooww! :3"
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.linearRampToValueAtTime(980, now + 0.12);
        osc.frequency.linearRampToValueAtTime(740, now + 0.35);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.06);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (err) {
      console.warn('playMeow error:', err);
    }
  },

  // Play a gentle purr sound
  playPurr() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      const mainGain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, now);

      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(24, now);
      lfoGain.gain.setValueAtTime(18, now);

      lfo.connect(osc.frequency);
      osc.connect(mainGain);

      mainGain.gain.setValueAtTime(0.0001, now);
      mainGain.gain.linearRampToValueAtTime(0.15, now + 0.1);
      mainGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);

      mainGain.connect(this.ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 0.8);
      osc.stop(now + 0.8);
    } catch (err) {
      console.warn('playPurr error:', err);
    }
  },

  // Boing sound when "No" dodges
  playDodge() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(660, now + 0.18);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.linearRampToValueAtTime(0.0001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (err) {
      console.warn('playDodge error:', err);
    }
  },

  // Retro button click blip
  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.setValueAtTime(1200, now + 0.04);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (err) {
      console.warn('playClick error:', err);
    }
  },

  // Victorious 8-bit romantic fanfare for YES!
  playFanfare() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      // Arpeggio notes: C5, E5, G5, B5, C6, G6
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1567.98];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const startTime = now + idx * 0.1;
        const duration = idx === notes.length - 1 ? 0.7 : 0.16;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx === notes.length - 1 ? 'triangle' : 'square';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.linearRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration + 0.02);
      });

      // Extra happy meow at the end
      setTimeout(() => {
        try {
          this.playMeow('cute');
        } catch (e) {}
      }, 650);
    } catch (err) {
      console.warn('playFanfare error:', err);
    }
  },

  // Cute 8-bit background melody loop
  toggleBGM() {
    if (this.bgmPlaying) {
      this.stopBGM();
      return false;
    } else {
      this.startBGM();
      return true;
    }
  },

  startBGM() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      this.bgmPlaying = true;

      const melody = [
        { f: 523.25, d: 0.3 }, // C5
        { f: 659.25, d: 0.3 }, // E5
        { f: 783.99, d: 0.3 }, // G5
        { f: 880.00, d: 0.4 }, // A5
        { f: 783.99, d: 0.3 }, // G5
        { f: 659.25, d: 0.3 }, // E5
        { f: 587.33, d: 0.4 }, // D5
        { f: 659.25, d: 0.4 }, // E5
        { f: 523.25, d: 0.5 }, // C5
        { f: 440.00, d: 0.3 }, // A4
        { f: 523.25, d: 0.4 }, // C5
        { f: 587.33, d: 0.6 }, // D5
      ];

      let noteIdx = 0;
      const playNext = () => {
        if (!this.bgmPlaying || !this.enabled || !this.ctx) return;
        try {
          const note = melody[noteIdx];
          const now = this.ctx.currentTime;

          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(note.f, now);

          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(0.04, now + 0.03);
          gain.gain.linearRampToValueAtTime(0.0001, now + note.d * 0.95);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + note.d);

          noteIdx = (noteIdx + 1) % melody.length;
          this.bgmTimeout = setTimeout(playNext, note.d * 1000);
        } catch (e) {
          console.warn('BGM error:', e);
        }
      };

      playNext();
    } catch (err) {
      console.warn('startBGM error:', err);
    }
  },

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimeout) {
      clearTimeout(this.bgmTimeout);
      this.bgmTimeout = null;
    }
  }
};
