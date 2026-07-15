// ============================================================
//  ⭐  js/projects.js — LE SEUL FICHIER QUE TU DOIS MODIFIER
//
//  Pour ajouter un projet :
//    1. Copie un bloc { ... } dans PROJECTS
//    2. Remplis les champs
//    3. Ajoute tes images dans img/projects/nom-du-projet/
//    4. Commit + push → le site se met à jour tout seul
// ============================================================


// ── 1. INFOS PERSONNELLES ───────────────────────────────────
const SITE_CONFIG = {
  name:     "Bastien Motte",
  title:    "Développeur Gameplay Junior",
  bio:      "Passionné par la conception de mécaniques de jeu et le " +
            "développement de systèmes gameplay, je m'épanouis en créant " +
            "des expériences audiovisuelles interactives. Étudiant en " +
            "Bachelor Développeur Informatique option Jeu Vidéo, je " +
            "recherche une alternance pour les années 2026/2027 et 2027/2028.",
  email:    "b.motte2002@gmail.com",
  github:   "https://github.com/ton-pseudo",          // ← remplace par ton vrai pseudo GitHub
  linkedin: "https://linkedin.com/in/bastien-motte-42522524a",
  cv:       "cv.pdf",
};


// ── 2. COMPÉTENCES ──────────────────────────────────────────
const SKILLS = [
  { name: "C / C++",         level: "Avancé" },
  { name: "C#",              level: "Avancé" },
  { name: "Unity",           level: "Intermédiaire" },
  { name: "Unreal Engine 5", level: "Intermédiaire" },
  { name: "DirectX 12",      level: "Notions" },
  { name: "Python",          level: "Notions" },
  { name: "Git / GitHub",    level: "Avancé" },
  { name: "Visual Studio",   level: "Avancé" },
  { name: "Rider",           level: "Intermédiaire" },
];


// ── 3. COULEURS DES TAGS — palette Parchemin ────────────────
const TAG_COLORS = {
  "C++":        { bg: "#F5E8C0", text: "#7A4F10" },
  "C#":         { bg: "#E4EDD8", text: "#3A5A18" },
  "C":          { bg: "#EDE0C8", text: "#6B4010" },
  "Unity":      { bg: "#D8E8F0", text: "#1A3D58" },
  "Unreal":     { bg: "#F0DDD0", text: "#6B2A0A" },
  "Blueprint":  { bg: "#EED8E8", text: "#5A1A50" },
  "DirectX12":  { bg: "#E8D8EE", text: "#4A1A70" },
  "DirectX":    { bg: "#E8D8EE", text: "#4A1A70" },
  "OpenGL":     { bg: "#F0E8D0", text: "#705010" },
  "Python":     { bg: "#E4EDD8", text: "#2A4A18" },
  "Console":    { bg: "#E8E4D8", text: "#4A4028" },
  "Moteur":     { bg: "#D8EDD8", text: "#1A4A18" },
  "Physique":   { bg: "#EDE8D0", text: "#5A4810" },
  "IA":         { bg: "#D8EDE0", text: "#1A4A30" },
  "Réseau":     { bg: "#F0D8DC", text: "#5A1A20" },
  "Shader":     { bg: "#D8E0F0", text: "#1A2A5C" },
  "VFX":        { bg: "#D8EDE8", text: "#1A4A40" },
  "Gameplay":   { bg: "#EED8F0", text: "#4A1A5C" },
  "UI / UX":    { bg: "#F0EDD8", text: "#5A4A10" },
  "Procédural": { bg: "#E0EDD8", text: "#2A4A18" },
};


// ── 4. PROJETS ──────────────────────────────────────────────
//
// CHAMPS :
//   id               → identifiant unique, sans espaces (ex: "mon-jeu")
//   title            → titre affiché
//   tags             → tableau de technos (voir TAG_COLORS)
//   date             → période (ex: "Janvier 2024")
//   shortDescription → 1-2 phrases sur la carte
//   fullDescription  → description dans le popup (utilise \n\n pour les paragraphes)
//   images           → chemins vers tes screenshots (au moins 1 recommandé)
//   video            → URL YouTube embed ou null
//                      Format : "https://www.youtube.com/embed/VIDEO_ID"
//   github           → lien vers le repo
//   featured         → true pour mettre en avant
//
const PROJECTS = [

  // ── Grand projet — Vertical Slice FPS ───────────────────
  {
    id:    "vertical-slice-fps",
    title: "Vertical Slice — FPS Thriller Psychologique",
    tags:  ["Unreal", "Blueprint", "C++", "Gameplay"],
    date:  "2024 – 2025",
    shortDescription:
      "FPS walking sim sur UE5 mêlant Firewatch et Dredge. " +
      "Lead Technique & Producer sur une équipe de ~15 personnes.",
    fullDescription:
      "Grand projet interdisciplinaire de fin d'année en collaboration avec " +
      "les pôles artistiques et business de l'école.\n\n" +
      "Le concept : un FPS thriller psychologique en walking simulator, " +
      "mêlant l'ambiance narrative de Firewatch avec l'angoisse de Dredge, " +
      "et un système d'interaction inspiré de Schedule 1.\n\n" +
      "Mon rôle : Lead Technique (6 développeurs) — coordination du pôle dev, " +
      "organisation des tâches, revue de code. Au bout d'un mois et demi de " +
      "production, j'ai également repris le rôle de Producer face à des " +
      "difficultés d'organisation pour tenter de redresser la livraison.",
    images: [
      "img/projects/vertical-slice-fps/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/vertical-slice-fps",  // ← à mettre à jour
    featured: true,
  },

  // ── Moteur de rendu 3D DirectX12 ────────────────────────
  {
    id:    "moteur-3d-directx12",
    title: "Moteur de rendu 3D — DirectX 12",
    tags:  ["C++", "DirectX12", "Moteur"],
    date:  "2024 – 2025",
    shortDescription:
      "Développement d'un moteur de rendu 3D from scratch en C++ " +
      "avec l'API DirectX 12.",
    fullDescription:
      "Projet de bas niveau pour comprendre le pipeline de rendu d'un " +
      "moteur de jeu moderne en construisant chaque couche from scratch.\n\n" +
      "Implémenté avec l'API DirectX 12 : gestion du pipeline graphique, " +
      "command lists et command queues, synchronisation GPU/CPU, " +
      "chargement de meshes et textures, premiers shaders HLSL.",
    images: [
      "img/projects/moteur-3d-directx12/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/moteur-3d-directx12",  // ← à mettre à jour
    featured: true,
  },

  // ── UE5 — Jeu d'énigme au clone temporel ────────────────
  {
    id:    "clone-temporel-ue5",
    title: "Clone Temporel — Jeu d'Énigme UE5",
    tags:  ["Unreal", "C++", "Blueprint", "Gameplay"],
    date:  "2024 – 2025",
    shortDescription:
      "Jeu d'énigme en UE5 : un clone répète tes actions avec 5 secondes " +
      "de décalage pour activer deux leviers simultanément.",
    fullDescription:
      "Premier projet Unreal Engine 5 pour apprendre le C++ et les " +
      "Blueprints d'UE5.\n\n" +
      "Mécanique centrale : un clone du joueur enregistre et rejoue toutes " +
      "les actions avec 5 secondes de décalage. Le but est de synchroniser " +
      "les actions du joueur et de son clone pour activer simultanément " +
      "deux leviers, deux plaques de pression ou d'autres mécanismes.\n\n" +
      "Techniquement, cela implique la gestion d'un buffer d'états (positions, " +
      "rotations, actions) et leur relecture différée via un système de replay.",
    images: [
      "img/projects/clone-temporel-ue5/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/clone-temporel-ue5",  // ← à mettre à jour
    featured: true,
  },

  // ── UE5 — Physique réaliste (Angry Birds-like) ──────────
  {
    id:    "fronde-physique-ue5",
    title: "Fronde Physique Réaliste — UE5",
    tags:  ["Unreal", "Blueprint", "Physique"],
    date:  "2024 – 2025",
    shortDescription:
      "Simulation d'une fronde entièrement construite avec la physique " +
      "d'Unreal Engine 5 — Physics Constraints & Materials.",
    fullDescription:
      "Projet centré sur la physique d'Unreal Engine 5 dans le cadre d'un " +
      "Angry Birds-like.\n\n" +
      "L'objectif était de simuler une vraie fronde en n'utilisant que les " +
      "outils physiques d'UE5 : Physics Constraints pour les articulations " +
      "et la tension de l'élastique, Physics Materials pour les propriétés " +
      "de rebond et de friction des projectiles.\n\n" +
      "Plus complexe qu'il n'y paraît : reproduire le comportement réaliste " +
      "d'une fronde nécessite de calibrer finement les contraintes pour " +
      "éviter les comportements instables du moteur physique.",
    images: [
      "img/projects/fronde-physique-ue5/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/fronde-physique-ue5",  // ← à mettre à jour
    featured: false,
  },

  // ── Unity — Génération procédurale 2D ───────────────────
  {
    id:    "generation-procedurale-2d",
    title: "Génération Procédurale 2D — Terraria × Deep Rock",
    tags:  ["C#", "Unity", "Procédural"],
    date:  "2024 – 2025",
    shortDescription:
      "Jeu 2D avec map générée procéduralement — 4 algorithmes implémentés " +
      "(BSP, Cellular Automata, Noise…).",
    fullDescription:
      "Projet d'exploration de la génération procédurale de niveaux, " +
      "inspiré de Terraria et Deep Rock Galactic.\n\n" +
      "Quatre algorithmes implémentés et comparés :\n" +
      "• Simple Room Placement\n" +
      "• Binary Space Partition (BSP)\n" +
      "• Cellular Automata (grottes organiques)\n" +
      "• Noise-Based Generation (Perlin Noise pour le terrain)",
    images: [
      "img/projects/generation-procedurale-2d/screen1.png",
      "img/projects/generation-procedurale-2d/screen2.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/generation-procedurale-2d",  // ← à mettre à jour
    featured: false,
  },

  // ── Unity — 3C & Character Controller ───────────────────
  {
    id:    "3c-unity",
    title: "3C — Character, Camera, Controls",
    tags:  ["C#", "Unity", "Gameplay"],
    date:  "2024 – 2025",
    shortDescription:
      "Comparaison des approches de contrôle de personnage sur Unity : " +
      "NavMesh, CharacterController, Rigidbody — avec Cinemachine.",
    fullDescription:
      "Projet dédié aux 3C (Character, Camera, Controls) — la base de tout " +
      "jeu de plateforme ou d'action.\n\n" +
      "Implémentation comparative des trois approches Unity :\n" +
      "• NavMesh (déplacement piloté par pathfinding)\n" +
      "• CharacterController (contrôle direct, collision intégrée)\n" +
      "• Rigidbody (physique complète, inertie)\n\n" +
      "Chaque approche a ses trade-offs en termes de game feel, " +
      "de contrôle et de performance.\n\n" +
      "Intégration du système d'Input d'Unity, animation de personnage " +
      "avec l'Animator, et caméras dynamiques via Cinemachine.",
    images: [
      "img/projects/3c-unity/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/3c-unity",  // ← à mettre à jour
    featured: false,
  },

  // ── Unity — Jeu de cartes UI / MVC ──────────────────────
  {
    id:    "jeu-cartes-mvc",
    title: "Jeu de Cartes — Architecture MVC & UX",
    tags:  ["C#", "Unity", "UI / UX", "Gameplay"],
    date:  "2024 – 2025",
    shortDescription:
      "Jeu de cartes type Slay the Spire en Unity — focus sur l'architecture " +
      "MVC et la conception d'une UX fluide.",
    fullDescription:
      "Projet centré sur la mise en place d'une bonne UI/UX et d'une " +
      "architecture de code propre — sans rendu 3D, entièrement en UI Unity.\n\n" +
      "Mécaniques : jeu de cartes avec attaque, défense et buffs, système " +
      "de tours, gestion des états (mana, points de vie, statuts).\n\n" +
      "Architecture MVC (Model-View-Controller) pour séparer la logique " +
      "de jeu, la présentation et les interactions utilisateur, ce qui " +
      "facilite les tests et l'ajout de nouvelles cartes.",
    images: [
      "img/projects/jeu-cartes-mvc/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/jeu-cartes-mvc",  // ← à mettre à jour
    featured: false,
  },

  // ── Unity — FPS Stand de tir ─────────────────────────────
  {
    id:    "fps-stand-tir",
    title: "Stand de Tir FPS — Raycast & Game Feel",
    tags:  ["C#", "Unity", "Gameplay"],
    date:  "2024 – 2025",
    shortDescription:
      "Prototype FPS de précision avec 3 armes, raycast, headbob " +
      "et caméra Cinemachine.",
    fullDescription:
      "Prototype FPS dédié au game feel du tir et à la mécanique de visée.\n\n" +
      "Fonctionnalités : 3 armes avec comportements distincts, tirs en " +
      "raycast (hitscan), headbob synchronisé à la vitesse de déplacement, " +
      "caméra Cinemachine avec effets de recul.\n\n" +
      "L'objectif était de comprendre comment les microdécisions de design " +
      "(kick de caméra, délai de tir, dispersion) impactent la satisfaction " +
      "du joueur.",
    images: [
      "img/projects/fps-stand-tir/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/fps-stand-tir",  // ← à mettre à jour
    featured: false,
  },

  // ── Unity — Shaders & VFX ────────────────────────────────
  {
    id:    "shaders-vfx-unity",
    title: "Shaders & VFX — Shader Graph / VFX Graph",
    tags:  ["C#", "Unity", "Shader", "VFX"],
    date:  "2024 – 2025",
    shortDescription:
      "Exploration du Shader Graph et du VFX Graph de Unity — création " +
      "d'effets visuels procéduraux.",
    fullDescription:
      "Projet d'introduction aux outils graphiques avancés de Unity.\n\n" +
      "Shader Graph : création de shaders visuels sans code HLSL, " +
      "effets de distorsion, dissolution, effets eau et lave.\n\n" +
      "VFX Graph : systèmes de particules GPU-based pour des effets de " +
      "feu, explosion, magie — avec contrôle des propriétés en temps réel " +
      "depuis le code C#.",
    images: [
      "img/projects/shaders-vfx-unity/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/shaders-vfx-unity",  // ← à mettre à jour
    featured: false,
  },

  // ── C++ — Jeu multijoueur temps réel + UDP ──────────────
  {
    id:    "multijoueur-udp",
    title: "Jeu Multijoueur Temps Réel — UDP",
    tags:  ["C++", "Réseau", "Console"],
    date:  "2024 – 2025",
    shortDescription:
      "Jeu multijoueur en temps réel avec infrastructure réseau UDP " +
      "développée from scratch en C++.",
    fullDescription:
      "Développement d'un jeu multijoueur temps réel et de son " +
      "infrastructure réseau en C++ pur.\n\n" +
      "Protocole UDP pour la faible latence : gestion des paquets, " +
      "détection de perte, synchronisation des états entre les clients, " +
      "serveur autoritaire.",
    images: [
      "img/projects/multijoueur-udp/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/multijoueur-udp",  // ← à mettre à jour
    featured: false,
  },

  // ── C++ — Casse-brique / Shoot'em up ────────────────────
  {
    id:    "arcade-cpp",
    title: "Casse-Brique & Shoot'em Up — C++",
    tags:  ["C++", "Console", "Gameplay"],
    date:  "2024",
    shortDescription:
      "Deux jeux arcade 2D en C++ — apprentissage des bases du langage, " +
      "des templates et de la boucle de jeu.",
    fullDescription:
      "Premiers projets de jeu en C++ dans le cadre de la formation.\n\n" +
      "Un casse-brique et un shoot'em up développés pour maîtriser les " +
      "fondamentaux du C++ : gestion mémoire, templates, héritage, " +
      "polymorphisme et mise en place d'une boucle de jeu (game loop) " +
      "avec gestion des inputs et du rendu.",
    images: [
      "img/projects/arcade-cpp/screen1.png",
    ],
    video:    null,
    github:   "https://github.com/ton-pseudo/arcade-cpp",  // ← à mettre à jour
    featured: false,
  },

  // ── MODÈLE VIDE — copie ce bloc pour un nouveau projet ──
  /*
  {
    id:    "nouveau-projet",
    title: "Titre du projet",
    tags:  ["C++", "Console"],
    date:  "Mois AAAA",
    shortDescription:
      "Une phrase qui résume le projet en 2 lignes max.",
    fullDescription:
      "Description complète.\n\n" +
      "Utilise \\n\\n pour les sauts de paragraphe.",
    images: [
      "img/projects/nouveau-projet/screen1.png",
    ],
    video:    null,  // ou "https://www.youtube.com/embed/VIDEO_ID"
    github:   "https://github.com/ton-pseudo/nouveau-projet",
    featured: false,
  },
  */

];
