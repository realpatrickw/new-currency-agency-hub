
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: 'Airbnb', logo: 'airbnb' },
    { name: 'Uber', logo: 'uber' },
    { name: 'Logitech', logo: 'logitech' },
    { name: 'Spotify', logo: 'spotify' },
    { name: 'Slack', logo: 'slack' },
    { name: 'Google', logo: 'google' },
    { name: 'Microsoft', logo: 'microsoft' },
    { name: 'Apple', logo: 'apple' },
  ];

  return (
    <section id="clients" className="py-16 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">Trusted By Industry Leaders</h2>
          <p className="text-white/60">We work with the world's most innovative technology companies</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center h-12">
              <span className="text-white/50 text-lg font-semibold">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
