import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      title: "Classic Fig Malt Drink",
      description: "A traditional Tamil wellness drink perfect for any time of day",
      time: "5 mins",
      serves: "2",
      image: "🥛",
      ingredients: ["2 tbsp SARIRA Fig Malt", "1 cup warm milk", "Honey to taste"]
    },
    {
      title: "Fig Smoothie Bowl",
      description: "A nutritious breakfast bowl packed with natural goodness",
      time: "10 mins",
      serves: "1",
      image: "🥣",
      ingredients: ["3 tbsp Fig Malt", "1 banana", "Greek yogurt", "Nuts & seeds"]
    },
    {
      title: "Fig Malt Muffins",
      description: "Healthy baked treats that kids and adults will love",
      time: "25 mins",
      serves: "12",
      image: "🧁",
      ingredients: ["1/2 cup Fig Malt", "Whole wheat flour", "Eggs", "Baking powder"]
    }
  ];

  return (
    <section id="recipes" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#364A22] mb-4 px-4">
            Delicious Recipes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover creative ways to enjoy SARIRA Fig Malt in your daily meals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Recipe Image */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-[#E38A30]/20 to-[#364A22]/20 flex items-center justify-center">
                <span className="text-5xl sm:text-6xl">{recipe.image}</span>
              </div>

              {/* Recipe Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#364A22] mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {recipe.description}
                </p>

                {/* Recipe Meta */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Serves {recipe.serves}
                  </div>
                </div>

                {/* Ingredients Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[#364A22] mb-2 flex items-center">
                    <ChefHat className="w-4 h-4 mr-1" />
                    Key Ingredients:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {recipe.ingredients.slice(0, 2).map((ingredient, i) => (
                      <li key={i}>• {ingredient}</li>
                    ))}
                    <li className="text-[#E38A30]">• And more...</li>
                  </ul>
                </div>

                {/* Read More Button */}
                <button className="w-full bg-[#E38A30] hover:bg-[#E38A30]/90 text-white py-3 px-4 rounded-lg transition-colors duration-300 text-sm font-medium min-h-[44px] touch-manipulation">
                  Read Full Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;