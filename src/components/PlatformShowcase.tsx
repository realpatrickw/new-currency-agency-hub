import React from 'react';
import { Button } from "@/components/ui/button";
import { Currency } from "lucide-react";

const PlatformShowcase = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tracking Your Brand Reputation In Real-Time
            </h2>
            <p className="text-white/70 mb-6">
              Our proprietary analytics platform delivers real-time insights into campaign performance, 
              influencer engagement, and ROI metrics. We provide advanced brand analytics including 
              competitor tracking, campaign data, and viral content analysis with comprehensive reporting.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-new-pink mr-3 flex items-center justify-center text-white text-xs">✓</span>
                <span className="text-white/80">Real-time campaign tracking</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-new-pink mr-3 flex items-center justify-center text-white text-xs">✓</span>
                <span className="text-white/80">Sentiment analysis for UGC content</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-new-pink mr-3 flex items-center justify-center text-white text-xs">✓</span>
                <span className="text-white/80">Conversion attribution modeling</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-new-pink mr-3 flex items-center justify-center text-white text-xs">✓</span>
                <span className="text-white/80">Competitor benchmarking</span>
              </li>
            </ul>
            <Button className="bg-new-pink hover:bg-new-pink/90 text-white">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden border border-white/10">
              {/* This would be a platform dashboard image in production */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-new-pink/20 flex items-center justify-center">
                <p className="text-white/50">Platform Dashboard Preview</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-new-pink/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 flex items-center justify-center">
              <Currency size={64} className="text-purple-500/70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
