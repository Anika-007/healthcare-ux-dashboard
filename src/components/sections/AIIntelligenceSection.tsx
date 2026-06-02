import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const aiTypes = [
  { name: 'Chatbots', color: '#8B5CF6', size: 120 },
  { name: 'Agentic Systems', color: '#3B82F6', size: 100 },
  { name: 'Predictive AI', color: '#10B981', size: 90 },
  { name: 'Automation', color: '#F59E0B', size: 85 },
  { name: 'Data Insights', color: '#EC4899', size: 80 },
];

export default function AIIntelligenceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-purple-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Intelligence Layer
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Exploring artificial intelligence across the ecosystem</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 text-center gradient-purple"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-7xl font-bold text-purple-400 mb-4"
            >
              12
            </motion.div>
            <div className="text-2xl font-semibold mb-2">AI Projects</div>
            <div className="text-gray-400">Active initiatives leveraging AI</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-12 text-center gradient-blue"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="text-7xl font-bold text-blue-400 mb-4"
            >
              10
            </motion.div>
            <div className="text-2xl font-semibold mb-2">People</div>
            <div className="text-gray-400">Working on AI systems</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-12"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">AI Types & Applications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {aiTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 20px ${type.color}40`,
                      `0 0 40px ${type.color}60`,
                      `0 0 20px ${type.color}40`,
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="rounded-full flex items-center justify-center glass-strong cursor-pointer"
                  style={{
                    width: type.size,
                    height: type.size,
                    background: `radial-gradient(circle, ${type.color}20, transparent)`,
                  }}
                >
                  <div className="text-center px-4">
                    <div className="text-sm font-semibold">{type.name}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
