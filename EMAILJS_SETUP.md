# Configuration EmailJS pour le Portfolio

Ce guide vous explique comment configurer EmailJS pour recevoir les messages du formulaire de contact à l'adresse `gueyealassane86@gmail.com`.

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer le service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte Gmail
5. Notez le **Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Sujet: Nouveau message depuis votre portfolio - {{from_name}}

Bonjour Alassane,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé automatiquement depuis votre portfolio.
```

4. Dans les paramètres du template :
   - **To Email**: `gueyealassane86@gmail.com`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`

5. Testez le template et notez le **Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxxxx`)

### 5. Mettre à jour le code
Dans le fichier `src/components/Contact.tsx`, remplacez :

```typescript
const serviceId = 'service_portfolio'; // Remplacez par votre Service ID
const templateId = 'template_contact'; // Remplacez par votre Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Remplacez par votre Public Key
```

Par vos vraies valeurs :

```typescript
const serviceId = 'service_xxxxxxx'; // Votre Service ID
const templateId = 'template_xxxxxxx'; // Votre Template ID
const publicKey = 'xxxxxxxxxxxxxxx'; // Votre Public Key
```

## Sécurité

- La clé publique peut être exposée côté client (c'est normal)
- EmailJS limite automatiquement les envois pour éviter le spam
- Vous pouvez configurer des limites supplémentaires dans le dashboard

## Test

1. Redémarrez votre serveur de développement
2. Remplissez le formulaire de contact
3. Vérifiez votre boîte mail `gueyealassane86@gmail.com`

## Dépannage

- Vérifiez que tous les IDs sont corrects
- Assurez-vous que le service email est bien connecté
- Consultez la console du navigateur pour les erreurs
- Vérifiez les quotas dans le dashboard EmailJS

## Limites du plan gratuit

- 200 emails/mois
- Parfait pour un portfolio personnel
- Possibilité d'upgrade si nécessaire