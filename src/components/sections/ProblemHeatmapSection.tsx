import { motion } from 'framer-motion';

const problems = [
  { issue: 'Stakeholder Dominance', count: 7, color: '#EF4444' },
  { issue: 'Project Cancellations', count: 6, color: '#F97316' },
  { issue: 'UX Not Involved Early', count: 5, color: '#F59E0B' },
  { issue: 'Research Gap', count: 4, color: '#FBBF24' },
  { issue: 'Legacy Complexity', count: 4, color: '#FCD34D' },
];

const maxCount = 7;

export default function ProblemHeatmapSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Problem Heatmap
          </h2>
          <p className="text-gray-400 text-lg">Primary organisational bottlenecks</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="space-y-8">
            {problems.map((problem, index) => {
              const percentage = (problem.count / maxCount) * 100;
              
              return (
                <motion.div
                  key={problem.issue}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold">{problem.issue}</span>
                    <span className="text-2xl font-bold" style={{ color: problem.color }}>
                      {problem.count}
                    </span>
                  </div>
                  <div className="h-12 bg-white/5 rounded-xl overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.15,
                        ease: "easeOut"
                      }}
                      className="h-full rounded-xl relative"
                      style={{
                        background: `linear-gradient(90deg, ${problem.color}80, ${problem.color}40)`,
                      }}
                    >
                      <motion.div
                        animate={{
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${problem.color}60, transparent)`,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/30"
          >
            <p className="text-2xl font-bold text-center leading-relaxed">
              "Design is influenced more by stakeholders
              <br />
              than system insights."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
