import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Photo de profil */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-green-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* <span className="text-6xl font-bold text-gray-600 dark:text-gray-300">AG</span> */}
                <img
                  src="assets/Photo-CV.jpg"
                  alt="Alassane GUEYE"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Nom et titre */}
          <div className="mb-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Alassane <span className="text-blue-600 dark:text-blue-400">GUEYE</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
              Développeur Full Stack
            </h2>
          </div>

          {/* Accroche */}
          <div className="mb-8 animate-slide-up-delay">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ingénieur en informatique, spécialisé en développement Full Stack et solutions Power Platform.
            </p>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay-2">
            <a
              href="/CV_FullStack_Alassane_Gueye.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="mr-2" size={20} />
              Télécharger CV
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="mr-2" size={20} />
              Me Contacter
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;