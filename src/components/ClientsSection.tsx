
import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: 'Penn Venture Lab',
      logo: '/lovable-uploads/client-1.png'
    },
    {
      name: 'Tsai Center for Innovative Thinking at Yale',
      logo: '/lovable-uploads/client-2.png'
    },
    {
      name: 'University of Toronto Entrepreneurship',
      logo: '/lovable-uploads/client-3.png'
    },
    {
      name: 'Yale Ventures',
      logo: '/lovable-uploads/client-4.png'
    },
    {
      name: 'The Bridge',
      logo: '/lovable-uploads/client-5.png'
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
                className="h-12 object-contain"
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
