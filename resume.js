const translations = {
  en: {
    role: "Product Designer",
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",
    nav_resume: "Resume",
    resume_title: "Resume",
    resume_subtitle: "Clean, detailed overview of experience and skills.",
    resume_summary: "Summary",
    resume_download: "Download",
    resume_experience: "Experience",
    resume_education: "Education",
    resume_skills: "Skills",
    resume_tools: "Tools",
    resume_links: "Links",
    breadcrumb_home: "Home",
    breadcrumb_current: "Resume",
    footer_line: "Let’s work together.",
  },
  ja: {
    role: "プロダクトデザイナー",
    nav_work: "作品",
    nav_about: "紹介",
    nav_contact: "連絡",
    nav_resume: "履歴書",
    resume_title: "履歴書",
    resume_subtitle: "経験とスキルを簡潔にまとめた概要です。",
    resume_summary: "概要",
    resume_download: "ダウンロード",
    resume_experience: "経験",
    resume_education: "学歴",
    resume_skills: "スキル",
    resume_tools: "ツール",
    resume_links: "リンク",
    breadcrumb_home: "ホーム",
    breadcrumb_current: "履歴書",
    footer_line: "一緒に仕事をしましょう。",
  },
  es: {
    role: "Diseñador de Producto",
    nav_work: "Trabajo",
    nav_about: "Acerca de",
    nav_contact: "Contacto",
    nav_resume: "Currículum",
    resume_title: "Currículum",
    resume_subtitle: "Resumen claro de experiencia y habilidades.",
    resume_summary: "Resumen",
    resume_download: "Descargar",
    resume_experience: "Experiencia",
    resume_education: "Educación",
    resume_skills: "Habilidades",
    resume_tools: "Herramientas",
    resume_links: "Enlaces",
    breadcrumb_home: "Inicio",
    breadcrumb_current: "Currículum",
    footer_line: "Trabajemos juntos.",
  },
};

let currentLang = "en";
let footerStatusTimer = null;

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

  const title = site.pageTitles?.home;
  if (title) {
    document.title = title.replace("— Product Designer", "— Resume");
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

const applyLanguage = () => {
  const dictionary = translations[currentLang];
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!dictionary[key]) return;
    element.textContent = dictionary[key];
  });

  const scrambleTargets = document.querySelectorAll("[data-scramble]");
  scrambleTargets.forEach((target) => {
    target.dataset.original = target.textContent;
  });

  applySiteData(currentLang);
  setupFooterStatusRotation();
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
      currentLang = lang;
      document.documentElement.lang = lang;
      buttons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      applyLanguage();
    });
  });
};

const setupCursor = () => {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;
  const move = (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  };
  window.addEventListener("mousemove", move);
  window.addEventListener("mousedown", () => cursor.classList.add("is-active"));
  window.addEventListener("mouseup", () => cursor.classList.remove("is-active"));
  window.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
};

const setupHoverScramble = () => {
  const links = document.querySelectorAll(".site-nav a, .resume-links a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const original = link.dataset.original || link.textContent;
      link.dataset.original = original;
      scrambleToText(link, original, { duration: 600, interval: 12 });
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

  const openDrawer = () => {
    actions.classList.add("is-open");
    document.body.classList.add("is-drawer-open");
    backdrop?.classList.add("is-active");
  };

  const closeDrawer = () => {
    actions.classList.remove("is-open");
    actions.classList.add("is-closing");
    document.body.classList.remove("is-drawer-open");
    backdrop?.classList.remove("is-active");
    setTimeout(() => actions.classList.remove("is-closing"), 350);
  };

  toggle.addEventListener("click", openDrawer);
  closeButton?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
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

const scrambleToText = (element, finalText, { duration = 600, interval = 12 } = {}) => {
  if (!element) return;
  const charset = "01";
  const start = performance.now();
  const original = finalText;

  element.classList.add("scramble-fade");
  window.clearTimeout(element.__scrambleFadeTimer);

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const revealCount = Math.floor(progress * original.length);
    const nextText = original
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < revealCount) return original[index];
        return charset[Math.floor(Math.random() * charset.length)];
      })
      .join("");
    element.textContent = nextText;
    if (progress < 1) {
      setTimeout(() => requestAnimationFrame(tick), interval);
    } else {
      element.textContent = original;
      element.__scrambleFadeTimer = window.setTimeout(() => {
        element.classList.remove("scramble-fade");
      }, 200);
    }
  };

  requestAnimationFrame(tick);
};

const renderResume = () => {
  const data = window.RESUME_DATA;
  if (!data) return;

  const summary = document.querySelector("#resume-summary");
  if (summary) summary.textContent = data.summary || "";

  const experience = document.querySelector("#resume-experience");
  if (experience) {
    experience.innerHTML = (data.experience || [])
      .map(
        (item) => `
        <article class="resume-item">
          <button type="button" class="resume-item__toggle" aria-expanded="false">
            <div class="resume-item__header">
              <div>
                <h3>${item.role}</h3>
                <p>${item.company}</p>
              </div>
              <div class="resume-item__meta">
                <span>${item.location}</span>
                <span>${item.dates}</span>
              </div>
            </div>
            <span class="project-accordion__icon" aria-hidden="true"></span>
          </button>
          <div class="resume-item__panel">
            <ul>
              ${(item.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
      )
      .join("");
  }

  const education = document.querySelector("#resume-education");
  if (education) {
    education.innerHTML = (data.education || [])
      .map(
        (item) => `
        <article class="resume-item">
          <div class="resume-item__header">
            <div>
              <h3>${item.school}</h3>
              <p>${item.degree}</p>
            </div>
            <div class="resume-item__meta">
              <span>${item.dates}</span>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  const skills = document.querySelector("#resume-skills");
  if (skills) {
    skills.innerHTML = (data.skills || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  const tools = document.querySelector("#resume-tools");
  if (tools) {
    tools.innerHTML = (data.tools || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  const links = document.querySelector("#resume-links");
  if (links) {
    links.innerHTML = (data.links || [])
      .map(
        (item) => `
        <li>
          <a href="${item.href}" target="_blank" rel="noreferrer">
            ${item.text || item.label}
          </a>
        </li>
      `
      )
      .join("");
  }

  const downloads = document.querySelector("#resume-downloads");
  if (downloads) {
    downloads.innerHTML = (data.downloads || [])
      .map(
        (item) => `
        <li>
          <a href="${item.href}" target="_blank" rel="noreferrer">
            <span class="resume-downloads__icon" aria-hidden="true">
              <i class="${item.icon || "fa-solid fa-file"}"></i>
            </span>
            <span class="resume-downloads__text">
              <span class="resume-downloads__label">${item.label}</span>
              <span class="resume-downloads__action">Download</span>
            </span>
          </a>
        </li>
      `
      )
      .join("");
  }
};

const setupResumeAccordion = () => {
  const items = Array.from(document.querySelectorAll(".resume-item"));
  if (!items.length) return;
  const mq = window.matchMedia("(max-width: 700px)");

  const applyState = () => {
    items.forEach((item) => {
      const toggle = item.querySelector(".resume-item__toggle");
      const panel = item.querySelector(".resume-item__panel");
      if (!toggle || !panel) return;
      if (mq.matches) {
        item.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = "0px";
      } else {
        item.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = "none";
      }
    });
  };

  items.forEach((item) => {
    const toggle = item.querySelector(".resume-item__toggle");
    const panel = item.querySelector(".resume-item__panel");
    if (!toggle || !panel) return;
    toggle.addEventListener("click", () => {
      if (!mq.matches) return;
      const isOpen = item.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
    });
  });

  applyState();
  mq.addEventListener("change", applyState);
};

applyLanguage();
renderResume();
setupCursor();
setupHoverScramble();
setupLanguageSwitch();
setupMobileMenu();
setupRoleRotation();
setupFooterStatusRotation();
setupScrollProgress();
setupPageTransitions();
setupBackToTop();
setupResumeAccordion();
