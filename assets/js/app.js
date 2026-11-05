/* Portfolio renderer. Reads window.PORTFOLIO (data/portfolio.js) and builds the page.
 * No dependencies, no build step. Content is inserted with textContent only. */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  if (!D) { console.error("PORTFOLIO data not found"); return; }

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    kids.flat().forEach((c) => { if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
    return e;
  }
  const clear = (el) => { while (el.firstChild) el.removeChild(el.firstChild); return el; };

  const byId = Object.fromEntries(D.projects.map((p) => [p.id, p]));
  const tagById = Object.fromEntries(D.tags.map((t) => [t.id, t]));
  const pill = (t) => h("span", { class: "pill pill--" + t.color, text: t.label });
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* ---------- Head, hero, stats ---------- */
  document.title = D.meta.title;
  const md = $('meta[name="description"]'); if (md) md.setAttribute("content", D.meta.description);

  function renderHero() {
    const p = D.profile;
    const [first, ...rest] = p.name.split(" ");
    $("#hero-eyebrow").textContent = p.subtitle;
    const hn = $("#hero-name"); clear(hn); hn.append(first + " ", h("span", { text: rest.join(" ") }));
    $("#hero-sub").textContent = p.title;
    $("#hero-tag").textContent = p.tagline;
    const cta = clear($("#hero-cta"));
    cta.append(
      h("a", { class: "btn", href: "#projects" }, "See case studies"),
      h("a", { class: "btn btn--yellow", href: p.cv, download: true }, "Download CV"),
      h("a", { class: "btn btn--ghost", href: p.linkedin, target: "_blank", rel: "noopener noreferrer" }, "LinkedIn")
    );
    if (p.availability) { const a = $("#hero-avail"); a.textContent = p.availability; a.hidden = false; }
    const facts = clear($("#facts"));
    D.quickFacts.forEach(([k, v]) => facts.append(h("dt", { text: k }), h("dd", { text: v })));
    $("#footer-name").textContent = "© " + new Date().getFullYear() + " " + p.name;
    $("#nav-cv").setAttribute("href", p.cv);
  }

  function fmt(n, decimals) { return n.toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }); }
  function renderStats() {
    const ul = clear($("#stats"));
    D.stats.forEach((s) => {
      const num = h("span", { class: "stat__num" });
      const d = s.decimals || 0;
      const render = (v) => { num.textContent = (s.prefix || "") + fmt(v, d) + (s.suffix || ""); };
      render(reduceMotion ? s.value : 0);
      num.dataset.target = s.value;
      num._render = render;
      ul.append(h("li", { class: "stat reveal" }, num, h("span", { class: "stat__label", text: s.label })));
    });
  }
  function countUp(el) {
    const target = parseFloat(el.dataset.target); const dur = 1300; const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur); const eased = 1 - Math.pow(1 - k, 3);
      el._render(target * eased); if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Process map ---------- */
  function renderMap() {
    $("#approach-intro").textContent = D.approach.intro;
    const track = clear($("#map-track"));
    const panel = $("#map-panel");
    const stages = D.approach.stages;
    let current = 0;

    function show(i, focus) {
      current = i;
      $$(".node", track).forEach((n, idx) => {
        n.setAttribute("aria-selected", String(idx === i));
        n.tabIndex = idx === i ? 0 : -1;
        n.classList.toggle("is-done", idx < i);
      });
      const s = stages[i];
      clear(panel);
      panel.setAttribute("aria-labelledby", "node-" + s.id);
      const left = h("div", {}, h("h3", { text: s.headline }), h("p", { text: s.summary }));
      const right = h("div", {},
        h("h4", { text: "What I do" }),
        h("ul", { class: "ticks" }, s.actions.map((a) => h("li", { text: a }))),
        s.evidence.length ? h("h4", { style: "margin-top:1.3rem", text: "See it in practice" }) : null,
        s.evidence.length ? h("div", { class: "chips" }, s.evidence.filter((id) => byId[id]).map((id) =>
          h("button", { class: "chip", type: "button", onclick: () => openProject(id) }, byId[id].title))) : null
      );
      panel.append(left, right);
      if (focus) track.children[i].focus();
    }

    stages.forEach((s, i) => {
      track.append(h("button", {
        class: "node", type: "button", role: "tab", id: "node-" + s.id, "aria-controls": "map-panel",
        onclick: () => show(i, false),
        onkeydown: (e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); show((current + 1) % stages.length, true); }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); show((current - 1 + stages.length) % stages.length, true); }
        }
      }, h("span", { class: "node__n", text: String(i + 1) }), h("span", { class: "node__l", text: s.label })));
    });
    show(0, false);
  }

  /* ---------- Projects: filters, cards, dialog ---------- */
  const state = { tag: "all", skill: null };
  function visibleProjects() {
    return D.projects.filter((p) => (state.tag === "all" || p.tags.includes(state.tag)) && (!state.skill || p.skills.includes(state.skill)));
  }

  function renderFilters() {
    const box = clear($("#filters"));
    const all = [{ id: "all", label: "All" }, ...D.tags];
    all.forEach((t) => box.append(h("button", {
      class: "fbtn", type: "button", "aria-pressed": String(state.tag === t.id),
      onclick: () => { state.tag = t.id; refresh(); }
    }, t.label)));

    const groups = clear($("#caps-groups"));
    const active = new Set(visibleProjectsIgnoringSkill().flatMap((p) => p.skills));
    D.skillGroups.forEach((g) => {
      groups.append(h("div", {}, h("h4", { text: g.label }),
        g.skills.map((sk) => h("button", {
          class: "skill" + (active.has(sk) || state.skill === sk ? "" : " is-off"), type: "button",
          "aria-pressed": String(state.skill === sk),
          onclick: () => { state.skill = state.skill === sk ? null : sk; refresh(); }
        }, sk))));
    });
  }
  function visibleProjectsIgnoringSkill() { return D.projects.filter((p) => state.tag === "all" || p.tags.includes(state.tag)); }

  function renderGrid() {
    const grid = clear($("#grid"));
    const vis = new Set(visibleProjects().map((p) => p.id));
    D.projects.forEach((p) => {
      const card = h("button", { class: "card reveal in" + (vis.has(p.id) ? "" : " is-hidden"), type: "button", onclick: () => openProject(p.id), "aria-label": p.title + ": open case study" },
        h("div", { class: "card__top" }, h("span", { class: "pill pill--org", text: p.org }), p.tags.map((t) => pill(tagById[t]))),
        h("h3", { text: p.title }),
        h("p", { class: "card__meta", text: [p.sector, p.period].filter(Boolean).join(" · ") }),
        h("p", { class: "card__head", text: p.headline }),
        h("span", { class: "card__more" }, "Read the case study →"));
      grid.append(card);
    });
    const n = vis.size;
    const res = clear($("#results"));
    res.append("Showing " + n + " of " + D.projects.length + " case studies. ");
    if (state.tag !== "all" || state.skill) res.append(h("button", { type: "button", onclick: () => { state.tag = "all"; state.skill = null; refresh(); } }, "Clear filters"));
  }
  function refresh() { renderFilters(); renderGrid(); }

  const dlg = $("#dlg"); let currentId = null;
  function projectBody(p) {
    const f = document.createDocumentFragment();
    f.append(
      h("div", { class: "card__top" }, h("span", { class: "pill pill--org", text: p.org }), p.tags.map((t) => pill(tagById[t]))),
      h("h2", { id: "dlg-title", text: p.title }),
      h("p", { class: "dlg__meta", text: [p.roleLabel, p.sector, p.period].filter(Boolean).join(" · ") }),
      h("p", { class: "dlg__head", text: p.headline })
    );
    if (p.metrics && p.metrics.length) f.append(h("div", { class: "metrics" }, p.metrics.map((m) => h("div", { class: "metric" }, h("strong", { text: m.value }), h("span", { text: m.label })))));
    const left = h("div", {});
    if (p.context) left.append(h("div", { class: "block" }, h("h4", { text: "Context" }), h("p", { text: p.context })));
    if (p.did && p.did.length) left.append(h("div", { class: "block" }, h("h4", { text: "What I did" }), h("ul", { class: "ticks" }, p.did.map((x) => h("li", { text: x })))));
    if (p.challenge && p.challenge.problem) left.append(h("div", { class: "block" }, h("h4", { text: "Challenge and response" }),
      h("div", { class: "challenge" }, h("p", {}, h("strong", { text: "Challenge: " }), p.challenge.problem), p.challenge.response ? h("p", {}, h("strong", { text: "Response: " }), p.challenge.response) : null)));
    const right = h("div", {});
    if (p.outcomes && p.outcomes.length) right.append(h("div", { class: "block" }, h("h4", { text: "Outcomes" }), h("ul", { class: "ticks" }, p.outcomes.map((x) => h("li", { text: x })))));
    if (p.scale && p.scale.length) right.append(h("div", { class: "block" }, h("h4", { text: "Scale and shape" }), h("dl", { class: "kv" }, p.scale.map(([k, v]) => h("div", {}, h("dt", { text: k }), h("dd", { text: v }))))));
    if (p.tools && p.tools.length) right.append(h("div", { class: "block" }, h("h4", { text: "Tools" }), h("div", { class: "tools" }, p.tools.map((t) => h("span", { class: "tool", text: t })))));
    f.append(h("div", { class: "cols" }, left, right));
    return f;
  }
  function openProject(id, fromHash) {
    const p = byId[id]; if (!p) return;
    currentId = id;
    const body = clear($("#dlg-body")); body.append(projectBody(p)); body.scrollTop = 0;
    if (!dlg.open) dlg.showModal();
    if (!fromHash) history.replaceState(null, "", "#project/" + id);
    const list = navList(); $("#dlg-prev").disabled = $("#dlg-next").disabled = list.length < 2;
  }
  function navList() { const v = visibleProjects().map((p) => p.id); return v.includes(currentId) ? v : D.projects.map((p) => p.id); }
  function step(dir) { const l = navList(); const i = l.indexOf(currentId); openProject(l[(i + dir + l.length) % l.length]); }
  function closeProject() { if (dlg.open) dlg.close(); }
  dlg.addEventListener("close", () => { if (location.hash.startsWith("#project/")) history.replaceState(null, "", location.pathname + location.search); });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeProject(); });
  $("#dlg-close").addEventListener("click", closeProject);
  $("#dlg-prev").addEventListener("click", () => step(-1));
  $("#dlg-next").addEventListener("click", () => step(1));
  dlg.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); });
  function routeHash() { const m = location.hash.match(/^#project\/(.+)$/); if (m && byId[m[1]]) openProject(m[1], true); else if (dlg.open) dlg.close(); }
  window.addEventListener("hashchange", routeHash);

  /* ---------- Experience ---------- */
  function parseYM(s) { if (!s) return new Date(); const [y, m] = s.split("-").map(Number); return new Date(y, m - 1, 1); }
  function ymLabel(s) { if (!s) return "Present"; const d = parseYM(s); return MONTHS[d.getMonth()] + " " + d.getFullYear(); }
  function renderCareer() {
    const box = clear($("#career"));
    const roles = D.roles;
    const min = Math.min(...roles.map((r) => parseYM(r.start))); const max = Date.now();
    const span = max - min;
    const startYear = new Date(min).getFullYear(); const endYear = new Date(max).getFullYear();
    const axis = h("div", { class: "career__axis", "aria-hidden": "true" });
    for (let y = startYear; y <= endYear; y += 2) axis.append(h("span", { text: String(y) }));
    box.append(axis);
    const panel = $("#role-panel");
    let sel = 0;
    function show(i) {
      sel = i; const r = roles[i];
      $$(".bar", box).forEach((b, idx) => b.setAttribute("aria-pressed", String(idx === i)));
      clear(panel);
      panel.append(
        h("div", { class: "role__head" }, h("h3", { text: r.title + " · " + r.org }), h("span", { class: "role__dates", text: ymLabel(r.start) + " – " + ymLabel(r.end) })),
        h("p", { text: r.summary }),
        h("ul", { class: "ticks" }, r.highlights.map((x) => h("li", { text: x }))),
        r.projects.length ? h("h4", { text: "Case studies from this role" }) : null,
        r.projects.length ? h("div", { class: "chips" }, r.projects.filter((id) => byId[id]).map((id) => h("button", { class: "chip", type: "button", onclick: () => openProject(id) }, byId[id].title))) : null
      );
    }
    roles.forEach((r, i) => {
      const left = ((parseYM(r.start) - min) / span) * 100;
      const width = ((parseYM(r.end) - parseYM(r.start)) / span) * 100;
      box.append(h("div", { class: "lane" }, h("button", {
        class: "bar bar--" + r.color, type: "button", style: "left:" + left + "%;width:" + Math.max(width, 8) + "%",
        "aria-pressed": "false", "aria-label": r.org + ", " + r.title, onclick: () => show(i)
      }, r.org)));
    });
    show(0);
  }

  function renderCreds() {
    const ul = clear($("#creds"));
    D.credentials.forEach((c) => ul.append(h("li", { class: "cred reveal" }, h("strong", { text: c.name }), h("span", { text: c.issuer }))));
  }
  function renderContact() {
    const p = D.profile; const box = clear($("#contact-cta"));
    box.append(
      h("a", { class: "btn btn--yellow", href: "mailto:" + p.email }, "Email me"),
      h("a", { class: "btn btn--ghost", href: p.linkedin, target: "_blank", rel: "noopener noreferrer" }, "LinkedIn"),
      h("a", { class: "btn btn--ghost", href: p.cv, download: true }, "Download CV")
    );
  }

  /* ---------- Behaviour: reveal, count-up, nav, progress ---------- */
  function setupObservers() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        const n = $(".stat__num", en.target); if (n && !reduceMotion && !n._done) { n._done = true; countUp(n); }
        io.unobserve(en.target);
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
    $$(".section > .wrap > *, .facts").forEach((el) => { if (!el.classList.contains("reveal")) { el.classList.add("reveal"); io.observe(el); } });

    const links = $$(".nav__links a");
    const nav = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id)); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => nav.observe(s));

    const bar = $(".progress"); let tick = false;
    window.addEventListener("scroll", () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => { const max = document.documentElement.scrollHeight - innerHeight; bar.style.setProperty("--p", max > 0 ? scrollY / max : 0); tick = false; });
    }, { passive: true });
  }

  renderHero(); renderStats(); renderMap(); refresh(); renderCareer(); renderCreds(); renderContact();
  setupObservers(); routeHash();
})();
