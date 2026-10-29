let currentLang = 'tr';

function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR';
    }
    const navCv = document.getElementById('nav-cv-btn');
    if (navCv) {
        navCv.href = currentLang === 'tr' ? 'Talha_Gurler_CV_TR.pdf' : 'Talha_Gurler_CV_EN.pdf';
    }
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
        el.textContent = el.getAttribute('data-' + currentLang);
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Reveal Elements on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.08
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-panel').forEach(panel => {
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(16px)';
    panel.style.transition = 'opacity 0.45s ease-out, transform 0.45s ease-out';
    observer.observe(panel);
});
