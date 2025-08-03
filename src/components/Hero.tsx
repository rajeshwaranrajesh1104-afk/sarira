import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#364A22] flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border border-[#E38A30] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 border border-[#E38A30] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-[#E38A30] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 sm:py-12">
        <div className="space-y-8 animate-fade-in">
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA Logo" 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain brightness-110 contrast-125 transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Product Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight">
            SARIRA
          </h1>
          
          <div className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6 px-4">
            with Organic Figs & Premium Nuts
          </div>
          
          <div className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8">
            200g pouch
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            Legacy of Tamil Wellness in a Spoon
          </p>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8 px-4">
            <button className="group bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto min-h-[48px] touch-manipulation">
              Shop Now
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;