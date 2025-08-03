import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#364A22]/95 backdrop-blur-sm border-b border-[#E38A30]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA" 
              className="h-10 w-auto sm:h-12 md:h-14 brightness-110 contrast-125 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-white hover:text-[#E38A30] transition-colors duration-300 font-medium text-sm xl:text-base">Home</a>
            <a href="#story" className="text-white hover:text-[#E38A30] transition-colors duration-300 font-medium text-sm xl:text-base">Our Story</a>
            <a href="#recipes" className="text-white hover:text-[#E38A30] transition-colors duration-300 font-medium text-sm xl:text-base">Recipes</a>
            <a href="#gallery" className="text-white hover:text-[#E38A30] transition-colors duration-300 font-medium text-sm xl:text-base">Gallery</a>
            <a href="#contact" className="text-white hover:text-[#E38A30] transition-colors duration-300 font-medium text-sm xl:text-base">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+91XXXXXXXXXX" className="text-white hover:text-[#E38A30] transition-colors duration-300">
              <Phone className="w-5 h-5" />
            </a>
            <button className="text-white hover:text-[#E38A30] transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button className="text-white hover:text-[#E38A30] transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#E38A30] transition-colors duration-300 p-2 -mr-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#364A22]/98 backdrop-blur-md border-b border-[#E38A30]/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-[#E38A30] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
              >
                Home
              </a>
              <a 
                href="#story" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-[#E38A30] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
              >
                Our Story
              </a>
              <a 
                href="#recipes" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-[#E38A30] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
              >
                Recipes
              </a>
              <a 
                href="#gallery" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-[#E38A30] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-[#E38A30] hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </a>
              
              {/* Mobile Contact Actions */}
              <div className="pt-4 mt-4 border-t border-white/10 flex space-x-4">
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="flex-1 bg-[#E38A30] hover:bg-[#E38A30]/90 text-white py-3 px-4 rounded-lg transition-colors duration-300 text-center font-medium flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
                <a 
                  href="mailto:support@sarirawellness.com" 
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg transition-colors duration-300 text-center font-medium flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;