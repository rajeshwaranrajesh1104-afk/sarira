import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#364A22] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA" 
              className="h-10 sm:h-12 w-auto mb-4 brightness-110 contrast-125"
            />
            <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">
              Bringing the legacy of Tamil wellness to modern families through our premium Fig Malt 
              with Organic Figs & Premium Nuts, crafted with traditional wisdom and natural goodness.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300 p-2 -m-2">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300 p-2 -m-2">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300 p-2 -m-2">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300 p-2 -m-2">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <a href="#home" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#recipes" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">
              Support
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <a href="#support" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#support" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#support" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#support" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">
              Contact Info
            </h3>
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E38A30] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm sm:text-base">
                    123 Anna Salai<br />
                    Chennai, Tamil Nadu - 600002
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E38A30] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base">
                  +91 XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E38A30] flex-shrink-0" />
                <a href="mailto:support@sarirawellness.com" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm sm:text-base break-all">
                  support@sarirawellness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-white/60 text-sm mb-4 sm:mb-0">
              © 2025 SARIRA Wellness. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm">
              <a href="#support" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#support" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#support" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                Returns & Refunds
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;