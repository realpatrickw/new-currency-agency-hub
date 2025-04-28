
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

const ClientsSection = () => {
  const clients = [
    {
      name: 'Penn Venture Lab',
      logo: `${supabase.storage.from('client-logos').getPublicUrl('WeChat Screenshot_20250428140206.png').data.publicUrl}`
    },
    {
      name: 'Tsai Center for Innovative Thinking at Yale',
      logo: `${supabase.storage.from('client-logos').getPublicUrl('2 (2).png').data.publicUrl}`
    },
    {
      name: 'University of Toronto Entrepreneurship',
      logo: `${supabase.storage.from('client-logos').getPublicUrl('UTE-Signature-Lock-Up_Colour copy.png').data.publicUrl}`
    },
    {
      name: 'Yale Ventures',
      logo: `${supabase.storage.from('client-logos').getPublicUrl('yvlogo.png').data.publicUrl}`
    },
    {
      name: 'The Bridge',
      logo: `${supabase.storage.from('client-logos').getPublicUrl('1 (2).png').data.publicUrl}`
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
