import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Element = 'Fire' | 'Water' | 'Air' | 'Earth' | null;

interface Trail {
  id: number;
  x: number;
  y: number;
}

interface ElementCursorProps {
  element: Element;
}

export default function ElementCursor({ element }: ElementCursorProps) {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!element) return;

    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const newTrail: Trail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev, newTrail]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, element === 'Fire' ? 800 : element === 'Water' ? 1000 : element === 'Air' ? 600 : 1200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [element]);

  if (!element) return null;

  const getElementStyle = () => {
    switch (element) {
      case 'Fire':
        return {
          color: '#EF4444',
          glow: '0 0 20px #EF4444, 0 0 40px #F97316',
          trailSize: 8,
        };
      case 'Water':
        return {
          color: '#3B82F6',
          glow: '0 0 20px #3B82F6, 0 0 40px #06B6D4',
          trailSize: 12,
        };
      case 'Air':
        return {
          color: '#60A5FA',
          glow: '0 0 15px #60A5FA, 0 0 30px #93C5FD',
          trailSize: 6,
        };
      case 'Earth':
        return {
          color: '#10B981',
          glow: '0 0 15px #10B981, 0 0 30px #34D399',
          trailSize: 10,
        };
    }
  };

  const style = getElementStyle();

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Custom cursor */}
      <motion.div
        className="absolute w-4 h-4 rounded-full"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          marginLeft: -8,
          marginTop: -8,
          background: style.color,
          boxShadow: style.glow,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />

      {/* Element-specific trails */}
      <AnimatePresence>
        {trails.map((trail) => {
          if (element === 'Fire') {
            return (
              <motion.div
                key={trail.id}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 0, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute rounded-full"
                style={{
                  left: trail.x,
                  top: trail.y,
                  width: style.trailSize,
                  height: style.trailSize,
                  marginLeft: -style.trailSize / 2,
                  marginTop: -style.trailSize / 2,
                  background: `radial-gradient(circle, ${style.color}, #F97316)`,
                  boxShadow: `0 0 10px ${style.color}`,
                }}
              />
            );
          }

          if (element === 'Water') {
            return (
              <motion.div
                key={trail.id}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 3, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute rounded-full border-2"
                style={{
                  left: trail.x,
                  top: trail.y,
                  width: style.trailSize,
                  height: style.trailSize,
                  marginLeft: -style.trailSize / 2,
                  marginTop: -style.trailSize / 2,
                  borderColor: `${style.color}60`,
                }}
              />
            );
          }

          if (element === 'Air') {
            return (
              <motion.div
                key={trail.id}
                initial={{ scale: 1, opacity: 0.6, y: 0 }}
                animate={{ scale: 0.5, opacity: 0, y: -20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute rounded-full"
                style={{
                  left: trail.x,
                  top: trail.y,
                  width: style.trailSize,
                  height: style.trailSize,
                  marginLeft: -style.trailSize / 2,
                  marginTop: -style.trailSize / 2,
                  background: `${style.color}80`,
                  filter: 'blur(2px)',
                }}
              />
            );
          }

          if (element === 'Earth') {
            return (
              <motion.div
                key={trail.id}
                initial={{ scale: 1, opacity: 0.8, y: 0 }}
                animate={{ 
                  scale: [1, 0.8, 0],
                  opacity: [0.8, 0.4, 0],
                  y: [0, 10, 20],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute"
                style={{
                  left: trail.x,
                  top: trail.y,
                  width: style.trailSize,
                  height: style.trailSize,
                  marginLeft: -style.trailSize / 2,
                  marginTop: -style.trailSize / 2,
                  background: style.color,
                  borderRadius: '30%',
                }}
              />
            );
          }

          return null;
        })}
      </AnimatePresence>
    </div>
  );
}
