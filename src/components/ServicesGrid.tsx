
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ 
  image, 
  title, 
  description 
}: { 
  image: string;
  title: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white/5 rounded-lg overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center p-8">
            <h3 className="text-white font-bold text-3xl">{title}</h3>
          </div>
        </div>

        {/* Content Section - Visible on Hover */}
        <div className={`absolute md:relative inset-0 md:inset-auto bg-white p-8 flex flex-col justify-center transition-opacity duration-300 
          ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
          <h4 className="text-2xl font-semibold text-black mb-4">{title}</h4>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button variant="outline" className="w-fit group">
            Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      image: 'https://ojhghmadkdllnqcqpbhg.supabase.co/storage/v1/object/public/client-logos//ChatGPT%20Image%20Apr%2028,%202025,%2012_23_01%20PM.png',
      title: 'Influencer Marketing',
      description: 'We connect you with thought leaders and influencers who already have an engaged audience in the tech and AI space to promote your content and products effectively.',
    },
    {
      image: 'https://ojhghmadkdllnqcqpbhg.supabase.co/storage/v1/object/public/client-logos//3e7d1f6d-2818-4d63-8d3c-2ba2a838577e.png',
      title: 'UGC Marketing',
      description: 'We scale your campaigns by coordinating with micro-influencers and content creators to produce authentic videos and content, building organic social proof for your product.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tailored marketing solutions for AI-driven companies and SaaS businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
