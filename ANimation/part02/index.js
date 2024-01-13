const button = document.getElementById("button"),
  svg = document.getElementById("svg");

let count = 0;

const fill = "rgb(249, 24, 128)";

const t1 = gsap.timeline({ repeat: 1, yoyo: true }),
  t2 = gsap.timeline(),
  main = gsap.timeline();

const ease = "elastic.out(1, 0.4)";

t1.to(["#heart", "#heart-filled"], 0.5, { morphSVG: "#x", ease }).to(
  "#svg",
  0.5,
  { scale: 1.25, ease },
  "<"
);

t2.to("#heart", 0.25, { fill }).to("#heart-filled", 0.25, { opacity: 1 }, "<");

main.add(t1);
main.add(t2, "<85%");
main.pause();

button.onclick = () => (count++ % 2 === 0 ? main.play() : main.reverse());
