# Configuration Email - Formulaire Démo

## Variables d'environnement requises

Configurez ces variables sur Vercel (Settings > Environment Variables) :

| Variable           | Valeur                    | Description                        |
|--------------------|---------------------------|------------------------------------|
| `IONOS_SMTP_HOST`  | `smtp.ionos.fr`           | Serveur SMTP IONOS                 |
| `IONOS_SMTP_PORT`  | `587`                     | Port SMTP (STARTTLS)               |
| `IONOS_SMTP_USER`  | `support@proviabase.fr`   | Adresse email SMTP                 |
| `IONOS_SMTP_PASS`  | `votre_mot_de_passe`      | Mot de passe email IONOS           |
| `DEMO_TO_EMAIL`    | `support@proviabase.fr`   | Adresse de réception des demandes  |

## Configuration sur Vercel

1. Aller sur https://vercel.com/dashboard
2. Sélectionner le projet
3. **Settings** > **Environment Variables**
4. Ajouter chaque variable ci-dessus
5. Sélectionner les environnements : **Production**, **Preview**, **Development**
6. Sauvegarder et redéployer

## Test en local

### 1. Créer le fichier `.env.local`

```bash
# À la racine du projet
IONOS_SMTP_HOST=smtp.ionos.fr
IONOS_SMTP_PORT=587
IONOS_SMTP_USER=support@proviabase.fr
IONOS_SMTP_PASS=votre_mot_de_passe
DEMO_TO_EMAIL=support@proviabase.fr
```

### 2. Installer Vercel CLI

```bash
npm i -g vercel
```

### 3. Lancer en mode dev avec l'API serverless

```bash
vercel dev
```

Cela lance le frontend Vite + les fonctions serverless `/api/*`.

### 4. Tester le formulaire

1. Ouvrir http://localhost:3000/demo
2. Remplir le formulaire
3. Vérifier la réception de l'email

## Protection anti-spam

Le formulaire inclut :

- **Honeypot** : Champ invisible "website" qui piège les bots
- **Rate limiting** : 5 requêtes max par IP toutes les 10 minutes

## Structure des fichiers

```
/api
  └── demo.ts          # Fonction serverless (POST /api/demo)
/src/pages
  └── Demo.tsx         # Formulaire frontend
vercel.json            # Configuration routing Vercel
```

## Dépannage

### L'email n'arrive pas

1. Vérifier les logs sur Vercel (Functions tab)
2. S'assurer que le mot de passe SMTP est correct
3. Vérifier que le port 587 n'est pas bloqué

### Erreur 429 (Too Many Requests)

Le rate limiting est actif. Attendre 10 minutes ou redéployer pour reset.

### Erreur 500

Vérifier les variables d'environnement et les credentials SMTP.
