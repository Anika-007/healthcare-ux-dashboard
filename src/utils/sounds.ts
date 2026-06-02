// Sound utility functions using Web Audio API

class SoundManager {
  private audioContext: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private musicOscillators: OscillatorNode[] = [];
  private isPlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Initialize ambient background music with looping melody
  startAmbient() {
    if (!this.audioContext || this.isPlaying) return;
    this.isPlaying = true;

    // Create gain node for volume control
    this.ambientGain = this.audioContext.createGain();
    this.ambientGain.gain.setValueAtTime(0.08, this.audioContext.currentTime); // Low volume
    this.ambientGain.connect(this.audioContext.destination);

    // Musical progression: Am - F - C - G (common emotional progression)
    const chordProgression = [
      [220, 261.63, 329.63], // Am (A, C, E)
      [174.61, 220, 261.63], // F (F, A, C)
      [261.63, 329.63, 392],  // C (C, E, G)
      [196, 246.94, 293.66],  // G (G, B, D)
    ];

    const playChord = (chord: number[], startTime: number, duration: number) => {
      chord.forEach((freq, index) => {
        const oscillator = this.audioContext!.createOscillator();
        const gainNode = this.audioContext!.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, startTime);

        // Gentle fade in and out
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.3);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + duration - 0.3);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(this.ambientGain!);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);

        this.musicOscillators.push(oscillator);
      });
    };

    // Loop the chord progression
    const loopMusic = () => {
      if (!this.isPlaying) return;

      const currentTime = this.audioContext!.currentTime;
      const chordDuration = 2.5; // Each chord lasts 2.5 seconds

      chordProgression.forEach((chord, index) => {
        playChord(chord, currentTime + index * chordDuration, chordDuration);
      });

      // Schedule next loop
      const totalDuration = chordProgression.length * chordDuration;
      setTimeout(() => loopMusic(), (totalDuration - 0.5) * 1000); // Slight overlap
    };

    loopMusic();
  }

  stopAmbient() {
    this.isPlaying = false;
    this.musicOscillators.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator may already be stopped
      }
    });
    this.musicOscillators = [];
  }

  // Click/interaction sound
  playClick() {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }

  // Success/completion sound
  playSuccess() {
    if (!this.audioContext) return;

    const notes = [523.25, 659.25, 783.99]; // C, E, G chord
    const startTime = this.audioContext.currentTime;

    notes.forEach((freq, index) => {
      const oscillator = this.audioContext!.createOscillator();
      const gainNode = this.audioContext!.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext!.destination);

      oscillator.frequency.setValueAtTime(freq, startTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.15, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);

      oscillator.start(startTime + index * 0.1);
      oscillator.stop(startTime + 0.5 + index * 0.1);
    });
  }

  // Transition/whoosh sound
  playTransition() {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.3);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  // Element-specific reveal sound
  playElementReveal(element: 'Fire' | 'Water' | 'Air' | 'Earth') {
    if (!this.audioContext) return;

    const frequencies = {
      Fire: [440, 554.37, 659.25], // A, C#, E (energetic)
      Water: [329.63, 392, 493.88], // E, G, B (flowing)
      Air: [523.25, 659.25, 783.99], // C, E, G (light)
      Earth: [196, 246.94, 293.66], // G, B, D (grounded)
    };

    const notes = frequencies[element];
    const startTime = this.audioContext.currentTime;

    notes.forEach((freq, index) => {
      const oscillator = this.audioContext!.createOscillator();
      const gainNode = this.audioContext!.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext!.destination);

      oscillator.frequency.setValueAtTime(freq, startTime);
      oscillator.type = 'triangle';

      gainNode.gain.setValueAtTime(0.2, startTime + index * 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.8 + index * 0.15);

      oscillator.start(startTime + index * 0.15);
      oscillator.stop(startTime + 0.8 + index * 0.15);
    });
  }
}

export const soundManager = new SoundManager();
