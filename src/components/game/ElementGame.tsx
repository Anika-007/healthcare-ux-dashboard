import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplet, Wind, Mountain, Download, ArrowRight } from 'lucide-react';
import html2canvas from 'html2canvas';

type Element = 'Fire' | 'Water' | 'Air' | 'Earth' | null;

interface Question {
  id: number;
  question: string;
  options: { text: string; scores: { Fire: number; Water: number; Air: number; Earth: number } }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "When making decisions, what guides you most?",
    options: [
      { text: "Intuition and gut feeling", scores: { Fire: 3, Water: 2, Air: 1, Earth: 0 } },
      { text: "Logic and analysis", scores: { Fire: 0, Water: 1, Air: 3, Earth: 2 } },
      { text: "Past experience and patterns", scores: { Fire: 1, Water: 0, Air: 2, Earth: 3 } },
      { text: "Emotional resonance", scores: { Fire: 2, Water: 3, Air: 0, Earth: 1 } },
    ],
  },
  {
    id: 2,
    question: "What energizes you most?",
    options: [
      { text: "Movement and action", scores: { Fire: 3, Water: 0, Air: 2, Earth: 1 } },
      { text: "Structure and stability", scores: { Fire: 0, Water: 1, Air: 1, Earth: 3 } },
      { text: "Creativity and exploration", scores: { Fire: 2, Water: 1, Air: 3, Earth: 0 } },
      { text: "Connection and flow", scores: { Fire: 1, Water: 3, Air: 0, Earth: 2 } },
    ],
  },
  {
    id: 3,
    question: "How do you approach challenges?",
    options: [
      { text: "Head-on with intensity", scores: { Fire: 3, Water: 0, Air: 1, Earth: 2 } },
      { text: "Adapt and flow around them", scores: { Fire: 0, Water: 3, Air: 2, Earth: 1 } },
      { text: "Think through multiple angles", scores: { Fire: 1, Water: 1, Air: 3, Earth: 0 } },
      { text: "Build systematic solutions", scores: { Fire: 2, Water: 0, Air: 0, Earth: 3 } },
    ],
  },
  {
    id: 4,
    question: "In a team, you naturally become the...",
    options: [
      { text: "Leader who drives action", scores: { Fire: 3, Water: 0, Air: 1, Earth: 2 } },
      { text: "Mediator who maintains harmony", scores: { Fire: 0, Water: 3, Air: 1, Earth: 2 } },
      { text: "Innovator who brings ideas", scores: { Fire: 1, Water: 1, Air: 3, Earth: 0 } },
      { text: "Foundation who ensures stability", scores: { Fire: 2, Water: 0, Air: 0, Earth: 3 } },
    ],
  },
  {
    id: 5,
    question: "What describes your ideal environment?",
    options: [
      { text: "Dynamic and fast-paced", scores: { Fire: 3, Water: 0, Air: 2, Earth: 1 } },
      { text: "Calm and flowing", scores: { Fire: 0, Water: 3, Air: 1, Earth: 2 } },
      { text: "Open and unrestricted", scores: { Fire: 1, Water: 1, Air: 3, Earth: 0 } },
      { text: "Structured and grounded", scores: { Fire: 2, Water: 0, Air: 0, Earth: 3 } },
    ],
  },
  {
    id: 6,
    question: "Do you prefer control or flow?",
    options: [
      { text: "Control - I lead the way", scores: { Fire: 3, Water: 0, Air: 1, Earth: 2 } },
      { text: "Flow - I adapt naturally", scores: { Fire: 0, Water: 3, Air: 2, Earth: 1 } },
      { text: "Freedom - I explore possibilities", scores: { Fire: 1, Water: 1, Air: 3, Earth: 0 } },
      { text: "Structure - I build foundations", scores: { Fire: 2, Water: 0, Air: 0, Earth: 3 } },
    ],
  },
  {
    id: 7,
    question: "What drives you forward?",
    options: [
      { text: "Passion and intensity", scores: { Fire: 3, Water: 0, Air: 1, Earth: 2 } },
      { text: "Empathy and connection", scores: { Fire: 0, Water: 3, Air: 1, Earth: 2 } },
      { text: "Curiosity and discovery", scores: { Fire: 1, Water: 1, Air: 3, Earth: 0 } },
      { text: "Purpose and reliability", scores: { Fire: 2, Water: 0, Air: 0, Earth: 3 } },
    ],
  },
  {
    id: 8,
    question: "How do you recharge?",
    options: [
      { text: "Through action and achievement", scores: { Fire: 3, Water: 0, Air: 1, Earth: 2 } },
      { text: "Through reflection and stillness", scores: { Fire: 0, Water: 3, Air: 1, Earth: 2 } },
      { text: "Through exploration and learning", scores: { Fire: 1, Water: 1, Air: 3, Earth: 0 } },
      { text: "Through routine and grounding", scores: { Fire: 2, Water: 0, Air: 0, Earth: 3 } },
    ],
  },
];

const elementData = {
  Fire: {
    icon: Flame,
    color: '#EF4444',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    description: 'Bold, passionate, and driven by action. You lead with intensity and inspire others through your energy.',
    traits: ['Leadership', 'Intensity', 'Action-Oriented', 'Passionate'],
  },
  Water: {
    icon: Droplet,
    color: '#3B82F6',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    description: 'Empathetic, adaptive, and flowing. You navigate life with grace and connect deeply with others.',
    traits: ['Empathy', 'Adaptability', 'Flow', 'Connection'],
  },
  Air: {
    icon: Wind,
    color: '#60A5FA',
    gradient: 'from-sky-400 via-blue-300 to-indigo-400',
    description: 'Curious, free-spirited, and intellectual. You explore possibilities and think beyond boundaries.',
    traits: ['Curiosity', 'Freedom', 'Thinking', 'Exploration'],
  },
  Earth: {
    icon: Mountain,
    color: '#10B981',
    gradient: 'from-green-600 via-emerald-500 to-lime-500',
    description: 'Stable, reliable, and grounded. You build foundations and bring structure to chaos.',
    traits: ['Stability', 'Reliability', 'Structure', 'Grounding'],
  },
};

interface ElementGameProps {
  onComplete: (element: Element, name: string) => void;
}

export default function ElementGame({ onComplete }: ElementGameProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Fire: 0, Water: 0, Air: 0, Earth: 0 });
  const [result, setResult] = useState<Element>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionScores: { Fire: number; Water: number; Air: number; Earth: number }) => {
    const newScores = {
      Fire: scores.Fire + optionScores.Fire,
      Water: scores.Water + optionScores.Water,
      Air: scores.Air + optionScores.Air,
      Earth: scores.Earth + optionScores.Earth,
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const maxScore = Math.max(newScores.Fire, newScores.Water, newScores.Air, newScores.Earth);
      let element: Element = 'Fire';
      if (newScores.Water === maxScore) element = 'Water';
      else if (newScores.Air === maxScore) element = 'Air';
      else if (newScores.Earth === maxScore) element = 'Earth';
      
      setResult(element);
      setShowResult(true);
    }
  };

  const downloadCard = async () => {
    const card = document.getElementById('element-card');
    if (card) {
      const canvas = await html2canvas(card);
      const link = document.createElement('a');
      link.download = `${name}-${result}-element.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  if (showResult && result) {
    const elementInfo = elementData[result];
    const Icon = elementInfo.icon;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
        style={{ background: 'radial-gradient(circle at 50% 50%, #0A0C10 0%, #000000 100%)' }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: elementInfo.color }}
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-2xl w-full">
          <motion.div
            id="element-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="glass-strong rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${elementInfo.gradient} opacity-10`} />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="relative z-10"
            >
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${elementInfo.color}40, ${elementInfo.color}20)`,
                  boxShadow: `0 0 60px ${elementInfo.color}60`
                }}
              >
                <Icon className="w-16 h-16" style={{ color: elementInfo.color }} />
              </div>

              <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                {name}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r ${elementInfo.gradient} bg-clip-text text-transparent`}>
                  {result}
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {elementInfo.description}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {elementInfo.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        background: `${elementInfo.color}20`,
                        color: elementInfo.color,
                        border: `1px solid ${elementInfo.color}40`,
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-8 justify-center"
          >
            <button
              onClick={downloadCard}
              className="glass-strong px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-all"
              style={{ borderColor: elementInfo.color }}
            >
              <Download className="w-5 h-5" style={{ color: elementInfo.color }} />
              <span className="font-semibold">Download Your Card</span>
            </button>

            <button
              onClick={() => onComplete(result, name)}
              className="px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-all font-semibold"
              style={{ 
                background: `linear-gradient(135deg, ${elementInfo.color}, ${elementInfo.color}80)`,
                boxShadow: `0 4px 20px ${elementInfo.color}40`
              }}
            >
              <span>Continue to Your Healthcare Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                What do we call you?
              </h1>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-6 text-3xl text-center focus:outline-none focus:border-purple-500 transition-all"
                placeholder="Enter your name"
                autoFocus
              />
              <button
                onClick={() => name && setStep(1)}
                disabled={!name}
                className="mt-8 px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-xl font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="birthdate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Select your date of birth
              </h1>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-6 text-2xl text-center focus:outline-none focus:border-cyan-500 transition-all"
              />
              <button
                onClick={() => birthDate && setStep(2)}
                disabled={!birthDate}
                className="mt-8 px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-xl font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Begin Journey
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-center"
            >
              <div className="mb-8">
                <span className="text-gray-400 text-lg">Question {currentQuestion + 1} of {questions.length}</span>
                <div className="w-full h-2 bg-white/10 rounded-full mt-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-12 leading-relaxed">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onClick={() => handleAnswer(option.scores)}
                    className="w-full glass-strong p-6 rounded-2xl text-left hover:border-purple-500 border-2 border-white/10 transition-all"
                  >
                    <span className="text-xl">{option.text}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
