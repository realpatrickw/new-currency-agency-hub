
import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-12 bg-new-dark border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-white">Scale Your Business With New Currency</h3>
            <p className="text-white/60">Chat with our AI & SaaS marketing specialists today</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-new-pink text-new-pink hover:bg-new-pink hover:text-white">
              View Portfolio
            </Button>
            <Button className="bg-new-pink hover:bg-new-pink/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
