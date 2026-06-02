import { motion } from 'framer-motion';
import { User, Briefcase, Award, Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface Person {
  name: string;
  role: string;
  experience: string;
  type: 'Builder' | 'Thinker' | 'Hybrid';
  focus: string;
  strengths: string[];
  projects: string[];
}

const people: Person[] = [
  {
    name: 'Alex Chen',
    role: 'Senior UX Designer',
    experience: '8+ years',
    type: 'Builder',
    focus: 'EDS, Digital Terrain',
    strengths: ['System Design', 'Prototyping', 'User Research'],
    projects: ['EDS Redesign', 'Digital Terrain v2', 'Payment Integrity Dashboard'],
  },
  {
    name: 'Jordan Smith',
    role: 'UX Researcher',
    experience: '5-8 years',
    type: 'Thinker',
    focus: 'Care Management',
    strengths: ['Qualitative Research', 'Data Analysis', 'Strategy'],
    projects: ['Care Management Study', 'Patient Journey Mapping'],
  },
  {
    name: 'Sam Rivera',
    role: 'UX Designer',
    experience: '2-5 years',
    type: 'Hybrid',
    focus: 'AI Projects',
    strengths: ['AI/ML Design', 'Interaction Design', 'Visual Design'],
    projects: ['Chatbot Interface', 'Predictive AI Dashboard', 'Agent Studio'],
  },
  {
    name: 'Taylor Kim',
    role: 'Senior UX Designer',
    experience: '8+ years',
    type: 'Builder',
    focus: 'CPAS, RX Platform',
    strengths: ['Enterprise UX', 'Design Systems', 'Accessibility'],
    projects: ['CPAS Modernization', 'RX Platform Redesign'],
  },
  {
    name: 'Morgan Lee',
    role: 'UX Designer',
    experience: '5-8 years',
    type: 'Hybrid',
    focus: 'Payment Integrity',
    strengths: ['Data Visualization', 'Complex Systems', 'Stakeholder Management'],
    projects: ['Payment Integrity Analytics', 'Fraud Detection UI'],
  },
  {
    name: 'Casey Brown',
    role: 'UX Intern',
    experience: '0-2 years',
    type: 'Builder',
    focus: 'Survey Automation',
    strengths: ['UI Design', 'User Testing', 'Wireframing'],
    projects: ['Survey Automation Interface'],
  },
];

export default function PeopleDirectorySection() {
  const [expandedPerson, setExpandedPerson] = useState<string | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Builder': return '#10B981';
      case 'Thinker': return '#3B82F6';
      case 'Hybrid': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            People Directory
          </h2>
          <p className="text-gray-400 text-lg">Meet the team driving healthcare UX innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setExpandedPerson(expandedPerson === person.name ? null : person.name)}
              className="glass-strong rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${getTypeColor(person.type)}30, ${getTypeColor(person.type)}10)`,
                    border: `1px solid ${getTypeColor(person.type)}40`
                  }}
                >
                  <User className="w-8 h-8" style={{ color: getTypeColor(person.type) }} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-1 truncate">{person.name}</h3>
                  <p className="text-sm text-gray-400">{person.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-300">{person.experience}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-300">{person.focus}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ 
                      background: `${getTypeColor(person.type)}20`,
                      color: getTypeColor(person.type)
                    }}
                  >
                    {person.type}
                  </span>
                </div>
              </div>

              {expandedPerson === person.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold">Strengths</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {person.strengths.map((strength) => (
                          <span 
                            key={strength}
                            className="px-2 py-1 rounded-lg text-xs bg-white/5 text-gray-300"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-semibold">Projects</span>
                      </div>
                      <div className="space-y-1">
                        {person.projects.map((project) => (
                          <div key={project} className="text-xs text-gray-400">
                            • {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
