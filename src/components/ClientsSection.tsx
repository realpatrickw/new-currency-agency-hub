
import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: 'Penn Venture Lab',
      logo: '/lovable-uploads/98373f0e-628b-45f5-b22a-0eae800fa8ea.png'
    },
    {
      name: 'Tsai Center for Innovative Thinking at Yale',
      logo: '/lovable-uploads/95b39ad1-6930-48cc-92e4-7da44f43a3b1.png'
    },
    {
      name: 'University of Toronto Entrepreneurship',
      logo: '/lovable-uploads/9a1f44dc-7b02-493f-bfcb-8dfc5ecd1783.png'
    },
    {
      name: 'Yale Ventures',
      logo: '/lovable-uploads/6ee8466f-296f-445d-b951-e6fe330f581a.png'
    },
    {
      name: 'The Bridge',
      logo: '/lovable-uploads/93e8b246-921c-452b-8a89-a1cbcff7edd2.png'
    }
  ];

  return (
    <section id="clients" className="py-16 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Trusted By Entrepreneurs From Top Accelerator
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map(client => (
            <div 
              key={client.name} 
              className="w-full flex items-center justify-center h-20 transition-opacity hover:opacity-80"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 md:h-14 lg:h-16 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
