import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import HealthcareContextSection from './components/sections/HealthcareContextSection';
import TeamAnalyticsSection from './components/sections/TeamAnalyticsSection';
import ProjectEcosystemSection from './components/sections/ProjectEcosystemSection';
import AIIntelligenceSection from './components/sections/AIIntelligenceSection';
import ProblemHeatmapSection from './components/sections/ProblemHeatmapSection';
import SystemArchitectureSection from './components/sections/SystemArchitectureSection';
import InsightLayerSection from './components/sections/InsightLayerSection';
import ActionFrameworkSection from './components/sections/ActionFrameworkSection';
import PeopleDirectorySection from './components/sections/PeopleDirectorySection';
import CursorRipple from './components/ui/CursorRipple';
import ElementGame from './components/game/ElementGame';
import ElementCursor from './components/ui/ElementCursor';

type Element = 'Fire' | 'Water' | 'Air' | 'Earth' | null;

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [userElement, setUserElement] = useState<Element>(null);
  const [userName, setUserName] = useState('');

  const handleGameComplete = (element: Element, name: string) => {
    setUserElement(element);
    setUserName(name);
    setShowDashboard(true);
  };

  const backToGame = () => {
    setShowDashboard(false);
  };

  if (!showDashboard) {
    return <ElementGame onComplete={handleGameComplete} />;
  }

  return (
    <div className="relative">
      {userElement ? <ElementCursor element={userElement} /> : <CursorRipple />}
      <HeroSection />
      <HealthcareContextSection />
      <TeamAnalyticsSection />
      <ProjectEcosystemSection />
      <AIIntelligenceSection />
      <ProblemHeatmapSection />
      <SystemArchitectureSection />
      <InsightLayerSection />
      <ActionFrameworkSection />
      <PeopleDirectorySection />
      
      {/* Footer with back to game link */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={backToGame}
            className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-semibold"
          >
            ← Find Your Element Game
          </button>
          <p className="text-gray-500 mt-4">
            Welcome, <span className="text-white font-semibold">{userName}</span> • Your Element: <span style={{ color: userElement === 'Fire' ? '#EF4444' : userElement === 'Water' ? '#3B82F6' : userElement === 'Air' ? '#60A5FA' : '#10B981' }}>{userElement}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
