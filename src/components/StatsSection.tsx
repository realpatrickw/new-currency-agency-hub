
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Stat */}
          <div className="bg-new-gray p-8 rounded-lg border border-white/10">
            <div className="flex flex-col">
              <span className="text-new-pink text-2xl font-bold mb-2">1M+</span>
              <p className="text-white text-lg font-semibold">Average Impressions We Bring to Our Clients</p>
            </div>
          </div>
          
          {/* Second Stat */}
          <div className="bg-new-gray p-8 rounded-lg border border-white/10">
            <div className="flex flex-col">
              <span className="text-new-pink text-2xl font-bold mb-2">300+</span>
              <p className="text-white text-lg font-semibold">Influencers in Tech and AI Space Working With Us</p>
            </div>
          </div>
          
          {/* Third Stat */}
          <div className="bg-new-gray p-8 rounded-lg border border-white/10">
            <div className="flex flex-col">
              <span className="text-new-pink text-2xl font-bold mb-2">100%</span>
              <p className="text-white text-lg font-semibold">Virality Brought to Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
