"use strict";

// ── État global ─────────────────────────────────────────────
let carouselItems = [];
let currentSlide  = 0;
let currentLang   = localStorage.getItem("portfolio-lang") || "fr";


// ══════════════════════════════════════════════════════════════
//  1. TRADUCTION
// ══════════════════════════════════════════════════════════════
function T(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
      || (TRANSLATIONS["fr"]        && TRANSLATIONS["fr"][key])
      || key;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = T(el.getAttribute("data-i18n"));
  });
}

function toggleLang() {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("portfolio-lang", currentLang);
  document.documentElement.lang = currentLang;
  document.getElementById("lang-toggle").textContent = currentLang === "fr" ? "EN" : "FR";
  applyI18n();
  applyConfig();
  renderProjects();
}


// ══════════════════════════════════════════════════════════════
//  2. CONFIG
// ══════════════════════════════════════════════════════════════
function applyConfig() {
  const c = SITE_CONFIG;
  const isEn = currentLang === "en";

  document.title = `${c.name} — ${isEn ? (c.title_en || c.title) : c.title}`;
  document.documentElement.lang = currentLang;

  setTextById("site-name",  c.name);
  setTextById("hero-name",  c.name);
  setTextById("hero-title", isEn ? (c.title_en || c.title) : c.title);
  setTextById("hero-bio",   isEn ? (c.bio_en   || c.bio)   : c.bio);
  setHrefById("hero-github-link", c.github);

  setTextById("contact-email-text", c.email);
  setHrefById("contact-email-link", "mailto:" + c.email);
  setHrefById("contact-github-link", c.github);

  if (c.linkedin) {
    setHrefById("contact-linkedin-link", c.linkedin);
  } else {
    const el = document.getElementById("contact-linkedin-link");
    if (el) el.style.display = "none";
  }

  setTextById("footer-name", c.name);

  // Noms de fichiers dans le picker
  const frName = document.getElementById("cv-picker-fr-name");
  const enName = document.getElementById("cv-picker-en-name");
  if (frName) frName.textContent = c.cv || "cv.pdf";
  if (enName) enName.textContent = c.cv_en || "cv-en.pdf";

  // Liens de téléchargement dans le picker
  const pickerFr = document.getElementById("cv-picker-fr");
  const pickerEn = document.getElementById("cv-picker-en");
  if (pickerFr) { pickerFr.href = c.cv || "cv.pdf"; pickerFr.download = c.cv || "cv.pdf"; }
  if (pickerEn) { pickerEn.href = c.cv_en || "cv-en.pdf"; pickerEn.download = c.cv_en || "cv-en.pdf"; }

  document.getElementById("lang-toggle").textContent = currentLang === "fr" ? "EN" : "FR";
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
//  3. CV PICKER
// ══════════════════════════════════════════════════════════════
function openCvPicker() {
  const overlay = document.getElementById("cv-picker-overlay");
  overlay.removeAttribute("hidden");
  document.body.classList.add("modal-open");
  document.getElementById("cv-picker-close").focus();
}

function closeCvPicker() {
  document.getElementById("cv-picker-overlay").setAttribute("hidden", "");
  document.body.classList.remove("modal-open");
}

// Ferme le picker après le clic sur un lien (le téléchargement démarre)
["cv-picker-fr", "cv-picker-en"].forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    setTimeout(closeCvPicker, 200);
  });
});

document.getElementById("cv-picker-close").addEventListener("click", closeCvPicker);
document.getElementById("cv-picker-overlay").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeCvPicker();
});

// Tous les éléments qui déclenchent le picker
document.querySelectorAll(".cv-trigger").forEach(el => {
  el.addEventListener("click", openCvPicker);
});


// ══════════════════════════════════════════════════════════════
//  4. COMPÉTENCES
// ══════════════════════════════════════════════════════════════
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-tag">
      <span class="skill-name">${s.name}</span>
      <span class="skill-level mono">${s.level}</span>
    </div>
  `).join("");
}


// ══════════════════════════════════════════════════════════════
//  5. PROJETS
// ══════════════════════════════════════════════════════════════
function tagHTML(tag) {
  const c = TAG_COLORS[tag] || { bg: "#EDE8D0", text: "#5A4810" };
  return `<span class="tag" style="background:${c.bg};color:${c.text}">${tag}</span>`;
}

function getDesc(project, field) {
  const enField = field + "_en";
  return (currentLang === "en" && project[enField]) ? project[enField] : project[field] || "";
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (!PROJECTS || PROJECTS.length === 0) {
    grid.innerHTML = `<p class="empty-state">Aucun projet à afficher.</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((project, index) => {
    const thumb = project.images && project.images.length > 0
      ? `<img src="${project.images[0]}" alt="${project.title}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
         <div class="card-placeholder" style="display:none"><span>${project.tags[0] || "CODE"}</span></div>`
      : `<div class="card-placeholder"><span>${project.tags[0] || "CODE"}</span></div>`;

    return `
      <article class="project-card" data-index="${index}" tabindex="0" role="button" aria-label="${project.title}">
        <div class="card-media">
          ${thumb}
          <div class="card-tags">${project.tags.map(tagHTML).join("")}</div>
        </div>
        <div class="card-body">
          <p class="card-date mono">${project.date}</p>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${getDesc(project, "shortDescription")}</p>
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
//  6. MODAL
// ══════════════════════════════════════════════════════════════
function openModal(index) {
  const p = PROJECTS[index];
  if (!p) return;

  document.getElementById("modal-title").textContent       = p.title;
  document.getElementById("modal-date").textContent        = p.date;
  document.getElementById("modal-description").textContent = getDesc(p, "fullDescription");
  document.getElementById("modal-tags").innerHTML          = p.tags.map(tagHTML).join("");

  const ghBtn = document.getElementById("modal-github-btn");
  if (p.github) { ghBtn.href = p.github; ghBtn.style.display = ""; }
  else           { ghBtn.style.display = "none"; }

  carouselItems = [];
  if (p.video)  carouselItems.push({ type: "video", src: p.video });
  if (p.images) p.images.forEach(src => carouselItems.push({ type: "image", src }));

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
//  7. CAROUSEL
// ══════════════════════════════════════════════════════════════
function renderCarousel() {
  const track   = document.getElementById("carousel-track");
  const dots    = document.getElementById("carousel-dots");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (!carouselItems.length) {
    track.innerHTML = `<div class="carousel-empty">Pas de média</div>`;
    dots.innerHTML  = "";
    prevBtn.hidden  = true;
    nextBtn.hidden  = true;
    return;
  }

  track.innerHTML = carouselItems.map((item, i) =>
    item.type === "video"
      ? `<div class="slide" data-i="${i}">
           <iframe src="${item.src}" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen class="slide-video" title="Vidéo"></iframe>
         </div>`
      : `<div class="slide" data-i="${i}">
           <img src="${item.src}" alt="Screenshot ${i + 1}" class="slide-img"
                onerror="this.alt='Image non trouvée'" />
         </div>`
  ).join("");

  const showNav  = carouselItems.length > 1;
  prevBtn.hidden = !showNav;
  nextBtn.hidden = !showNav;
  dots.innerHTML = showNav
    ? carouselItems.map((_, i) => `<button class="dot" aria-label="Slide ${i + 1}"></button>`).join("")
    : "";

  dots.querySelectorAll(".dot").forEach((d, i) => d.addEventListener("click", () => goTo(i)));
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
//  8. NAVIGATION
// ══════════════════════════════════════════════════════════════
function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}


// ══════════════════════════════════════════════════════════════
//  9. EVENT LISTENERS
// ══════════════════════════════════════════════════════════════
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeCvPicker(); }
});
document.getElementById("lang-toggle").addEventListener("click", toggleLang);


// ══════════════════════════════════════════════════════════════
//  10. INITIALISATION
// ══════════════════════════════════════════════════════════════
applyConfig();
applyI18n();
renderSkills();
renderProjects();
initNav();
