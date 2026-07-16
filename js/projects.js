// ============================================================
//  ⭐  js/projects.js — LE SEUL FICHIER QUE TU DOIS MODIFIER
//
//  Pour ajouter un projet :
//    1. Copie un bloc { ... } dans PROJECTS
//    2. Remplis shortDescription + fullDescription (FR)
//    3. Ajoute shortDescription_en + fullDescription_en (EN)
//    4. Ajoute tes images dans img/projects/nom-du-projet/
//    5. Commit + push → le site se met à jour
// ============================================================


// ── 1. INFOS PERSONNELLES ───────────────────────────────────
const SITE_CONFIG = {
    name:     "Bastien Motte",
    title:    "Développeur Gameplay Junior",
    title_en: "Junior Gameplay Developer",
    bio:
        "Passionné par la conception de mécaniques de jeu et le " +
        "développement de systèmes gameplay, je m'épanouis en créant " +
        "des expériences audiovisuelles interactives. Étudiant en " +
        "Bachelor Développeur Informatique option Jeu Vidéo, je " +
        "recherche une alternance pour les années 2026/2027 et 2027/2028.",
    bio_en:
        "Passionate about gameplay mechanics design and game systems development, " +
        "I thrive building interactive audiovisual experiences. Currently studying " +
        "for a Bachelor's in Game Development, I am looking for a work-study " +
        "contract for 2026/2027 and 2027/2028.",
    email:    "b.motte2002@gmail.com",
    github:   "https://github.com/Mellias-dev",
    linkedin: "https://linkedin.com/in/bastien-motte-42522524a",
    cv:       "cv.pdf",
    cv_en:    "cv-en.pdf",   // ← Nom de ta version anglaise du CV
};


// ── 2. TRADUCTIONS UI ────────────────────────────────────────
const TRANSLATIONS = {
    fr: {
        nav_projects:      "Projets",
        nav_skills:        "Compétences",
        nav_contact:       "Contact",
        nav_cv:            "Télécharger le CV",
        about_label:       "À propos",
        hero_cta:          "Voir mes projets",
        skills_label:      "Compétences",
        skills_title:      "Technologies maîtrisées",
        portfolio_label:   "Portfolio",
        projects_title:    "Mes projets",
        projects_subtitle: "Cliquez sur un projet pour voir les captures d'écran, vidéos et description complète.",
        card_cta:          "Voir le projet →",
        contact_label:     "Contact",
        contact_title:     "Me contacter",
        contact_intro:     "Disponible pour des stages, alternances et opportunités en développement gameplay.",
        cv_label:          "CV",
        cv_value:          "Télécharger →",
        github_value:      "Voir mes repos →",
        linkedin_value:    "Mon profil →",
        footer_credit:     "Fait avec HTML, CSS & JS · Hébergé sur GitHub Pages",
        cv_picker_title:   "Choisir la langue du CV",
        cv_fr_label:       "Version française",
        cv_en_label:       "English version",
    },
    en: {
        nav_projects:      "Projects",
        nav_skills:        "Skills",
        nav_contact:       "Contact",
        nav_cv:            "Download CV",
        about_label:       "About",
        hero_cta:          "See my projects",
        skills_label:      "Skills",
        skills_title:      "Tech stack",
        portfolio_label:   "Portfolio",
        projects_title:    "My projects",
        projects_subtitle: "Click on a project to view screenshots, videos and full description.",
        card_cta:          "View project →",
        contact_label:     "Contact",
        contact_title:     "Get in touch",
        contact_intro:     "Available for internships, work-study contracts and gameplay development opportunities.",
        cv_label:          "Resume",
        cv_value:          "Download →",
        github_value:      "My repos →",
        linkedin_value:    "My profile →",
        footer_credit:     "Built with HTML, CSS & JS · Hosted on GitHub Pages",
        cv_picker_title:   "Choose CV language",
        cv_fr_label:       "Version française",
        cv_en_label:       "English version",
    },
};


// ── 3. COMPÉTENCES ──────────────────────────────────────────
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


// ── 4. COULEURS DES TAGS ────────────────────────────────────
const TAG_COLORS = {
    "C++":        { bg: "#F5E8C0", text: "#7A4F10" },
    "C#":         { bg: "#E4EDD8", text: "#3A5A18" },
    "C":          { bg: "#EDE0C8", text: "#6B4010" },
    "Unity":      { bg: "#D8E8F0", text: "#1A3D58" },
    "Unreal":     { bg: "#F0DDD0", text: "#6B2A0A" },
    "Blueprint":  { bg: "#EED8E8", text: "#5A1A50" },
    "DirectX12":  { bg: "#E8D8EE", text: "#4A1A70" },
    "OpenGL":     { bg: "#F0E8D0", text: "#705010" },
    "Python":     { bg: "#E4EDD8", text: "#2A4A18" },
    "Console":    { bg: "#E8E4D8", text: "#4A4028" },
    "Moteur":     { bg: "#D8EDD8", text: "#1A4A18" },
    "Physique":   { bg: "#EDE8D0", text: "#5A4810" },
    "Réseau":     { bg: "#F0D8DC", text: "#5A1A20" },
    "Shader":     { bg: "#D8E0F0", text: "#1A2A5C" },
    "VFX":        { bg: "#D8EDE8", text: "#1A4A40" },
    "Gameplay":   { bg: "#EED8F0", text: "#4A1A5C" },
    "UI / UX":    { bg: "#F0EDD8", text: "#5A4A10" },
    "Procédural": { bg: "#E0EDD8", text: "#2A4A18" },
};


// ── 5. PROJETS ──────────────────────────────────────────────
//
// Chaque projet peut avoir des champs _en pour la version anglaise.
// Si absent, la version FR est affichée dans les deux langues.
//
const PROJECTS = [

    // ── Grand projet — Vertical Slice FPS ───────────────────
    {
        id:    "vertical-slice-fps",
        title: "Vertical Slice — FPS Thriller Psychologique",
        tags:  ["Unreal", "Blueprint", "C++", "Gameplay"],
        date:  "Printemps 2025",
        shortDescription:
            "FPS walking sim sur UE5 mêlant Firewatch et Dredge. " +
            "Lead Technique & Producer sur une équipe de ~15 personnes.",
        shortDescription_en:
            "UE5 psychological thriller walking sim blending Firewatch and Dredge. " +
            "Technical Lead & Producer on a ~15-person interdisciplinary team.",
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
        fullDescription_en:
            "Year-end interdisciplinary project in collaboration with the art and business " +
            "departments of the school.\n\n" +
            "Concept: a psychological thriller FPS walking sim, blending the narrative " +
            "atmosphere of Firewatch with the dread of Dredge, featuring an interaction " +
            "system inspired by Schedule 1.\n\n" +
            "My role: Technical Lead (6 developers) — dev team coordination, task " +
            "management, code review. One and a half months into production, I also " +
            "took on the Producer role to address organisational issues and attempt " +
            "to salvage the delivery.",
        images: ["img/projects/vertical-slice-fps/screen1.png"],
        video:  null,
        github: "https://github.com/ton-pseudo/vertical-slice-fps",
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
        shortDescription_en:
            "3D rendering engine built from scratch in C++ using the DirectX 12 API.",
        fullDescription:
            "Projet de bas niveau pour comprendre le pipeline de rendu d'un " +
            "moteur de jeu moderne en construisant chaque couche from scratch.\n\n" +
            "Implémenté avec l'API DirectX 12 : gestion du pipeline graphique, " +
            "command lists et command queues, synchronisation GPU/CPU, " +
            "chargement de meshes et textures, premiers shaders HLSL.",
        fullDescription_en:
            "Low-level project aimed at understanding the rendering pipeline of a modern " +
            "game engine by building every layer from scratch.\n\n" +
            "Implemented with the DirectX 12 API: graphics pipeline setup, command lists " +
            "and command queues, GPU/CPU synchronisation, mesh and texture loading, " +
            "first HLSL shaders.",
        images: ["img/projects/moteur-3d-directx12/screen1.png"],
        video:  null,
        github: "https://github.com/ton-pseudo/moteur-3d-directx12",
        featured: true,
    },

    // ── Unreal — Clone Game ──────────────────────────────────
    {
        id:    "clone-game",
        title: "Clone Game",
        tags:  ["C++", "Unreal", "Gameplay"],
        date:  "Printemps 2025",
        shortDescription:
            "Jeu d'énigmes UE5 en C++ : un clone rejoue tes actions avec 5 secondes " +
            "de délai — il faut se synchroniser avec lui-même pour résoudre les puzzles.",
        shortDescription_en:
            "UE5 C++ puzzle game: a clone replays your every move with a 5-second delay " +
            "— you must synchronise with yourself to solve the puzzles.",
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
        fullDescription_en:
            "A week-and-a-half Unreal Engine 5 project to get hands-on with the engine " +
            "using C++ and Blueprint.\n\n" +
            "Core mechanic: a player clone records and replays every action with a " +
            "5-second delay — inspired by the retrocausality principle in quantum physics. " +
            "Puzzles are built around synchronising the player and their clone to " +
            "simultaneously trigger mechanisms (levers, pressure plates) from different " +
            "camera angles.\n\n" +
            "Main technical challenge: managing deferred state (input recording, timed " +
            "replay) and synchronising physical interactions between the two characters.",
        images: [
            "img/projects/clone-game/screen1.png",
            "img/projects/clone-game/screen2.png",
        ],
        video:  "https://www.youtube.com/embed/S_m_3fjFAps?si=d3uiaSsaiTAzFwQS",
        github: "https://github.com/Meliass-games/CloneGame",
        featured: true,
    },

    // ── Unity — Jeu de cartes MVC ────────────────────────────
    {
        id:    "rumrow",
        title: "RumRow",
        tags:  ["C#", "Unity", "UI / UX"],
        date:  "Hiver 2025",
        shortDescription:
            "Jeu de cartes type Slay the Spire développé entièrement en UI Unity, " +
            "avec une architecture MVC stricte. Retour prof : « très grande qualité ».",
        shortDescription_en:
            "Slay the Spire-inspired card game built entirely in Unity UI with strict MVC " +
            "architecture. Instructor feedback: \"outstanding quality\".",
        fullDescription:
            "Projet UI-only inspiré de Slay the Spire : toute la logique de jeu " +
            "(attaque, défense, buffs, gestion de l'énergie) est pilotée " +
            "exclusivement par le système UI de Unity, sans scène 3D.\n\n" +
            "Architecture MVC appliquée rigoureusement : chaque élément de combat " +
            "dispose de trois scripts distincts — Model (données), View (apparence), " +
            "Controller (interactions). Le CombatController orchestre l'ensemble.\n\n" +
            "Une fonction Reset() dans les scripts View automatise l'assignation " +
            "des références dans l'éditeur, limitant les drag & drop manuels.\n\n" +
            "Feedback professeur : « Le projet est de très grande qualité et démontre " +
            "une excellente maîtrise de l'architecture MVC. »",
        fullDescription_en:
            "UI-only project inspired by Slay the Spire: all game logic (attack, defence, " +
            "buffs, energy management) is driven exclusively by Unity's UI system, " +
            "with no 3D scene.\n\n" +
            "Strict MVC architecture: every combat element has three dedicated scripts — " +
            "Model (data), View (appearance), Controller (interactions). " +
            "The CombatController orchestrates the whole system.\n\n" +
            "A Reset() function in View scripts automates reference assignment in the " +
            "editor, minimising manual drag & drop.\n\n" +
            "Instructor feedback: \"The project is of outstanding quality and demonstrates " +
            "an excellent command of MVC architecture.\"",
        images: [
            "img/projects/rumrow/screen1.png",
            "img/projects/rumrow/screen2.png",
            "img/projects/rumrow/screen3.png",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/RumRow-UIUX",
        featured: true,
    },

    // ── Unreal — Angry Birds-like ────────────────────────────
    {
        id:    "happy-bird",
        title: "Happy Bird",
        tags:  ["Unreal", "Physique", "Gameplay"],
        date:  "Printemps 2025",
        shortDescription:
            "Angry Birds-like sous UE5 avec physique entièrement simulée — " +
            "la fronde, les projectiles et les structures utilisent le moteur physique natif.",
        shortDescription_en:
            "Angry Birds-like in UE5 with fully simulated physics — the slingshot, " +
            "projectiles and breakable structures all use Unreal's native physics engine.",
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
        fullDescription_en:
            "A few-day project to explore Unreal Engine 5's physics system through " +
            "an Angry Birds-inspired concept, renamed Happy Bird.\n\n" +
            "The goal was to simulate physical interactions as close to real life as " +
            "possible: the slingshot is fully built with Physics Constraints (elastic joint, " +
            "tension, release), projectiles follow realistic ballistic trajectories, and " +
            "structures use Physics Materials to define material resistance and " +
            "fracture behaviour.\n\n" +
            "A playable build is available directly in the repo (AngryBird.zip).",
        images: [
            "img/projects/happy-bird/screen1.jpg",
            "img/projects/happy-bird/screen2.jpg",
            "img/projects/happy-bird/screen3.jpg",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/AngryBirds-Like",
        featured: false,
    },

    // ── Unity — Shader Graph & VFX Graph ────────────────────
    {
        id:    "legend-of-shaders",
        title: "The Legend of Shaders",
        tags:  ["C#", "Unity", "Shader"],
        date:  "Hiver 2025",
        shortDescription:
            "Projet Unity centré sur la maîtrise du Shader Graph et du VFX Graph — " +
            "rendu d'herbe dynamique, effets d'épée enchantée et particules.",
        shortDescription_en:
            "Unity project focused on mastering Shader Graph and VFX Graph — " +
            "dynamic grass rendering, enchanted sword effects and particle systems.",
        fullDescription:
            "Projet dédié à l'apprentissage du Shader Graph et du VFX Graph de Unity, " +
            "habillé d'un concept minimaliste : trouver et éliminer un ennemi " +
            "apparu dans une prairie.\n\n" +
            "L'accent est entièrement mis sur le rendu visuel : herbe animée par shader, " +
            "effets de lumière sur l'épée enchantée, particules VFX sur le joueur. " +
            "Note : les shaders sont gourmands en ressources — c'est volontaire, " +
            "l'objectif étant de pousser les outils dans leurs retranchements.",
        fullDescription_en:
            "A project dedicated to learning Unity's Shader Graph and VFX Graph, " +
            "wrapped in a minimal concept: find and eliminate an enemy that has appeared " +
            "in a meadow.\n\n" +
            "The focus is entirely on visual rendering: shader-driven animated grass, " +
            "light effects on the enchanted sword, VFX particles on the player. " +
            "Note: the shaders are deliberately resource-intensive — the goal was to " +
            "push the tools to their limits.",
        images: [
            "img/projects/the-legend-of-shaders/screen1.png",
            "img/projects/the-legend-of-shaders/screen2.png",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/The-Legend-Of-Shaders",
        featured: false,
    },

    // ── Unity — Prototype 3C ─────────────────────────────────
    {
        id:    "crypts-3c",
        title: "Crypts of the Cursed Cemetery",
        tags:  ["C#", "Unity", "Gameplay"],
        date:  "Automne 2024",
        shortDescription:
            "Prototype Unity focalisé sur les 3C : comparaison de NavMesh, " +
            "CharacterController et Rigidbody, Cinemachine et système d'inputs.",
        shortDescription_en:
            "Unity prototype focused on the 3Cs: comparative study of NavMesh, " +
            "CharacterController and Rigidbody, Cinemachine cameras and the Input System.",
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
        fullDescription_en:
            "Top-down action game prototype whose educational goal is to explore the " +
            "different approaches to the 3Cs (Character, Camera, Controls) in Unity.\n\n" +
            "Three character controller implementations were compared: NavMesh Agent, " +
            "CharacterController and Rigidbody — each with its own trade-offs depending " +
            "on the type of game targeted.\n\n" +
            "The project also integrates Cinemachine for dynamic cameras and Unity's " +
            "new Input System. Unfinished by design — the focus was on technical " +
            "exploration rather than polish.",
        images: [
            "img/projects/crypts-of-the-cursed-cimetary/screen1.png",
            "img/projects/crypts-of-the-cursed-cimetary/screen2.png",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/Crypts-of-the-Cursed-Cemetery--3C-",
        featured: false,
    },

    // ── Unity — Génération procédurale ──────────────────────
    {
        id:    "mercenaries-of-the-depth",
        title: "Mercenaries of the Depth",
        tags:  ["C#", "Unity", "Gameplay"],
        date:  "Automne 2024",
        shortDescription:
            "Jeu 2D Unity de type Terraria × Deep Rock Galactic avec cartes " +
            "générées procéduralement — 4 algorithmes implémentés en une semaine.",
        shortDescription_en:
            "2D Unity game inspired by Terraria × Deep Rock Galactic with procedurally " +
            "generated maps — 4 algorithms implemented in one week.",
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
        fullDescription_en:
            "A one-week project focused on procedural 2D level generation, built around " +
            "a concept mixing Terraria and Deep Rock Galactic.\n\n" +
            "Four generation algorithms were studied and implemented: Simple Room " +
            "Placement, Binary Space Partition, Cellular Automata and Noise-Based " +
            "Generation — each producing maps with distinct visual and gameplay properties.\n\n" +
            "The main technical challenge was making the algorithms fully parametric, " +
            "allowing real-time adjustment of level density, connectivity and shape.",
        images: [
            "img/projects/mercenaries-of-the-depth/screen1.png",
            "img/projects/mercenaries-of-the-depth/screen2.png",
            "img/projects/mercenaries-of-the-depth/screen3.png",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/Mercenaries-of-the-Depth",
        featured: false,
    },

    // ── Unity — FPS Stand de tir ─────────────────────────────
    {
        id:    "fps-training-ground",
        title: "FPS Training Ground",
        tags:  ["C#", "Unity", "Shader"],
        date:  "Automne 2024",
        shortDescription:
            "Stand de tir Unity en vue FPS — 3 armes aux comportements distincts, " +
            "Cinemachine headbob et tirs par raycast. Axé sur le game feel du FPS.",
        shortDescription_en:
            "Unity FPS shooting range — 3 weapons with distinct behaviours, " +
            "Cinemachine headbob and raycast shooting. Focused on FPS game feel.",
        fullDescription:
            "Prototype Unity centré sur les mécaniques fondamentales du FPS, " +
            "développé en quelques jours sous forme d'un stand de tir.\n\n" +
            "Gameplay : trois armes aux comportements distincts (cadence, recul, portée), " +
            "tirs implémentés par raycast, caméra Cinemachine avec headbob dynamique " +
            "pour renforcer le game feel.\n\n" +
            "Le code shader (ShaderLab / HLSL) représente près de 70% de la base de code, " +
            "avec un travail sur les effets visuels des armes et de l'environnement.",
        fullDescription_en:
            "Unity prototype focused on core FPS mechanics, developed in a few days " +
            "in the form of a shooting range.\n\n" +
            "Gameplay: three weapons with distinct behaviours (fire rate, recoil, range), " +
            "raycast-based shooting, Cinemachine camera with dynamic headbob to " +
            "reinforce game feel.\n\n" +
            "Shader code (ShaderLab / HLSL) accounts for nearly 70% of the codebase, " +
            "with visual effects work on the weapons and environment.",
        images: [
            "img/projects/fps-training-ground/screen1.jpg",
            "img/projects/fps-training-ground/screen2.jpg",
            "img/projects/fps-training-ground/screen3.jpg",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/FPS-Project",
        featured: false,
    },

    // ── C# Console — PokeMystery ─────────────────────────────
    {
        id:    "pokemystery",
        title: "PokeMystery",
        tags:  ["C#", "Console"],
        date:  "Septembre 2024",
        shortDescription:
            "RPG Pokémon-like jouable en console, développé en C# pour apprendre " +
            "les fondamentaux du langage — systèmes de combat, inventaire et progression.",
        shortDescription_en:
            "Pokémon-inspired console RPG built in C# to learn language fundamentals " +
            "— turn-based combat, inventory and character progression systems.",
        fullDescription:
            "Premier projet de formation en C#, PokeMystery est un RPG au tour par tour " +
            "entièrement jouable en ligne de commande, librement inspiré des mécaniques Pokémon.\n\n" +
            "Systèmes implémentés : gestion d'un bestiaire de créatures avec stats et capacités, " +
            "combats au tour par tour avec calculs de dégâts et d'affinités, inventaire d'objets, " +
            "progression du joueur et sauvegarde d'état.\n\n" +
            "Objectif pédagogique : maîtrise des bases de C# — classes, héritage, interfaces, " +
            "collections et gestion des fichiers.",
        fullDescription_en:
            "First training project in C#, PokeMystery is a fully playable command-line " +
            "turn-based RPG loosely inspired by Pokémon mechanics.\n\n" +
            "Implemented systems: creature roster with stats and abilities, turn-based " +
            "combat with damage and affinity calculations, item inventory, player " +
            "progression and state saving.\n\n" +
            "Educational goal: mastering C# fundamentals — classes, inheritance, " +
            "interfaces, collections and file management.",
        images: [
            "img/projects/pokemystery/screen1.png",
            "img/projects/pokemystery/screen2.png",
            "img/projects/pokemystery/screen3.png",
            "img/projects/pokemystery/screen4.png",
        ],
        video:  null,
        github: "https://github.com/Meliass-games/PokeMystery",
        featured: false,
    },

    // ── C++ — Jeu multijoueur temps réel + UDP ───────────────
    {
        id:    "multijoueur-udp",
        title: "Jeu Multijoueur Temps Réel — UDP",
        tags:  ["C++", "Réseau", "Console"],
        date:  "2024 – 2025",
        shortDescription:
            "Jeu multijoueur en temps réel avec infrastructure réseau UDP " +
            "développée from scratch en C++.",
        shortDescription_en:
            "Real-time multiplayer game with a UDP network infrastructure " +
            "built from scratch in C++.",
        fullDescription:
            "Développement d'un jeu multijoueur temps réel et de son " +
            "infrastructure réseau en C++ pur.\n\n" +
            "Protocole UDP pour la faible latence : gestion des paquets, " +
            "détection de perte, synchronisation des états entre les clients, " +
            "serveur autoritaire.",
        fullDescription_en:
            "Development of a real-time multiplayer game and its network infrastructure " +
            "in pure C++.\n\n" +
            "UDP protocol for low latency: packet handling, loss detection, " +
            "client state synchronisation, authoritative server architecture.",
        images: ["img/projects/multijoueur-udp/screen1.png"],
        video:  null,
        github: "https://github.com/ton-pseudo/multijoueur-udp",
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
        shortDescription_en:
            "Two 2D arcade games in C++ — learning language fundamentals, " +
            "templates and game loop implementation.",
        fullDescription:
            "Premiers projets de jeu en C++ dans le cadre de la formation.\n\n" +
            "Un casse-brique et un shoot'em up développés pour maîtriser les " +
            "fondamentaux du C++ : gestion mémoire, templates, héritage, " +
            "polymorphisme et mise en place d'une boucle de jeu (game loop) " +
            "avec gestion des inputs et du rendu.",
        fullDescription_en:
            "First C++ game projects as part of the training programme.\n\n" +
            "A breakout and a shoot'em up developed to master C++ fundamentals: " +
            "memory management, templates, inheritance, polymorphism, and implementing " +
            "a game loop with input handling and rendering.",
        images: ["img/projects/arcade-cpp/screen1.png"],
        video:  null,
        github: "https://github.com/ton-pseudo/arcade-cpp",
        featured: false,
    },

    // ── MODÈLE VIDE ─────────────────────────────────────────
    /*
    {
        id:    "nouveau-projet",
        title: "Titre du projet",
        tags:  ["C++"],
        date:  "Mois AAAA",
        shortDescription:    "Description courte en français.",
        shortDescription_en: "Short description in English.",
        fullDescription:
            "Description complète en français.\n\n" +
            "Paragraphe 2.",
        fullDescription_en:
            "Full description in English.\n\n" +
            "Paragraph 2.",
        images:  ["img/projects/nouveau-projet/screen1.png"],
        video:   null,
        github:  "https://github.com/ton-pseudo/nouveau-projet",
        featured: false,
    },
    */

];
