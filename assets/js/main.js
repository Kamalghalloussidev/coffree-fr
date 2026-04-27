/**
 * COF'FREE — main.js
 */

document.addEventListener('DOMContentLoaded', function () {

    initNav();
    initMobileMenu();
    initScrollAnimations();
    initSignupForm();
    initSmoothScroll();

});

/* ===== NAVIGATION : fond au scroll ===== */
function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            nav.style.background = 'rgba(16,46,32,0.98)';
        } else {
            nav.style.background = 'rgba(24,67,47,0.97)';
        }
    }, { passive: true });
}

/* ===== MENU MOBILE ===== */
function initMobileMenu() {
    const toggle  = document.querySelector('.nav-toggle');
    const panel   = document.getElementById('navPanel');
    const overlay = document.getElementById('navOverlay');
    const close   = document.querySelector('.navpanel-close');
    if (!toggle || !panel) return;

    function openMenu() {
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        overlay.style.display = 'block';
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        overlay.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', openMenu);
    close && close.addEventListener('click', closeMenu);
    overlay && overlay.addEventListener('click', closeMenu);

    panel.querySelectorAll('nav a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ===== ANIMATIONS AU SCROLL ===== */
function initScrollAnimations() {
    const targets = document.querySelectorAll(
        '.feature-card, .highlight-row, .section-header, .store-badge, .preview-large-item, .screenshot-item'
    );
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(el => observer.observe(el));
}

/* ===== FORMULAIRE INSCRIPTION ===== */
function initSignupForm() {
    const form = document.getElementById('signupForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const email = input ? input.value.trim() : '';

        if (!email || !isValidEmail(email)) {
            showFormFeedback(form, 'Veuillez entrer une adresse e-mail valide.', false);
            return;
        }

        showFormFeedback(form, "Merci ! Vous serez notifié au lancement de Cof'free.", true);
        form.reset();
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormFeedback(form, message, success) {
    let msg = form.querySelector('.form-feedback');
    if (!msg) {
        msg = document.createElement('p');
        msg.className = 'form-feedback';
        msg.style.cssText = 'margin-top:12px;font-size:.9rem;text-align:center;';
        form.appendChild(msg);
    }
    msg.textContent = message;
    msg.style.color = success ? '#FFD700' : '#ff6b6b';
}

/* ===== SMOOTH SCROLL pour les ancres ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 68;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}
