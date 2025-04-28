import React from 'react';
const TestimonialSection = () => {
  return <section className="py-20 bg-new-gray relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-new-pink uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/70">
            We've helped AI startups and established SaaS companies achieve remarkable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Testimonial */}
          <div className="bg-black p-8 rounded-lg border border-white/10">
            <p className="text-white/90 mb-6 text-lg">
              "New Currency helped us reach the right audience for our AI product launch. Their influencer strategy 
              generated more qualified leads in one month than our previous campaigns did in a quarter."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-700/30"></div>
              <div className="ml-4">
                <p className="text-white font-semibold">Sarah J</p>
                <p className="text-white/60 text-sm">CMO, Consumer AI</p>
              </div>
            </div>
          </div>
          
          {/* Second Testimonial */}
          <div className="bg-black p-8 rounded-lg border border-white/10">
            <p className="text-white/90 mb-6 text-lg">
              "The UGC content created through New Currency's program delivered 3x the conversion rate of our 
              professionally produced videos. Their understanding of the SaaS market is unparalleled."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-new-pink/30"></div>
              <div className="ml-4">
                <p className="text-white font-semibold">Michael C</p>
                <p className="text-white/60 text-sm">Founder, B2B SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-new-pink/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
    </section>;
};
export default TestimonialSection;