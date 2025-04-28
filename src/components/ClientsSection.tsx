
import React, { useState, useEffect } from 'react';

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

  // Let's add some debugging to verify images
  useEffect(() => {
    // Check if images exist by logging to console
    clients.forEach(client => {
      const img = new Image();
      img.onload = () => console.log(`Image loaded successfully: ${client.name}`);
      img.onerror = () => console.error(`Failed to load image: ${client.name}, path: ${client.logo}`);
      img.src = client.logo;
    });
  }, []);

  return (
    <section id="clients" className="py-16 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Trusted By Entrepreneurs From Top Accelerators
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
                onError={(e) => {
                  console.error(`Error loading image for ${client.name}`);
                  // Fallback to displaying the name if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Backup text in case image fails */}
              <span className="text-sm text-white opacity-80">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
