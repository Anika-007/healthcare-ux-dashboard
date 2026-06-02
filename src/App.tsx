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

function App() {
  return (
    <div className="relative">
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
    </div>
  );
}

export default App;
