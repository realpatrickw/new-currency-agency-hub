
import React from 'react';

const FeaturedCaseStudy = () => {
  return <section className="py-16 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img 
                src="https://ojhghmadkdllnqcqpbhg.supabase.co/storage/v1/object/public/client-logos//Image_20250428123638.png"
                alt="FindHiringManager.com case study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-new-dark to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-new-pink/30"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white/70 mb-1">Featured Case Study</p>
              <h3 className="text-xl font-bold text-white mb-2">FindHiringManager.com: From Launch to Success</h3>
              <p className="text-white/70 text-sm">How we helped achieve rapid customer acquisition through strategic marketing</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Cold Start to Rapid Growth</h2>
            <p className="text-white/70 mb-8">
              Working with FindHiringManager.com, we implemented a dual-strategy approach combining authentic UGC marketing 
              with targeted influencer outreach. By partnering with tech professionals and career coaches, we created 
              compelling content that showcased the platform's effectiveness in job search optimization. This comprehensive 
              approach helped FindHiringManager.com achieve remarkable early traction, reaching their first 500 customers 
              in less than two weeks from launch.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-new-pink font-bold text-2xl">500+</p>
                <p className="text-white/70">Customers</p>
              </div>
              <div>
                <p className="text-new-pink font-bold text-2xl">2</p>
                <p className="text-white/70">Weeks</p>
              </div>
              <div>
                <p className="text-new-pink font-bold text-2xl">85%</p>
                <p className="text-white/70">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default FeaturedCaseStudy;
