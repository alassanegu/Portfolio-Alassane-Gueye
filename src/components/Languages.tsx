import React from 'react';
import { Globe, Users, Lightbulb, Target, Heart, Zap } from 'lucide-react';

const Languages: React.FC = () => {
  const languages = [
    { name: "Français", level: "Courant", flag: "🇫🇷" },
    { name: "Anglais", level: "Scolaire", flag: "🇬🇧" },
    { name: "Wolof", level: "Maternelle", flag: "🇸🇳" }
  ];

  const softSkills = [
    { name: "Pragmatique", icon: <Target className="w-5 h-5" />, color: "blue" },
    { name: "Rigueur", icon: <Zap className="w-5 h-5" />, color: "green" },
    { name: "Polyvalent", icon: <Lightbulb className="w-5 h-5" />, color: "purple" },
    { name: "Curieux", icon: <Heart className="w-5 h-5" />, color: "orange" },
    { name: "Esprit d'équipe", icon: <Users className="w-5 h-5" />, color: "red" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
      red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Langues */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Langues
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{lang.flag}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {lang.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {lang.level}
                        </p>
                      </div>
                    </div>
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Soft Skills
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`${getColorClasses(skill.color)} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-center space-x-3">
                    {skill.icon}
                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
