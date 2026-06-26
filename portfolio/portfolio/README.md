# 🎮 Portfolio — Développeur Gameplay

Site portfolio statique, hébergé sur GitHub Pages.

---

## 📁 Structure des fichiers

```
portfolio/
├── index.html           ← Structure de la page (modifier rarement)
├── style.css            ← Couleurs et design (modifier si tu veux changer l'apparence)
│
├── js/
│   ├── projects.js      ← ⭐ TON FICHIER PRINCIPAL — tout modifier ici
│   └── main.js          ← Logique du site (ne pas toucher)
│
├── img/
│   └── projects/
│       ├── nom-projet-1/   ← Dossier par projet
│       │   ├── screen1.png
│       │   └── screen2.png
│       └── nom-projet-2/
│           └── screen1.png
│
├── cv.pdf               ← Ton CV (remplace ce fichier, garde le même nom)
└── README.md
```

---

## 🚀 Mise en ligne sur GitHub Pages (une seule fois)

1. **Crée un compte GitHub** si tu n'en as pas encore.

2. **Crée un repo** nommé exactement :
   ```
   ton-pseudo-github.github.io
   ```
   *(remplace `ton-pseudo-github` par ton vrai pseudo)*

3. **Upload tes fichiers** dans ce repo (bouton "Add file" → "Upload files")
   ou via Git en ligne de commande :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement"
   git branch -M main
   git remote add origin https://github.com/ton-pseudo/ton-pseudo.github.io.git
   git push -u origin main
   ```

4. **Active GitHub Pages** :
   - Onglet `Settings` → `Pages` (dans le menu à gauche)
   - Source : **Deploy from a branch**
   - Branch : **main** / **(root)**
   - Clique sur Save

5. **Ton site est en ligne** à `https://ton-pseudo.github.io` en 2 à 3 minutes. ✅

---

## ➕ Ajouter un nouveau projet

Ouvre `js/projects.js` et ajoute un bloc dans le tableau `PROJECTS` :

```js
{
  id:    "mon-nouveau-jeu",        // identifiant unique, sans espaces ni accents
  title: "Mon nouveau jeu",        // titre affiché sur la carte
  tags:  ["C++", "Unreal"],        // technos (doit correspondre à TAG_COLORS)
  date:  "Mai 2025",               // date ou période
  shortDescription:
    "Une ligne ou deux visibles sur la carte.",
  fullDescription:
    "Description complète qui s'affiche dans le popup.\n\n" +
    "Tu peux faire des sauts de ligne avec \\n\\n.",
  images: [
    "img/projects/mon-nouveau-jeu/screen1.png",
    "img/projects/mon-nouveau-jeu/screen2.png",
  ],
  video:    null,   // ou "https://www.youtube.com/embed/TON_VIDEO_ID"
  github:   "https://github.com/ton-pseudo/mon-repo",
  featured: false,
},
```

Ensuite :
1. Crée le dossier `img/projects/mon-nouveau-jeu/`
2. Ajoute tes screenshots dedans
3. Commit + push → le site se met à jour automatiquement

---

## 🎬 Ajouter une vidéo YouTube

1. Va sur la vidéo YouTube de ton projet
2. Clic sur "Partager" → "Intégrer"
3. Dans le code fourni, copie juste l'URL du `src` de la balise `<iframe>`
4. Elle ressemble à : `https://www.youtube.com/embed/XXXXXXXXXX`
5. Colle-la dans le champ `video` de ton projet :
   ```js
   video: "https://www.youtube.com/embed/XXXXXXXXXX",
   ```

---

## 🎨 Personnaliser le design

Tout se fait dans `style.css`, en cherchant la variable à changer :

| Je veux changer...      | Variable à modifier dans `:root {}` |
|------------------------|-------------------------------------|
| La couleur violette    | `--accent: #7C3AED`                |
| Le fond des sections   | `--bg: #F8FAFC`                    |
| La couleur du texte    | `--text-primary: #0F172A`          |

Exemple pour passer à un accent bleu :
```css
--accent:       #2563EB;
--accent-hover: #1D4ED8;
--accent-bg:    #EFF6FF;
--accent-border:#BFDBFE;
```

---

## 📝 Changer tes infos personnelles

Tout est dans `js/projects.js`, section `SITE_CONFIG` :

```js
const SITE_CONFIG = {
  name:     "Ton Prénom NOM",
  title:    "Développeur Gameplay",
  bio:      "Ta bio courte ici...",
  email:    "ton.email@example.com",
  github:   "https://github.com/ton-pseudo",
  linkedin: "https://linkedin.com/in/ton-pseudo",
  cv:       "cv.pdf",
};
```

---

## 📸 Conseils pour les captures d'écran

- **Format recommandé** : PNG ou JPG, **rapport 16:9** (ex: 1280×720 ou 1920×1080)
- **Taille** : essaie de garder chaque image **sous 500 Ko** pour que le site charge vite
  (tu peux compresser sur [squoosh.app](https://squoosh.app) gratuitement)
- **Pour les jeux console** : prends une capture de ton terminal avec le jeu en cours

---

## 💡 Mettre à jour le site après une modification

Si tu utilises Git :
```bash
git add .
git commit -m "Ajout projet : Nom du projet"
git push
```
Le site se met à jour sur GitHub Pages dans 1 à 2 minutes.
