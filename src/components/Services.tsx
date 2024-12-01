import React from 'react';
import { Code, Rocket, BarChart, PenTool } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Code />}
            title="Web Development"
            description="Custom websites built with modern technologies that drive results"
            features={['Responsive Design', 'SEO Optimization', 'Performance Focus']}
          />
          <ServiceCard
            icon={<BarChart />}
            title="Digital Marketing"
            description="Strategic marketing campaigns that reach your target audience"
            features={['Social Media', 'Content Strategy', 'Email Marketing']}
          />
          <ServiceCard
            icon={<PenTool />}
            title="Brand Design"
            description="Create a memorable brand identity that stands out"
            features={['Logo Design', 'Brand Guidelines', 'Visual Identity']}
          />
          <ServiceCard
            icon={<Rocket />}
            title="Growth Strategy"
            description="Data-driven strategies to scale your business"
            features={['Market Analysis', 'Growth Planning', 'Performance Tracking']}
          />
        </div>
      </div>
    </section>
  );
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
  features: string[];
}) => (
  <div className="bg-blue-900/5 border border-blue-500/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
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