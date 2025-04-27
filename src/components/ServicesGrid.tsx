
import React from 'react';

const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="bg-new-gray rounded-lg overflow-hidden border border-white/10 group hover:border-new-pink/50 transition-all duration-300">
      <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
        <div className="p-6 absolute bottom-0 left-0 z-20 w-full">
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
        {/* This would be replaced with a real image in a production site */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-new-pink/20"></div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: 'influencer',
      title: 'AI Influencer Marketing',
      description: 'Strategic partnerships with influencers who understand AI products',
    },
    {
      icon: 'ugc',
      title: 'UGC Creation & Strategy',
      description: 'Authentic user-generated content that drives conversions',
    },
    {
      icon: 'content',
      title: 'Technical Content Marketing',
      description: 'Simplified storytelling for complex SaaS products',
    },
    {
      icon: 'strategy',
      title: 'Go-To-Market Strategy',
      description: 'Launch strategies tailored for AI and SaaS products',
    },
    {
      icon: 'community',
      title: 'Community Management',
      description: 'Building and nurturing communities around your tech product',
    },
    {
      icon: 'analytics',
      title: 'Performance Analytics',
      description: 'Data-driven insights to optimize your marketing spend',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
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
