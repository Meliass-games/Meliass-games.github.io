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
    name: "Bastien Motte",
    title: "Développeur Gameplay Junior",
    bio: "Passionné par la conception de mécaniques de jeu et le " +
        "développement de systèmes gameplay, je m'épanouis en créant " +
        "des expériences audiovisuelles interactives. Étudiant en " +
        "Bachelor Développeur Informatique option Jeu Vidéo, je " +
        "recherche une alternance pour les années 2026/2027 et 2027/2028.",
    email: "b.motte2002@gmail.com",
    github: "https://github.com/ton-pseudo",          // ← remplace par ton vrai pseudo GitHub
    linkedin: "https://linkedin.com/in/bastien-motte-42522524a",
    cv: "cv.pdf",
};


// ── 2. COMPÉTENCES ──────────────────────────────────────────
const SKILLS = [
    { name: "C / C++", level: "Avancé" },
    { name: "C#", level: "Avancé" },
    { name: "Unity", level: "Intermédiaire" },
    { name: "Unreal Engine 5", level: "Intermédiaire" },
    { name: "DirectX 12", level: "Notions" },
    { name: "Python", level: "Notions" },
    { name: "Git / GitHub", level: "Avancé" },
    { name: "Visual Studio", level: "Avancé" },
    { name: "Rider", level: "Intermédiaire" },
];


// ── 3. COULEURS DES TAGS — palette Parchemin ────────────────
const TAG_COLORS = {
    "C++": { bg: "#F5E8C0", text: "#7A4F10" },
    "C#": { bg: "#E4EDD8", text: "#3A5A18" },
    "C": { bg: "#EDE0C8", text: "#6B4010" },
    "Unity": { bg: "#D8E8F0", text: "#1A3D58" },
    "Unreal": { bg: "#F0DDD0", text: "#6B2A0A" },
    "Blueprint": { bg: "#EED8E8", text: "#5A1A50" },
    "DirectX12": { bg: "#E8D8EE", text: "#4A1A70" },
    "DirectX": { bg: "#E8D8EE", text: "#4A1A70" },
    "OpenGL": { bg: "#F0E8D0", text: "#705010" },
    "Python": { bg: "#E4EDD8", text: "#2A4A18" },
    "Console": { bg: "#E8E4D8", text: "#4A4028" },
    "Moteur": { bg: "#D8EDD8", text: "#1A4A18" },
    "Physique": { bg: "#EDE8D0", text: "#5A4810" },
    "IA": { bg: "#D8EDE0", text: "#1A4A30" },
    "Réseau": { bg: "#F0D8DC", text: "#5A1A20" },
    "Shader": { bg: "#D8E0F0", text: "#1A2A5C" },
    "VFX": { bg: "#D8EDE8", text: "#1A4A40" },
    "Gameplay": { bg: "#EED8F0", text: "#4A1A5C" },
    "UI / UX": { bg: "#F0EDD8", text: "#5A4A10" },
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
        id: "vertical-slice-fps",
        title: "Vertical Slice — FPS Thriller Psychologique",
        tags: ["Unreal", "Blueprint", "C++", "Gameplay"],
        date: "Printemps 2025",
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
        video: null,
        github: "https://github.com/ton-pseudo/vertical-slice-fps",  // ← à mettre à jour
        featured: true,
    },

    // ── Moteur de rendu 3D DirectX12 ────────────────────────
    {
        id: "moteur-3d-directx12",
        title: "Moteur de rendu 3D — DirectX 12",
        tags: ["C++", "DirectX12", "Moteur"],
        date: "2024 – 2025",
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
        video: null,
        github: "https://github.com/ton-pseudo/moteur-3d-directx12",  // ← à mettre à jour
        featured: true,
    },


    // ── Unreal — Angry Birds-like avec physique ─────────────
    {
        id: "happy-bird",
        title: "Happy Bird",
        tags: ["Unreal", "Physique", "Gameplay"],
        date: "Printemps 2025",
        shortDescription:
            "Angry Birds-like sous UE5 avec physique entièrement simulée — " +
            "la fronde, les projectiles et les matériaux brisables utilisent " +
            "le moteur physique natif d'Unreal.",
        fullDescription:
            "Projet de quelques jours pour explorer le système physique d'Unreal Engine 5 " +
            "à travers un concept inspiré d'Angry Birds, renommé Happy Bird.\n\n" +
            "L'objectif était de simuler des interactions physiques aussi proches " +
            "que possible de la réalité : la fronde est entièrement construite " +
            "avec des Physics Constraints (joint élastique, tension, relâchement), " +
            "les projectiles suivent des trajectoires balistiques réalistes, " +
            "et les structures utilisent des Physics Materials pour définir " +
            "la résistance et le comportement à la fracture des matériaux.\n\n" +
            "Un build jouable est disponible directement dans le repo (AngryBird.zip).",
        images: [],
        video: null,
        github: "https://github.com/Meliass-games/AngryBirds-Like",
        featured: false,
    },

    // ── Unreal — Clone Game ───────────────────────────────
    {
        id: "clone-game",
        title: "Clone Game",
        tags: ["C++", "Unreal", "Gameplay"],
        date: "Printemps 2025",
        shortDescription:
            "Jeu d'énigmes UE5 en C++ : un clone rejoue tes actions avec 5 secondes " +
            "de délai — il faut se synchroniser avec lui-même pour résoudre les puzzles.",
        fullDescription:
            "Projet Unreal Engine 5 d'une semaine et demie pour prendre en main " +
            "le moteur en C++ et Blueprint.\n\n" +
            "Concept central : un clone du joueur enregistre et rejoue chaque action " +
            "avec un délai de 5 secondes — inspiré du principe de cohérence rétro " +
            "en physique quantique. Les puzzles reposent sur la synchronisation " +
            "du joueur et de son clone pour activer simultanément des mécanismes " +
            "(leviers, plaques de pression) depuis des angles de caméra différents.\n\n" +
            "Défi technique principal : la gestion de l'état différé (enregistrement " +
            "des inputs, replay temporisé) et la synchronisation des interactions " +
            "physiques entre les deux personnages.",
        images: [
            "img/projects/happy-bird/screen1.png",
            "img/projects/happy-bird/screen2.png",
            "img/projects/happy-bird/screen3.png",
        ],
        video: "https://www.youtube.com/watch?v=S_m_3fjFAps",
        github: "https://github.com/Meliass-games/CloneGame",
        featured: true,
    },

    // ── Unity — Jeu de cartes type Slay the Spire ─────────────
    {
        id: "rumrow",
        title: "RumRow",
        tags: ["C#", "Unity", "Gameplay"],
        date: "hiver 2025",
        shortDescription:
            "Jeu de cartes type Slay the Spire développé entièrement en UI Unity, " +
            "avec une architecture MVC stricte. Retour prof : « très grande qualité ».",
        fullDescription:
            "Projet UI-only inspiré de Slay the Spire : toute la logique de jeu " +
            "(attaque, défense, buffs, gestion de l'énergie) est pilotée " +
            "exclusivement par le système UI de Unity, sans scène 3D.\n\n" +
            "Architecture MVC appliquée rigoureusement : chaque élément de combat " +
            "dispose de trois scripts distincts — Model (données), View (apparence), " +
            "Controller (interactions). Le CombatController orchestre l'ensemble.\n\n" +
            "Une fonction Reset() dans les scripts View automatise l'assignation " +
            "des références dans l'éditeur, limitant les drag & drop manuels.\n\n",
        images: [
            "img/projects/rumrow/screen1.png",
            "img/projects/rumrow/screen2.png",
            "img/projects/rumrow/screen3.png",
        ],
        video: null,
        github: "https://github.com/Meliass-games/RumRow-UIUX",
        featured: true,
    },

    // ── Unity — Shader Graph & VFX Graph ─────────────────────
    {
        id: "legend-of-shaders",
        title: "The Legend of Shaders",
        tags: ["C#", "Unity", "Shader"],
        date: "hiver 2025",
        shortDescription:
            "Projet Unity centré sur la maîtrise du Shader Graph et du VFX Graph — " +
            "rendu d'herbe dynamique, effets d'épée enchantée et particules.",
        fullDescription:
            "Projet dédié à l'apprentissage du Shader Graph et du VFX Graph de Unity, " +
            "habillé d'un concept minimaliste : trouver et éliminer un ennemi " +
            "apparu dans une prairie.\n\n" +
            "L'accent est entièrement mis sur le rendu visuel : herbe animée par shader, " +
            "effets de lumière sur l'épée enchantée, particules VFX sur les impacts. " +
            "Note : les shaders sont gourmands en ressources — c'est volontaire, " +
            "l'objectif étant de pousser les outils dans leurs retranchements.",
        images: [
            "img/projects/the-legend-of-shaders/screen1.png",
            "img/projects/the-legend-of-shaders/screen2.png",
        ],
        video: null,
        github: "https://github.com/Meliass-games/The-Legend-Of-Shaders",
        featured: false,
    },

    // ── Unity — Prototype 3C (Character, Camera, Controls) ───
    {
        id: "crypts-3c",
        title: "Crypts of the Cursed Cemetery",
        tags: ["C#", "Unity", "Gameplay"],
        date: "Automne 2025",
        shortDescription:
            "Prototype Unity focalisé sur les 3C : comparaison de NavMesh, " +
            "CharacterController et Rigidbody, Cinemachine et système d'inputs.",
        fullDescription:
            "Prototype de jeu d'action en vue de dessus dont l'objectif pédagogique " +
            "est d'explorer les différentes approches des 3C (Character, Camera, Controls) " +
            "sous Unity.\n\n" +
            "Trois implémentations du contrôleur de personnage ont été comparées : " +
            "NavMesh Agent, CharacterController et Rigidbody — chacune avec ses " +
            "avantages selon le type de jeu visé.\n\n" +
            "Le projet intègre également Cinemachine pour les caméras dynamiques " +
            "et le nouveau système d'Input d'Unity. " +
            "Projet non terminé, l'accent étant mis sur l'exploration technique " +
            "plutôt que sur la finition.",
        images: [
            "img/projects/crypts-of-the-cursed-cimetary/screen1.png",
            "img/projects/crypts-of-the-cursed-cimetary/screen2.png",
        ],
        video: null,
        github: "https://github.com/Meliass-games/Crypts-of-the-Cursed-Cemetery--3C-",
        featured: false,
    },

    // ── Unity — Jeu 2D procédural ─────────────────────────────
    {
        id: "mercenaries-of-the-depth",
        title: "Mercenaries of the Depth",
        tags: ["C#", "Unity", "Gameplay"],
        date: "Automne 2025",
        shortDescription:
            "Jeu 2D Unity de type Terraria × Deep Rock Galactic avec cartes " +
            "générées procéduralement — 4 algorithmes implémentés en une semaine.",
        fullDescription:
            "Projet d'une semaine centré sur la génération procédurale de niveaux 2D, " +
            "sur le concept d'un mélange entre Terraria et Deep Rock Galactic.\n\n" +
            "Quatre algorithmes de génération ont été étudiés et implémentés : " +
            "Simple Room Placement, Binary Space Partition, Cellular Automata " +
            "et Noise-Based Generation — chacun produisant un type de carte aux " +
            "propriétés visuelles et de jouabilité distinctes.\n\n" +
            "L'enjeu technique principal était de rendre les algorithmes " +
            "paramétrables pour pouvoir ajuster la densité, la connectivité " +
            "et la forme des niveaux à la volée.",
        images: [
            "img/projects/mercenaries-of-the-depth/screen1.png",
            "img/projects/mercenaries-of-the-depth/screen2.png",
            "img/projects/mercenaries-of-the-depth/screen3.png",
        ],
        video: null,
        github: "https://github.com/Meliass-games/Mercenaries-of-the-Depth",
        featured: false,
    },

    // ── Unity — FPS Stand de tir ─────────────────────────────
    {
        id: "fps-training-ground",
        title: "FPS Training Ground",
        tags: ["C#", "Unity", "Shader"],
        date: "Automne 2025",
        shortDescription:
            "Stand de tir Unity en vue FPS — 3 armes aux comportements distincts, " +
            "Cinemachine headbob et tirs par raycast. Projet axé sur le game feel du FPS.",
        fullDescription:
            "Prototype Unity centré sur les mécaniques fondamentales du FPS, " +
            "développé en quelques jours sous forme d'un stand de tir.\n\n" +
            "Gameplay : trois armes aux comportements distincts (cadence, recul, portée), " +
            "tirs implémentés par raycast, caméra Cinemachine avec headbob dynamique " +
            "pour renforcer le game feel.\n\n",
        images: [
            "img/projects/fps-training-ground/screen1.png",
            "img/projects/fps-training-ground/screen2.png",
            "img/projects/fps-training-ground/screen3.png",
        ],
        video: null,
        github: "https://github.com/Meliass-games/FPS-Project",
        featured: false,
    },


    // ── C# Console ────────────────────────────────
    {
        id: "pokemystery",
        title: "PokeMystery",
        tags: ["C#", "Console"],
        date: "Septembre 2025",
        shortDescription:
            "RPG Pokémon-like jouable en console, développé en C# pour apprendre " +
            "les fondamentaux du langage — systèmes de combat, inventaire et progression.",
        fullDescription:
            "Premier projet de formation en C#, PokeMystery est un RPG au tour par tour " +
            "entièrement jouable en ligne de commande, librement inspiré des mécaniques Pokémon.\n\n" +
            "Systèmes implémentés : gestion d'un bestiaire de créatures avec stats et capacités, " +
            "combats au tour par tour avec calculs de dégâts et d'affinités, inventaire d'objets, " +
            "progression du joueur et sauvegarde d'état.\n\n" +
            "Objectif pédagogique : maîtrise des bases de C# — classes, héritage, interfaces, " +
            "collections et gestion des fichiers.",
        images: [
            "img/projects/pokemystery/screen1.png",
            "img/projects/pokemystery/screen2.png",
            "img/projects/pokemystery/screen3.png",
            "img/projects/pokemystery/screen4.png",
        ],   
        video: null,
        github: "https://github.com/Meliass-games/PokeMystery",
        featured: false,
    },

    // ── C++ — Jeu multijoueur temps réel + UDP ──────────────
    {
        id: "multijoueur-udp",
        title: "Jeu Multijoueur Temps Réel — UDP",
        tags: ["C++", "Réseau", "Console"],
        date: "2024 – 2025",
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
        video: null,
        github: "https://github.com/ton-pseudo/multijoueur-udp",  // ← à mettre à jour
        featured: false,
    },

    // ── C++ — Casse-brique / Shoot'em up ────────────────────
    {
        id: "arcade-cpp",
        title: "Casse-Brique & Shoot'em Up — C++",
        tags: ["C++", "Console", "Gameplay"],
        date: "2024",
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
        video: null,
        github: "https://github.com/ton-pseudo/arcade-cpp",  // ← à mettre à jour
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
