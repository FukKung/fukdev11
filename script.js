const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: { rotate: 30, stretch: 0, depth: 100, modifier: 1 },
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  keyboard: { enabled: true },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 }
  }
});

const autoBtn = document.getElementById("autoBtn");
let autoOn = true;

function renderAutoBtn() {
  if (!autoBtn) return;
  autoBtn.textContent = `Auto Slide: ${autoOn ? "ON" : "OFF"}`;
  autoBtn.classList.toggle("bg-green-600", autoOn);
  autoBtn.classList.toggle("bg-red-600", !autoOn);
}

function setAuto(v) {
  autoOn = v;
  if (v) swiper.autoplay.start();
  else swiper.autoplay.stop();
  renderAutoBtn();
}

autoBtn?.addEventListener("click", () => setAuto(!autoOn));
renderAutoBtn();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) swiper.autoplay.stop();
  else if (autoOn) swiper.autoplay.start();
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
prevBtn && (prevBtn.onclick = () => swiper.slidePrev());
nextBtn && (nextBtn.onclick = () => swiper.slideNext());

for (let i = 0; i < 10; i++) {
  const hexagon = document.createElement("div");
  hexagon.classList.add("hexagon");
  hexagon.style.top = `${Math.random() * 100}%`;
  hexagon.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(hexagon);
}