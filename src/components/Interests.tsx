import React from 'react';
import { Dumbbell, Trophy, Gamepad } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      name: "Football",
      icon: <Trophy className="w-8 h-8" />,
      description: "Sport d'équipe, stratégie et endurance",
      color: "green"
    },
    {
      name: "Musculation",
      icon: <Dumbbell className="w-8 h-8" />,
      description: "Force, endurance et dépassement de soi",
      color: "yellow"
    },
    {
      name: "Jeux Video",
      icon: <Gamepad className="w-8 h-8" />,
      description: "Strategy, compétition et créativité",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      red: "from-red-500 to-red-600 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
      orange: "from-orange-500 to-orange-600 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
      yellow: "from-yellow-500 to-yellow-600 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Centres d'intérêt
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${getColorClasses(interest.color).split(' ')[0]} ${getColorClasses(interest.color).split(' ')[1]} text-white mb-6 shadow-lg`}>
                {interest.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {interest.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;