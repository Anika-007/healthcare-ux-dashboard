import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  layer: string;
  color: string;
}

interface Connection {
  from: string;
  to: string;
}

const nodes: Node[] = [
  { id: 'eds', label: 'EDS', x: 150, y: 100, layer: 'Design', color: '#3B82F6' },
  { id: 'lean-ids', label: 'Lean IDS', x: 350, y: 100, layer: 'Design', color: '#3B82F6' },
  
  { id: 'digital-terrain', label: 'Digital Terrain', x: 100, y: 250, layer: 'Integration', color: '#8B5CF6' },
  { id: 'rx-platform', label: 'RX Platform', x: 300, y: 250, layer: 'Integration', color: '#8B5CF6' },
  { id: 'cob-d', label: 'COB-D', x: 500, y: 250, layer: 'Integration', color: '#8B5CF6' },
  { id: 'agent-studio', label: 'Agent Studio', x: 700, y: 250, layer: 'Integration', color: '#8B5CF6' },
  
  { id: 'cpas', label: 'CPAS', x: 50, y: 400, layer: 'Product', color: '#10B981' },
  { id: 'carelon-rx', label: 'Carelon RX', x: 200, y: 400, layer: 'Product', color: '#10B981' },
  { id: 'survey-auto', label: 'Survey Automation', x: 400, y: 400, layer: 'Product', color: '#10B981' },
  { id: 'care-mgmt', label: 'Care Management', x: 650, y: 400, layer: 'Product', color: '#10B981' },
  { id: 'piat', label: 'PIAT', x: 850, y: 400, layer: 'Product', color: '#10B981' },
  
  { id: 'payment-int', label: 'Payment Integrity', x: 100, y: 550, layer: 'Monitoring', color: '#F59E0B' },
  { id: 'spectrum', label: 'Spectrum', x: 300, y: 550, layer: 'Monitoring', color: '#F59E0B' },
  { id: 'cret', label: 'CRET', x: 500, y: 550, layer: 'Monitoring', color: '#F59E0B' },
  { id: 'insync', label: 'InSync', x: 700, y: 550, layer: 'Monitoring', color: '#F59E0B' },
  { id: 'emp-alloc', label: 'Employee Allocation', x: 900, y: 550, layer: 'Monitoring', color: '#F59E0B' },
];

const connections: Connection[] = [
  { from: 'eds', to: 'cpas' },
  { from: 'eds', to: 'carelon-rx' },
  { from: 'eds', to: 'survey-auto' },
  { from: 'eds', to: 'care-mgmt' },
  { from: 'eds', to: 'piat' },
  
  { from: 'digital-terrain', to: 'payment-int' },
  { from: 'digital-terrain', to: 'spectrum' },
  { from: 'digital-terrain', to: 'cret' },
  { from: 'digital-terrain', to: 'insync' },
  
  { from: 'rx-platform', to: 'carelon-rx' },
  { from: 'cob-d', to: 'payment-int' },
  { from: 'agent-studio', to: 'survey-auto' },
  { from: 'agent-studio', to: 'care-mgmt' },
];

export default function SystemArchitectureSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const getConnectedNodes = (nodeId: string) => {
    const connected = new Set<string>();
    connections.forEach(conn => {
      if (conn.from === nodeId) connected.add(conn.to);
      if (conn.to === nodeId) connected.add(conn.from);
    });
    return connected;
  };

  const isNodeHighlighted = (nodeId: string) => {
    if (!selectedNode) return hoveredNode === nodeId;
    if (selectedNode === nodeId) return true;
    return getConnectedNodes(selectedNode).has(nodeId);
  };

  const isConnectionHighlighted = (conn: Connection) => {
    if (!selectedNode) return hoveredNode === conn.from || hoveredNode === conn.to;
    return conn.from === selectedNode || conn.to === selectedNode;
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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-gray-400 text-lg">Interactive network of connected systems</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 overflow-x-auto"
        >
          <div className="min-w-[1000px]">
            <svg ref={svgRef} width="1000" height="650" className="w-full">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {connections.map((conn, index) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const isHighlighted = isConnectionHighlighted(conn);

                return (
                  <motion.line
                    key={`${conn.from}-${conn.to}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: isHighlighted ? 0.8 : 0.15,
                      strokeDashoffset: isHighlighted ? [0, -20] : 0
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      pathLength: { duration: 1, delay: index * 0.05 },
                      opacity: { duration: 0.3 },
                      strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isHighlighted ? fromNode.color : '#666'}
                    strokeWidth={isHighlighted ? 3 : 1}
                    strokeDasharray={isHighlighted ? "10,5" : "5,5"}
                  />
                );
              })}

              {nodes.map((node, index) => {
                const isCentralSystem = node.id === 'eds' || node.id === 'digital-terrain';
                const highlighted = isNodeHighlighted(node.id);
                return (
                <g key={node.id}>
                  <motion.circle
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    animate={{
                      scale: highlighted ? 1.1 : 1,
                      fillOpacity: highlighted ? 0.4 : (isCentralSystem ? 0.3 : 0.2)
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    cx={node.x}
                    cy={node.y}
                    r={isCentralSystem ? 45 : 40}
                    fill={node.color}
                    stroke={node.color}
                    strokeWidth={highlighted ? 4 : (isCentralSystem ? 3 : 2)}
                    filter={isCentralSystem ? "url(#strongGlow)" : "url(#glow)"}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                    className="cursor-pointer transition-all duration-300"
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                    x={node.x}
                    y={node.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontSize={hoveredNode === node.id ? 13 : 11}
                    fontWeight="600"
                    className="pointer-events-none select-none"
                  >
                    {node.label}
                  </motion.text>
                </g>
              );
              })}
            </svg>

            <div className="mt-8 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-300">Design Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-300">Integration Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-300">Product Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-sm text-gray-300">Monitoring Layer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
