
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-new-dark/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-white text-xl font-bold">
                <span className="text-new-pink">new</span>currency
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white/70 hover:text-white transition-colors">
              Services
            </a>
            <a href="#clients" className="text-white/70 hover:text-white transition-colors">
              Clients
            </a>
            <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-new-pink hover:bg-new-pink/90 text-white font-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-new-dark border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#services" className="block text-white/70 hover:text-white py-2">
              Services
            </a>
            <a href="#clients" className="block text-white/70 hover:text-white py-2">
              Clients
            </a>
            <a href="#portfolio" className="block text-white/70 hover:text-white py-2">
              Portfolio
            </a>
            <a href="#about" className="block text-white/70 hover:text-white py-2">
              About
            </a>
            <a href="#contact" className="block text-white/70 hover:text-white py-2">
              Contact
            </a>
            <Button className="w-full bg-new-pink hover:bg-new-pink/90 text-white font-medium mt-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
