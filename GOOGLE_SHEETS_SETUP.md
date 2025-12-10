# Configuration Google Sheets pour la collecte des emails

Ce guide vous explique comment configurer Google Sheets pour collecter les adresses emails des utilisateurs qui s'inscrivent via le formulaire du Hero.

## Étape 1 : Créer un Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille de calcul
3. Nommez-la "TakeCare - Inscriptions" (ou autre nom de votre choix)
4. Dans la première ligne, ajoutez les en-têtes :
   - Colonne A : `Email`
   - Colonne B : `Date d'inscription`
5. Notez l'ID de votre feuille (dans l'URL) :
   ```
   https://docs.google.com/spreadsheets/d/VOTRE_SHEET_ID/edit
   ```

## Étape 2 : Créer un Service Account Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API Google Sheets :
   - Allez dans "APIs & Services" > "Enable APIs and Services"
   - Recherchez "Google Sheets API"
   - Cliquez sur "Enable"

4. Créez un Service Account :
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "Service Account"
   - Donnez un nom (ex: "takecare-sheets-access")
   - Cliquez sur "Create and Continue"
   - Sélectionnez le rôle "Editor"
   - Cliquez sur "Done"

5. Créez une clé pour le Service Account :
   - Cliquez sur le service account que vous venez de créer
   - Allez dans l'onglet "Keys"
   - Cliquez sur "Add Key" > "Create new key"
   - Choisissez le format JSON
   - Téléchargez le fichier JSON

## Étape 3 : Partager le Google Sheet avec le Service Account

1. Ouvrez votre Google Sheet
2. Cliquez sur "Partager" en haut à droite
3. Copiez l'email du service account depuis le fichier JSON téléchargé (champ `client_email`)
   - Il ressemble à : `nom-service@projet.iam.gserviceaccount.com`
4. Collez cet email dans le champ de partage
5. Donnez les droits "Éditeur"
6. Décochez "Notifier les personnes"
7. Cliquez sur "Partager"

## Étape 4 : Configurer les variables d'environnement

Ouvrez le fichier JSON téléchargé et ajoutez ces valeurs dans votre fichier `.env.local` :

```env
GOOGLE_CLIENT_EMAIL=le-client-email-du-json
GOOGLE_PRIVATE_KEY="la-private-key-du-json-avec-les-retours-a-la-ligne"
GOOGLE_SHEET_ID=votre-sheet-id-de-l-url
```

**Important pour GOOGLE_PRIVATE_KEY :**
- Copiez toute la clé privée du fichier JSON (y compris `-----BEGIN PRIVATE KEY-----` et `-----END PRIVATE KEY-----`)
- Assurez-vous qu'elle est entre guillemets doubles
- Les `\n` doivent être conservés tels quels

Exemple :
```env
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhki...\n-----END PRIVATE KEY-----\n"
```

## Étape 5 : Tester

1. Redémarrez votre serveur Next.js
2. Allez sur votre page d'accueil
3. Entrez une adresse email dans le formulaire du Hero
4. Cliquez sur "Join our beta"
5. Vérifiez que l'email apparaît dans votre Google Sheet avec la date et l'heure

## Fonctionnalités

- ✅ Enregistre l'email dans la colonne A
- ✅ Enregistre la date et l'heure dans la colonne B
- ✅ Vérifie les doublons (un email ne peut être inscrit qu'une fois)
- ✅ Validation de l'email côté serveur
- ✅ Messages de succès/erreur pour l'utilisateur

## Dépannage

**Erreur "Permission denied"** :
- Vérifiez que vous avez bien partagé le Google Sheet avec l'email du service account
- Vérifiez que le service account a les droits "Éditeur"

**Erreur "Invalid credentials"** :
- Vérifiez que `GOOGLE_PRIVATE_KEY` est correctement formatée avec les `\n`
- Assurez-vous que la clé est entre guillemets doubles dans `.env.local`

**Erreur "Spreadsheet not found"** :
- Vérifiez que `GOOGLE_SHEET_ID` correspond bien à l'ID dans l'URL de votre feuille

## Sécurité

⚠️ **Important** :
- Ne commitez JAMAIS le fichier JSON contenant les credentials
- Ne commitez JAMAIS le fichier `.env.local`
- Le fichier `.gitignore` est déjà configuré pour ignorer ces fichiers
