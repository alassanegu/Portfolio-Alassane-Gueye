# Portfolio Moderne d'Alassane Gueye

## 📋 Description

Portfolio personnel moderne et responsive développé avec React, TypeScript et Tailwind CSS. Ce site présente mes compétences, expériences professionnelles, projets et formations en tant que développeur Full-Stack.

## ✨ Fonctionnalités

- **Design moderne et responsive** - Compatible avec tous les appareils
- **Mode sombre/clair** - Basculement entre les thèmes
- **Navigation fluide** - Défilement smooth entre les sections
- **Animations CSS** - Transitions et effets visuels élégants
- **Téléchargement CV** - Accès direct au CV en PDF
- **Section projets** - Présentation détaillée des réalisations
- **Formulaire de contact** - Interface de contact intégrée

## 🛠️ Technologies Utilisées

### Frontend
- **React 18.3.1** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript 5.5.3** - Typage statique pour JavaScript
- **Tailwind CSS 3.4.1** - Framework CSS utilitaire
- **Lucide React 0.344.0** - Icônes modernes et élégantes

### Outils de Développement
- **Vite 5.4.2** - Outil de build rapide
- **ESLint 9.9.1** - Linter pour la qualité du code
- **PostCSS 8.4.35** - Processeur CSS
- **Autoprefixer 10.4.18** - Préfixes CSS automatiques

## 📁 Structure du Projet

```
Portfolio moderne d'Alassane Gueye/
├── public/
│   └── CV_FullStack_Alassane_Gueye.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx          # Section À propos
│   │   ├── Contact.tsx        # Formulaire de contact
│   │   ├── Education.tsx      # Formation académique
│   │   ├── Experience.tsx     # Expériences professionnelles
│   │   ├── Footer.tsx         # Pied de page
│   │   ├── Hero.tsx           # Section d'accueil
│   │   ├── Interests.tsx      # Centres d'intérêt
│   │   ├── Languages.tsx      # Langues parlées
│   │   ├── Navigation.tsx     # Barre de navigation
│   │   ├── Project.tsx        # Section projets
│   │   └── Skills.tsx         # Compétences techniques
│   ├── App.tsx                # Composant principal
│   ├── main.tsx               # Point d'entrée
│   ├── index.css              # Styles globaux
│   └── vite-env.d.ts          # Types Vite
├── index.html                 # Template HTML
├── package.json               # Dépendances et scripts
├── tailwind.config.js         # Configuration Tailwind
├── vite.config.ts             # Configuration Vite
└── README.md                  # Documentation
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio-alassane-gueye.git
   cd "Portfolio moderne d'Alassane Gueye"
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Configurer EmailJS (optionnel)**
   ```bash
   # Copier le fichier d'exemple des variables d'environnement
   cp .env.example .env
   ```
   Puis éditer le fichier `.env` avec vos vraies clés EmailJS (voir section Configuration EmailJS)

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📧 Configuration EmailJS

Pour activer la fonctionnalité d'envoi d'emails du formulaire de contact :

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Configurez votre service email (Gmail recommandé)

### 2. Configurer les templates
1. Créez un template pour recevoir les messages
2. Créez un template de réponse automatique
3. Consultez `EMAILJS_SETUP.md` et `EMAIL_AUTO_REPLY_TEMPLATE.md` pour les détails

### 3. Variables d'environnement
1. Copiez `.env.example` vers `.env`
2. Remplacez les valeurs par vos vraies clés EmailJS :
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CONTACT_EMAIL=your_email@example.com
   ```
3. Redémarrez le serveur de développement

### 4. Test
- Remplissez le formulaire de contact
- Vérifiez la réception du message
- Vérifiez que l'expéditeur reçoit la confirmation automatique

## 📜 Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie la qualité du code avec ESLint

## 🎨 Configuration Tailwind

Le projet utilise une configuration Tailwind personnalisée avec :

- **Mode sombre** activé via la classe `dark`
- **Polices personnalisées** - Inter comme police principale
- **Animations personnalisées** - fadeIn, slideUp, bounce-slow
- **Couleurs personnalisées** - Palette primary et secondary
- **Responsive design** - Breakpoints optimisés

## 📱 Sections du Portfolio

1. **Accueil (Hero)** - Présentation principale avec photo et titre
2. **À propos** - Description personnelle et objectifs
3. **Expérience** - Parcours professionnel détaillé
4. **Projets** - Présentation du projet Marché-Alizé et autres réalisations
5. **Compétences** - Technologies maîtrisées avec niveaux
6. **Formation** - Parcours académique et certifications
7. **Langues** - Langues parlées avec niveaux
8. **Centres d'intérêt** - Hobbies et passions
9. **Contact** - Formulaire et informations de contact

## 🌟 Projets Présentés

### Marché-Alizé - E-commerce de téléphones
- **Backend** : NestJS, TypeScript, JWT
- **Frontend** : Angular, interface responsive
- **Base de données** : Gestion complète des entités
- **Fonctionnalités** : Authentification, gestion produits, panier, commandes
- **Repository** : [GitHub - PhoneStore_Ecommerce](https://github.com/alassanegu/PhoneStore_Ecommerce)

## 🔧 Personnalisation

Pour adapter ce portfolio à vos besoins :

1. **Modifier les informations personnelles** dans les composants
2. **Ajouter vos projets** dans `Project.tsx`
3. **Mettre à jour le CV** dans le dossier `public/`
4. **Personnaliser les couleurs** dans `tailwind.config.js`
5. **Ajouter de nouvelles sections** selon vos besoins

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

## 👤 Auteur

**Alassane Gueye**
- Développeur Full-Stack
- Spécialisé en React, Angular, NestJS
- Passionné par les technologies web modernes

---

*Portfolio développé avec ❤️ en utilisant React, TypeScript et Tailwind CSS*