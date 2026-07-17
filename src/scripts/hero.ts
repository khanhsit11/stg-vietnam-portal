import EmblaCarousel from "embla-carousel";

document.addEventListener("DOMContentLoaded", () => {
  const viewport = document.querySelector(".hero__viewport");

  if (!viewport) return;

  EmblaCarousel(viewport, {
    loop: true,
  });
});