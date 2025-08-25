# Guide de Déploiement sur Netlify

Ce guide vous explique comment déployer votre portfolio sur Netlify de manière automatique.

## Prérequis

- ✅ Repository GitHub configuré : `https://github.com/alassanegu/Portfolio-Alassane-Gueye.git`
- ✅ Compte EmailJS configuré
- ✅ Fichier `netlify.toml` créé

## Étapes de Déploiement

### 1. Créer un compte Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur "Sign up" ou "Get started for free"
3. Connectez-vous avec votre compte GitHub

### 2. Déployer depuis GitHub

1. **Dans le dashboard Netlify** :
   - Cliquez sur "New site from Git"
   - Sélectionnez "GitHub"
   - Autorisez Netlify à accéder à vos repositories

2. **Sélectionner le repository** :
   - Choisissez `Portfolio-Alassane-Gueye`
   - Branche : `main`

3. **Configuration de build** :
   - Build command : `npm run build` (détecté automatiquement)
   - Publish directory : `dist` (détecté automatiquement)
   - Cliquez sur "Deploy site"

### 3. Configurer les Variables d'Environnement

⚠️ **IMPORTANT** : Vous devez configurer les variables d'environnement EmailJS dans Netlify.

1. **Dans votre site Netlify** :
   - Allez dans "Site settings" > "Environment variables"
   - Cliquez sur "Add variable"

2. **Ajoutez ces variables** :
   ```
   VITE_EMAILJS_SERVICE_ID = votre_service_id
   VITE_EMAILJS_TEMPLATE_ID = votre_template_id
   VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID = votre_auto_reply_template_id
   VITE_EMAILJS_PUBLIC_KEY = votre_cle_publique
   VITE_CONTACT_EMAIL = gueyealassane86@gmail.com
   ```

3. **Redéployer** :
   - Allez dans "Deploys"
   - Cliquez sur "Trigger deploy" > "Deploy site"

### 4. Configuration du Domaine (Optionnel)

1. **Domaine personnalisé** :
   - Dans "Site settings" > "Domain management"
   - Cliquez sur "Add custom domain"
   - Suivez les instructions pour configurer votre DNS

2. **HTTPS automatique** :
   - Netlify active automatiquement HTTPS
   - Certificat SSL gratuit via Let's Encrypt

## Fonctionnalités Netlify Configurées

### ✅ Build Automatique
- **Déclenchement** : À chaque push sur la branche `main`
- **Commande** : `npm run build`
- **Dossier de publication** : `dist`

### ✅ Redirections SPA
- Toutes les routes redirigent vers `index.html`
- Support complet du routing React

### ✅ Headers de Sécurité
- Protection XSS
- Protection contre le clickjacking
- Politique de référent sécurisée

### ✅ Cache Optimisé
- Assets statiques mis en cache 1 an
- Performance optimale

## Déploiement Réussi ✅

Après le déploiement, votre site sera accessible via :
- **URL Netlify** : `https://nom-aleatoire.netlify.app`
- **Domaine personnalisé** : Si configuré

## Maintenance

### Mises à jour automatiques
- Chaque `git push` sur `main` déclenche un nouveau déploiement
- Temps de build : ~2-3 minutes
- Déploiement instantané après le build

### Monitoring
- Dashboard Netlify pour suivre les déploiements
- Logs de build détaillés
- Analytics de trafic inclus

## Dépannage

### Erreur de build
1. Vérifiez les logs dans "Deploys"
2. Assurez-vous que `npm run build` fonctionne localement
3. Vérifiez les variables d'environnement

### Formulaire de contact ne fonctionne pas
1. Vérifiez les variables d'environnement EmailJS
2. Testez la configuration EmailJS localement
3. Vérifiez les logs de la console du navigateur

### Erreur 404 sur les routes
- Le fichier `netlify.toml` gère les redirections SPA
- Vérifiez que le fichier est bien présent dans le repository

## Support

- **Documentation Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **Support EmailJS** : [emailjs.com/docs](https://www.emailjs.com/docs/)
- **Community Netlify** : [community.netlify.com](https://community.netlify.com)

---

🚀 **Votre portfolio sera en ligne en quelques minutes !**