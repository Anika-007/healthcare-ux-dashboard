import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const topSystems = [
  { name: 'EDS', contributors: 3, color: '#3B82F6' },
  { name: 'Digital Terrain', contributors: 3, color: '#8B5CF6' },
  { name: 'CPAS', contributors: 3, color: '#10B981' },
  { name: 'RX Platform', contributors: 3, color: '#F59E0B' },
];

const towerDistribution = [
  { name: 'EDA', percentage: 45, color: '#3B82F6' },
  { name: 'Digital Terrain', percentage: 30, color: '#8B5CF6' },
  { name: 'RX', percentage: 25, color: '#10B981' },
];

export default function ProjectEcosystemSection() {
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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Project Ecosystem
          </h2>
          <p className="text-gray-400 text-lg">Mapping work distribution and system engagement</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Top Systems</h3>
            <div className="space-y-4">
              {topSystems.map((system, index) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: system.color }}></div>
                    <span className="font-medium">{system.name}</span>
                  </div>
                  <span className="text-gray-400">{system.contributors} contributors</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Tower Distribution</h3>
            <div className="space-y-6">
              {towerDistribution.map((tower, index) => (
                <div key={tower.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tower.name}</span>
                    <span className="text-gray-400">{tower.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tower.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full rounded-full"
                      style={{ background: tower.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Project Status</h3>
            <div className="space-y-6">
              <div className="text-center p-6 rounded-xl gradient-green">
                <div className="text-5xl font-bold text-green-400 mb-2">32</div>
                <div className="text-gray-300">Active Projects</div>
              </div>
              <div className="text-center p-6 rounded-xl gradient-orange relative overflow-hidden">
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-orange-500/20"
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                    <div className="text-5xl font-bold text-orange-400">16</div>
                  </div>
                  <div className="text-gray-300">Abandoned Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
