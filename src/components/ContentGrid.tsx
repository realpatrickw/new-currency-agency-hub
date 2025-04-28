
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ContentCard = ({
  title,
  category,
  overlay = false
}: {
  title: string;
  category: string;
  overlay?: boolean;
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 relative">
        {/* This would be a real image in production */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-new-pink/20"></div>
        
        {overlay && <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity"></div>}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-new-pink text-sm font-medium">{category}</p>
          <h4 className="text-white font-medium">{title}</h4>
        </div>
      </div>
    </div>
  );
};

const ContentGrid = () => {
  const contentItems = [
    {
      title: "Connecting Customers",
      category: "UGC Campaign"
    },
    {
      title: "AI Personalization Strategy",
      category: "Case Study"
    },
    {
      title: "Driving SaaS Engagement",
      category: "Influencer Marketing"
    },
    {
      title: "Key SaaS Metrics That Matter",
      category: "Whitepaper"
    },
    {
      title: "Scaling Through Creative",
      category: "Success Story"
    },
    {
      title: "Social Media Strategy for AI",
      category: "Guide"
    }
  ];

  return (
    <section className="py-16 bg-new-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Resources & Insights</h2>
          <p className="text-white/70 max-w-2xl">
            Explore our collection of resources designed to help SaaS companies optimize their marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <ContentCard 
              key={index}
              title={item.title}
              category={item.category}
              overlay={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
