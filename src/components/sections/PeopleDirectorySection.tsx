import { motion } from 'framer-motion';
import { User, Briefcase, Award, Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface Person {
  name: string;
  role: string;
  experience: string;
  type: 'Builder' | 'Thinker' | 'Hybrid' | 'Specialist' | 'Innovator' | 'Generalist' | 'System Architect' | 'Execution Specialist' | 'Flexible Builder' | 'Influencer' | 'Stakeholder Specialist' | 'Problem Solver' | 'Enterprise Designer' | 'Research Specialist' | 'Strategic Leader' | 'Early Career' | 'Visual Specialist' | 'Senior Specialist' | 'Information Architect' | 'Intern';
  focus: string;
  strengths: string[];
  projects: string[];
}

const people: Person[] = [
  {
    name: 'Ankulekha Bhattacharyya',
    role: 'UX Designer',
    experience: '5-7 years',
    type: 'Builder',
    focus: 'Enterprise UX',
    strengths: ['System Design', 'UX Execution', 'Enterprise Workflows'],
    projects: ['Enterprise Tools', 'Internal UX Systems'],
  },
  {
    name: 'Praneetha D',
    role: 'UX Designer',
    experience: '5-6 years',
    type: 'Builder',
    focus: 'Enterprise UX',
    strengths: ['UX Execution', 'Workflow Design', 'UI Design'],
    projects: ['Internal Platforms', 'Enterprise Tools'],
  },
  {
    name: 'Sravani Chode',
    role: 'UX Designer',
    experience: '5-6 years',
    type: 'Builder',
    focus: 'Enterprise UX',
    strengths: ['UX Design', 'UI Systems', 'Execution'],
    projects: ['Enterprise Applications', 'Internal Systems'],
  },
  {
    name: 'Ajay Soni',
    role: 'Senior UX Designer',
    experience: '7+ years',
    type: 'System Architect',
    focus: 'Design Systems, Benefits',
    strengths: ['Design Systems', 'Research', 'AI', 'Mentoring'],
    projects: ['Lean Design System', 'Jupiter', 'CIDA', 'DSBP'],
  },
  {
    name: 'Ayushi Gupta',
    role: 'UX Designer',
    experience: '7+ years',
    type: 'Builder',
    focus: 'MIRA, C3O',
    strengths: ['Data Design', 'Enterprise UX', 'Healthcare'],
    projects: ['MIRA', 'C3O'],
  },
  {
    name: 'Aayush Wykes',
    role: 'UX Designer',
    experience: '6+ years',
    type: 'Innovator',
    focus: 'AI, Unified Desktop',
    strengths: ['AI UX', 'Accessibility', 'Research'],
    projects: ['Unified Desktop', 'AI Research', 'Google AI Integration'],
  },
  {
    name: 'Shalaka Sushant Vajirkar',
    role: 'UX Designer',
    experience: '8+ years',
    type: 'Builder',
    focus: 'CPAS',
    strengths: ['User Research', 'Documentation', 'Figma'],
    projects: ['CPAS'],
  },
  {
    name: 'Aarathi',
    role: 'UX Designer',
    experience: '5+ years',
    type: 'Generalist',
    focus: 'CPAS, Magnolia',
    strengths: ['UX Research', 'Strategy', 'Healthcare'],
    projects: ['CPAS', 'Magnolia'],
  },
  {
    name: 'Priyanka Rani',
    role: 'Senior UX Designer',
    experience: '6.5+ years',
    type: 'Execution Specialist',
    focus: 'Accessibility, Portals',
    strengths: ['UX Critique', 'Accessibility', 'Large Systems'],
    projects: ['MSS Accessibility', 'Anthem.com', 'Provider Portal'],
  },
  {
    name: 'Rishobh Hota',
    role: 'Senior UX Designer',
    experience: '5+ years',
    type: 'System Architect',
    focus: 'EDS, AI',
    strengths: ['Design Systems', 'Components', 'Tokens'],
    projects: ['Enterprise Design System', 'Virtual Assistant'],
  },
  {
    name: 'Nilay Sudhir Dongarwar',
    role: 'UX Designer',
    experience: '5+ years',
    type: 'Flexible Builder',
    focus: 'MCM',
    strengths: ['Dashboards', 'Workflows', 'Adaptability'],
    projects: ['Survey Automation', 'PAD', 'PPS'],
  },
  {
    name: 'Harshit Karir',
    role: 'UX Designer',
    experience: '6+ years',
    type: 'Influencer',
    focus: 'Carelon RX',
    strengths: ['Communication', 'Data Thinking', 'Stakeholders'],
    projects: ['Carelon RX'],
  },
  {
    name: 'Muskan Gupta',
    role: 'UX Designer',
    experience: '5+ years',
    type: 'Stakeholder Specialist',
    focus: 'EPA',
    strengths: ['Stakeholder Management', 'Healthcare'],
    projects: ['EPA', 'Prism'],
  },
  {
    name: 'Bijomon Joseph (Bijo)',
    role: 'UX Designer',
    experience: '7+ years',
    type: 'Problem Solver',
    focus: 'RX, PI',
    strengths: ['Rapid Prototyping', 'Complex Systems', 'Calm Thinking'],
    projects: ['Payment Integrity', 'RX CAB', 'CLM'],
  },
  {
    name: 'Alankrita Goutham',
    role: 'Senior UX Designer',
    experience: '6+ years',
    type: 'Enterprise Designer',
    focus: 'Digital Terrain',
    strengths: ['User Interviews', 'Dashboards', 'Internal Tools'],
    projects: ['PIAS', 'InSync', 'Spectrum', 'CRET'],
  },
  {
    name: 'Makshik Malyan',
    role: 'UX Designer',
    experience: '4.5+ years',
    type: 'Builder',
    focus: 'Digital Terrain',
    strengths: ['Dashboards', 'AI Features', 'Enterprise Systems'],
    projects: ['PIAT', 'Spectrum', 'Audit Security'],
  },
  {
    name: 'Yashraj Shankar Raut',
    role: 'Senior UX Designer',
    experience: '5+ years',
    type: 'Research Specialist',
    focus: 'EDA, COB-D',
    strengths: ['User Research', 'Enterprise UX'],
    projects: ['COB-D'],
  },
  {
    name: 'Ankit K Sanil',
    role: 'Lead UX Designer',
    experience: '10+ years',
    type: 'Strategic Leader',
    focus: 'AI, Healthcare',
    strengths: ['AI Design', 'Healthcare', 'Strategy'],
    projects: ['Care Management', 'Utilization Management', 'Payment Integrity'],
  },
  {
    name: 'Anisha Yadav',
    role: 'Junior UX Designer',
    experience: '0.5+ years',
    type: 'Early Career',
    focus: 'Benefits, DSBP',
    strengths: ['UI Design', 'Figma'],
    projects: ['DSBP', 'Jupiter', 'Cedar'],
  },
  {
    name: 'Vikram Varman M',
    role: 'Visual Designer',
    experience: '3+ years',
    type: 'Visual Specialist',
    focus: 'Product Management',
    strengths: ['Presentations', 'Branding', 'Storytelling'],
    projects: ['Leadership Decks', 'MBM', 'Unified Experience'],
  },
  {
    name: 'Mohammad Shadab Ansari',
    role: 'Senior UX/UI Designer',
    experience: '12+ years',
    type: 'Senior Specialist',
    focus: 'EDS, AI UX',
    strengths: ['UI Enhancement', 'Motion Design', 'Systems'],
    projects: ['EDS', 'Smart Search (Ask Issa)'],
  },
  {
    name: 'P. Ajay Karthik',
    role: 'UX Designer',
    experience: '5+ years',
    type: 'Information Architect',
    focus: 'Product Experience',
    strengths: ['IA', 'Content Systems', 'Structure'],
    projects: ['Digest', 'Sydney IA', 'POSH'],
  },
  {
    name: 'Anika',
    role: 'UX Intern',
    experience: '0-1 years',
    type: 'Intern',
    focus: 'Learning Phase',
    strengths: ['Observation', 'Learning', 'Curiosity'],
    projects: ['EPA Documentation'],
  },
  {
    name: 'Aradhya Gupta',
    role: 'UX Intern',
    experience: '0-1 years',
    type: 'Intern',
    focus: 'Learning Phase',
    strengths: ['Learning', 'Exploration'],
    projects: ['C3O Documentation'],
  },
];

export default function PeopleDirectorySection() {
  const [expandedPerson, setExpandedPerson] = useState<string | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Builder': return '#10B981';
      case 'Thinker': return '#3B82F6';
      case 'Hybrid': return '#8B5CF6';
      case 'System Architect': return '#6366F1';
      case 'Innovator': return '#EC4899';
      case 'Generalist': return '#14B8A6';
      case 'Execution Specialist': return '#F59E0B';
      case 'Flexible Builder': return '#10B981';
      case 'Influencer': return '#F97316';
      case 'Stakeholder Specialist': return '#EF4444';
      case 'Problem Solver': return '#8B5CF6';
      case 'Enterprise Designer': return '#3B82F6';
      case 'Research Specialist': return '#06B6D4';
      case 'Strategic Leader': return '#DC2626';
      case 'Early Career': return '#84CC16';
      case 'Visual Specialist': return '#A855F7';
      case 'Senior Specialist': return '#0EA5E9';
      case 'Information Architect': return '#6366F1';
      case 'Intern': return '#22C55E';
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
