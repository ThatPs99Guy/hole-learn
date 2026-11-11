// Cloudflare Pages Function: accounts + saved progress.
// Needs one KV namespace bound to this project with the variable name PROGRESS.
const enc = new TextEncoder();
const SESSION_DAYS = 30;

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: Object.assign({ "content-type": "application/json", "cache-control": "no-store" }, headers || {})
  });
}
function b64(buf) { return btoa(String.fromCharCode.apply(null, new Uint8Array(buf))); }
function unb64(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
function randomToken(n) { var a = new Uint8Array(n || 32); crypto.getRandomValues(a); return b64(a).replace(/[+/=]/g, "x"); }

async function hashPassword(password, salt) {
  var key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  var bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: salt, iterations: 100000 }, key, 256);
  return b64(bits);
}
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  var r = 0; for (var i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
function getCookie(req, name) {
  var m = (req.headers.get("cookie") || "").match(new RegExp("(?:^|; )" + name + "=([^;]+)"));
  return m ? m[1] : null;
}
function sessionCookie(token, maxAge) {
  return "hlh_session=" + token + "; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=" + maxAge;
}
async function currentUser(req, env) {
  var t = getCookie(req, "hlh_session");
  if (!t || !/^[A-Za-z0-9]{20,80}$/.test(t)) return null;
  return await env.PROGRESS.get("sess:" + t);
}
async function readBody(req) {
  if (!(req.headers.get("content-type") || "").includes("application/json")) return null;
  try { var t = await req.text(); if (t.length > 100000) return null; return JSON.parse(t); } catch (e) { return null; }
}

export async function onRequest(context) {
  var req = context.request, env = context.env;
  if (!env.PROGRESS) return json({ error: "Accounts are not set up yet (missing KV binding named PROGRESS)." }, 503);
  var path = new URL(req.url).pathname.replace(/\/+$/, "");
  var method = req.method;

  try {
    if (path === "/api/me" && method === "GET") {
      var u = await currentUser(req, env);
      return u ? json({ user: u }) : json({ user: null });
    }

    if ((path === "/api/register" || path === "/api/login") && method === "POST") {
      var body = await readBody(req);
      if (!body) return json({ error: "Bad request." }, 400);
      var name = String(body.username || "").trim().toLowerCase(), pw = String(body.password || "");
      if (!/^[a-z0-9_]{3,20}$/.test(name)) return json({ error: "Username must be 3-20 letters, numbers, or underscores." }, 400);
      if (pw.length < 6 || pw.length > 100) return json({ error: "Password must be at least 6 characters." }, 400);
      var userKey = "user:" + name, failKey = "fail:" + name;

      if (path === "/api/register") {
        if (await env.PROGRESS.get(userKey)) return json({ error: "That username is taken." }, 409);
        var salt = crypto.getRandomValues(new Uint8Array(16));
        var rec = { salt: b64(salt), hash: await hashPassword(pw, salt), created: Date.now() };
        await env.PROGRESS.put(userKey, JSON.stringify(rec));
      } else {
        var fails = parseInt(await env.PROGRESS.get(failKey) || "0", 10);
        if (fails >= 8) return json({ error: "Too many tries. Please wait 15 minutes." }, 429);
        var raw = await env.PROGRESS.get(userKey), ok = false;
        if (raw) { var r = JSON.parse(raw); ok = safeEqual(await hashPassword(pw, unb64(r.salt)), r.hash); }
        if (!ok) { await env.PROGRESS.put(failKey, String(fails + 1), { expirationTtl: 900 }); return json({ error: "Wrong username or password." }, 401); }
        await env.PROGRESS.delete(failKey);
      }
      var token = randomToken(32), maxAge = SESSION_DAYS * 86400;
      await env.PROGRESS.put("sess:" + token, name, { expirationTtl: maxAge });
      return json({ user: name }, 200, { "set-cookie": sessionCookie(token, maxAge) });
    }

    if (path === "/api/logout" && method === "POST") {
      var t = getCookie(req, "hlh_session");
      if (t && /^[A-Za-z0-9]{20,80}$/.test(t)) await env.PROGRESS.delete("sess:" + t);
      return json({ ok: true }, 200, { "set-cookie": sessionCookie("", 0) });
    }

    if (path === "/api/progress") {
      var user = await currentUser(req, env);
      if (!user) return json({ error: "Not signed in." }, 401);
      if (method === "GET") {
        var p = await env.PROGRESS.get("prog:" + user);
        return json({ data: p ? JSON.parse(p) : {} });
      }
      if (method === "PUT") {
        var b = await readBody(req);
        if (!b || typeof b.data !== "object" || !b.data) return json({ error: "Bad request." }, 400);
        var clean = {}, n = 0;
        for (var k in b.data) {
          var v = Number(b.data[k]);
          if (!/^hlh:[A-Za-z0-9._-]{1,40}:[A-Za-z0-9_-]{1,40}$/.test(k) || !(v >= 0 && v <= 100)) continue;
          if (++n > 600) break;
          clean[k] = Math.round(v);
        }
        await env.PROGRESS.put("prog:" + user, JSON.stringify(clean));
        return json({ ok: true, saved: n });
      }
    }
    return json({ error: "Not found." }, 404);
  } catch (e) {
    return json({ error: "Server error." }, 500);
  }
}
