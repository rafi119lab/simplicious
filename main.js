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

    // 2. Card Spotlight Effect
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    // 3. ROI Calculator Logic
    const calcBtn = document.getElementById('calcBtn');
    const leakDisplay = document.getElementById('leakAmount');

    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const v = parseFloat(document.getElementById('visitors').value) || 0;
            const s = parseFloat(document.getElementById('saleValue').value) || 0;
            const c = parseFloat(document.getElementById('convRate').value) || 0;

            // Logic: Assume performance infra recovers 1% of revenue lost to lag
            const annualLeak = (v * s * 0.01) * 12;

            // Animate Number
            let start = 0;
            const duration = 1500;
            const startTime = performance.now();

            function updateNumber(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easedProgress * annualLeak);
                
                leakDisplay.textContent = `$${current.toLocaleString()}`;

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                }
            }
            requestAnimationFrame(updateNumber);
        });
    }
});
