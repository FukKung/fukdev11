const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  effect: 'coverflow', 
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
  }
});





// ตกแต่ง hexagon (ถ้าคุณใช้ background animation)
for (let i = 0; i < 10; i++) {
  const hexagon = document.createElement('div');
  hexagon.classList.add('hexagon');
  hexagon.style.top = `${Math.random() * 100}%`;
  hexagon.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(hexagon);
}
