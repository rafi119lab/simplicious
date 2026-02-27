document.addEventListener('DOMContentLoaded', () => {
    console.log("SIMPLICIOUS // SYSTEM OPERATIONAL");

    // 1. Reveal on Scroll (Added .sultan-glass and .panel for surgical precision)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card, .hero-content, .glass-form, .portfolio-header, .sultan-glass, .panel').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"; // Smoother "Engineer" feel
        observer.observe(el);
    });

    // 2. Card & Panel Spotlight (Cyberpunk Glow follow)
    const cards = document.querySelectorAll('.glass-card, .panel');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
});

function runAudit() {
    const traffic = parseFloat(document.getElementById('traffic').value) || 2000;
    const value = parseFloat(document.getElementById('saleValue').value) || 500;
    const currentConv = (parseFloat(document.getElementById('convRate').value) || 1.0) / 100;
    
    const targetConv = 0.035; // 3.5% Simplicious Benchmark
    const currentRev = traffic * currentConv * value;
    const projectedRev = traffic * targetConv * value;
    const monthlyLift = projectedRev - currentRev;

    const resultDiv = document.getElementById('auditResult');
    
    // Clear and Reveal
    resultDiv.style.opacity = "0";
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div class="result-animate" style="text-align: center;">
                <p style="color: var(--accent-pink); font-family: 'Space Mono'; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase;">Projected Revenue Lift</p>
                <h2 style="font-size: 4rem; font-weight: 900; margin: 10px 0; color: #fff;">+$${Math.floor(monthlyLift).toLocaleString()}</h2>
                <div style="width: 40px; height: 2px; background: var(--accent-pink); margin: 20px auto;"></div>
                <p style="font-size: 0.9rem; opacity: 0.7; max-width: 320px; margin: 0 auto;">
                    Monthly margin recovered through infrastructure optimization.
                </p>
                <a href="#contact" class="scan-btn" style="display: inline-block; width: auto; padding: 12px 30px; margin-top: 25px; font-size: 0.8rem; text-decoration: none;">Secure This Growth</a>
            </div>
        `;
        resultDiv.style.opacity = "1";
    }, 300);
}
