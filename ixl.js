(function () {
  var main = document.querySelector("main");
  var secs = document.querySelectorAll("main section[id]");
  var SPEC = window.SUBJECT || null;
  if (!main || (!SPEC && (!secs.length || !document.querySelector("article.lesson")))) return;

  var page = location.pathname.split("/").pop() || "grade";
  var COLORS = { math: "var(--math)", geo: "var(--geo)", ela: "var(--la)" };
  var skills = [], all = [];

  function store(k, v) {
    try { if (v === undefined) return +localStorage.getItem("hlh:" + page + ":" + k) || 0;
      localStorage.setItem("hlh:" + page + ":" + k, v); try { window.dispatchEvent(new Event("hlh-save")); } catch (e2) {} } catch (e) { return 0; }
  }
  function short(a) {
    return a.replace(/[,.]?\s*because.*$/i, "").replace(/\.$/, "").trim();
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  if (SPEC) SPEC.forEach(function (c) {
    var sub = { id: c.id, color: c.color, title: c.title, cats: [{ name: "", items: [] }], skills: [] };
    c.skills.forEach(function (k) {
      var s = { id: c.id + sub.skills.length, sub: c.id, cat: sub.cats[0], title: k.title, expl: k.expl, q: "", a: "", full: "",
        gens: (k.gens || []).filter(Boolean), items: k.items || [], own: true };
      sub.cats[0].items.push(s); sub.skills.push(s); skills.push(s);
    });
    all.push(sub);
  });
  // Parse existing lessons into skills
  if (!SPEC) Array.prototype.forEach.call(secs, function (sec) {
    var cat = "", sub = { id: sec.id, title: sec.querySelector("h2").textContent, cats: [] };
    var cur;
    Array.prototype.forEach.call(sec.children, function (n) {
      if (n.tagName === "H3") { cur = { name: n.textContent, items: [] }; sub.cats.push(cur); }
      else if (n.matches("article.lesson")) {
        var ps = n.querySelectorAll("p"), expl = "", q = "", a = "";
        Array.prototype.forEach.call(ps, function (p) {
          if (p.classList.contains("try")) q = p.textContent.replace(/^\s*Try it:\s*/i, "");
          else if (p.parentNode.tagName === "DETAILS") a = p.textContent;
          else if (!expl) expl = p.textContent;
        });
        if (!q || !a) return;
        var s = { id: sub.id + skills.length, sub: sub.id, cat: cur, title: n.querySelector("h4").textContent,
          expl: expl, q: q, a: short(a), full: a };
        cur.items.push(s); skills.push(s);
      }
    });
    sub.skills = [];
    sub.cats.forEach(function (c) { sub.skills = sub.skills.concat(c.items); });
    all.push(sub);
  });

  var app = el("div", "ixl");
  if (SPEC) {
    var pr = document.getElementById("practice"); if (pr) pr.hidden = true;
    var pl = main.querySelector('.toc a[href="#practice"]'); if (pl) pl.parentNode.hidden = true;
    var toc = main.querySelector(".toc") || secs[0];
    main.insertBefore(app, toc);
    var sg = el("h2", "", "Study guide"); main.insertBefore(sg, toc);
  } else {
    Array.prototype.forEach.call(secs, function (s) { s.hidden = true; });
    Array.prototype.forEach.call(main.querySelectorAll(".toc"), function (s) { s.hidden = true; });
    main.insertBefore(app, main.querySelector("section[id]"));
  }

  // ---------- Skill directory ----------
  function renderDirectory() {
    app.innerHTML = "";
    var total = 0, mastered = 0;
    var filter = SPEC ? "" : location.hash.replace("#", "");
    if (!all.some(function (x) { return x.id === filter; })) filter = "";
    all.forEach(function (sub) {
      if (filter && sub.id !== filter) return;
      var box = el("section", "ixl-sub");
      var hd = el("h2", "ixl-subhead", sub.title);
      hd.style.borderLeftColor = sub.color || COLORS[sub.id] || "var(--brand)";
      box.appendChild(hd);
      sub.cats.forEach(function (c) {
        if (c.name) box.appendChild(el("h3", "ixl-cat", c.name));
        var list = el("ul", "ixl-skills");
        c.items.forEach(function (s, i) {
          var sc = store(s.id); total++; if (sc >= 100) mastered++;
          var li = el("li");
          var b = el("button", "ixl-skill");
          b.type = "button";
          b.appendChild(el("span", "ixl-num", (sub.skills.indexOf(s) + 1)));
          b.appendChild(el("span", "ixl-name", s.title));
          var bar = el("span", "ixl-bar");
          var fill = el("span", "ixl-fill");
          fill.style.width = sc + "%";
          fill.style.background = sc >= 100 ? "var(--ok)" : (sub.color || COLORS[sub.id] || "var(--brand)");
          bar.appendChild(fill);
          b.appendChild(bar);
          b.appendChild(el("span", "ixl-sc", sc >= 100 ? "★ 100" : (sc || "–")));
          b.addEventListener("click", function () { startPractice(s); });
          li.appendChild(b); list.appendChild(li);
        });
        box.appendChild(list);
      });
      app.appendChild(box);
    });
    var sum = el("p", "ixl-summary", "Skills mastered: " + mastered + " / " + total + "  ·  Pick a skill to start practicing. Get to 100 to master it.");
    app.insertBefore(sum, app.firstChild);
    if (!SPEC) {
      var tabs = el("div", "ixl-tabs");
      [["", "All"]].concat(all.map(function (x) { return [x.id, x.title]; })).forEach(function (t) {
        var b = el("button", "", t[1]); b.type = "button";
        b.setAttribute("aria-pressed", String(t[0] === filter));
        b.addEventListener("click", function () { history.replaceState(null, "", t[0] ? "#" + t[0] : location.pathname); renderDirectory(); });
        tabs.appendChild(b);
      });
      app.insertBefore(tabs, sum);
    }
  }

  // ---------- Practice ----------
  function startPractice(skill) {
    var sub = all.filter(function (x) { return x.id === skill.sub; })[0];
    var pool = skill.own ? [skill] : (skill.sub === "math" && skill.cat.items.length > 1 ? skill.cat.items : sub.skills);
    var score = store(skill.id) >= 100 ? 0 : store(skill.id);
    var answered = 0, correctCt = 0, streak = 0, last = null, locked = false, t0 = Date.now();

    var lastText = "";
    // difficulty: later grades are harder, so each correct answer is worth less
    var gm = page.match(/grade-(pk|k|\d+)/), gi = gm ? (gm[1] === "pk" ? 0 : gm[1] === "k" ? 1 : +gm[1] + 1) : 6;
    var hard = gi / 13, base = Math.round(16 - 6 * hard), penalty = Math.round(6 + 4 * hard);
    function extraPool(sk) {
      var EX = window.EXTRA || {}, keys, subj, out = [];
      if (SPEC) { keys = ["6", "7", "8"]; subj = page.indexOf("math") === 0 ? "math" : page.indexOf("geo") === 0 ? "geo" : "ela"; }
      else { keys = [gm ? gm[1] : ""]; subj = sk.sub; }
      keys.forEach(function (k) { if (EX[k] && EX[k][subj]) out = out.concat(EX[k][subj]); });
      return out;
    }
    function oneCand(sk) {
      var G = window.GEN || {}, B = window.BANK || {}, arr, isEx = false, gl = sk.gens || (G[sk.title] ? [G[sk.title]] : []);
      var st = sk.items || [[sk.q, sk.a]].concat(B[sk.title] || []);
      if (gl.length && (!st.length || Math.random() < 0.8)) arr = gl[Math.floor(Math.random() * gl.length)]();
      else arr = st[Math.floor(Math.random() * st.length)];
      var ep = extraPool(sk);
      if (ep.length && Math.random() < 0.4) { arr = ep[Math.floor(Math.random() * ep.length)]; isEx = true; }
      return { arr: arr, ex: isEx };
    }
    // difficulty guess: longer wording and bigger numbers = harder
    function diff(a) {
      var digits = (String(a[0]) + " " + a[1]).replace(/[^0-9]/g, "").length;
      return String(a[0]).length * 0.6 + String(a[1]).length * 0.6 + digits * 3;
    }
    function levelName() { return score < 34 ? "Level: Warm-up" : score < 67 ? "Level: Medium" : "Level: Challenge"; }
    function makeQ(sk) {
      // draw several candidate questions, then pick easier ones at low scores and harder ones at high scores
      var cands = [], seen = {}, tries = 0;
      while (cands.length < 8 && tries++ < 40) {
        var c = oneCand(sk), k = String(c.arr[0]);
        if (k !== lastText && !seen[k]) { seen[k] = 1; cands.push(c); }
      }
      if (!cands.length) cands.push(oneCand(sk));
      cands.sort(function (x, y) { return diff(x.arr) - diff(y.arr); });
      var t = Math.max(0, Math.min(1, score / 100 + (Math.random() - 0.5) * 0.3));
      var c = cands[Math.round(t * (cands.length - 1))], arr = c.arr;
      lastText = String(arr[0]);
      return { q: arr[0], a: String(arr[1]), w: arr.slice(2).map(String), title: sk.title, expl: sk.expl, sub: sk.sub,
        full: arr[0] === sk.q ? sk.full : arr[1], extra: c.ex };
    }
    // ----- typed answers (math only) -----
    function core(s) {
      return String(s).toLowerCase().replace(/[−–—]/g, "-").replace(/,/g, "").replace(/\$/g, "").replace(/\s+/g, "")
        .replace(/^[xy]=/, "").replace(/(squareunits|cubicunits|units|miles|inches|feet|degrees|cents|%|°)$/, "");
    }
    function val(s) {
      var m = core(s).match(/^(-?\d+(?:\.\d+)?|-?\.\d+)(?:\/(\d+))?(π)?$/);
      if (!m) return null;
      var v = parseFloat(m[1]); if (m[2]) v = v / parseFloat(m[2]);
      return { v: v, pi: !!m[3], frac: !!m[2] };
    }
    function sameAnswer(user, correct) {
      var u = val(user), c = val(correct);
      if (!u || !c || u.pi !== c.pi) return false;
      return Math.abs(u.v - c.v) < (c.frac ? 0.005 : 1e-9);
    }
    function isTyped(q) {
      var mathPage = SPEC ? page.indexOf("math") === 0 : q.sub === "math";
      if (!mathPage || /grade-(pk|k)\b/.test(page)) return false;
      if (/which|approximately/i.test(q.q)) return false;
      return !!val(q.a);
    }
    function nextSkill() {
      var opts = pool.filter(function (p) { return p !== last; });
      if (!opts.length) { last = pool[0]; return pool[0]; }
      // weight chosen skill higher
      var pick = Math.random() < 0.5 && skill !== last ? skill : opts[Math.floor(Math.random() * opts.length)];
      last = pick; return pick;
    }
    function distractors(q) {
      var seen0 = {}, mine = [];
      q.w.forEach(function (x) { var k = x.toLowerCase(); if (!seen0[k] && k !== q.a.toLowerCase() && mine.length < 3) { seen0[k] = 1; mine.push(x); } });
      if (mine.length >= 3) return mine;
      var others = shuffle(all.reduce(function (a, s) { return a.concat(s.skills); }, [])
        .filter(function (s) { return s.a && s.sub === q.sub && s.a.toLowerCase() !== q.a.toLowerCase(); }));
      var seen = seen0, out = mine;
      others.forEach(function (o) { var k = o.a.toLowerCase(); if (!seen[k] && out.length < 3) { seen[k] = 1; out.push(o.a); } });
      if (out.length < 3) shuffle(skills).filter(function (o) { return o.a; }).forEach(function (o) {
        var k = o.a.toLowerCase(); if (!seen[k] && k !== q.a.toLowerCase() && out.length < 3) { seen[k] = 1; out.push(o.a); } });
      return out;
    }
    function fmt(ms) { var s = Math.floor(ms / 1000); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }

    function render() {
      app.innerHTML = "";
      var q = makeQ(nextSkill()), locked = false;
      var top = el("div", "ixl-top");
      var back = el("button", "ixl-back", "← All skills"); back.type = "button";
      back.addEventListener("click", function () { store(skill.id, score); renderDirectory(); window.scrollTo(0, 0); });
      top.appendChild(back);
      top.appendChild(el("span", "ixl-title", skill.title));
      app.appendChild(top);

      var stats = el("div", "ixl-stats");
      function stat(label, val) { var d = el("div", "ixl-stat"); d.appendChild(el("b", "", val)); d.appendChild(el("span", "", label)); stats.appendChild(d); }
      stat("Questions", answered); stat("Correct", correctCt); stat("Time", fmt(Date.now() - t0));
      var ss = el("div", "ixl-stat ixl-smart"); ss.appendChild(el("b", "", score)); ss.appendChild(el("span", "", "SmartScore"));
      stats.appendChild(ss);
      app.appendChild(stats);
      var bar = el("div", "ixl-meter"); var f = el("div", "ixl-meterfill"); f.style.width = score + "%"; bar.appendChild(f);
      app.appendChild(bar);
      app.appendChild(el("div", "ixl-level", levelName()));

      var card = el("div", "ixl-card");
      card.appendChild(el("p", "ixl-q", q.q));
      var feedback = el("div", "ixl-feedback"); feedback.setAttribute("aria-live", "polite");
      var btns = [];
      function resolve(ok, markEl) {
        if (locked) return; locked = true;
        btns.forEach(function (x) { x.disabled = true; });
        answered++;
        if (ok) {
          correctCt++; streak++;
          var gain = Math.max(3, base - (streak - 1));
          if (score >= 75) gain = Math.max(2, Math.round(gain * 0.6));
          score = Math.min(100, score + gain);
          markEl.classList.add("right");
          feedback.innerHTML = "";
          feedback.appendChild(el("p", "ixl-good", "✓ Correct!  +" + gain));
          store(skill.id, score);
          if (score >= 100) return setTimeout(done, 700);
          setTimeout(render, 900);
        } else {
          streak = 0; score = Math.max(0, score - penalty);
          markEl.classList.add("wrong");
          btns.forEach(function (x) { if (x.textContent === q.a) x.classList.add("right"); });
          store(skill.id, score);
          feedback.innerHTML = "";
          feedback.appendChild(el("p", "ixl-badmsg", "✗ Sorry, incorrect. The correct answer is: " + q.a));
          var ex = el("div", "ixl-explain");
          if (!q.extra) {
            ex.appendChild(el("h4", "", "Learn with an example: " + q.title));
            ex.appendChild(el("p", "", q.expl));
          }
          ex.appendChild(el("p", "", "Answer: " + q.full));
          feedback.appendChild(ex);
          var nb = el("button", "ixl-next", "Got it"); nb.type = "button";
          nb.addEventListener("click", render);
          feedback.appendChild(nb);
          setTimeout(function () { nb.focus(); }, 300);
        }
      }
      if (isTyped(q)) {
        var row = el("div", "ixl-typed");
        var inp = document.createElement("input");
        inp.type = "text"; inp.className = "ixl-input"; inp.autocomplete = "off"; inp.placeholder = "Type your answer";
        inp.setAttribute("autocapitalize", "off"); inp.setAttribute("aria-label", "Your answer");
        var sb = el("button", "ixl-next ixl-submit", "Submit"); sb.type = "button";
        var submit = function () {
          var v = inp.value.trim();
          if (locked || !v) return;
          inp.disabled = true; sb.disabled = true;
          resolve(sameAnswer(v, q.a), inp);
        };
        sb.addEventListener("click", submit);
        inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); submit(); } });
        row.appendChild(inp); row.appendChild(sb); card.appendChild(row);
        card.appendChild(el("p", "ixl-tip", "Fractions like 3/4 and decimals are both okay."));
        setTimeout(function () { inp.focus(); }, 0);
      } else {
        shuffle([q.a].concat(distractors(q))).forEach(function (text) {
          var b = el("button", "ixl-opt", text); b.type = "button";
          b.addEventListener("click", function () { resolve(text === q.a, b); });
          btns.push(b); card.appendChild(b);
        });
      }
      card.appendChild(feedback);
      app.appendChild(card);
      var hint = el("details", "ixl-hint"); hint.appendChild(el("summary", "", "Need a hint? Review the lesson"));
      hint.appendChild(el("p", "", q.expl));
      app.appendChild(hint);
    }

    function done() {
      app.innerHTML = "";
      var c = el("div", "ixl-card ixl-done");
      c.appendChild(el("h2", "", "🏆 Skill mastered!"));
      c.appendChild(el("p", "", "You reached a SmartScore of 100 in " + skill.title + " (" + answered + " questions, " + fmt(Date.now() - t0) + ")."));
      var a = el("button", "ixl-next", "Back to skills"); a.type = "button";
      a.addEventListener("click", function () { renderDirectory(); window.scrollTo(0, 0); });
      var b = el("button", "ixl-back", "Keep practicing"); b.type = "button";
      b.addEventListener("click", function () { score = 0; correctCt = 0; answered = 0; t0 = Date.now(); render(); });
      c.appendChild(a); c.appendChild(b); app.appendChild(c);
    }
    render();
    window.scrollTo(0, 0);
  }

  window.addEventListener("hlh-sync", function () { if (!app.querySelector(".ixl-card")) renderDirectory(); });
  renderDirectory();
  window.addEventListener("hashchange", function () { if (!SPEC) renderDirectory(); });
})();
