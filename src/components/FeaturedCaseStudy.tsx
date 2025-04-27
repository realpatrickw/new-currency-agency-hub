
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-16 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-new-dark to-transparent opacity-70"></div>
              {/* This would be a real image in production */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-new-pink/30"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white/70 mb-1">Featured Case Study</p>
              <h3 className="text-xl font-bold text-white mb-2">The #1 Trusted Personalization For ChatAI Digital Tool</h3>
              <p className="text-white/70 text-sm">How we helped an AI startup achieve 300% growth through influencer marketing</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Brand New Perspective</h2>
            <p className="text-white/70 mb-8">
              We worked closely with this AI startup to identify the perfect influencers who could demonstrate
              their product's unique value proposition in a way that resonated with their target audience.
              The result was a campaign that not only drove immediate sign-ups but also established the brand
              as a thought leader in the AI personalization space.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-new-pink font-bold text-2xl">300%</p>
                <p className="text-white/70">User Growth</p>
              </div>
              <div>
                <p className="text-new-pink font-bold text-2xl">$2.5M</p>
                <p className="text-white/70">New ARR</p>
              </div>
              <div>
                <p className="text-new-pink font-bold text-2xl">15M+</p>
                <p className="text-white/70">Impressions</p>
              </div>
            </div>
            <Button className="mt-8 bg-new-pink hover:bg-new-pink/90 text-white">
              View Case Study <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
