
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-new-gray border border-white/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let's Create Something Special!
              </h2>
              <p className="text-white/70 mb-8">
                Ready to transform your AI or SaaS marketing strategy? Our team of specialists is 
                ready to help you create campaigns that drive real business results.
              </p>
              <Button className="bg-new-pink hover:bg-new-pink/90 text-white px-8 py-6 text-lg rounded-md flex items-center">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-red-600 text-white text-xs px-3 py-1 rounded mb-2">Award</div>
                  <div className="w-32 h-32 bg-white/5 rounded flex items-center justify-center">
                    <span className="text-white/50">Award 1</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded mb-2">Award</div>
                  <div className="w-32 h-32 bg-white/5 rounded flex items-center justify-center">
                    <span className="text-white/50">Award 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white-100/10 bg-grid"></div>
      </div>
    </section>
  );
};

export default CTASection;
