// nav.js - Controls Header, Footer, Translations & Active Highlights

// 1. LANGUAGE LOGIC
function setLanguage(lang) {
    // Save preference so it remembers on next visit
    localStorage.setItem('preferredLang', lang);
    
    // Toggle Text Visibility
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = (lang === 'en' ? 'inline-block' : 'none'));
    document.querySelectorAll('.lang-es').forEach(el => el.style.display = (lang === 'es' ? 'inline-block' : 'none'));
    
    // Dim the inactive button
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    if (btnEn && btnEs) {
        btnEn.style.opacity = (lang === 'en' ? '1' : '0.4');
        btnEs.style.opacity = (lang === 'es' ? '1' : '0.4');
    }
}

// 2. INJECT CONTENT WHEN PAGE LOADS
document.addEventListener("DOMContentLoaded", function() {
    
    // --- A. HEADER HTML ---
    const headerHTML = `
    <header>
        <div class="logo">
            <i class="fa-solid fa-scale-balanced" style="color:#00c2f3;"></i>
            <span class="lang-en">Paraguay Residency Solutions</span>
            <span class="lang-es">Paraguay Residency Solutions</span>
        </div>
        <nav>
            <ul>
                <li><a href="index.html"><span class="lang-en">Home</span><span class="lang-es">Inicio</span></a></li>
                <li><a href="about.html"><span class="lang-en">About Me</span><span class="lang-es">Sobre Mí</span></a></li>
                
                <li class="dropdown">
                    <a href="javascript:void(0)" style="cursor: default;" id="services-parent">
                        <span class="lang-en">Services <i class="fa-solid fa-caret-down"></i></span>
                        <span class="lang-es">Servicios <i class="fa-solid fa-caret-down"></i></span>
                    </a>
                    <div class="dropdown-content">
                        <a href="residency.html">
                            <span class="lang-en">Immigration & Residency</span>
                            <span class="lang-es">Inmigración y Residencia</span>
                        </a>
                        <a href="fiscal-planning.html">
                            <span class="lang-en">Fiscal Planning (Tax)</span>
                            <span class="lang-es">Planificación Fiscal</span>
                        </a>
                        <a href="incorporation.html">
                            <span class="lang-en">Business Incorporation</span>
                            <span class="lang-es">Constitución de Empresas</span>
                        </a>
                    </div>
                </li>

                <li><a href="contact.html"><span class="lang-en">Contact</span><span class="lang-es">Contacto</span></a></li>
                
                <li style="margin-left:15px; border-left: 1px solid #444; padding-left:15px; display:flex; gap:10px;">
                    <span id="btn-en" class="lang-btn" onclick="setLanguage('en')">EN</span>
                    <span id="btn-es" class="lang-btn" onclick="setLanguage('es')">ES</span>
                </li>
            </ul>
        </nav>
    </header>`;
    
    // Insert Header at the very top of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);


    // --- B. FOOTER HTML ---
    const footerHTML = `
    <footer>
        <div class="container footer-grid" style="padding: 0;">
            <div class="footer-col">
                <div class="logo" style="margin-bottom: 20px;">
                    <span class="lang-en">Paraguay Residency</span>
                    <span class="lang-es">Paraguay Residencia</span>
                </div>
                <p>
                    <span class="lang-en">Your trusted legal partner for securing residency, citizenship, and fiscal optimization in the heart of South America.</span>
                    <span class="lang-es">Su socio legal de confianza para asegurar residencia, ciudadanía y optimización fiscal en el corazón de América del Sur.</span>
                </p>
            </div>
            
            <div class="footer-col">
                <h3><span class="lang-en">Quick Links</span><span class="lang-es">Enlaces Rápidos</span></h3>
                <ul>
                    <li><a href="index.html"><i class="fa-solid fa-chevron-right"></i> <span class="lang-en">Home</span><span class="lang-es">Inicio</span></a></li>
                    <li><a href="about.html"><i class="fa-solid fa-chevron-right"></i> <span class="lang-en">About Me</span><span class="lang-es">Sobre Mí</span></a></li>
                    <li><a href="contact.html"><i class="fa-solid fa-chevron-right"></i> <span class="lang-en">Contact</span><span class="lang-es">Contacto</span></a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h3><span class="lang-en">Services</span><span class="lang-es">Servicios</span></h3>
                <ul>
                    <li><a href="residency.html"><i class="fa-solid fa-chevron-right"></i> <span class="lang-en">Immigration</span><span class="lang-es">Inmigración</span></a></li>
                    <li><a href="fiscal-planning.html"><i class="fa-solid fa-chevron-right"></i> <span class="lang-en">Fiscal Planning</span><span class="lang-es">Planificación Fiscal</span></a></li>
                    <li><a href="incorporation.html"><i class="fa-solid fa-chevron-right"></i> <span class="lang-en">Business Setup</span><span class="lang-es">Negocios</span></a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h3><span class="lang-en">Get in Touch</span><span class="lang-es">Contáctenos</span></h3>
                <ul>
                    <li><i class="fa-solid fa-location-dot"></i> <span>World Trade Center, Asunción</span></li>
                    <li><a href="mailto:contact@paraguaysolutions.com"><i class="fa-solid fa-envelope"></i> contact@paraguaysolutions.com</a></li>
                    <li><a href="https://wa.me/595982123456"><i class="fa-brands fa-whatsapp"></i> +595 982 123 456</a></li>
                </ul>
            </div>
        </div>
        
        <div class="copyright">
            <span class="lang-en">&copy; 2026 Paraguay Residency Solutions. All rights reserved.</span>
            <span class="lang-es">&copy; 2026 Soluciones de Residencia Paraguay. Todos los derechos reservados.</span>
        </div>
    </footer>
    
    <a href="https://wa.me/595982123456" class="whatsapp-float" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>`;
    
    // Insert Footer at the very bottom of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);


    // --- C. APPLY LANGUAGE ---
    // Check if user has a preference, default to 'en'
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);


    // --- D. HIGHLIGHT ACTIVE LINK (THE FIX) ---
    // 1. Get the current page name (e.g., "about.html" or "index.html")
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // 2. Find all links in the nav
    const navLinks = document.querySelectorAll('nav a');
    
    // 3. Loop through them
    navLinks.forEach(link => {
        // If the link's href matches the current page...
        if (link.getAttribute('href') === currentPath) {
            
            // ...turn it BLUE
            link.classList.add('active-link');
            
            // ...and if it is inside the dropdown (like Residency), turn "Services" blue too!
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('#services-parent');
                if (parentLink) parentLink.classList.add('active-link');
            }
        }
    });
});