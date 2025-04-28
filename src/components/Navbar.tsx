
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from 'lucide-react';
import { toast } from "sonner";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const handleContact = () => {
    window.location.href = 'mailto:info@newcurrency.io';
    toast.success("Opening email client...");
  };

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'contact', label: 'Contact', onClick: handleContact },
  ];

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
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => item.onClick ? item.onClick() : scrollToSection(item.id)}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={handleContact}
              className="bg-new-pink hover:bg-new-pink/90 text-white font-medium"
            >
              <Mail className="mr-2 h-4 w-4" />
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
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => item.onClick ? item.onClick() : scrollToSection(item.id)}
                className="block w-full text-left text-white/70 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={handleContact}
              className="w-full bg-new-pink hover:bg-new-pink/90 text-white font-medium mt-4"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

