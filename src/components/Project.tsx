import { Github, ExternalLink, Code, Database, Shield, Smartphone, Users, ShoppingCart, Settings, TestTube, FileText } from 'lucide-react';

const Project = () => {
  return (
    <section id="projet" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mes réalisations techniques et mes compétences en développement full-stack
          </p>
        </div>

        {/* Projet Marché-Alizé */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          {/* Header du projet */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Marché-Alizé</h3>
                  <p className="text-blue-100 text-lg">E-commerce de téléphones portables</p>
                </div>
              </div>
              <a
                href="https://github.com/alassanegu/PhoneStore_Ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                J'ai conçu et développé une application e-commerce complète de vente de téléphones, 
                démontrant mes compétences en développement full-stack avec des technologies modernes.
              </p>
            </div>

            {/* Technologies utilisées */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="mr-3 text-blue-600" size={24} />
                Technologies utilisées
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Shield className="text-green-600 dark:text-green-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Backend</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">NestJS avec TypeScript, authentification JWT, gestion des images</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Smartphone className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Frontend</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Angular avec une interface moderne et responsive</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Database className="text-purple-600 dark:text-purple-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Base de données</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Gestion des entités (utilisateurs, produits, commandes, panier)</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Settings className="text-orange-600 dark:text-orange-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Architecture</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">API RESTful avec validation des données et gestion d'erreurs</p>
                </div>
              </div>
            </div>

            {/* Fonctionnalités */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <ShoppingCart className="mr-3 text-purple-600" size={24} />
                Fonctionnalités implémentées
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Système d'authentification complet (inscription, connexion, gestion des rôles)" },
                  { icon: Smartphone, text: "Gestion des produits avec upload d'images multiples" },
                  { icon: ShoppingCart, text: "Panier d'achat dynamique et gestion des commandes" },
                  { icon: Settings, text: "Interface d'administration pour la gestion des catégories" },
                  { icon: TestTube, text: "Tests automatisés et documentation technique" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 dark:text-gray-300">{feature.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compétences démontrées */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="mr-3 text-green-600" size={24} />
                Compétences démontrées
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Développer des applications full-stack robustes",
                  "Implémenter des architectures modulaires et maintenables",
                  "Gérer l'upload et le traitement d'images",
                  "Créer des interfaces utilisateur modernes et intuitives",
                  "Suivre les bonnes pratiques de développement (Git, tests, documentation)"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton d'action */}
            <div className="text-center">
              <a
                href="https://github.com/alassanegu/PhoneStore_Ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <Github className="mr-3" size={20} />
                Voir le projet sur GitHub
                <ExternalLink className="ml-3" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;