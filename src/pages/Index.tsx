
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientsSection from '@/components/ClientsSection';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-new-dark text-white">
      <Navbar />

      <main>
        <HeroSection />
        <ClientsSection />
        <StatsSection />
        <ServicesGrid />
        <FeaturedCaseStudy />
        <TestimonialSection />
        <CTASection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
