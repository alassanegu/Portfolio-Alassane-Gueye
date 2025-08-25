import React from 'react';
import { MapPin, Mail, Phone, Car, Linkedin} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Ingénieur en informatique, titulaire d'un Master en Ingénierie Web, Objets Communicants et Systèmes Complexes. 
              Expérience en développement d'applications web Full Stack, création de solutions Microsoft Power Platform et 
              analyse de données via SQL Server et Power BI.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionné par les nouvelles technologies et l'innovation, je m'efforce de créer des solutions efficaces 
              et user-friendly qui répondent aux besoins métier des entreprises.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Informations personnelles
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Saint-Étienne – France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <a 
                  href="mailto:gueyealassane86@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  gueyealassane86@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">06 88 95 61 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <Car className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Permis B – Mobilité nationale</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-blue-600 dark:text-blue-400" size={20} />
                <a 
                  href="https://www.linkedin.com/in/alassane-gueye-2a633b184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;