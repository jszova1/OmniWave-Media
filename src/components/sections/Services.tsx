import React from 'react';
import { Code, Rocket, BarChart, PenTool } from 'lucide-react';
import { SERVICES_DATA } from '@/utils/constants';

const Services = () => {
  return (
    <section id="services" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              icon={getIcon(service.icon)}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const getIcon = (iconName: string) => {
  const icons = {
    Code: <Code />,
    Rocket: <Rocket />,
    BarChart: <BarChart />,
    PenTool: <PenTool />
  };
  return icons[iconName as keyof typeof icons];
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  features: readonly string[];
}) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/30 transition-all">
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;