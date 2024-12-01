import React from 'react';
import { ScrollText, CalendarDays, Phone } from 'lucide-react';

const PathToWork = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#00A3FF] mb-12">
          Your Path To Working With Us:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#00A3FF] to-[#00A3FF] transform -translate-y-1/2" />
          
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-b from-blue-900/50 to-black p-6 rounded-xl border border-blue-500/20 h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ScrollText size={32} className="text-[#00A3FF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">STEP 1</h3>
                <h4 className="text-xl font-semibold text-[#00A3FF] mb-4">Share Your Needs</h4>
              </div>
              <p className="text-gray-400 text-center">
                Tell us what you need (or what you think you need) so we can first make sure we're a fit.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-b from-blue-900/50 to-black p-6 rounded-xl border border-blue-500/20 h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDays size={32} className="text-[#00A3FF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">STEP 2</h3>
                <h4 className="text-xl font-semibold text-[#00A3FF] mb-4">Book A Call</h4>
              </div>
              <p className="text-gray-400 text-center">
                As simple as it sounds, schedule a time for us to chat on the phone.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-gradient-to-b from-blue-900/50 to-black p-6 rounded-xl border border-blue-500/20 h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-[#00A3FF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">STEP 3</h3>
                <h4 className="text-xl font-semibold text-[#00A3FF] mb-4">Speak With Us</h4>
              </div>
              <p className="text-gray-400 text-center">
                We will answer your questions & start to build a custom game-plan tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToWork;