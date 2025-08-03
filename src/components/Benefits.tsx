import React from 'react';
import { Heart, Shield, Zap, Leaf, Baby, Smile } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "No Added Sugar",
      description: "Pure natural sweetness"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Rich in Fiber",
      description: "Supports healthy digestion"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Supports Digestion",
      description: "Gentle on your stomach"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Calcium & Iron Rich",
      description: "Essential minerals for health"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Fertility Booster",
      description: "Traditional wellness support"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Gut Friendly",
      description: "Promotes digestive wellness"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#364A22] mb-4 px-4">
            Key Benefits
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover the natural goodness packed in every spoonful of SARIRA Fig Malt
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#E38A30] mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center sm:justify-start">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#364A22] mb-2 text-center sm:text-left">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;