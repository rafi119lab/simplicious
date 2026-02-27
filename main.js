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

function runAudit() {
    const traffic = parseFloat(document.getElementById('traffic').value) || 0;
    const value = parseFloat(document.getElementById('saleValue').value) || 0;
    const currentConv = (parseFloat(document.getElementById('convRate').value) || 0) / 100;
    
    // Simplicious Standard: We target a 3% conversion floor for performance builds
    const targetConv = 0.03; 
    
    const currentRev = traffic * currentConv * value;
    const projectedRev = traffic * targetConv * value;
    const monthlyLeak = projectedRev - currentRev;
    const annualLeak = monthlyLeak * 12;

    const resultDiv = document.getElementById('auditResult');
    
    if (annualLeak <= 0) {
        resultDiv.innerHTML = `<span style="color: #00ff88;">YOUR SYSTEMS ARE OPTIMIZED.</span>`;
    } else {
        resultDiv.innerHTML = `
            <div style="font-size: 0.8rem; opacity: 0.5; font-family: 'Space Mono';">ANNUAL REVENUE LEAK DETECTED</div>
            <div style="color: #ff007f;">$${annualLeak.toLocaleString()}</div>
            <div style="font-size: 0.7rem; margin-top: 10px; opacity: 0.5;">RECOVERABLE THROUGH HIGH-PERFORMANCE INFRASTRUCTURE</div>
        `;
    }
}
