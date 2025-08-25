import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-800 flex items-center justify-center space-x-2">
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