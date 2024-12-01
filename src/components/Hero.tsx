import React from 'react';
import { ArrowRight, Code, Rocket, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">We Create</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Transform your digital presence with cutting-edge web solutions that drive results and elevate your brand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-900/20 px-8 py-3 rounded-lg transition-all">
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <ServiceCard
              icon={<Code />}
              title="Web Development"
              description="Custom websites that perform and convert"
            />
            <ServiceCard
              icon={<Zap />}
              title="Digital Marketing"
              description="Results-driven marketing strategies"
            />
            <ServiceCard
              icon={<Rocket />}
              title="Brand Growth"
              description="Scale your business to new heights"
            />
            <ServiceCard
              icon={<Code />}
              title="UI/UX Design"
              description="Beautiful and functional interfaces"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl hover:bg-blue-900/20 transition-all">
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default Hero;