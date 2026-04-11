/* ==========================================
   SCRIPT PRINCIPAL
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    console.log('ProCustomShop - Landing Page Iniciada');
    
    // Aquí puedes agregar funcionalidades interactivas
    setupEventListeners();
});

/* ==========================================
   CONFIGURAR LISTENERS DE EVENTOS
   ========================================== */

function setupEventListeners() {
    // Botón de explorar catálogo
    const exploreBtn = document.querySelector('.hero-section .btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            console.log('Botón Explorar Catálogo presionado');
            // Aquí irá la lógica para explorar el catálogo
        });
    }

    // Smooth scroll para los enlaces del navbar
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ==========================================
   FUNCIONES UTILITARIAS
   ========================================== */

// Función para logging (útil para debugging)
function log(message) {
    console.log('[ProCustomShop]', message);
}
