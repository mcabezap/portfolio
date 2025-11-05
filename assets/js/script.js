// Archivo: assets/js/script.js -> subir archivo

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------
    // 1. FUNCIONALIDAD DE NAVEGACIÓN MÓVIL (Menú Hamburguesa)
    // ----------------------------------------------------------------
    const navToggleButton = document.getElementById('nav-toggle-button');
    const mainNavMenu = document.getElementById('main-nav-menu');

    if (navToggleButton && mainNavMenu) {
        navToggleButton.addEventListener('click', () => {
            const isExpanded = navToggleButton.getAttribute('aria-expanded') === 'true' || false;

            // Alternar la visibilidad y el estado ARIA
            navToggleButton.setAttribute('aria-expanded', !isExpanded);
            mainNavMenu.classList.toggle('nav-menu-open'); // Usa una clase CSS para mostrar/ocultar

            // Nota: Se asume que 'nav-menu-open' se define en style.css
            // Ejemplo CSS:
            /*
            @media (max-width: 1023px) {
                .nav-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: var(--color-white);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    flex-direction: column;
                    z-index: 40;
                }
                .nav-menu-open {
                    display: flex;
                }
            }
            */
        });
    }

    // ----------------------------------------------------------------
    // 2. RESALTAR EL ENLACE ACTIVO
    // ----------------------------------------------------------------
    const path = window.location.pathname;
    const pageName = path.substring(path.lastIndexOf('/') + 1);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // Elimina la clase 'active' de todos
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // Comprueba si el href del enlace coincide con el nombre del archivo actual
        if (link.getAttribute('href') === pageName || (pageName === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // ----------------------------------------------------------------
    // 3. VALIDACIÓN BÁSICA DE FORMULARIO DE CONTACTO
    // ----------------------------------------------------------------
    const contactForm = document.querySelector('#form form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío real del formulario

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validación simple
            if (!nombre || !email || !mensaje) {
                formMessage.textContent = 'Error: Por favor, rellena todos los campos obligatorios (*).';
                formMessage.classList.remove('text-green-700', 'bg-green-100');
                formMessage.classList.add('text-red-700', 'bg-red-100', 'block');
                formMessage.removeAttribute('hidden');
                return;
            }

            // Simulación de envío exitoso (En un proyecto real, aquí iría la llamada a la API)
            
            // Oculta el formulario y muestra mensaje de éxito
            contactForm.style.display = 'none';
            
            formMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo en menos de 24 horas.';
            formMessage.classList.remove('text-red-700', 'bg-red-100', 'hidden');
            formMessage.classList.add('text-green-700', 'bg-green-100', 'block');
            formMessage.removeAttribute('hidden');

            // En un caso real, podrías restablecer el formulario después de un tiempo
            // setTimeout(() => {
            //     contactForm.reset();
            //     contactForm.style.display = 'block';
            //     formMessage.classList.add('hidden');
            // }, 5000);
        });
    }

    // ----------------------------------------------------------------
    // 4. ANIMACIÓN SIMPLE DE SCROLL (opcional)
    // ----------------------------------------------------------------
    // Esta función permite un scroll suave si se usa la navegación de anclas (ej: #form)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
