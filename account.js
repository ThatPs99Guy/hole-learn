(function () {
  var nav = document.querySelector("header.site nav");
  if (!nav) return;
  var user = null, available = null, modal = null, pushTimer = null;
  var btn = document.createElement("a");
  btn.href = "#account"; btn.className = "acct-btn"; btn.textContent = "Sign in";
  nav.appendChild(btn);

  function api(path, method, body) {
    return fetch(path, { method: method || "GET", credentials: "same-origin", keepalive: method === "PUT",
      headers: body ? { "content-type": "application/json" } : {}, body: body ? JSON.stringify(body) : undefined })
      .then(function (r) {
        var ct = r.headers.get("content-type") || "";
        if (!ct.includes("application/json")) throw new Error("unavailable");
        return r.json().then(function (j) { return { status: r.status, body: j }; });
      });
  }
  function localData() {
    var o = {};
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k.indexOf("hlh:") === 0) o[k] = +localStorage.getItem(k) || 0; } } catch (e) {}
    return o;
  }
  function clearLocal() {
    try { Object.keys(localData()).forEach(function (k) { localStorage.removeItem(k); }); } catch (e) {}
  }
  function render() {
    btn.textContent = user ? "👤 " + user : "Sign in";
  }
  function push() {
    if (!user) return;
    api("/api/progress", "PUT", { data: localData() }).catch(function () {});
  }
  function pullAndMerge() {
    return api("/api/progress").then(function (r) {
      if (r.status !== 200) return;
      var server = r.body.data || {}, local = localData(), changed = false;
      Object.keys(server).forEach(function (k) {
        if ((server[k] || 0) > (local[k] || 0)) { try { localStorage.setItem(k, server[k]); changed = true; } catch (e) {} }
      });
      push();
      if (changed) window.dispatchEvent(new Event("hlh-sync"));
    }).catch(function () {});
  }
  window.addEventListener("hlh-save", function () {
    if (!user) return;
    clearTimeout(pushTimer); pushTimer = setTimeout(push, 1500);
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden && user) push(); });

  function closeModal() { if (modal) { modal.remove(); modal = null; } }
  function openModal() {
    closeModal();
    modal = document.createElement("div"); modal.className = "acct-overlay";
    var box = document.createElement("div"); box.className = "acct-box"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
    modal.appendChild(box);
    function field(label, type, id) {
      var l = document.createElement("label"); l.textContent = label; l.htmlFor = id;
      var i = document.createElement("input"); i.type = type; i.id = id; i.autocomplete = type === "password" ? "current-password" : "username";
      i.setAttribute("autocapitalize", "off"); i.setAttribute("autocorrect", "off");
      box.appendChild(l); box.appendChild(i); return i;
    }
    if (available === false) {
      box.innerHTML = "<h2>Accounts aren't available yet</h2><p>Your progress is still saved on this device. Accounts need the site's account service to be set up.</p>";
    } else if (user) {
      box.innerHTML = "<h2>Signed in as " + user.replace(/[<>&]/g, "") + "</h2><p>Your progress is saved to your account.</p>";
      var out = document.createElement("button"); out.className = "ixl-next"; out.textContent = "Sign out";
      out.addEventListener("click", function () {
        push();
        api("/api/logout", "POST", {}).finally(function () { user = null; clearLocal(); render(); closeModal(); location.reload(); });
      });
      box.appendChild(out);
    } else {
      var mode = "login";
      var h = document.createElement("h2"); box.appendChild(h);
      var note = document.createElement("p"); note.className = "ixl-tip"; box.appendChild(note);
      var u = field("Username", "text", "acct-user");
      var p = field("Password", "password", "acct-pass");
      var msg = document.createElement("p"); msg.className = "acct-msg"; msg.setAttribute("aria-live", "polite"); box.appendChild(msg);
      var go = document.createElement("button"); go.className = "ixl-next"; box.appendChild(go);
      var sw = document.createElement("button"); sw.className = "ixl-back"; sw.type = "button"; box.appendChild(sw);
      var setMode = function (m) {
        mode = m; msg.textContent = "";
        h.textContent = m === "login" ? "Sign in" : "Create an account";
        note.textContent = m === "login" ? "Sign in to load your saved progress." : "Pick a username (don't use your real name) and a password you'll remember. Your progress on this device will be saved to it.";
        go.textContent = m === "login" ? "Sign in" : "Create account";
        sw.textContent = m === "login" ? "New here? Create an account" : "I already have an account";
        p.autocomplete = m === "login" ? "current-password" : "new-password";
      };
      sw.addEventListener("click", function () { setMode(mode === "login" ? "register" : "login"); });
      var submit = function () {
        msg.textContent = ""; go.disabled = true;
        api("/api/" + (mode === "login" ? "login" : "register"), "POST", { username: u.value, password: p.value })
          .then(function (r) {
            go.disabled = false;
            if (r.status !== 200) { msg.textContent = r.body.error || "Something went wrong."; return; }
            user = r.body.user; render(); closeModal(); pullAndMerge();
          }).catch(function () { go.disabled = false; msg.textContent = "Couldn't reach the account service."; });
      };
      go.addEventListener("click", submit);
      [u, p].forEach(function (i) { i.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); submit(); } }); });
      setMode("login");
      setTimeout(function () { u.focus(); }, 0);
    }
    var cl = document.createElement("button"); cl.className = "ixl-back acct-close"; cl.type = "button"; cl.textContent = "Close";
    cl.addEventListener("click", closeModal); box.appendChild(cl);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.body.appendChild(modal);
  }
  btn.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); openModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  api("/api/me").then(function (r) {
    if (r.status === 503) { available = false; return; }
    available = true; user = r.body.user || null; render(); if (user) pullAndMerge();
  }).catch(function () { available = false; });
})();
