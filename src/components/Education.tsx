import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master Informatique (IWOCS)",
      school: "Université Le Havre Normandie",
      period: "2022 – 2024",
      location: "Le Havre",
      description: "Ingénierie Web, Objets Communicants et Systèmes Complexes",
      mention: "Mention Assez Bien"
    },
    {
      degree: "Licence Informatique",
      school: "Université Le Havre Normandie",
      period: "2018 – 2020",
      location: "Le Havre",
      description: "Formation complète en informatique et développement",
      mention: "Mention Assez Bien"
    },
    {
      degree: "L1 & L2 Informatique",
      school: "Université Cheikh Anta Diop Dakar",
      period: "2016 – 2018",
      location: "Dakar",
      description: "Fondamentaux de l'informatique et de la programmation",
      mention: "Mention Bien"
    }
  ];

  return (
    <section id="formation" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.school}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {edu.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        {edu.mention && (
                          <div className="flex items-center space-x-1">
                            <Award size={16} />
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              {edu.mention}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;