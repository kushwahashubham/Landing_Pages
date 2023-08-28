var tl = gsap.timeline();
tl.from(".pic1>img", {
  delay: 0.4,
  opacity: 0,
  y: 60,
  duration: 0.8,
});
tl.from(
  ".pic2>img",
  {
    delay: 0.4,
    opacity: 0,
    x: 60,
    duration: 0.8,
  },
  "-=0.8"
);
tl.from(
  ".pic3>img",
  {
    delay: 0.4,
    opacity: 0,
    y: -60,
    duration: 0.8,
  },
  "-=0.8"
);

tl.from(
  "#main>h1,h3,#arrowBtn",
  {
    delay: 0.4,
    opacity: 0,
    duration: 0.5,
  },
  "-=0.5"
);

gsap.from("#page2 h5, h1, #about-us", {
  opacity: 0,
  stagger:0.1,
  y: 60,
  scrollTrigger:{
    trigger: "#page2 h5",
    scroller: "body",
    start: "top 60%",
  }
});
