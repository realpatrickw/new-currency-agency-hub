
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return <section className="pt-32 pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-new-dark opacity-95" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">
                <span className="text-new-pink">new</span>
                <span className="text-white">currency</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8">
              New Currency helps AI companies and SaaS businesses grow through strategic
              influencer marketing and UGC that converts.
            </p>
            
            <Button className="bg-new-pink hover:bg-new-pink/90 text-white px-8 py-6 text-lg rounded-md flex items-center">
              Get Started <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:ml-auto">
            <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto">
              <img alt="Social Media Marketing Showcase" className="w-full h-full object-contain" src="/lovable-uploads/1b74d76b-dbba-43e6-9a22-b5d169dd86eb.png" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-new-pink/20 to-purple-500/20 blur-3xl opacity-30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-new-pink/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
    </section>;
};

export default HeroSection;
