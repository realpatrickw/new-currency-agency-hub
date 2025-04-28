import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-new-gray border border-white/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Scale Your Business Now</h2>
              <p className="text-white/70 mb-8">Ready to transform your AI or SaaS marketing strategy? Our team of growth expert and ex-founder is ready to help you create campaigns that drive real business results.</p>
              <Button className="bg-new-pink hover:bg-new-pink/90 text-white px-8 py-6 text-lg rounded-md flex items-center">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <img 
                src="https://ojhghmadkdllnqcqpbhg.supabase.co/storage/v1/object/public/client-logos//ChatGPT%20Image%20Apr%2028,%202025,%2001_11_32%20PM.png"
                alt="Business Analytics Dashboard"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white-100/10 bg-grid"></div>
      </div>
    </section>;
};

export default CTASection;
