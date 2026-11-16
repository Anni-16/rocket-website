// year
document.getElementById("yr").textContent = new Date().getFullYear();

// scroll reveal
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// terminal typing loop
const lines = [
  "> Received URL payload",
  "> Resolving host ... OK",
  "> Fetching DOM & Metadata ...",
  "> 200 OK - Indexed",
];
const term = document.getElementById("term");
let li = 0;
function tick() {
  if (li >= lines.length) {
    li = 0;
    term.innerHTML = "";
  }
  const d = document.createElement("div");
  d.textContent = lines[li];
  if (li === 3) d.className = "ok";
  term.appendChild(d);
  li++;
  setTimeout(tick, 1100);
}
tick();

// telemetry: animate bar + jitter number
const bar = document.getElementById("bar");
setTimeout(() => (bar.style.width = "35%"), 300);
setInterval(() => {
  document.getElementById("avg").textContent = (
    2.1 +
    Math.random() * 0.4
  ).toFixed(2);
}, 2500);

// pricing toggle
const plans = {
  personal: {
    s: ["$3", "60 Credits", "60 indexing credits"],
    p: ["$36", "1,200 Credits", "1200 indexing credits"],
    x: ["$72", "2,300 Credits", "2300 indexing credits"],
  },
  business: {
    s: ["$99", "2,000 Credits", "2000 indexing credits"],
    p: ["$249", "6,000 Credits", "6000 indexing credits"],
    x: ["$499", "15,000 Credits", "15000 indexing credits"],
  },
};
document.querySelectorAll("#tg button").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#tg button")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const set = plans[b.dataset.p];
    for (const k in set) {
      document.querySelector(`[data-k="${k}"]`).textContent = set[k][0];
      document.querySelector(`[data-c="${k}"]`).textContent = set[k][1];
      document.querySelector(`[data-f="${k}"]`).textContent = set[k][2];
    }
  }),
);
