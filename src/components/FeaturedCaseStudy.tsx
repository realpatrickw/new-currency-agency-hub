import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
const FeaturedCaseStudy = () => {
  return <section className="py-16 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white/70 mb-1">Featured Case Study</p>
              <h3 className="text-xl font-bold text-white mb-2">BanruoGPT: Revolutionizing AI Chat Experience</h3>
              <p className="text-white/70 text-sm">How we leveraged organic UGC marketing to achieve 200% user growth</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">From Startup to Industry Leader</h2>
            <p className="text-white/70 mb-8">
              Working with BanruoGPT, we crafted an authentic UGC marketing strategy that resonated deeply 
              with their target audience. By partnering with genuine users and tech enthusiasts, we created 
              a wave of organic content that showcased BanruoGPT's unique capabilities in real-world scenarios.
              This approach not only drove user acquisition but also established BanruoGPT as a trusted name 
              in the AI chatbot space.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-new-pink font-bold text-2xl">200%</p>
                <p className="text-white/70">User Growth</p>
              </div>
              <div>
                <p className="text-new-pink font-bold text-2xl">1.2M+</p>
                <p className="text-white/70">Impression</p>
              </div>
              <div>
                <p className="text-new-pink font-bold text-2xl">85%</p>
                <p className="text-white/70">User Retention</p>
              </div>
            </div>
            <Button className="mt-8 bg-new-pink hover:bg-new-pink/90 text-white">
              View Case Study <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedCaseStudy;