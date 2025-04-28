
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const ServiceCard = ({ 
  image, 
  title, 
  description 
}: { 
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="relative group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white font-bold text-2xl">{title}</h3>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </HoverCardContent>
    </HoverCard>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

