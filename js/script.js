/* ==========================================
   SCRIPT PRINCIPAL — ProCustomShop
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {
    setupNavbarHideOnScroll();
    setupRevealOnScroll();
    setupCountUp();
});

/* ==========================================
   NAVBAR: HIDE ON SCROLL + SCROLLED CLASS
   ========================================== */
function setupNavbarHideOnScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        // Clase "scrolled" para reducir padding
        navbar.classList.toggle('scrolled', currentScrollY > 40);

        // Ocultar al bajar, mostrar al subir
        if (currentScrollY <= 0) {
            navbar.classList.remove('navbar-hidden');
        } else if (currentScrollY > lastScrollY + 5) {
            navbar.classList.add('navbar-hidden');
        } else if (currentScrollY < lastScrollY - 5) {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollY = currentScrollY;
    });
}

/* ==========================================
   REVEAL ON SCROLL
   ========================================== */
function setupRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
}

/* ==========================================
   COUNT-UP ANIMADO
   ========================================== */
function setupCountUp() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                countUp(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function countUp(el, target, duration = 1600) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = start.toLocaleString('es-AR');
        if (start >= target) {
            el.textContent = target.toLocaleString('es-AR') + '+';
            clearInterval(timer);
        }
    }, 16);
}