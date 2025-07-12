const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let interval = setInterval(nextSlide, 4000);

// Cria os pontos de navegação
slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        showSlide(idx);
        resetInterval();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
}
