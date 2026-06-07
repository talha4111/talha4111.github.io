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

// Dynamic Blob Following Mouse (Subtle Effect)
const blob1 = document.querySelector('.blob-1');
const blob2 = document.querySelector('.blob-2');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Very subtle movement based on mouse
    blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    blob2.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
});

// Reveal Elements on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
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
    panel.style.transform = 'translateY(20px)';
    panel.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(panel);
});
