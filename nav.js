(function () {
  var GRADES = [["Pre-K", "grade-pk.html"], ["K", "grade-k.html"]];
  for (var i = 1; i <= 12; i++) GRADES.push([String(i), "grade-" + i + ".html"]);
  var MENUS = {
    "grades.html": { title: "Choose a grade", hash: "" },
    "math.html": { title: "Math: choose a grade", hash: "#math", all: "All math topics" },
    "geography.html": { title: "Geography: choose a grade", hash: "#geo", all: "All geography topics" },
    "language-arts.html": { title: "Language Arts: choose a grade", hash: "#ela", all: "All language arts topics" }
  };
  var here = location.pathname.split("/").pop() || "index.html";
  var panel = null, trigger = null;

  function close() {
    if (panel) { panel.remove(); panel = null; }
    if (trigger) { trigger.setAttribute("aria-expanded", "false"); trigger = null; }
  }

  function open(anchor, key) {
    close();
    var m = MENUS[key];
    panel = document.createElement("div");
    panel.className = "grade-menu";
    panel.setAttribute("role", "menu");
    var h = document.createElement("p");
    h.className = "gm-title"; h.textContent = m.title;
    panel.appendChild(h);
    var grid = document.createElement("div");
    grid.className = "gm-grid";
    GRADES.forEach(function (g) {
      var a = document.createElement("a");
      a.href = g[1] + m.hash;
      a.setAttribute("role", "menuitem");
      a.textContent = g[0];
      if (g[1] === here) a.className = "gm-current";
      grid.appendChild(a);
    });
    panel.appendChild(grid);
    if (m.all) {
      var all = document.createElement("a");
      all.className = "gm-all"; all.href = key; all.textContent = m.all + " →";
      panel.appendChild(all);
    }
    document.body.appendChild(panel);
    var w = Math.min(380, window.innerWidth - 16);
    panel.style.width = w + "px";
    var r = anchor.getBoundingClientRect();
    var left = Math.max(8, Math.min(r.left + window.scrollX, window.scrollX + window.innerWidth - w - 8));
    panel.style.left = left + "px";
    panel.style.top = (r.bottom + window.scrollY + 6) + "px";
    trigger = anchor;
    anchor.setAttribute("aria-expanded", "true");
    var first = panel.querySelector("a"); if (first) first.focus();
  }

  var isHome = here === "index.html" || here === "";
  function menuKey(a) {
    var href = a.getAttribute("href");
    if (!MENUS[href] || a.closest(".grade-menu")) return null;
    if (a.closest("header.site nav") || a.classList.contains("card")) return href;
    if (isHome && a.closest("main") && href === "grades.html") return href;
    return null;
  }

  // mark triggers
  Array.prototype.forEach.call(document.querySelectorAll("a[href]"), function (a) {
    if (menuKey(a)) { a.setAttribute("aria-haspopup", "true"); a.setAttribute("aria-expanded", "false"); a.classList.add("has-menu"); }
  });

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    var key = a && menuKey(a);
    if (key) {
      e.preventDefault();
      if (trigger === a) close(); else open(a, key);
      return;
    }
    if (panel && !panel.contains(e.target)) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel) { var t = trigger; close(); if (t) t.focus(); }
  });
  window.addEventListener("resize", close);
})();
