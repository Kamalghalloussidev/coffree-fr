/**
 * COF'FREE — main.js
 */

document.addEventListener('DOMContentLoaded', function () {

    initNav();
    initMobileMenu();
    initScrollAnimations();
    initFlowTabs();
    initFlowAnimation();
    initHelpTabs();
    initSignupForm();
    initSmoothScroll();
    initModalTelecharger();

});

/* ===== MODAL TÉLÉCHARGER ===== */
function initModalTelecharger() {
    const modal       = document.getElementById('modal-telecharger');
    const btnNav      = document.getElementById('btn-telecharger');
    const btnMobile   = document.getElementById('btn-telecharger-mobile');
    const btnClose    = document.getElementById('modal-close-btn');
    if (!modal) return;

    function openModal() { modal.classList.add('active'); }
    function closeModal() { modal.classList.remove('active'); }

    if (btnNav)    btnNav.addEventListener('click', openModal);
    if (btnMobile) btnMobile.addEventListener('click', openModal);
    if (btnClose)  btnClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
}

/* ===== NAVIGATION : bordure au scroll ===== */
function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
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

/* ===== HELP TABS ===== */
function initHelpTabs() {
    const tabs = document.querySelectorAll('.help-tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const helpId = this.dataset.help;

            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            document.querySelectorAll('.help-panel').forEach(p => p.classList.remove('active'));
            const panel = document.getElementById('help-' + helpId);
            if (panel) panel.classList.add('active');
        });
    });
}

/* ===== FLOW TABS ===== */
function initFlowTabs() {
    const tabs = document.querySelectorAll('.flow-tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const flowId = this.dataset.flow;

            // Update tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Update panels
            document.querySelectorAll('.flow-steps').forEach(panel => {
                panel.classList.remove('active');
            });
            const activePanel = document.getElementById('flow-' + flowId);
            if (activePanel) {
                activePanel.classList.add('active');
                // Re-trigger animation for newly shown panel
                activePanel.classList.remove('line-drawn');
                activePanel.querySelectorAll('.flow-step').forEach(s => s.classList.remove('visible'));
                setTimeout(() => triggerFlowAnimation(activePanel), 80);
            }
        });
    });
}

/* ===== FLOW ANIMATION AU SCROLL ===== */
function initFlowAnimation() {
    const section = document.getElementById('how-it-works');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activePanel = section.querySelector('.flow-steps.active');
                if (activePanel) triggerFlowAnimation(activePanel);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(section);
}

function triggerFlowAnimation(panel) {
    const steps = panel.querySelectorAll('.flow-step');

    // Draw the vertical line
    setTimeout(() => panel.classList.add('line-drawn'), 100);

    // Reveal steps with staggered delay
    steps.forEach((step, i) => {
        const delay = parseInt(step.dataset.delay || 0, 10) + 100;
        setTimeout(() => step.classList.add('visible'), delay);
    });
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
