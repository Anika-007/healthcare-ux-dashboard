import { motion } from 'framer-motion';
import { Shield, Heart, Headphones, Database } from 'lucide-react';

const contextCards = [
  {
    icon: Shield,
    title: 'Payment Integrity',
    description: 'Prevents financial leakage through fraud detection and claim accuracy validation.',
    gradient: 'gradient-blue',
  },
  {
    icon: Heart,
    title: 'Care Management',
    description: 'Improves patient outcomes through coordinated care and proactive health interventions.',
    gradient: 'gradient-green',
  },
  {
    icon: Headphones,
    title: 'CSR Systems',
    description: 'Handles member and provider workflows across service touchpoints.',
    gradient: 'gradient-purple',
  },
  {
    icon: Database,
    title: 'Data-Heavy Systems',
    description: 'Required for claims processing, HIPAA compliance, and regulatory reporting.',
    gradient: 'gradient-orange',
  },
];

export default function HealthcareContextSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Healthcare Context
          </h2>
          <p className="text-gray-400 text-lg">Understanding the systems we design for</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contextCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-strong rounded-3xl p-8 ${card.gradient} border border-white/10`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                  <card.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
