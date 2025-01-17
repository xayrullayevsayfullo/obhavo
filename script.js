let isDragging = false;
let startX;
let scrollLeft;

const carousel = document.querySelector('.carousel');

// Bosish boshlanganda
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft; // Bosish boshlanganda kordinatani olish
    scrollLeft = carousel.scrollLeft; // Hozirgi scroll holatini saqlash
    carousel.classList.add('cursor-grabbing'); // Surish uchun kursorni o'zgartirish
});

// Bosish tugagach
carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.classList.remove('cursor-grabbing'); // Surish tugaganda kursorni qaytarish
});

// Bosish holatida bo'lmaganida surishni to'xtatish
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.classList.remove('cursor-grabbing');
});

// Harakatni kuzatish
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Agar surish amalga oshmayotgan bo'lsa, hech narsa qilma
    e.preventDefault(); // Default surish harakatini to'xtatish
    const x = e.pageX - carousel.offsetLeft; // Yangi kordinata
    const walk = (x - startX) * 2; // Surish tezligini oshirish
    carousel.scrollLeft = scrollLeft - walk; // Karuselni harakatlantirish
});
