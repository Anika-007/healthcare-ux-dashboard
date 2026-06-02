// Sound utility functions using Web Audio API

class SoundManager {
  private audioContext: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private ambientOscillator: OscillatorNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Initialize ambient background sound
  startAmbient() {
    if (!this.audioContext) return;

    // Create a soft ambient drone
    this.ambientOscillator = this.audioContext.createOscillator();
    this.ambientGain = this.audioContext.createGain();

    this.ambientOscillator.type = 'sine';
    this.ambientOscillator.frequency.setValueAtTime(110, this.audioContext.currentTime); // Low A note
    
    this.ambientGain.gain.setValueAtTime(0.02, this.audioContext.currentTime); // Very quiet
    
    this.ambientOscillator.connect(this.ambientGain);
    this.ambientGain.connect(this.audioContext.destination);
    
    this.ambientOscillator.start();
  }

  stopAmbient() {
    if (this.ambientOscillator) {
      this.ambientOscillator.stop();
      this.ambientOscillator = null;
    }
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
