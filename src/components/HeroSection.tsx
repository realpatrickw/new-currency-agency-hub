
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gradient">Attention is</span>
            <span className="block text-new-pink">the new currency</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            New Currency helps AI companies and SaaS businesses grow through strategic
            influencer marketing and UGC that converts.
          </p>
          
          <Button className="bg-new-pink hover:bg-new-pink/90 text-white px-8 py-6 text-lg rounded-md flex items-center mx-auto">
            Get Started <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-new-pink/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default HeroSection;
