document.addEventListener('DOMContentLoaded', () => {
    console.log("SIMPLICIOUS // SYSTEM OPERATIONAL");

    // 1. Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card, .hero-content, .glass-form, .portfolio-header').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // 2. Card Spotlight
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
});



// Add this inside your DOMContentLoaded listener
const calcBtn = document.getElementById('calcBtn');
const leakDisplay = document.getElementById('leakAmount');

if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const v = parseFloat(document.getElementById('visitors').value) || 0;
        const s = parseFloat(document.getElementById('saleValue').value) || 0;
        const c = parseFloat(document.getElementById('convRate').value) || 0;

        // Formula: Calculated loss assuming a 0.5% performance optimization gain
        // (Monthly Visitors * Sale Value * 0.005 improvement) * 12 months
        const annualLeak = (v * s * 0.005) * 12;

        // Animate the number
        let start = 0;
        const duration = 1000;
        const startTime = performance.now();

        function updateNumber(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * annualLeak);
            
            leakDisplay.textContent = `$${current.toLocaleString()}`;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        requestAnimationFrame(updateNumber);
    });
}
