import React from 'react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-12 bg-new-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative h-full">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-new-gray/90"></div>
              <div className="absolute top-8 left-4 right-4">
                <img 
                  src="https://ojhghmadkdllnqcqpbhg.supabase.co/storage/v1/object/public/client-logos//Image_20250428123638.png"
                  alt="FindHiringManager.com logo"
                  className="w-52 h-auto object-contain mx-auto mb-6"
                />
                <div className="space-y-3">
                  <p className="text-sm text-white/70">Featured Case Study</p>
                  <h3 className="text-xl font-bold text-white">FindHiringManager.com: From Launch to Success</h3>
                  <p className="text-white/70 text-sm">How we helped achieve rapid customer acquisition through strategic marketing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="self-center">
            <h2 className="text-3xl font-bold mb-6">Cold Start to Rapid Growth</h2>
            <p className="text-white/70 mb-8">
              Through strategic UGC marketing and influencer partnerships, we helped FindHiringManager.com reach their 
              first 500 customers within two weeks of launch. Our targeted approach with tech professionals and career 
              coaches demonstrated the platform's effectiveness in optimizing job searches.
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
    </section>
  );
};

export default FeaturedCaseStudy;
