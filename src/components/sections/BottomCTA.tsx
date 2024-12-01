import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const BottomCTA = () => {
  return (
    <section className="bg-gradient-to-b from-black to-blue-900/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our digital marketing expertise.
          </p>
          <Button className="mx-auto text-lg px-10 py-4">
            BOOK A CALL WITH US <ArrowRight className="ml-2" size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;