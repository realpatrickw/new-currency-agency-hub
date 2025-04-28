
import React from 'react';
import { Button } from "@/components/ui/button";
import { Currency } from "lucide-react";

const PlatformShowcase = () => {
  return (
    <section className="py-20 bg-new-dark relative" id="platform">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Advanced Analytics Platform</h2>
            <p className="text-white/70 mb-8">
              Our platform provides real-time insights and analytics to help you track competitors,
              analyze campaign data, and identify viral content trends with comprehensive reporting.
            </p>
            <Button className="bg-new-pink hover:bg-new-pink/90 text-white">
              <Currency className="mr-2 h-4 w-4" /> Get Access
            </Button>
          </div>
          <div className="relative aspect-video bg-new-gray rounded-lg overflow-hidden border border-white/10">
            <img 
              src="https://ojhghmadkdllnqcqpbhg.supabase.co/storage/v1/object/public/client-logos//ChatGPT%20Image%20Apr%2028,%202025,%2001_11_32%20PM.png" 
              alt="Platform Screenshot" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
