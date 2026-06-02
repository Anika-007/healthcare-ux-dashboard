import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const genderData = [
  { name: 'Male', value: 15, color: '#3B82F6' },
  { name: 'Female', value: 9, color: '#8B5CF6' },
];

const experienceData = [
  { range: '0-2', value: 3 },
  { range: '2-5', value: 5 },
  { range: '5-8', value: 11 },
  { range: '8+', value: 5 },
];

const tenureData = [
  { range: '<1', value: 5 },
  { range: '1-3', value: 10 },
  { range: '3-5', value: 7 },
  { range: '5+', value: 2 },
];

const rolesData = [
  { role: 'UX', value: 18, color: '#10B981' },
  { role: 'Senior', value: 4, color: '#3B82F6' },
  { role: 'Interns', value: 2, color: '#F59E0B' },
  { role: 'Specialists', value: 2, color: '#8B5CF6' },
];

export default function TeamAnalyticsSection() {
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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Team Analytics
          </h2>
          <p className="text-gray-400 text-lg">Understanding our people and their expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Gender Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(18, 20, 26, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {genderData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: item.color }}></div>
                  <span className="text-sm text-gray-300">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Experience (Years)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={experienceData}>
                <XAxis dataKey="range" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(18, 20, 26, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px'
                  }} 
                />
                <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Tenure (Years)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tenureData}>
                <XAxis dataKey="range" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(18, 20, 26, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px'
                  }} 
                />
                <Bar dataKey="value" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Roles</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={rolesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {rolesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(18, 20, 26, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {rolesData.map((item) => (
                <div key={item.role} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: item.color }}></div>
                  <span className="text-sm text-gray-300">{item.role}: {item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
