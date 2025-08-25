# Configuration des Branches Dev et Prod sur GitHub

## 📋 Résumé de la Configuration Actuelle

✅ **Branches créées et poussées :**
- `main` : Branche principale (publique)
- `dev` : Branche de développement (publique)
- `prod` : Branche de production (dans le même repository)

## 🔧 Option 1 : Utiliser des Branches dans le Même Repository

### Configuration Actuelle
Vous avez maintenant 3 branches dans votre repository public :
- `main` : Code principal
- `dev` : Développement actif
- `prod` : Version de production

### Avantages
- ✅ Gestion simplifiée
- ✅ Historique unifié
- ✅ Pull requests entre branches
- ✅ CI/CD centralisé

### Inconvénients
- ❌ Toutes les branches sont publiques
- ❌ Pas de séparation de sécurité

## 🔒 Option 2 : Repository Séparé Privé pour Production

### Étapes pour Créer un Repository Privé pour Prod

#### 1. Créer un Nouveau Repository Privé
```bash
# Sur GitHub.com :
# 1. Cliquez sur "New repository"
# 2. Nom : "Portfolio-Alassane-Gueye-Prod"
# 3. ✅ Cochez "Private"
# 4. Cliquez "Create repository"
```

#### 2. Configurer le Remote pour Prod
```bash
# Ajouter le remote privé
git remote add prod-origin https://github.com/alassanegu/Portfolio-Alassane-Gueye-Prod.git

# Pousser la branche prod vers le repository privé
git checkout prod
git push prod-origin prod:main
```

#### 3. Supprimer la Branche Prod du Repository Public (Optionnel)
```bash
# Supprimer la branche prod du repository public
git push origin --delete prod

# Supprimer la branche locale si nécessaire
git branch -d prod
```

## 🌐 Option 3 : Repository Séparé Public pour Dev

### Étapes pour Créer un Repository Public pour Dev

#### 1. Créer un Nouveau Repository Public
```bash
# Sur GitHub.com :
# 1. Cliquez sur "New repository"
# 2. Nom : "Portfolio-Alassane-Gueye-Dev"
# 3. ❌ Laissez "Public" (par défaut)
# 4. Cliquez "Create repository"
```

#### 2. Configurer le Remote pour Dev
```bash
# Ajouter le remote public pour dev
git remote add dev-origin https://github.com/alassanegu/Portfolio-Alassane-Gueye-Dev.git

# Pousser la branche dev vers le repository public
git checkout dev
git push dev-origin dev:main
```

## 🚀 Workflow Recommandé

### Scénario A : Branches dans le Même Repository
```bash
# Développement
git checkout dev
# ... faire des modifications ...
git add .
git commit -m "Feature: nouvelle fonctionnalité"
git push origin dev

# Déploiement en production
git checkout prod
git merge dev
git push origin prod
```

### Scénario B : Repositories Séparés
```bash
# Développement (repository public)
git checkout dev
# ... faire des modifications ...
git add .
git commit -m "Feature: nouvelle fonctionnalité"
git push dev-origin dev

# Déploiement en production (repository privé)
git checkout prod
git merge dev
git push prod-origin prod:main
```

## 🔐 Configuration de Visibilité sur GitHub

### Changer la Visibilité d'un Repository
1. Allez dans **Settings** du repository
2. Scrollez vers le bas jusqu'à **Danger Zone**
3. Cliquez sur **Change repository visibility**
4. Sélectionnez **Private** ou **Public**
5. Confirmez en tapant le nom du repository

### Protection des Branches
```bash
# Dans Settings > Branches sur GitHub :
# 1. Ajouter une règle pour "prod"
# 2. ✅ Require pull request reviews
# 3. ✅ Require status checks to pass
# 4. ✅ Restrict pushes to matching branches
```

## 📊 Comparaison des Options

| Aspect | Même Repository | Repositories Séparés |
|--------|----------------|----------------------|
| **Sécurité** | Faible | Élevée |
| **Simplicité** | Élevée | Moyenne |
| **Collaboration** | Facile | Complexe |
| **CI/CD** | Simple | Double configuration |
| **Coût** | Gratuit | Gratuit (GitHub) |

## 🎯 Recommandation

**Pour un portfolio personnel :** Utilisez l'**Option 1** (branches dans le même repository)
- Plus simple à gérer
- Suffisant pour un projet personnel
- Facilite la collaboration

**Pour un projet d'entreprise :** Utilisez l'**Option 2** (repository privé pour prod)
- Sécurité renforcée
- Séparation claire des environnements
- Contrôle d'accès granulaire

## 🔄 Commandes Utiles

```bash
# Voir toutes les branches
git branch -a

# Voir les remotes configurés
git remote -v

# Changer de branche
git checkout <nom-branche>

# Créer et changer de branche
git checkout -b <nouvelle-branche>

# Fusionner une branche
git merge <branche-source>

# Pousser vers un remote spécifique
git push <remote-name> <branche>
```

---

**Note :** Votre configuration actuelle avec les branches `dev` et `prod` dans le même repository public est parfaitement fonctionnelle pour un portfolio personnel !