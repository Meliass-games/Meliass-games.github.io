// ============================================================
//  js/main.js — Logique du site
//  Tu n'as pas à modifier ce fichier pour ajouter des projets.
// ============================================================

"use strict";

// ── État global ─────────────────────────────────────────────
let carouselItems = [];
let currentSlide  = 0;
let currentLang   = localStorage.getItem("portfolio-lang") || "fr";


// ══════════════════════════════════════════════════════════════
//  1. TRADUCTION — Helpers
// ══════════════════════════════════════════════════════════════

// Raccourci pour récupérer une chaîne traduite
function T(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || (TRANSLATIONS["fr"] && TRANSLATIONS["fr"][key])
    || key;
}

// Met à jour tous les éléments portant data-i18n
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = T(key);
  });
}

// Bascule la langue et rafraîchit tout
function toggleLang() {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("portfolio-lang", currentLang);
  document.documentElement.lang = currentLang;

  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = currentLang === "fr" ? "EN" : "FR";

  applyI18n();
  applyConfig();       // Recharge bio / titre dans la bonne langue
  renderProjects();    // Recharge les cartes (texte CTA traduit)
}


// ══════════════════════════════════════════════════════════════
//  2. CONFIG — Applique les infos de SITE_CONFIG dans le DOM
// ══════════════════════════════════════════════════════════════
function applyConfig() {
  const c = SITE_CONFIG;

  // <title> + lang du document
  document.title      = `${c.name} — ${currentLang === "en" ? c.title_en || c.title : c.title}`;
  document.documentElement.lang = currentLang;

  // Navigation
  setTextById("site-name", c.name);

  // Hero
  setTextById("hero-name",  c.name);
  setTextById("hero-title", currentLang === "en" ? (c.title_en || c.title) : c.title);
  setTextById("hero-bio",   currentLang === "en" ? (c.bio_en   || c.bio)   : c.bio);
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
    const el = document.getElementById("contact-linkedin-link");
    if (el) el.style.display = "none";
  }

  // Footer
  setTextById("footer-name", c.name);

  // Bouton de langue — affiche l'autre langue disponible
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = currentLang === "fr" ? "EN" : "FR";
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
//  3. COMPÉTENCES
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
//  4. PROJETS — Rendu des cartes
// ══════════════════════════════════════════════════════════════
function tagHTML(tag) {
  const colors = TAG_COLORS[tag] || { bg: "#EDE8D0", text: "#5A4810" };
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
        aria-label="${project.title}"
      >
        <div class="card-media">
          ${thumb}
          <div class="card-tags">${project.tags.map(tagHTML).join("")}</div>
        </div>
        <div class="card-body">
          <p class="card-date mono">${project.date}</p>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.shortDescription}</p>
          <span class="card-cta">${T("card_cta")}</span>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click",   () => openModal(parseInt(card.dataset.index)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(parseInt(card.dataset.index)); }
    });
  });
}


// ══════════════════════════════════════════════════════════════
//  5. MODAL
// ══════════════════════════════════════════════════════════════
function openModal(index) {
  const project = PROJECTS[index];
  if (!project) return;

  document.getElementById("modal-title").textContent       = project.title;
  document.getElementById("modal-date").textContent        = project.date;
  document.getElementById("modal-description").textContent = project.fullDescription;
  document.getElementById("modal-github-btn").href         = project.github || "#";
  document.getElementById("modal-tags").innerHTML          = project.tags.map(tagHTML).join("");

  // Masquer le bouton GitHub si pas de lien
  const ghBtn = document.getElementById("modal-github-btn");
  if (ghBtn) ghBtn.style.display = project.github ? "" : "none";

  carouselItems = [];
  if (project.video)  carouselItems.push({ type: "video", src: project.video });
  if (project.images) project.images.forEach(src => carouselItems.push({ type: "image", src }));

  renderCarousel();

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
  document.getElementById("carousel-track").innerHTML = "";
}


// ══════════════════════════════════════════════════════════════
//  6. CAROUSEL
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

  track.innerHTML = carouselItems.map((item, i) => {
    if (item.type === "video") {
      return `<div class="slide" data-i="${i}">
        <iframe src="${item.src}" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen class="slide-video" title="Vidéo du projet"></iframe>
      </div>`;
    }
    return `<div class="slide" data-i="${i}">
      <img src="${item.src}" alt="Screenshot ${i + 1}" class="slide-img"
           onerror="this.src=''; this.alt='Image non trouvée'" />
    </div>`;
  }).join("");

  const showNav  = carouselItems.length > 1;
  prevBtn.hidden = !showNav;
  nextBtn.hidden = !showNav;

  dots.innerHTML = showNav
    ? carouselItems.map((_, i) => `<button class="dot" aria-label="Slide ${i + 1}"></button>`).join("")
    : "";

  dots.querySelectorAll(".dot").forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
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
//  7. NAVIGATION — Effet scroll
// ══════════════════════════════════════════════════════════════
function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}


// ══════════════════════════════════════════════════════════════
//  8. EVENT LISTENERS
// ══════════════════════════════════════════════════════════════
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
document.getElementById("lang-toggle").addEventListener("click", toggleLang);


// ══════════════════════════════════════════════════════════════
//  9. INITIALISATION
// ══════════════════════════════════════════════════════════════
applyConfig();
applyI18n();
renderSkills();
renderProjects();
initNav();
