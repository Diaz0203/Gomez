document.addEventListener('DOMContentLoaded', () => {
    // 1. Control del Menú Hamburguesa para Móviles
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en un enlace (útil en móviles)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Animaciones al hacer scroll (Intersection Observer)
    // Seleccionamos todos los elementos con la clase .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');

   const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.02 // Cambiado de 0.15 a 0.02 para que aparezca casi inmediatamente
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase 'visible' que dispara la transición CSS
                entry.target.classList.add('visible');
                // Dejamos de observar el elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // 3. Pequeño efecto visual en el header al hacer scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});