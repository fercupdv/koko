document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. EFECTO DE PARALAJE SUAVE (Solo aplica al fondo de index.html)
       ========================================================================== */
    const heroBg = document.querySelector(".hero-bg");
    
    if (heroBg) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            
            // Si el usuario está visualizando el Hero, desplaza el fondo suavemente
            if (currentScroll < window.innerHeight) {
                // Multiplicador bajo (0.1) para un deslizamiento lento, fino y elegante
                heroBg.style.transform = `scale(1.02) translateY(${currentScroll * 0.1}px)`;
            }
        });
    }

    /* ==========================================================================
       2. EFECTO INTERACTIVO EN LOS ENLACES DE LA NAV (Feedback visual rápido)
       ========================================================================== */
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Genera una breve atenuación general antes de que el navegador cambie de archivo HTML
            document.body.style.opacity = "0.7";
            document.body.style.transition = "opacity 0.3s ease";
        });
    });
});