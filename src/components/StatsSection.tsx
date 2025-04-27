
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Stat */}
          <div className="bg-new-gray p-8 rounded-lg border border-white/10">
            <div className="flex flex-col">
              <span className="text-new-pink text-2xl font-bold mb-2">7x</span>
              <p className="text-white text-lg font-semibold">Faster Traditional Social Marketing, That's New Currency</p>
            </div>
          </div>
          
          {/* Second Stat */}
          <div className="bg-new-gray p-8 rounded-lg border border-white/10">
            <div className="flex flex-col">
              <span className="text-new-pink text-2xl font-bold mb-2">18+</span>
              <p className="text-white text-lg font-semibold">AI & SaaS Brands Building With Us</p>
            </div>
          </div>
          
          {/* Third Stat */}
          <div className="bg-new-gray p-8 rounded-lg border border-white/10">
            <div className="flex flex-col">
              <span className="text-new-pink text-2xl font-bold mb-2">+42%</span>
              <p className="text-white text-lg font-semibold">Average Conversion Rate Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
