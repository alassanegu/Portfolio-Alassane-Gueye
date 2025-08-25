# Template de Réponse Automatique EmailJS

Ce fichier contient le template de réponse automatique à configurer dans EmailJS pour confirmer la réception des messages du formulaire de contact.

## Configuration dans EmailJS

### 1. Créer un second template
1. Dans EmailJS, allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Nommez-le "Auto Reply Template" ou "template_auto_reply"

### 2. Template de réponse automatique

**Destinataire** : `{{from_email}}` (l'email de la personne qui a envoyé le message)

**Sujet** : `Merci pour votre message - Alassane Gueye`

**Corps du message** :

```
Bonjour {{from_name}},

Merci beaucoup pour votre message ! 

J'ai bien reçu votre demande et je vous répondrai dans les plus brefs délais, généralement sous 24-48 heures.

Voici un récapitulatif de votre message :
---
Nom : {{from_name}}
Email : {{from_email}}
Message : {{message}}
---

En attendant, n'hésitez pas à consulter mon portfolio pour découvrir mes projets et compétences :
🌐 Portfolio : [Votre URL de portfolio]
💼 LinkedIn : [Votre profil LinkedIn]
🐙 GitHub : [Votre profil GitHub]

À très bientôt !

Cordialement,
Alassane Gueye
Développeur Full Stack

---
Ceci est un message automatique. Merci de ne pas répondre directement à cet email.
```

### 3. Configuration du template
- **To Email** : `{{from_email}}`
- **From Name** : `Alassane Gueye`
- **From Email** : `gueyealassane86@gmail.com`
- **Reply To** : `gueyealassane86@gmail.com`

### 4. Modification du code Contact.tsx

Pour envoyer automatiquement une réponse, ajoutez ce code après l'envoi du premier email :

```typescript
// Envoi de la réponse automatique
const autoReplyTemplateId = 'template_auto_reply'; // Remplacez par votre Template ID de réponse automatique

const autoReplyParams = {
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message
};

await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
```

### 5. Code complet pour Contact.tsx

```typescript
try {
  // Envoi du message principal
  await emailjs.send(serviceId, templateId, templateParams, publicKey);
  
  // Envoi de la réponse automatique
  const autoReplyTemplateId = 'template_auto_reply';
  const autoReplyParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  };
  
  await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
  
  setStatus('success');
  setFormData({ name: '', email: '', message: '' });
} catch (error) {
  console.error('Erreur lors de l\'envoi:', error);
  setStatus('error');
}
```

## Avantages de la réponse automatique

✅ **Confirmation immédiate** : La personne sait que son message a été reçu
✅ **Professionnalisme** : Montre votre sérieux et votre organisation
✅ **Réassurance** : Indique un délai de réponse attendu
✅ **Informations supplémentaires** : Partage vos liens professionnels
✅ **Récapitulatif** : La personne a une copie de ce qu'elle a envoyé

## Personnalisation

N'oubliez pas de :
- Remplacer `[Votre URL de portfolio]` par l'URL réelle
- Ajouter vos vrais liens LinkedIn et GitHub
- Adapter le délai de réponse selon vos disponibilités
- Personnaliser le ton selon votre style

## Test

Après configuration :
1. Testez l'envoi d'un message via le formulaire
2. Vérifiez que vous recevez le message sur `gueyealassane86@gmail.com`
3. Vérifiez que l'expéditeur reçoit la réponse automatique