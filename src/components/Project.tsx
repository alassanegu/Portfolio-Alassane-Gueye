import { Github, ExternalLink, Code, Database, Shield, Smartphone, Users, ShoppingCart, Settings, TestTube, FileText, GraduationCap, Globe, Mail, CheckCircle, Server, Cloud, ClipboardList, Zap, Rocket, Megaphone, Palette } from 'lucide-react';

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

        {/* Agence AGCOM */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          {/* Header de l’agence */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">🚀 Agence AGCOM</h3>
                  <p className="text-gray-200 text-sm">Rôle : Fondateur / Développeur Full Stack</p>
                </div>
              </div>
              <a
                href="https://agenceagcom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 px-4 py-3 rounded-full transition-colors duration-200 inline-flex items-center"
              >
                <ExternalLink className="w-6 h-6 mr-2" />
                Visiter le site
              </a>
            </div>
          </div>

          <div className="p-8">
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center">
              <img src="/assets/agence-agcom-logo.svg" alt="Logo Agence AGCOM" className="h-16 w-auto" />
            </div>

            {/* Présentation */}
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                AGCOM est une agence digitale spécialisée dans le développement web, la communication et le marketing digital.
                Nous accompagnons les entreprises, startups et institutions dans la création de solutions numériques modernes et efficaces.
              </p>
            </div>

            {/* Services proposés */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Megaphone className="mr-3 text-blue-600" size={24} />
                Services proposés
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Code, text: "Développement Web : sites vitrines, applications web, plateformes interactives." },
                  { icon: Smartphone, text: "Applications mobiles : conception d’apps Android/iOS." },
                  { icon: Megaphone, text: "Marketing digital : campagnes publicitaires, SEO, réseaux sociaux." },
                  { icon: Palette, text: "Branding & Design : identité visuelle, UI/UX design." }
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 dark:text-gray-300">{service.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Réalisations phares */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="mr-3 text-green-600" size={24} />
                Réalisations phares
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <GraduationCap className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Campus France Checker – Application web pour vérifier l’éligibilité des étudiants à la procédure Campus France Sénégal.
                  </p>
                </div>
              </div>
            </div>

            {/* Objectif */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="mr-3 text-indigo-600" size={24} />
                Objectif
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Accompagner les étudiants, entreprises et institutions dans leur transformation digitale, avec des solutions sur mesure adaptées au marché sénégalais et africain.
              </p>
            </div>

            {/* Bouton de contact */}
            <div className="text-center">
              <a
                href="https://agenceagcom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full hover:from-black hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <ExternalLink className="mr-3" size={20} />
                Découvrir l’agence
              </a>
            </div>
          </div>
        </div>

        {/* Projet Fayyid Consulting */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          {/* Header du projet */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Fayyid Consulting</h3>
                  <p className="text-emerald-100 text-lg">Projet Freelance — Site vitrine & application web (2025)</p>
                </div>
              </div>
              <a
                href="https://fayyidconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 px-4 py-3 rounded-full transition-colors duration-200 inline-flex items-center"
              >
                <ExternalLink className="w-6 h-6 mr-2" />
                Visiter le site
              </a>
            </div>
          </div>

          <div className="p-8">
            {/* Aperçu visuel */}
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                <img src="demo fayyid.png" alt="Démonstration Fayyid Consulting" className="w-full h-auto" />
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Conception et développement complet du site avec React (Vite) & TailwindCSS. Intégration d’une base de données Supabase (PostgreSQL) avec gestion sécurisée des utilisateurs (authentification email/password, RLS).
                Mise en place d’un formulaire de préinscription avec upload de documents. Création d’un espace candidat (suivi de dossier) et d’un espace admin (gestion CRUD des inscriptions et articles de blog).
                Ajout de fonctionnalités avancées : génération PDF avec jsPDF, animations fluides avec Framer Motion, intégration WhatsApp & EmailJS pour le support, SEO optimisé avec React Helmet Async. Déploiement en production avec configuration d’environnement sécurisée.
              </p>
            </div>

            {/* Technologies principales */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="mr-3 text-emerald-600" size={24} />
                Technologies principales
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Smartphone className="text-emerald-600 dark:text-emerald-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Frontend</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">React (Vite), TailwindCSS, Radix UI, Lucide React</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Database className="text-emerald-600 dark:text-emerald-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Base de données</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Supabase (PostgreSQL, Auth, Storage)</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Shield className="text-emerald-600 dark:text-emerald-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Sécurité</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">RLS, gestion des rôles, bonnes pratiques</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Code className="text-emerald-600 dark:text-emerald-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Librairies</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Framer Motion, jsPDF, EmailJS, React Helmet Async</p>
                </div>
              </div>
            </div>

            {/* Fonctionnalités implémentées */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <ClipboardList className="mr-3 text-emerald-600" size={24} />
                Fonctionnalités implémentées
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: ClipboardList, text: "Formulaire de préinscription avec upload de documents" },
                  { icon: Users, text: "Espace candidat (suivi de dossier) & espace admin (CRUD inscriptions, blog)" },
                  { icon: FileText, text: "Génération de PDF personnalisés avec jsPDF" },
                  { icon: Zap, text: "Animations fluides et micro-interactions (Framer Motion)" },
                  { icon: Mail, text: "Intégration EmailJS pour le support" },
                  { icon: Smartphone, text: "Intégration WhatsApp et interface responsive" },
                  { icon: Globe, text: "SEO optimisé avec React Helmet Async" },
                  { icon: Cloud, text: "Déploiement en production avec env sécurisée" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 dark:text-gray-300">{feature.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bouton d'action */}
            <div className="text-center">
              <a
                href="https://fayyidconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <ExternalLink className="mr-3" size={20} />
                Visiter le site
              </a>
            </div>
          </div>
        </div>

        {/* Projet Campus France Checker */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          {/* Header du projet */}
          <div className="bg-gradient-to-r from-sky-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Campus France Checker</h3>
                  <p className="text-blue-100 text-lg">Éligibilité Campus France Sénégal 2025-2026</p>
                </div>
              </div>
              <a
                href="https://campus-france-checker.agenceagcom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 px-4 py-3 rounded-full transition-colors duration-200 inline-flex items-center"
              >
                <ExternalLink className="w-6 h-6 mr-2" />
                Visiter le site
              </a>
            </div>
          </div>

          <div className="p-8">
            {/* Aperçu visuel */}
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                <img src="/cfc demo.png" alt="Démonstration Campus France Checker" className="w-full h-auto" />
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Application web interactive permettant aux étudiants sénégalais de vérifier leur éligibilité à la procédure Campus France en fonction des critères d’inéligibilité officiels (rentrée 2025-2026).
              </p>
            </div>

            {/* Fonctionnalités clés */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <ClipboardList className="mr-3 text-sky-600" size={24} />
                Fonctionnalités clés
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: ClipboardList, text: "Questionnaire intelligent (multi-étapes : Licence / Master)" },
                  { icon: CheckCircle, text: "Vérification automatique selon les règles officielles (bac, redoublements, dettes, accréditation ANAQSUP/CAMES, etc.)" },
                  { icon: Zap, text: "Résultats instantanés : éligible / non éligible avec explications" },
                  { icon: FileText, text: "Export PDF personnalisé pour l’utilisateur" },
                  { icon: Smartphone, text: "Interface responsive (mobile & desktop)" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="text-sky-600 dark:text-sky-400 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 dark:text-gray-300">{feature.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stack technique */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="mr-3 text-indigo-600" size={24} />
                Stack technique
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Smartphone className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Frontend</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">React + TailwindCSS</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Server className="text-green-600 dark:text-green-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Backend</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Node.js / Express (API d’éligibilité + envoi d’emails)</p>
                </div>
                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Cloud className="text-violet-600 dark:text-violet-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Hébergement</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Netlify (frontend) + backend serverless</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Globe className="text-amber-600 dark:text-amber-400 mr-2" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">Extras</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Nodemailer pour le contact, SEO optimisé avec données structurées schema.org</p>
                </div>
              </div>
            </div>

            {/* Objectif */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="mr-3 text-indigo-600" size={24} />
                Objectif
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Faciliter la compréhension des critères Campus France, réduire les erreurs de candidature et accompagner les étudiants dans leur projet d’études en France.
              </p>
            </div>

            {/* Bouton d'action */}
            <div className="text-center">
              <a
                href="https://campus-france-checker.agenceagcom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-full hover:from-sky-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <ExternalLink className="mr-3" size={20} />
                Visiter le site
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;