# 🚀 Guide de Déploiement COFFREE.FR

## ✅ GitHub - DÉJÀ FAIT !

Votre code est maintenant sur GitHub :
- **Repository** : https://github.com/Kamalghalloussidev/coffree-fr
- **Statut** : ✅ Public et accessible

## 🌐 Déploiement Vercel - 2 Options

### Option 1 : Via le Dashboard Vercel (RECOMMANDÉ - Plus simple)

1. **Connectez-vous à Vercel**
   - Allez sur https://vercel.com
   - Connectez-vous avec votre compte GitHub

2. **Importez le repository**
   - Cliquez sur "Add New" → "Project"
   - Sélectionnez "Import Git Repository"
   - Cherchez "coffree-fr" dans la liste
   - Cliquez sur "Import"

3. **Configuration**
   - **Project Name** : coffree-fr (ou personnalisez)
   - **Framework Preset** : Other (détection automatique)
   - **Root Directory** : ./ (laisser par défaut)
   - **Build Command** : (laisser vide)
   - **Output Directory** : (laisser vide)

4. **Déployer**
   - Cliquez sur "Deploy"
   - ⏳ Attendez 30-60 secondes
   - ✅ Votre site sera en ligne !

5. **URL de production**
   - URL par défaut : `https://coffree-fr.vercel.app`
   - Vous pourrez ajouter un domaine personnalisé après

### Option 2 : Via la ligne de commande

Si vous préférez utiliser le terminal :

```bash
# Dans le dossier du projet
vercel

# Suivez les instructions :
# - Set up and deploy? → Yes
# - Which scope? → kamalghalloussidev
# - Link to existing project? → No
# - What's your project's name? → coffree-fr
# - In which directory is your code? → ./
# - Want to modify settings? → No

# Pour déployer en production
vercel --prod
```

## 📋 Après le Déploiement

### URLs disponibles
- **GitHub** : https://github.com/Kamalghalloussidev/coffree-fr
- **Vercel** : https://coffree-fr.vercel.app (après déploiement)

### Configuration du domaine personnalisé (optionnel)
1. Dans Vercel Dashboard → Settings → Domains
2. Ajoutez "coffree.fr"
3. Suivez les instructions pour configurer les DNS

### Déploiement automatique
✅ Chaque fois que vous pushez sur GitHub, Vercel redéploiera automatiquement !

## 🔄 Workflow de Développement

```bash
# Apporter des modifications
# Puis dans le terminal :

git add .
git commit -m "Description des changements"
git push origin master

# Et voilà ! Vercel déploie automatiquement 🚀
```

## 📧 Besoin d'aide ?

- Documentation Vercel : https://vercel.com/docs
- Support GitHub : https://docs.github.com

---

**Date** : 2 avril 2026  
**Statut GitHub** : ✅ Déployé  
**Statut Vercel** : ⏳ En attente de configuration
