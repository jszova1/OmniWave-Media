import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import Modal from '../ui/Modal';

const Hero = () => {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    service: string;
  }>({
    isOpen: false,
    service: '',
  });

  const handleVideoClick = (service: string) => {
    setVideoModal({ isOpen: true, service });
  };

  return (
    <div className="relative bg-black pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto pt-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-white">WE HELP</span>
            <br />
            <span className="text-[#00A3FF] uppercase">BUSINESSES</span>
          </h1>
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-white">START, GROW and </span>
            <span className="text-[#00A3FF]">SCALE</span>
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            using proven methods and drawing from years of experience in the digital marketing space
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button>
              Book a Call With Us <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl text-[#00A3FF] font-medium">
            We are a digital marketing agency that offers a full
            <br />
            suite of marketing services to our clients.
          </h3>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400">Here are our most sought after services:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pb-16">
          <ServiceCard
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            title="Website Design"
            description="We build world-class, high end websites for our clients."
            buttonText="SEE MORE"
            videoText="Watch A Video On This"
            onVideoClick={() => handleVideoClick('Website Design')}
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
            title="Running Ads"
            description="We run ads to deliver you more leads & sales."
            buttonText="SEE MORE"
            videoText="Watch A Video On This"
            onVideoClick={() => handleVideoClick('Running Ads')}
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            title="Sales Funnels"
            description="We build world-class, high converting funnels that drive results."
            buttonText="SEE MORE"
            videoText="Watch A Video On This"
            onVideoClick={() => handleVideoClick('Sales Funnels')}
          />
        </div>
      </div>

      <Modal 
        isOpen={videoModal.isOpen} 
        onClose={() => setVideoModal({ isOpen: false, service: '' })}
      >
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tczRXpOiYKo?si=eFnSgqtClbBebTft&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

const ServiceCard = ({ 
  image, 
  title, 
  description,
  buttonText,
  videoText,
  onVideoClick
}: { 
  image: string; 
  title: string; 
  description: string;
  buttonText: string;
  videoText: string;
  onVideoClick: () => void;
}) => (
  <div className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800">
    <div className="aspect-[4/3] mb-4 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-3">
        <button className="w-full bg-[#00A3FF] hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors">
          {buttonText}
        </button>
        <button 
          onClick={onVideoClick}
          className="w-full flex items-center justify-center gap-2 text-gray-300 hover:text-[#00A3FF] transition-colors"
        >
          <Play size={16} />
          <span className="text-sm">{videoText}</span>
        </button>
      </div>
    </div>
  </div>
);

export default Hero;