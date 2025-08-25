import React from 'react';
import { Heart, Code, Palette, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section À propos de ce projet */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-6">
            À propos de ce portfolio
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Technologies</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React + TypeScript, Tailwind CSS, Vite, EmailJS pour un développement moderne et performant
              </p>
            </div>
            <div className="text-center">
              <Palette className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Design</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interface responsive avec mode sombre, animations fluides et UX optimisée pour tous les appareils
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Déploiement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hébergé sur Netlify avec déploiement automatique depuis GitHub et formulaire de contact fonctionnel
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-gray-800 dark:text-white flex items-center justify-center space-x-2">
            <span>© 2025 Alassane Gueye – Tous droits réservés</span>
            <Heart className="w-4 h-4 text-red-500" />
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Développé avec passion et expertise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;