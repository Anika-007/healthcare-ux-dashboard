// Sound utility functions using Web Audio API

class SoundManager {
  private audioContext: AudioContext | null = null;
  private backgroundMusic: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create background music audio element
      // Use path that works for both GitHub Pages and Netlify
      this.backgroundMusic = new Audio('/summer-nights.mp3');
      this.backgroundMusic.loop = true;
      this.backgroundMusic.volume = 0.3; // 30% volume
    }
  }

  // Start background music
  async startAmbient() {
    if (!this.backgroundMusic) return;
    
    // If already playing, don't restart
    if (this.isPlaying && !this.backgroundMusic.paused) return;
    
    try {
      this.isPlaying = true;
      this.backgroundMusic.currentTime = 0; // Start from beginning
      await this.backgroundMusic.play();
      console.log('Music started successfully');
    } catch (error) {
      console.log('Audio playback requires user interaction first');
      this.isPlaying = false;
      // Browser may require user interaction first - will retry on first click
    }
  }

  stopAmbient() {
    if (this.backgroundMusic) {
      this.backgroundMusic.pause();
      this.backgroundMusic.currentTime = 0;
      this.isPlaying = false;
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
