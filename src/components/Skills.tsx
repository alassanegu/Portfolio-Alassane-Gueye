import React from 'react';
import { Code, Database, Smartphone, Cloud, Brain, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Développement Web",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "PHP", "JEE", "Symfony", "React", "Node.js", "Angular", ".NET Framework", "ASP.NET", "Razor", "Lagoon"],
      color: "blue"
    },
    {
      title: "DevOps & Collaboration",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["GitHub", "Docker", "Power Apps", "Power Automate", "Power BI", "SharePoint"],
      color: "green"
    },
    {
      title: "Langages de programmation",
      icon: <Settings className="w-8 h-8" />,
      skills: ["C++", "C", "Java", "Python", "Scala"],
      color: "purple"
    },
    {
      title: "Développement Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["Android Studio", "React Native", "Flutter"],
      color: "orange"
    },
    {
      title: "Bases de données",
      icon: <Database className="w-8 h-8" />,
      skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      color: "red"
    },
    {
      title: "Technologies avancées",
      icon: <Brain className="w-8 h-8" />,
      skills: ["SUMO", "JSON", "XML", "IA et Machine Learning"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      orange: "from-orange-500 to-orange-600 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
      red: "from-red-500 to-red-600 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="competences" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} text-white mb-6 shadow-lg`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(category.color).split('from-')[1]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;