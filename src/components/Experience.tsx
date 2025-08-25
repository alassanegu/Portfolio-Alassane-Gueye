import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Ingénieur chef de projet développeur",
      company: "Désirade",
      location: "Lyon",
      period: "Janvier 2025 – Avril 2025",
      description: "Direction de projets de développement, développement de solutions Power Platform, développement d'applications web.",
      technologies: ["Développement", "Coordination", "Power Platform", ".NET", "Lagoon", "SqlServer"]
    },
    {
      title: "Solution Owner (Alternance)",
      company: "Oril Industrie",
      location: "Bolbec",
      period: "Septembre 2023 – Septembre 2024",
      description: "Développement de solutions Power Platform, analyse des besoins métier et création d'applications web.",
      technologies: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "ASP.NET", ".NET", "WebForm", "SqlServer"]
    },
    {
      title: "Développeur Full Stack (Stage)",
      company: "Agence DBCOM",
      location: "Le Havre",
      period: "Janvier 2023 – Juin 2023",
      description: "Développement d'applications web complètes avec CMS, de la conception à la mise en production, avec une attention particulière à l'UX/UI et à la performance et la sécurité.",
      technologies: ["JavaScript", "PHP", "Joomla", "WordPress", "MySQL"]
    },
    {
      title: "Projet universitaire",
      company: "Université Le Havre Normandie",
      location: "Le Havre",
      period: "2023",
      description: "Simulation de tournées de véhicules électriques utilisant SUMO et Python pour l'optimisation des trajets.",
      technologies: ["Python", "SUMO", "Simulation", "Optimisation"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expériences professionnelles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-green-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;