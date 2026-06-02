import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const actions = [
  {
    title: 'Introduce UX Earlier in Projects',
    description: 'Embed UX practitioners at project inception to influence architecture and prevent downstream redesigns.',
    impact: 'High',
    color: '#10B981',
  },
  {
    title: 'Standardise AI Patterns',
    description: 'Create reusable design patterns and guidelines for AI-driven interfaces across the ecosystem.',
    impact: 'Medium',
    color: '#3B82F6',
  },
  {
    title: 'Improve Cross-Team Visibility',
    description: 'Establish shared documentation and communication channels to reduce duplication and share learnings.',
    impact: 'High',
    color: '#8B5CF6',
  },
];

export default function ActionFrameworkSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Action Framework
          </h2>
          <p className="text-gray-400 text-lg">Strategic recommendations for improvement</p>
        </motion.div>

        <div className="space-y-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-strong rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${action.color}30, ${action.color}10)`,
                    border: `1px solid ${action.color}40`
                  }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: action.color }} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold">{action.title}</h3>
                    <span 
                      className="px-4 py-1 rounded-full text-sm font-semibold"
                      style={{ 
                        background: `${action.color}20`,
                        color: action.color
                      }}
                    >
                      {action.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg">{action.description}</p>
                </div>

                <ArrowRight className="w-6 h-6 text-gray-600 flex-shrink-0 mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
