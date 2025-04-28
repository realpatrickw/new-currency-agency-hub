
import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-black relative" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that have already accelerated their growth with our cutting-edge solutions.
        </p>
        <Button size="lg" className="bg-new-pink hover:bg-new-pink/90 text-white px-8">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
