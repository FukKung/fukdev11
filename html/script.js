const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // แสดงการ์ด 3 ใบพร้อมกัน
  spaceBetween: 30, // ระยะห่างระหว่างการ์ด
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  effect: 'coverflow', // เพิ่มเอฟเฟกต์การหมุน
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    //slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
for (let i = 0; i < 10; i++) {
  const hexagon = document.createElement('div');
  hexagon.classList.add('hexagon');
  hexagon.style.top = `${Math.random() * 100}%`;
  hexagon.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(hexagon);
}