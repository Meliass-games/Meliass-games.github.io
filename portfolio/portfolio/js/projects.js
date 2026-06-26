// ============================================================
//  ⭐  js/projects.js — LE SEUL FICHIER QUE TU DOIS MODIFIER
//
//  Ce fichier contient toutes tes infos personnelles,
//  tes compétences et tes projets.
//
//  Pour ajouter un projet :
//    1. Copie un bloc { ... } dans PROJECTS
//    2. Remplis les champs
//    3. Ajoute tes images dans img/projects/nom-du-projet/
//    4. Commit + push → le site se met à jour tout seul
// ============================================================


// ── 1. INFOS PERSONNELLES ───────────────────────────────────
const SITE_CONFIG = {
  name:     "Prénom NOM",                         // Ton nom complet
  title:    "Développeur Gameplay",               // Ton titre pro
  bio:      "Passionné de jeux vidéo et de " +
            "systèmes, je conçois des mécaniques " +
            "de jeu depuis 2 ans — du jeu console " +
            "en C++ à l'ébauche de mon propre " +
            "moteur, en passant par Unity et " +
            "Unreal Engine.",                     // Bio courte (2-3 phrases)
  email:    "prenom.nom@email.com",               // Ton adresse email
  github:   "https://github.com/ton-pseudo",      // Ton profil GitHub
  linkedin: "https://linkedin.com/in/ton-pseudo", // Ton LinkedIn (ou "" pour masquer)
  cv:       "cv.pdf",                             // Nom de ton fichier CV
};


// ── 2. COMPÉTENCES ──────────────────────────────────────────
// Modifie cette liste selon tes technos
// level : "Avancé" | "Intermédiaire" | "Notions"
const SKILLS = [
  { name: "C++",             level: "Avancé" },
  { name: "C#",              level: "Avancé" },
  { name: "Unity",           level: "Intermédiaire" },
  { name: "Unreal Engine",   level: "Intermédiaire" },
  { name: "OpenGL",          level: "Notions" },
  { name: "Git / GitHub",    level: "Avancé" },
  { name: "Python",          level: "Notions" },
];


// ── 3. COULEURS DES TAGS ────────────────────────────────────
// Les tags apparaissent sur les cartes et dans le popup.
// Ajoute ici tes propres technos si besoin.
const TAG_COLORS = {
  "C++":          { bg: "#EEF2FF", text: "#3730A3" },
  "C#":           { bg: "#F0FDF4", text: "#166534" },
  "Unity":        { bg: "#F0F9FF", text: "#0C4A6E" },
  "Unreal":       { bg: "#FFF7ED", text: "#9A3412" },
  "OpenGL":       { bg: "#FEF2F2", text: "#991B1B" },
  "Vulkan":       { bg: "#FDF4FF", text: "#7E22CE" },
  "Console":      { bg: "#F8FAFC", text: "#475569" },
  "Moteur":       { bg: "#ECFDF5", text: "#065F46" },
  "Physique":     { bg: "#FEFCE8", text: "#854D0E" },
  "IA":           { bg: "#F0FDF4", text: "#14532D" },
  "Réseau":       { bg: "#FFF1F2", text: "#9F1239" },
  "Shader":       { bg: "#EFF6FF", text: "#1D4ED8" },
  "Gameplay":     { bg: "#FDF4FF", text: "#7E22CE" },
};


// ── 4. PROJETS ──────────────────────────────────────────────
//
// CHAMP PAR CHAMP :
//   id              → identifiant unique, sans espaces (ex: "mon-jeu")
//   title           → titre affiché sur la carte et dans le popup
//   tags            → tableau de technos (doit correspondre à TAG_COLORS)
//   date            → date ou période (ex: "Janvier 2024")
//   shortDescription→ 1-2 phrases visibles sur la carte
//   fullDescription → description complète dans le popup (peut être longue)
//   images          → tableau de chemins vers tes images (au moins 1 recommandé)
//   video           → URL YouTube embed OU null si pas de vidéo
//                     Format YouTube : "https://www.youtube.com/embed/VIDEO_ID"
//   github          → lien vers le repo GitHub du projet
//   featured        → true pour afficher en grand sur mobile (un projet à la fois)
//
const PROJECTS = [

  // ── EXEMPLE 1 : Jeu console C++ ─────────────────────────
  {
    id:    "console-rpg",
    title: "Console RPG",
    tags:  ["C++", "Console"],
    date:  "Janvier 2024",
    shortDescription:
      "Un RPG jouable en ligne de commande avec gestion des combats, " +
      "inventaire et sauvegarde.",
    fullDescription:
      "Un jeu de rôle complet fonctionnant entièrement en ligne de commande, " +
      "développé en C++ pur dans le cadre de ma formation.\n\n" +
      "Fonctionnalités : gestion de l'état du jeu, système d'inventaire, " +
      "combats au tour par tour avec calculs de dégâts, sauvegarde et " +
      "chargement de parties via fichiers texte.",
    images: [
      "img/projects/console-rpg/screen1.png",
      "img/projects/console-rpg/screen2.png",
    ],
    video:    null,   // Pas de vidéo pour ce projet
    github:   "https://github.com/ton-pseudo/console-rpg",
    featured: true,
  },

  // ── EXEMPLE 2 : Mini moteur de jeu ──────────────────────
  {
    id:    "game-engine",
    title: "Mini moteur de jeu",
    tags:  ["C++", "OpenGL", "Moteur"],
    date:  "Juin 2024",
    shortDescription:
      "Ébauche de moteur 2D from scratch — boucle de jeu, rendu OpenGL, " +
      "gestion des entités.",
    fullDescription:
      "Projet de fond pour comprendre les internals d'un moteur de jeu " +
      "en le construisant from scratch.\n\n" +
      "Implémenté : boucle de jeu à timestep fixe, renderer 2D en OpenGL, " +
      "système de composants simplifié (ECS), gestionnaire d'inputs " +
      "clavier/souris, chargement de textures.\n\n" +
      "L'objectif n'était pas de faire un moteur complet, mais de " +
      "comprendre chaque couche de bas niveau.",
    images: [
      "img/projects/game-engine/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/game-engine",
    featured: true,
  },

  // ── EXEMPLE 3 : Prototype Unity ─────────────────────────
  {
    id:    "unity-platformer",
    title: "Platformer — game feel",
    tags:  ["C#", "Unity", "Physique"],
    date:  "Mars 2024",
    shortDescription:
      "Prototype de plateforme 2D avec physique custom, coyote time, " +
      "wall-jump et jump buffering.",
    fullDescription:
      "Prototype centré sur le game feel du mouvement — ce qui fait " +
      "qu'un jeu de plateforme 'répond' bien.\n\n" +
      "Physique entièrement custom (sans Rigidbody Unity) pour contrôler " +
      "précisément : l'inertie au sol et en l'air, la hauteur de saut " +
      "variable, le coyote time, le wall-jump et le jump buffering.\n\n" +
      "Chaque paramètre est exposé dans l'inspector pour tweaker " +
      "rapidement le ressenti.",
    images: [
      "img/projects/unity-platformer/screen1.png",
      "img/projects/unity-platformer/screen2.png",
    ],
    video:    null,   // ex: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    github:   "https://github.com/ton-pseudo/unity-platformer",
    featured: false,
  },

  // ── MODÈLE VIDE — copie-colle ce bloc pour un nouveau projet ──
  /*
  {
    id:    "nouveau-projet",
    title: "Titre du projet",
    tags:  ["C++", "Console"],
    date:  "Mois AAAA",
    shortDescription:
      "Une phrase qui résume le projet en 2 lignes max.",
    fullDescription:
      "Description plus longue.\n\n" +
      "Tu peux utiliser \\n\\n pour sauter des lignes.",
    images: [
      "img/projects/nouveau-projet/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/nouveau-projet",
    featured: false,
  },
  */

];
