import React from 'react';
import { Quote } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 bg-[#364A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
              Our Story
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-white/90 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              <p>
                Rooted in the ancient wisdom of Tamil traditions, SARIRA Fig Malt carries forward 
                the legacy of our grandmothers who understood the profound healing power of nature's gifts.
              </p>
              
              <p>
                For centuries, figs have held a sacred place in Siddha medicine, revered not just as 
                nourishment but as medicine. From temple rituals to postpartum nutrition, figs have 
                been the cornerstone of Tamil wellness practices.
              </p>
              
              <p>
                Our Fig Malt honors this heritage, crafted with the same care and reverence that 
                has been passed down through generations of Tamil families.
              </p>
            </div>

            {/* Cultural Quote */}
            <div className="bg-[#E38A30]/10 p-4 sm:p-6 rounded-2xl border-l-4 border-[#E38A30]">
              <Quote className="w-8 h-8 text-[#E38A30] mb-4" />
              <p className="text-[#E38A30] text-lg sm:text-xl font-medium mb-2">
                "அந்தணர் நூல் வழி நின்றார் அத்திப் பழம் போல்"
              </p>
              <p className="text-white/80 text-sm">
                Like the fig that follows the path of ancient wisdom
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <img 
              src="/images/WhatsApp Image 2025-07-24 at 12.04.08_7bef17f0.jpg" 
              alt="SARIRA Fig Malt Product" 
              className="w-full max-w-md mx-auto lg:max-w-none aspect-square object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#E38A30] rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#E38A30] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;