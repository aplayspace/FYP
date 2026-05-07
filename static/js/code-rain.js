/* ============================================================
   Code rain — scattered character streams clustered around blobs.
   Vanilla JS, no dependencies.
   Hydrates [data-code-rain]. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  const STREAM_TEXT =
    "import tensorflow as tf def shape_list(x): return [s for s in x.shape] " +
    "dynamic = tf.shape(x) static = x.shape.as_list() if s is None else s for i " +
    "class Project def __init__ self title None keep cleanly flow ape return retu";

  // Match the blob positions in site.css so streams cluster on colour
  const CLUSTERS = [
    { x: 18, y: 38, r: 14 },
    { x: 22, y: 78, r: 16 },
    { x: 78, y: 22, r: 12 },
    { x: 86, y: 60, r: 14 },
    { x: 50, y: 90, r: 10 },
  ];

  const STREAM_COUNT = 50;       // tweak: visual density
  const CHARS_MIN    = 2;
  const CHARS_MAX    = 8;

  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }

  function build(target) {
    target.innerHTML = "";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (let i = 0; i < STREAM_COUNT; i++) {
      const stream = document.createElement("div");
      stream.className = "code-stream";

      // 78% cluster on blobs, 22% scatter freely
      let x, y;
      if (Math.random() < 0.78) {
        const c = pick(CLUSTERS);
        const a = Math.random() * Math.PI * 2;
        const d = Math.pow(Math.random(), 0.6) * c.r;
        x = c.x + Math.cos(a) * d;
        y = c.y + Math.sin(a) * d * 1.4;
      } else {
        x = Math.random() * 100;
        y = Math.random() * 100;
      }

      const speed   = 18 + Math.random() * 30;
      const delay   = -Math.random() * 30;
      const opacity = 0.45 + Math.random() * 0.45;
      const size    = 13 + Math.random() * 4;

      stream.style.left     = `${x}%`;
      stream.style.top      = `${y}%`;
      stream.style.opacity  = opacity;
      stream.style.fontSize = `${size}px`;
      if (!reduced) {
        stream.style.animationDuration = `${speed}s`;
        stream.style.animationDelay    = `${delay}s`;
      } else {
        stream.style.animation = "none";
      }

      const charCount = CHARS_MIN + ((Math.random() * (CHARS_MAX - CHARS_MIN)) | 0);
      const start = (Math.random() * STREAM_TEXT.length) | 0;
      let html = "";
      for (let j = 0; j < charCount; j++) {
        const ch = STREAM_TEXT[(start + j) % STREAM_TEXT.length];
        if (ch !== " ") {
          const div = document.createElement("div");
          div.textContent = ch;
          html += div.outerHTML;
        }
      }
      stream.innerHTML = html;

      target.appendChild(stream);
    }
  }

  function init() {
    document.querySelectorAll("[data-code-rain]").forEach(build);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
