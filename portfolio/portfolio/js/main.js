// ============================================================
//  js/main.js — Logique du site
//  Tu n'as pas à modifier ce fichier pour ajouter des projets.
// ============================================================

"use strict";

// ── État du carousel ────────────────────────────────────────
let carouselItems = [];
let currentSlide  = 0;


// ══════════════════════════════════════════════════════════════
//  1. CONFIG — Applique les infos de SITE_CONFIG dans le DOM
// ══════════════════════════════════════════════════════════════
function applyConfig() {
  const c = SITE_CONFIG;

  // <title> du navigateur
  document.title = `${c.name} — ${c.title}`;

  // Navigation
  setTextById("site-name", c.name);

  // Hero
  setTextById("hero-name", c.name);
  setTextById("hero-title", c.title);
  setTextById("hero-bio", c.bio);
  setHrefById("hero-github-link", c.github);
  setHrefById("nav-cv-link", c.cv);

  // Contact
  setTextById("contact-email-text", c.email);
  setHrefById("contact-email-link", "mailto:" + c.email);
  setHrefById("contact-github-link", c.github);
  setHrefById("contact-cv-link", c.cv);

  if (c.linkedin) {
    setHrefById("contact-linkedin-link", c.linkedin);
  } else {
    // Cache la carte LinkedIn si pas renseigné
    const el = document.getElementById("contact-linkedin-link");
    if (el) el.style.display = "none";
  }

  // Footer
  setTextById("footer-name", c.name);
}

function setTextById(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHrefById(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}


// ══════════════════════════════════════════════════════════════
//  2. COMPÉTENCES
// ══════════════════════════════════════════════════════════════
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map(skill => `
    <div class="skill-tag">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-level mono">${skill.level}</span>
    </div>
  `).join("");
}


// ══════════════════════════════════════════════════════════════
//  3. PROJETS — Rendu des cartes
// ══════════════════════════════════════════════════════════════
function tagHTML(tag) {
  const colors = TAG_COLORS[tag] || { bg: "#F1F5F9", text: "#475569" };
  return `<span class="tag" style="background:${colors.bg};color:${colors.text}">${tag}</span>`;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (!PROJECTS || PROJECTS.length === 0) {
    grid.innerHTML = `<p class="empty-state">Aucun projet à afficher.<br>
      Ajoute tes projets dans <code>js/projects.js</code>.</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((project, index) => {
    const thumb = project.images && project.images.length > 0
      ? `<img
           src="${project.images[0]}"
           alt="Aperçu — ${project.title}"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
         />
         <div class="card-placeholder" style="display:none">
           <span>${project.tags[0] || "CODE"}</span>
         </div>`
      : `<div class="card-placeholder">
           <span>${project.tags[0] || "CODE"}</span>
         </div>`;

    return `
      <article
        class="project-card"
        data-index="${index}"
        tabindex="0"
        role="button"
        aria-label="Voir le projet : ${project.title}"
      >
        <div class="card-media">
          ${thumb}
          <div class="card-tags">${project.tags.map(tagHTML).join("")}</div>
        </div>
        <div class="card-body">
          <p class="card-date mono">${project.date}</p>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.shortDescription}</p>
          <span class="card-cta">Voir le projet →</span>
        </div>
      </article>
    `;
  }).join("");

  // Événements : clic et clavier
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(parseInt(card.dataset.index)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(parseInt(card.dataset.index));
      }
    });
  });
}


// ══════════════════════════════════════════════════════════════
//  4. MODAL — Ouverture / fermeture
// ══════════════════════════════════════════════════════════════
function openModal(index) {
  const project = PROJECTS[index];
  if (!project) return;

  // Remplir les infos texte
  document.getElementById("modal-title").textContent       = project.title;
  document.getElementById("modal-date").textContent        = project.date;
  document.getElementById("modal-description").textContent = project.fullDescription;
  document.getElementById("modal-github-btn").href         = project.github;
  document.getElementById("modal-tags").innerHTML          = project.tags.map(tagHTML).join("");

  // Construire la liste de médias (vidéo en premier si présente)
  carouselItems = [];
  if (project.video) carouselItems.push({ type: "video", src: project.video });
  if (project.images) project.images.forEach(src => carouselItems.push({ type: "image", src }));

  renderCarousel();

  // Afficher
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("active");
  overlay.removeAttribute("aria-hidden");
  document.body.classList.add("modal-open");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  // Vider le carousel (stoppe les vidéos YouTube)
  document.getElementById("carousel-track").innerHTML = "";
}


// ══════════════════════════════════════════════════════════════
//  5. CAROUSEL
// ══════════════════════════════════════════════════════════════
function renderCarousel() {
  const track   = document.getElementById("carousel-track");
  const dots    = document.getElementById("carousel-dots");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (carouselItems.length === 0) {
    track.innerHTML = `<div class="carousel-empty">Pas de média pour ce projet</div>`;
    dots.innerHTML  = "";
    prevBtn.hidden  = true;
    nextBtn.hidden  = true;
    return;
  }

  // Créer les slides
  track.innerHTML = carouselItems.map((item, i) => {
    if (item.type === "video") {
      return `<div class="slide" data-i="${i}">
        <iframe
          src="${item.src}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="slide-video"
          title="Vidéo du projet"
        ></iframe>
      </div>`;
    } else {
      return `<div class="slide" data-i="${i}">
        <img src="${item.src}" alt="Screenshot ${i + 1}" class="slide-img"
             onerror="this.src=''; this.alt='Image non trouvée'" />
      </div>`;
    }
  }).join("");

  // Points de navigation
  const showNav = carouselItems.length > 1;
  prevBtn.hidden = !showNav;
  nextBtn.hidden = !showNav;

  dots.innerHTML = showNav
    ? carouselItems.map((_, i) => `<button class="dot" aria-label="Slide ${i + 1}"></button>`).join("")
    : "";

  dots.querySelectorAll(".dot").forEach((dot, i) => {
    dot.addEventListener("click", () => goTo(i));
  });

  prevBtn.onclick = () => goTo(currentSlide - 1);
  nextBtn.onclick = () => goTo(currentSlide + 1);

  goTo(0);
}

function goTo(i) {
  const slides = document.querySelectorAll(".slide");
  const dots   = document.querySelectorAll(".dot");
  if (!slides.length) return;

  currentSlide = (i + slides.length) % slides.length;

  slides.forEach((s, idx) => s.classList.toggle("active", idx === currentSlide));
  dots.forEach((d, idx)   => d.classList.toggle("active", idx === currentSlide));
}


// ══════════════════════════════════════════════════════════════
//  6. NAVIGATION — Effet de scroll
// ══════════════════════════════════════════════════════════════
function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Appliquer au chargement
}


// ══════════════════════════════════════════════════════════════
//  7. EVENT LISTENERS GLOBAUX
// ══════════════════════════════════════════════════════════════
document.getElementById("modal-close").addEventListener("click", closeModal);

// Clic en dehors du modal → fermer
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});

// Touche Echap → fermer
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});


// ══════════════════════════════════════════════════════════════
//  8. INITIALISATION
// ══════════════════════════════════════════════════════════════
applyConfig();
renderSkills();
renderProjects();
initNav();
