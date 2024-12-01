import React from 'react';
import { Code, Rocket, Zap } from 'lucide-react';

const ServiceHighlight = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <HighlightCard
        icon={<Code />}
        title="Web Development"
        description="Custom websites that perform and convert"
      />
      <HighlightCard
        icon={<Zap />}
        title="Digital Marketing"
        description="Results-driven marketing strategies"
      />
      <HighlightCard
        icon={<Rocket />}
        title="Brand Growth"
        description="Scale your business to new heights"
      />
      <HighlightCard
        icon={<Code />}
        title="UI/UX Design"
        description="Beautiful and functional interfaces"
      />
    </div>
  );
};

const HighlightCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:bg-gray-800/70 transition-all">
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default ServiceHighlight;