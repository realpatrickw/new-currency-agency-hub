import React, { useState } from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: 'Penn Venture Lab',
      logo: '/lovable-uploads/e47ac63f-2627-43de-a398-bb2a3f7c2683.png'
    },
    {
      name: 'Tsai Center for Innovative Thinking at Yale',
      logo: '/lovable-uploads/3716efca-1cf6-4135-b374-e0ddc6c085fd.png'
    },
    {
      name: 'University of Toronto Entrepreneurship',
      logo: '/lovable-uploads/263a30cf-46e2-4c41-acdb-511ba6cf0420.png'
    },
    {
      name: 'Yale Ventures',
      logo: '/lovable-uploads/cd1539e9-2861-4e43-804b-4cad6dc559a2.png'
    },
    {
      name: 'The Bridge',
      logo: '/lovable-uploads/63a035c0-a416-44a2-a5ee-d2e6434fad2d.png'
    }
  ];

  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (clientName: string) => {
    setImgErrors(prev => ({
      ...prev,
      [clientName]: true
    }));
    console.error(`Failed to load image for ${clientName}`);
  };

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
              className="w-full flex flex-col items-center justify-center h-24 transition-opacity hover:opacity-80"
            >
              {imgErrors[client.name] ? (
                <div className="text-center p-2 bg-gray-800 rounded">
                  <p className="font-medium text-sm">{client.name}</p>
                </div>
              ) : (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 md:max-h-20 lg:max-h-24 object-contain"
                  loading="lazy"
                  onError={() => handleImageError(client.name)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
