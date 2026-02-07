const translations = {
  en: {
    role: "Product Designer",
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",
    nav_resume: "Resume",
    breadcrumb_home: "Home",
    breadcrumb_work: "Work",
    breadcrumb_current: "Project",
    footer_line: "Let’s work together.",
    project_title: "Design Science_03",
    project_body:
      "A publication-style case study highlighting the product journey and outcomes. This layout mirrors a hospitality editorial page with focus on imagery, pacing, and whitespace.",
    close: "Close",
  },
  ja: {
    role: "プロダクトデザイナー",
    nav_work: "作品",
    nav_about: "紹介",
    nav_contact: "連絡",
    nav_resume: "履歴書",
    breadcrumb_home: "ホーム",
    breadcrumb_work: "作品",
    breadcrumb_current: "プロジェクト",
    footer_line: "一緒に仕事をしましょう。",
    project_title: "デザインサイエンス_03",
    project_body:
      "プロダクトの歩みと成果を伝える出版風ケーススタディ。余白と写真のリズムを重視したレイアウトです。",
    close: "閉じる",
  },
  es: {
    role: "Diseñador de Producto",
    nav_work: "Trabajo",
    nav_about: "Acerca de",
    nav_contact: "Contacto",
    nav_resume: "Currículum",
    breadcrumb_home: "Inicio",
    breadcrumb_work: "Trabajo",
    breadcrumb_current: "Proyecto",
    footer_line: "Trabajemos juntos.",
    project_title: "Design Science_03",
    project_body:
      "Un caso de estudio con estética editorial que destaca el proceso y los resultados del producto, con énfasis en el ritmo visual y el uso del espacio en blanco.",
    close: "Cerrar",
  },
};

let currentLang = "en";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const charset = "01";
const loopHandles = new WeakMap();
const hoverTimeouts = new WeakMap();
let footerStatusTimer = null;

const randomizeText = (text) =>
  text
    .split("")
    .map((char) =>
      char === " " ? " " : charset[Math.floor(Math.random() * charset.length)]
    )
    .join("");

const easeInOut = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const scrambleToText = (
  element,
  finalText,
  { duration = 600, interval = 12 } = {}
) => {
  if (!element || prefersReducedMotion) {
    if (element) element.textContent = finalText;
    return;
  }

  element.classList.add("scramble-fade");
  window.clearTimeout(element.__scrambleFadeTimer);

  const total = finalText.length;
  const startTime = Date.now();
  const timer = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOut(progress);
    const revealCount = Math.floor(eased * total);
    const output = finalText
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < revealCount) return char;
        return charset[Math.floor(Math.random() * charset.length)];
      })
      .join("");

    element.textContent = output;
    if (progress >= 1) {
      clearInterval(timer);
      element.textContent = finalText;
      element.__scrambleFadeTimer = window.setTimeout(() => {
        element.classList.remove("scramble-fade");
      }, 200);
    }
  }, interval);
};

const startScrambleLoop = (element, duration = 1200) => {
  if (!element || prefersReducedMotion) return;
  const original = element.dataset.original || element.textContent;
  element.dataset.original = original;
  stopScrambleLoop(element);
  const timer = setInterval(() => {
    element.textContent = randomizeText(original);
  }, 30);
  loopHandles.set(element, timer);
  const timeout = setTimeout(() => {
    stopScrambleLoop(element);
    scrambleToText(element, original, { duration: 500 });
  }, duration);
  hoverTimeouts.set(element, timeout);
};

const stopScrambleLoop = (element) => {
  const timer = loopHandles.get(element);
  if (timer) clearInterval(timer);
  loopHandles.delete(element);
  const timeout = hoverTimeouts.get(element);
  if (timeout) clearTimeout(timeout);
  hoverTimeouts.delete(element);
};

const setupHoverScramble = () => {
  const targets = document.querySelectorAll("a[data-scramble]");
  targets.forEach((target) => {
    target.dataset.original = target.dataset.original || target.textContent;
    target.addEventListener("mouseenter", () => startScrambleLoop(target, 1200));
    target.addEventListener("mouseleave", () => {
      stopScrambleLoop(target);
      scrambleToText(target, target.dataset.original, { duration: 400 });
    });
  });
};

const setupRoleRotation = () => {
  const role = document.querySelector(".brand__role");
  if (!role) return;
  const roleData = window.SITE_DATA?.person?.rotatingRole;
  const phrases =
    roleData?.phrases || [
      { text: "Product Designer", duration: 3600 },
      { text: "Pixel Pusher", duration: 2400 },
      { text: "Making It Pop", duration: 3200 },
      { text: "Design Storyteller", duration: 4200 },
    ];
  const colors =
    roleData?.colors || ["#ff3b30", "#ff9500", "#34c759", "#5e5ce6", "#bf5af2"];
  let index = 0;
  let lastColor = "";
  let rotationTimer = null;

  const pickColor = () => {
    const options = colors.filter((color) => color !== lastColor);
    const nextColor = options[Math.floor(Math.random() * options.length)];
    lastColor = nextColor;
    return nextColor;
  };

  const scheduleNext = () => {
    if (rotationTimer) window.clearTimeout(rotationTimer);
    const current = phrases[index];
    rotationTimer = window.setTimeout(() => {
      index = (index + 1) % phrases.length;
      const next = phrases[index];
      role.style.color = pickColor();
      role.dataset.original = next.text;
      scrambleToText(role, next.text, { duration: 600, interval: 12 });
      scheduleNext();
    }, current.duration);
  };

  role.dataset.original = phrases[0].text;
  role.style.color = pickColor();
  scrambleToText(role, phrases[0].text, { duration: 600, interval: 12 });
  scheduleNext();
};

const setupCursor = () => {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor || prefersReducedMotion) return;
  const move = (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  };
  window.addEventListener("mousemove", move);
  window.addEventListener("mousedown", () => cursor.classList.add("is-active"));
  window.addEventListener("mouseup", () => cursor.classList.remove("is-active"));
  window.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
};

const setupScrollProgress = () => {
  const bar = document.querySelector(".scroll-progress__bar");
  if (!bar) return;
  const update = () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? scrollTop / max : 0;
    bar.style.transform = `scaleY(${progress})`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

const setupBackToTop = () => {
  const button = document.querySelector(".back-to-top");
  if (!button) return;
  const update = () => {
    const y =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    button.classList.toggle("is-visible", y > 360);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const setupPageTransitions = () => {
  document.addEventListener("click", (event) => {
    if (document.body.classList.contains("is-intro")) return;
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    if (link.target === "_blank" || link.hasAttribute("download")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;
    event.preventDefault();
    document.body.classList.add("is-navigating");
    setTimeout(() => {
      window.location.href = url.href;
    }, 150);
  });
};

const setupLanguageSwitch = () => {
  const buttons = document.querySelectorAll(".lang-switch__btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (!translations[lang]) return;
      document.documentElement.lang = lang;
      buttons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      applyLanguage(lang);
    });
  });
};

const setupMobileMenu = () => {
  const toggle = document.querySelector(".menu-toggle");
  const actions = document.querySelector(".site-actions");
  const closeButton = document.querySelector(".drawer-close");
  const backdrop = document.querySelector(".drawer-backdrop");
  const links = document.querySelectorAll(".site-actions a");
  if (!toggle || !actions) return;
  toggle.addEventListener("click", () => {
    actions.classList.toggle("is-open");
    actions.classList.remove("is-closing");
    backdrop?.classList.toggle("is-active", actions.classList.contains("is-open"));
    document.body.classList.toggle(
      "is-drawer-open",
      actions.classList.contains("is-open")
    );
  });
  const closeDrawer = () => {
    actions.classList.add("is-closing");
    actions.classList.remove("is-open");
    backdrop?.classList.remove("is-active");
    document.body.classList.remove("is-drawer-open");
    setTimeout(() => actions.classList.remove("is-closing"), 350);
  };
  closeButton?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });
};

const applyLanguage = (lang = "en") => {
  currentLang = lang;
  const dictionary = translations[lang];
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!dictionary[key]) return;
    element.textContent = dictionary[key];
  });

  applySiteData(lang);
  setupFooterStatusRotation();

  const scrambleTargets = document.querySelectorAll("[data-scramble]");
  scrambleTargets.forEach((target) => {
    target.dataset.original = target.textContent;
  });
};

const applySiteData = (lang = "en") => {
  const site = window.SITE_DATA;
  if (!site) return;

  const person = site.person;
  const nameEl = document.querySelector('[data-site="name"]');
  if (person?.name && nameEl) {
    nameEl.textContent = person.name;
  }

  const role = person?.role?.[lang];
  const roleEl = document.querySelector('[data-site="role"]');
  if (role && roleEl) {
    roleEl.textContent = role;
  }

  const title = site.pageTitles?.project;
  if (title) {
    document.title = title;
  }

  const footer = site.footer;
  const footerLine = footer?.line?.[lang];
  if (footerLine) {
    document.querySelectorAll('[data-i18n="footer_line"]').forEach((element) => {
      element.textContent = footerLine;
    });
  }

  const statusList = footer?.status?.[lang] || footer?.status?.en;
  const statusItem = Array.isArray(statusList) ? statusList[0] : null;
  const statusEl = document.querySelector('[data-site="status"]');
  if (statusItem?.text && statusEl) {
    statusEl.textContent = statusItem.text;
  }

  const email = footer?.email;
  const emailEl = document.querySelector('[data-site="email"]');
  if (email && emailEl) {
    emailEl.textContent = email;
    emailEl.setAttribute("href", `mailto:${email}`);
  }

  const copyright = footer?.copyright;
  const copyrightEl = document.querySelector('[data-site="copyright"]');
  if (copyright && copyrightEl) {
    copyrightEl.textContent = copyright;
  }
};

const setupFooterStatusRotation = () => {
  const statusEl = document.querySelector('[data-site="status"]');
  const statusData = window.SITE_DATA?.footer?.status;
  if (!statusEl || !statusData) return;
  const raw = statusData[currentLang] || statusData.en || [];
  const phrases = raw.map((item) =>
    typeof item === "string" ? { text: item, duration: 3600 } : item
  );
  if (!phrases.length) return;
  if (footerStatusTimer) window.clearTimeout(footerStatusTimer);
  let index = 0;

  const scheduleNext = () => {
    const current = phrases[index];
    footerStatusTimer = window.setTimeout(() => {
      index = (index + 1) % phrases.length;
      const next = phrases[index];
      statusEl.dataset.original = next.text;
      scrambleToText(statusEl, next.text, { duration: 600, interval: 12 });
      scheduleNext();
    }, current.duration || 3600);
  };

  statusEl.dataset.original = phrases[0].text;
  scrambleToText(statusEl, phrases[0].text, { duration: 600, interval: 12 });
  scheduleNext();
};


const setupHeroCarousel = () => {
  const hero = document.querySelector("[data-carousel]");
  if (!hero) return;
  const imageEl = hero.querySelector("img");
  const prev = hero.querySelector(".project-hero__nav--prev");
  const next = hero.querySelector(".project-hero__nav--next");
  let images = [];
  if (hero.dataset.images) {
    try {
      images = JSON.parse(decodeURIComponent(hero.dataset.images));
    } catch {
      images = [];
    }
  }
  if (!images.length && imageEl?.src) {
    images = [imageEl.src];
  }
  let index = 0;

  const showImage = (nextIndex) => {
    if (!imageEl) return;
    hero.classList.add("is-transitioning");
    window.setTimeout(() => {
      index = (nextIndex + images.length) % images.length;
      imageEl.src = images[index];
      hero.classList.remove("is-transitioning");
    }, 220);
  };

  prev?.addEventListener("click", () => showImage(index - 1));
  next?.addEventListener("click", () => showImage(index + 1));

  setupDragSwipe(hero, {
    onSwipeLeft: () => showImage(index + 1),
    onSwipeRight: () => showImage(index - 1),
  });
};

const setupDragSwipe = (element, { onSwipeLeft, onSwipeRight }) => {
  let isDown = false;
  let startX = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  let hasDragged = false;

  const onPointerDown = (event) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    if (event.target.closest(".project-hero__nav")) return;
    isDown = true;
    element.classList.add("is-dragging");
    startX = event.clientX;
    lastX = startX;
    lastTime = performance.now();
    velocity = 0;
    hasDragged = false;
    event.preventDefault();
    element.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!isDown) return;
    const now = performance.now();
    const deltaX = event.clientX - lastX;
    const dt = now - lastTime || 16;
    velocity = deltaX / dt;
    lastX = event.clientX;
    lastTime = now;
    if (Math.abs(event.clientX - startX) > 6) {
      hasDragged = true;
    }
  };

  const onPointerUp = (event) => {
    if (!isDown) return;
    isDown = false;
    element.classList.remove("is-dragging");
    element.releasePointerCapture?.(event.pointerId);
    if (!hasDragged) return;
    const totalDelta = event.clientX - startX;
    const flick = Math.abs(velocity) > 0.35;
    if (totalDelta < -60 || (flick && velocity < 0)) {
      onSwipeLeft?.();
    } else if (totalDelta > 60 || (flick && velocity > 0)) {
      onSwipeRight?.();
    }
  };

  element.addEventListener("pointerdown", onPointerDown);
  element.addEventListener("pointermove", onPointerMove);
  element.addEventListener("pointerup", onPointerUp);
  element.addEventListener("pointerleave", onPointerUp);
  element.addEventListener("pointercancel", onPointerUp);
  element.addEventListener("dragstart", (event) => event.preventDefault());
};

const projectTemplate = document.querySelector("#project-template");
let projectData = null;

const getReadTime = (sections, data) => {
  const words = [];
  sections.forEach((section) => {
    if (typeof section.body === "string") words.push(section.body);
    if (Array.isArray(section.items)) words.push(section.items.join(" "));
  });
  if (Array.isArray(data?.tldr?.bullets)) {
    words.push(data.tldr.bullets.join(" "));
  }
  const text = words.join(" ");
  const count = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(count / 200));
  return `${minutes} min read`;
};

const createHeroPlaceholder = (label) =>
  `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'%3E%3Crect width='1280' height='720' fill='%23e6e6e6'/%3E%3Ctext x='60' y='100' font-family='Helvetica Neue, Arial, sans-serif' font-size='32' fill='%23111111'%3E${encodeURIComponent(
    label
  )}%3C/text%3E%3C/svg%3E`;

const renderProject = () => {
  if (!projectTemplate || !projectData) return;
  const heroImages =
    (Array.isArray(projectData.heroImages) && projectData.heroImages) ||
    (Array.isArray(projectData.images) && projectData.images) ||
    (Array.isArray(projectData.showcase) && projectData.showcase) ||
    [];
  const heroImagesSafe = heroImages.length
    ? heroImages
    : [createHeroPlaceholder(projectData.title || "Project Hero")];
  const heroImagesEncoded = encodeURIComponent(JSON.stringify(heroImagesSafe));
  const showcaseItems = getShowcaseItems(projectData);
  const sections = getProjectSections(projectData);
  const readTime = getReadTime(sections, projectData);
  const toolsList = Array.isArray(projectData.tools) && projectData.tools.length
    ? projectData.tools
    : ["Figma", "FigJam", "Notion"];
  const heroCaption = `${projectData.type || "Project"} · ${
    projectData.year || ""
  } · ${toolsList.slice(0, 3).join(", ")}`;

  projectTemplate.innerHTML = `
    <div class="project-hero" data-carousel data-images="${heroImagesEncoded}">
      <button
        type="button"
        class="project-hero__nav project-hero__nav--prev"
        aria-label="Previous image"
      >
        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      <img src="${heroImagesSafe[0]}" alt="Project hero image" />
      <button
        type="button"
        class="project-hero__nav project-hero__nav--next"
        aria-label="Next image"
      >
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="project-hero__caption" data-auto-translate="true">
      ${heroCaption}
    </div>
    <nav class="project-nav" aria-label="Section navigation">
      <div class="project-readtime" data-readtime>${readTime}</div>
      <ol>
        ${sections
          .filter((section) => section.includeInNav)
          .map(
            (section) => `
          <li>
            <a href="#${section.id}" data-scramble data-auto-translate="true">
              ${section.label}
            </a>
          </li>
        `
          )
          .join("")}
      </ol>
    </nav>
    <div class="project-accordion" aria-label="Project details">
      ${sections
        .filter((section) => section.includeInNav)
        .map(
          (section) => `
        <div class="project-accordion__item" data-section-id="${section.id}">
          <button
            type="button"
            class="project-accordion__toggle"
            aria-expanded="false"
            data-auto-translate="true"
          >
            ${section.label}
            <span class="project-accordion__icon" aria-hidden="true"></span>
          </button>
          <div class="project-accordion__panel">
            ${renderSectionBody(section, projectData)}
          </div>
        </div>
      `
        )
        .join("")}
    </div>
    <div class="project-body">
      ${sections
        .map(
          (section) => `
        <section id="${section.id}" class="project-section-anchor project-section">
          <h4 class="project-section__title" data-auto-translate="true">
            ${section.label}
          </h4>
          ${renderSectionBody(section, projectData)}
        </section>
      `
        )
        .join("")}
    </div>
  `;

  renderShowcase(showcaseItems);
  renderShowcaseModal();
  setupHeroCarousel();
  setupSectionObserver();
  setupAccordion();
  setupShowcaseCarousel();
  setupShowcaseModal();
};

const getProjectSections = (data) => {
  const base = Array.isArray(data.sections) ? data.sections : [];
  const tools = Array.isArray(data.tools) && data.tools.length
    ? data.tools
    : ["Figma", "FigJam", "Notion", "Jira", "Storybook", "After Effects"];
  const hasTools = base.some((section) => section.id === "tools");
  if (!tools.length || hasTools) return base;

  const toolsSection = {
    id: "tools",
    label: "Tools",
    includeInNav: true,
    body: "",
    items: tools,
  };

  const solutionIndex = base.findIndex((section) => section.id === "solution");
  if (solutionIndex === -1) return [...base, toolsSection];
  return [
    ...base.slice(0, solutionIndex + 1),
    toolsSection,
    ...base.slice(solutionIndex + 1),
  ];
};

const renderSectionBody = (section, data) => {
  if (section.id === "tldr" && data.tldr?.bullets?.length) {
    const bullets = data.tldr.bullets.slice(0, 4);
    return `
      <ul class="project-section__list project-section__list--tldr">
        ${bullets
          .map((item) => `<li data-auto-translate="true">${item}</li>`)
          .join("")}
      </ul>
    `;
  }

  if (section.id === "tools" && Array.isArray(section.items)) {
    return `
      <ul class="project-section__list project-section__list--tools">
        ${section.items
          .map((item) => `<li data-auto-translate="true">${item}</li>`)
          .join("")}
      </ul>
    `;
  }

  return `
    <p class="project-section__text" data-auto-translate="true">
      ${section.body}
    </p>
  `;
};

const getShowcaseItems = (data) => {
  const defaultLabels = [
    {
      subtitle: "Core Flow",
      title: "Primary Entry",
      body: "First-touch experience with revised hierarchy and faster task entry.",
    },
    {
      subtitle: "System Detail",
      title: "Component Scale",
      body: "Tokenized spacing, typography, and states aligned to the design system.",
    },
    {
      subtitle: "Interaction",
      title: "Micro Motion",
      body: "Subtle transitions to support focus, depth, and clarity.",
    },
    {
      subtitle: "Edge Cases",
      title: "Recovery States",
      body: "Empty, error, and loading scenarios tuned for legibility.",
    },
    {
      subtitle: "Shipping View",
      title: "Final UI",
      body: "Polished UI pass with refined spacing and visual rhythm.",
    },
  ];
  const base = (data.showcase || data.images || []).map((image, index) => {
    const meta = defaultLabels[index % defaultLabels.length];
    return {
      title: meta.title,
      subtitle: meta.subtitle,
      body: meta.body,
      image,
      index: index + 1,
    };
  });
  if (base.length >= 5) return base.slice(0, 5);
  if (base.length === 0) {
    return Array.from({ length: 5 }, (_, index) => ({
      title: data.title,
      subtitle: "Work Showcase",
      body: "Additional project highlights.",
      image: createPlaceholder(`Showcase ${index + 1}`),
      index: index + 1,
    }));
  }
  const filled = [];
  for (let i = 0; i < 5; i += 1) {
    filled.push(base[i % base.length]);
  }
  return filled;
};

const createPlaceholder = (label) =>
  `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='1200'%3E%3Crect width='900' height='1200' fill='%23f0f0f0'/%3E%3Ctext x='48' y='120' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3E${encodeURIComponent(
    label
  )}%3C/text%3E%3C/svg%3E`;

const renderShowcase = (items) => {
  const showcase = document.querySelector("#project-showcase");
  if (!showcase) return;
  showcase.innerHTML = `
    <div class="showcase-track" tabindex="0">
      ${items
        .map(
          (item) => `
        <button
          type="button"
          class="showcase-card"
          data-title="${item.title}"
          data-subtitle="${item.subtitle}"
          data-body="${item.body}"
          data-image="${item.image}"
        >
          <span class="showcase-card__subtitle" data-auto-translate="true">
            ${item.subtitle}
          </span>
          <span class="showcase-card__title" data-auto-translate="true">
            ${item.title}
          </span>
          <span class="showcase-card__body" data-auto-translate="true">
            ${item.body}
          </span>
          <span class="showcase-card__media">
            <img src="${item.image}" alt="${item.title} showcase ${item.index}" />
          </span>
          <span class="showcase-card__action">+</span>
        </button>
      `
        )
        .join("")}
    </div>
    <div class="showcase-controls">
      <button type="button" class="showcase-control" data-dir="-1" aria-label="Previous">
        <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button type="button" class="showcase-control" data-dir="1" aria-label="Next">
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  `;
};

const renderShowcaseModal = () => {
  if (document.querySelector(".showcase-modal")) return;
  const modal = document.createElement("div");
  modal.className = "showcase-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="showcase-modal__backdrop"></div>
    <div class="showcase-modal__panel" role="dialog" aria-modal="true">
      <button type="button" class="showcase-modal__close" aria-label="Close">
        <span class="project-accordion__icon" aria-hidden="true"></span>
      </button>
      <div class="showcase-modal__content">
        <p class="showcase-modal__label" data-auto-translate="true"></p>
        <h3 class="showcase-modal__title" data-auto-translate="true"></h3>
        <p class="showcase-modal__body" data-auto-translate="true"></p>
        <div class="showcase-modal__media">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

const setupSectionObserver = () => {
  const links = Array.from(document.querySelectorAll(".project-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const clearActive = () => {
    links.forEach((link) => link.classList.remove("is-active"));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          clearActive();
          const activeLink = links.find(
            (link) => link.getAttribute("href") === `#${entry.target.id}`
          );
          if (activeLink) activeLink.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));

  if (links[0]) links[0].classList.add("is-active");
};

const setupAccordion = () => {
  const items = document.querySelectorAll(".project-accordion__item");
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
  let openedDefault = false;
  items.forEach((item) => {
    const toggle = item.querySelector(".project-accordion__toggle");
    const panel = item.querySelector(".project-accordion__panel");
    if (!toggle || !panel) return;
    if (isMobile && !openedDefault && item.dataset.sectionId === "tldr") {
      item.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      panel.style.opacity = "1";
      openedDefault = true;
    }
    toggle.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
      panel.style.opacity = isOpen ? "1" : "0";
    });
  });
};

const setupHeaderScroll = () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  let lastY = window.scrollY;
  let isHidden = false;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const delta = currentY - lastY;
    if (currentY < 40) {
      isHidden = false;
      header.classList.remove("is-hidden");
    } else if (delta > 6 && currentY > 120) {
      isHidden = true;
      header.classList.add("is-hidden");
    } else if (delta < -6) {
      isHidden = false;
      header.classList.remove("is-hidden");
    }
    lastY = currentY;
  });

  window.addEventListener("mousemove", (event) => {
    if (event.clientY < 80 && isHidden) {
      isHidden = false;
      header.classList.remove("is-hidden");
    }
  });
};

const getProjectSlug = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("project");
};

const loadProject = () => {
  const projects = window.PROJECTS || [];
  const slug = getProjectSlug();
  projectData = projects.find((project) => project.slug === slug) || projects[0];
  if (projectData) {
    renderProject();
  } else if (projectTemplate) {
    projectTemplate.innerHTML = `<p>Project data unavailable.</p>`;
  }
};

const setupShowcaseCarousel = () => {
  const track = document.querySelector(".showcase-track");
  if (!track) return;
  const controls = document.querySelectorAll(".showcase-control");
  const cards = Array.from(track.querySelectorAll(".showcase-card"));

  const scrollByCard = (direction) => {
    if (!cards.length) return;
    const cardWidth = cards[0].getBoundingClientRect().width + 24;
    track.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  };

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      scrollByCard(Number(control.dataset.dir));
    });
  });

  track.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaX) < 1) return;
      event.preventDefault();
      track.scrollBy({ left: event.deltaX, behavior: "smooth" });
    },
    { passive: false }
  );

  setupDragScroll(track);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { root: track, threshold: 0.6 }
  );

  cards.forEach((card) => observer.observe(card));
};

const setupDragScroll = (track) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  let momentumId = null;
  let hasDragged = false;

  const stopMomentum = () => {
    if (momentumId) cancelAnimationFrame(momentumId);
    momentumId = null;
    track.classList.remove("is-momentum");
  };

  const onPointerDown = (event) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    if (event.target.closest(".showcase-control")) return;
    if (event.target.closest(".showcase-card__action")) return;
    isDown = true;
    track.classList.add("is-dragging");
    track.classList.remove("is-momentum");
    startX = event.clientX;
    lastX = startX;
    scrollLeft = track.scrollLeft;
    lastTime = performance.now();
    velocity = 0;
    hasDragged = false;
    stopMomentum();
    event.preventDefault();
    track.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!isDown) return;
    const now = performance.now();
    const dx = event.clientX - startX;
    track.scrollLeft = scrollLeft - dx;
    const deltaX = event.clientX - lastX;
    const dt = now - lastTime || 16;
    const instantVelocity = deltaX / dt;
    velocity = velocity * 0.7 + instantVelocity * 0.3;
    lastX = event.clientX;
    lastTime = now;
    if (Math.abs(dx) > 6) {
      hasDragged = true;
    }
  };

  const onPointerUp = (event) => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("is-dragging");
    track.releasePointerCapture?.(event.pointerId);
    if (!hasDragged) return;
    const friction = 0.965;
    const minVelocity = 0.01;
    const maxVelocity = 1.8;
    velocity = Math.max(Math.min(velocity, maxVelocity), -maxVelocity);

    const step = () => {
      velocity *= friction;
      track.scrollLeft -= velocity * 20;
      if (Math.abs(velocity) > minVelocity) {
        track.classList.add("is-momentum");
        momentumId = requestAnimationFrame(step);
      } else {
        track.classList.remove("is-momentum");
        momentumId = null;
      }
    };

    if (Math.abs(velocity) > minVelocity) {
      track.classList.add("is-momentum");
      momentumId = requestAnimationFrame(step);
    }
  };

  track.addEventListener("pointerdown", onPointerDown);
  track.addEventListener("pointermove", onPointerMove);
  track.addEventListener("pointerup", onPointerUp);
  track.addEventListener("pointerleave", onPointerUp);
  track.addEventListener("pointercancel", onPointerUp);
  track.addEventListener("dragstart", (event) => event.preventDefault());
};

const setupShowcaseModal = () => {
  const modal = document.querySelector(".showcase-modal");
  const backdrop = document.querySelector(".showcase-modal__backdrop");
  const closeButton = document.querySelector(".showcase-modal__close");
  const title = document.querySelector(".showcase-modal__title");
  const label = document.querySelector(".showcase-modal__label");
  const body = document.querySelector(".showcase-modal__body");
  const media = document.querySelector(".showcase-modal__media img");
  const cards = document.querySelectorAll(".showcase-card");
  if (!modal || !media) return;

  const open = (card) => {
    const subtitleEl = card.querySelector(".showcase-card__subtitle");
    const titleEl = card.querySelector(".showcase-card__title");
    const bodyEl = card.querySelector(".showcase-card__body");
    label.textContent = subtitleEl?.textContent || "";
    title.textContent = titleEl?.textContent || "";
    body.textContent = bodyEl?.textContent || "";
    media.src = card.dataset.image || "";
    media.alt = title.textContent || "";
    document.body.classList.add("is-modal-open");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    modal.classList.add("is-closing");
    document.body.classList.remove("is-modal-open");
    window.setTimeout(() => {
      modal.classList.remove("is-open");
      modal.classList.remove("is-closing");
      modal.setAttribute("aria-hidden", "true");
    }, 300);
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (document.querySelector(".showcase-track")?.classList.contains("is-dragging")) {
        return;
      }
      open(card);
    });
  });

  closeButton?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      close();
    }
  });
};

loadProject();
applyLanguage("en");
setupCursor();
setupHoverScramble();
setupLanguageSwitch();
setupHeroCarousel();
setupMobileMenu();
setupHeaderScroll();
setupRoleRotation();
setupFooterStatusRotation();
setupScrollProgress();
setupPageTransitions();
setupBackToTop();
