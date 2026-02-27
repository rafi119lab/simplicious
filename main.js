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
    // 1. Grab inputs
    const traffic = parseFloat(document.getElementById('traffic').value) || 0;
    const saleValue = parseFloat(document.getElementById('saleValue').value) || 0;
    const currentConv = (parseFloat(document.getElementById('convRate').value) || 0) / 100;
    
    // 2. Benchmarking (High-Performance standard is 3%)
    const targetConv = 0.03; 
    
    // 3. Calculation
    const currentMonthlyRev = traffic * currentConv * saleValue;
    const targetMonthlyRev = traffic * targetConv * saleValue;
    const monthlyLeak = targetMonthlyRev - currentMonthlyRev;
    const annualLeak = monthlyLeak * 12;

    // 4. Inject Results
    const resultDiv = document.getElementById('auditResult');
    
    if (annualLeak <= 0 && traffic > 0) {
        resultDiv.innerHTML = `
            <div style="color: #00ff88; font-weight: 900; font-size: 2rem;">OPTIMIZED</div>
            <div style="font-family: 'Space Mono'; font-size: 0.7rem; opacity: 0.7; margin-top:10px;">YOUR CURRENT INFRASTRUCTURE MEETS BENCHMARKS.</div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="color: #ff007f; font-weight: 900; font-size: 2.8rem;">$${Math.floor(annualLeak).toLocaleString()}</div>
            <div style="font-family: 'Space Mono'; font-size: 0.8rem; letter-spacing: 1px; color: #fff; margin-top:10px;">ANNUAL REVENUE LEAK</div>
            <div style="font-size: 0.7rem; opacity: 0.5; margin-top: 15px; max-width: 250px;">Based on a high-performance conversion benchmark of 3%.</div>
        `;
    }
}
