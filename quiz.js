(function () {
  var data = window.QUIZ || [];
  var root = document.getElementById("quiz");
  if (!root || !data.length) return;

  var score = 0;
  var answered = 0;

  var scoreEl = document.createElement("p");
  scoreEl.className = "score";
  scoreEl.setAttribute("aria-live", "polite");
  root.appendChild(scoreEl);

  function updateScore() {
    scoreEl.textContent = "Score: " + score + " / " + data.length +
      " (" + answered + " answered)";
  }

  function finish() {
    var done = document.createElement("div");
    done.className = "box";
    var h = document.createElement("h3");
    h.textContent = "Finished: " + score + " out of " + data.length;
    var p = document.createElement("p");
    p.textContent = score === data.length
      ? "Perfect score. Nice work."
      : "Review the lessons above for any you missed, then try again.";
    var b = document.createElement("button");
    b.className = "again";
    b.type = "button";
    b.textContent = "Try again";
    b.addEventListener("click", function () { window.location.reload(); });
    done.appendChild(h);
    done.appendChild(p);
    done.appendChild(b);
    root.appendChild(done);
    done.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  data.forEach(function (item, qi) {
    var fs = document.createElement("fieldset");
    var lg = document.createElement("legend");
    lg.textContent = "Question " + (qi + 1);
    fs.appendChild(lg);

    var q = document.createElement("p");
    q.textContent = item.q;
    fs.appendChild(q);

    var why = document.createElement("p");
    why.className = "why";
    why.hidden = true;

    var buttons = [];
    item.options.forEach(function (text, oi) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      btn.textContent = text;
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.disabled = true; });
        answered++;
        if (oi === item.answer) {
          score++;
          btn.classList.add("right");
          why.textContent = "Correct. " + item.why;
        } else {
          btn.classList.add("wrong");
          buttons[item.answer].classList.add("right");
          why.textContent = "Not quite. " + item.why;
        }
        why.hidden = false;
        updateScore();
        if (answered === data.length) finish();
      });
      buttons.push(btn);
      fs.appendChild(btn);
    });

    fs.appendChild(why);
    root.appendChild(fs);
  });

  updateScore();
})();
