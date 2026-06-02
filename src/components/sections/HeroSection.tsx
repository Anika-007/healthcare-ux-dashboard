import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NetworkBackground from '../ui/NetworkBackground';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Enterprise UX
            <br />
            System Intelligence
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center gap-12 mb-12"
        >
          <div className="glass-strong rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold text-blue-400 mb-2">
              <AnimatedCounter end={24} />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">People</div>
          </div>

          <div className="glass-strong rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold text-purple-400 mb-2">
              <AnimatedCounter end={48} />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
          </div>

          <div className="glass-strong rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold text-green-400 mb-2">
              <AnimatedCounter end={6} suffix=".1" />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Years Avg Exp</div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          A system-driven UX ecosystem operating across healthcare workflows,
          <br />
          data systems, and enterprise decision layers.
        </motion.p>
      </div>
    </section>
  );
}
