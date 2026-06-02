import { motion } from 'framer-motion';
import { TrendingUp, Zap, Users, Target, AlertCircle } from 'lucide-react';

const insights = [
  {
    icon: Target,
    title: 'System-First Organisation',
    description: 'Design decisions are rooted in underlying system architecture rather than isolated product features.',
    color: '#3B82F6',
  },
  {
    icon: Zap,
    title: 'Execution Dominates Strategy',
    description: 'Teams are heavily focused on delivery and implementation, with limited strategic planning cycles.',
    color: '#8B5CF6',
  },
  {
    icon: Users,
    title: 'Stakeholders Control Decisions',
    description: 'Design direction is significantly influenced by stakeholder input rather than user research insights.',
    color: '#F59E0B',
  },
  {
    icon: TrendingUp,
    title: 'AI is Widespread But Immature',
    description: '12 AI projects exist across the ecosystem, but patterns and practices are still evolving.',
    color: '#10B981',
  },
  {
    icon: AlertCircle,
    title: 'High Project Drop Rate',
    description: '33% of projects are abandoned, indicating challenges in project scoping or resource allocation.',
    color: '#EF4444',
  },
];

export default function InsightLayerSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Executive Insights
          </h2>
          <p className="text-gray-400 text-lg">Strategic observations from system intelligence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-strong rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  background: `linear-gradient(135deg, ${insight.color}30, ${insight.color}10)`,
                  border: `1px solid ${insight.color}40`
                }}
              >
                <insight.icon className="w-7 h-7" style={{ color: insight.color }} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
              <p className="text-gray-400 leading-relaxed">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
