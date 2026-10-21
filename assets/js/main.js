/* ============================================================================
   main.js — renders the page from siteData and wires up the interactions.

   Nothing here holds content. To change what the site says, edit data.js.

   Contents
     1. Helpers
     2. Renderers (one per section)
     3. Interactions (theme, mobile nav, filters, scroll spy)
     4. Init
   ========================================================================== */

(function () {
  "use strict";

  /* 1. HELPERS ============================================================= */

  /** Shorthand for document.querySelector. */
  const $ = (selector, scope = document) => scope.querySelector(selector);

  /**
   * Create an element.
   * @param {string} tag
   * @param {object} props - className, textContent, href, and data-* / aria-* attrs
   * @param {Array<Node|string>} children
   */
  function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props)) {
      if (value === null || value === undefined) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key === "html") node.innerHTML = value;
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children)) {
      if (child === null || child === undefined) continue;
      node.append(child);
    }
    return node;
  }

  /** Build a <ul class="tag-list"> of pill tags. */
  function tagList(items) {
    return el("ul", { class: "tag-list" },
      items.map((item) => el("li", { class: "tag", text: item }))
    );
  }

  /** Build a plain <ul> of bullet points. */
  function bulletList(points, className) {
    if (!points || !points.length) return null;
    return el("ul", { class: className },
      points.map((point) => el("li", { text: point }))
    );
  }

  /** Initials from a full name, used for the monogram placeholder. */
  function initials(name) {
    return name.split(/\s+/).map((word) => word[0]).join("").toUpperCase();
  }


  /* 2. RENDERERS =========================================================== */

  function renderHero(profile) {
    $("#brand-name").innerHTML = profile.name.split(" ")[0] +
      ' <span>' + profile.name.split(" ").slice(1).join(" ") + '</span>';

    $("#hero-role").textContent = profile.role + " · " + profile.location;
    $("#hero-name").textContent = profile.name;
    $("#hero-tagline").textContent = profile.tagline;
    $("#hero-intro").textContent = profile.intro;

    // Portrait or monogram fallback
    const portrait = $("#hero-portrait");
    if (profile.portrait) {
      portrait.replaceChildren(
        el("img", { src: profile.portrait, alt: "Portrait of " + profile.name })
      );
    } else {
      portrait.replaceChildren(
        el("span", { class: "hero__monogram", text: initials(profile.name), "aria-hidden": "true" })
      );
    }

    // Hero buttons: the audio CV leads, then contact, then the full CV.
    const actions = $("#hero-actions");
    const primary = profile.links.find((link) => link.primary) || profile.links[0];
    actions.replaceChildren(
      el("a", {
        class: "btn btn--primary",
        href: profile.cv.primary.href,
        text: profile.cv.primary.label,
        title: profile.cv.primary.note,
        type: "application/pdf",
        download: profile.cv.primary.filename || ""
      }),
      el("a", { class: "btn btn--ghost", href: primary.href, text: "Get in touch" }),
      el("a", {
        class: "btn btn--quiet",
        href: profile.cv.secondary.href,
        text: profile.cv.secondary.label,
        title: profile.cv.secondary.note,
        type: "application/pdf",
        download: profile.cv.secondary.filename || ""
      })
    );

    // Small meta strip under the hero
    $("#hero-meta").replaceChildren(
      el("span", { html: "<strong>Based in</strong> " + profile.location }),
      el("span", { html: "<strong>Focus</strong> C++, JUCE, DSP, game and immersive audio" }),
      el("span", { html: "<strong>Status</strong> Open to junior roles" })
    );
  }

  function renderAbout(profile) {
    $("#about-body").replaceChildren(
      ...profile.about.map((paragraph) => el("p", { text: paragraph })),
      cvChooser(profile.cv)
    );
  }

  /** Side-by-side cards offering both CV versions. Used in About and Contact. */
  function cvChooser(cv) {
    return el("div", { class: "cv-choice" },
      [cv.primary, cv.secondary].map((item, index) =>
        el("a", {
          class: "cv-card",
          href: item.href,
          type: "application/pdf",
          download: item.filename || ""
        }, [
          el("span", { class: "cv-card__label", text: index === 0 ? "Recommended" : "Everything" }),
          el("span", { class: "cv-card__title", text: item.label }),
          el("span", { class: "cv-card__note", text: item.note })
        ])
      )
    );
  }

  function renderProjects(projects, filterTags) {
    const list = $("#projects-list");

    const cards = projects.map((project) => {
      const card = el("li", {
        class: "project" + (project.featured ? " project--featured" : ""),
        "data-tags": project.tags.join("|")
      });

      const main = el("div", {}, [
        el("div", { class: "project__head" }, [
          el("h3", { class: "project__title", text: project.title }),
          el("span", { class: "project__year", text: project.year })
        ]),
        el("p", { class: "project__role", text: project.role }),
        el("p", { class: "project__blurb", text: project.blurb })
      ]);

      const aside = el("div", {}, [
        bulletList(project.detail, "project__detail"),
        el("div", { class: "project__foot" }, [
          tagList(project.tags),
          project.links && project.links.length
            ? el("div", { class: "project__links" },
                project.links.map((link) =>
                  el("a", {
                    href: link.href,
                    text: link.label,
                    rel: "noopener",
                    target: "_blank"
                  })
                )
              )
            : el("p", { class: "project__note", text: "Links and media to follow." })
        ])
      ]);

      card.append(main, aside);
      return card;
    });

    list.replaceChildren(...cards);
    renderFilters(projects, filterTags);
  }

  function renderFilters(projects, chosen) {
    // Use the curated list from data.js when present, otherwise fall back to
    // every tag in use, alphabetised.
    const inUse = new Set(projects.flatMap((project) => project.tags));
    const tags = chosen
      ? chosen.filter((tag) => inUse.has(tag))
      : [...inUse].sort();

    const bar = $("#project-filters");

    const buttons = ["All", ...tags].map((tag, index) =>
      el("button", {
        class: "filter",
        type: "button",
        "data-filter": tag,
        "aria-pressed": index === 0 ? "true" : "false",
        text: tag
      })
    );

    bar.replaceChildren(...buttons);
  }

  function renderSkills(skills) {
    $("#skills-list").replaceChildren(
      ...skills.map((group) =>
        el("li", { class: "card" }, [
          el("h3", { class: "skill-group__title", text: group.group }),
          el("p", { class: "skill-group__note", text: group.note }),
          tagList(group.items)
        ])
      )
    );
  }

  function renderExperience(experience) {
    $("#experience-list").replaceChildren(
      ...experience.map((job) =>
        el("li", { class: "entry" + (job.highlight ? " entry--highlight" : "") }, [
          el("p", { class: "entry__period", text: job.period }),
          el("h3", { class: "entry__role", text: job.role }),
          el("p", {
            class: "entry__org",
            html: "<strong>" + job.org + "</strong>, " + job.place
          }),
          bulletList(job.points, "entry__points")
        ])
      )
    );
  }

  function renderEducation(education, certifications, interests) {
    $("#education-list").replaceChildren(
      ...education.map((item) =>
        el("li", { class: "entry entry--highlight" }, [
          el("p", { class: "entry__period", text: item.period }),
          el("h3", { class: "entry__role", text: item.qualification }),
          el("p", { class: "entry__org", html: "<strong>" + item.institution + "</strong>" }),
          bulletList(item.points, "entry__points")
        ])
      )
    );

    $("#certifications-list").replaceChildren(
      ...certifications.map((item) => el("li", { text: item }))
    );

    $("#interests-list").replaceChildren(
      ...interests.map((item) => el("li", { text: item }))
    );
  }

  function renderContact(profile) {
    $("#contact-note").textContent = profile.availability || "";

    $("#contact-links").replaceChildren(
      ...profile.links.map((link) =>
        el("a", {
          class: "contact__link",
          href: link.href,
          rel: "noopener",
          target: link.href.startsWith("mailto:") ? null : "_blank"
        }, [
          el("span", { class: "contact__label", text: link.label }),
          el("span", { class: "contact__value", text: link.value })
        ])
      ).map((anchor) => el("li", {}, [anchor]))
    );

    $("#contact-cv").replaceChildren(cvChooser(profile.cv));

    $("#footer-name").textContent = profile.name;
    $("#footer-year").textContent = new Date().getFullYear();
  }


  /* 3. INTERACTIONS ======================================================== */

  /** Theme toggle. Respects the OS setting until the visitor overrides it. */
  function initTheme() {
    const toggle = $("#theme-toggle");
    const stored = (function () {
      try { return localStorage.getItem("theme"); } catch (_) { return null; }
    })();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    apply(stored || (prefersDark ? "dark" : "light"));

    toggle.addEventListener("click", function () {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem("theme", next); } catch (_) { /* private mode */ }
    });

    function apply(theme) {
      document.documentElement.dataset.theme = theme;
      toggle.setAttribute("aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      // SVG elements do not expose the `hidden` IDL property, so set the
      // attribute directly rather than assigning to .hidden.
      setHidden($("#icon-sun"), theme !== "dark");
      setHidden($("#icon-moon"), theme === "dark");
    }

    function setHidden(node, isHidden) {
      if (isHidden) node.setAttribute("hidden", "");
      else node.removeAttribute("hidden");
    }
  }

  /** Mobile navigation drawer. */
  function initNav() {
    const toggle = $("#nav-toggle");
    const nav = $("#nav");

    toggle.addEventListener("click", function () {
      const open = nav.dataset.open === "true";
      nav.dataset.open = String(!open);
      toggle.setAttribute("aria-expanded", String(!open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.matches(".nav__link")) {
        nav.dataset.open = "false";
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /** Tag filtering on the projects grid. */
  function initFilters() {
    const bar = $("#project-filters");

    bar.addEventListener("click", function (event) {
      const button = event.target.closest(".filter");
      if (!button) return;

      const filter = button.dataset.filter;

      bar.querySelectorAll(".filter").forEach(function (other) {
        other.setAttribute("aria-pressed", String(other === button));
      });

      document.querySelectorAll(".project").forEach(function (card) {
        const tags = card.dataset.tags.split("|");
        card.hidden = filter !== "All" && !tags.includes(filter);
      });
    });
  }

  /** Highlights the nav item for the section currently in view. */
  function initScrollSpy() {
    const links = [...document.querySelectorAll(".nav__link")];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.setAttribute("aria-current",
            String(link.getAttribute("href") === "#" + entry.target.id));
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) { observer.observe(section); });
  }


  /* 4. INIT ================================================================ */

  function init() {
    if (typeof siteData === "undefined") {
      console.error("siteData is missing. Check that data.js loads before main.js.");
      return;
    }

    document.title = siteData.profile.name + " — " + siteData.profile.role;

    renderHero(siteData.profile);
    renderAbout(siteData.profile);
    renderProjects(siteData.projects, siteData.filterTags);
    renderSkills(siteData.skills);
    renderExperience(siteData.experience);
    renderEducation(siteData.education, siteData.certifications, siteData.interests);
    renderContact(siteData.profile);

    initTheme();
    initNav();
    initFilters();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
