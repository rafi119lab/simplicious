document.addEventListener('DOMContentLoaded', () => {
    console.log("SIMPLICIOUS // SYSTEM OPERATIONAL");

    // 1. Reveal on Scroll Logic
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Target ALL bleak headers, cards, and forms
    const revealElements = document.querySelectorAll(
        '.glass-card, .hero-content, .glass-form, .section-header-bleak, .portfolio-header, .contact-header'
    );

    revealElements.forEach(el => {
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
});

// 3. ROI Calculator Function
function runAudit() {
    const traffic = parseFloat(document.getElementById('traffic').value) || 0;
    const saleValue = parseFloat(document.getElementById('saleValue').value) || 0;
    const currentConv = (parseFloat(document.getElementById('convRate').value) || 0) / 100;
    
    // 3% is the high-performance benchmark for your $1k service pitch
    const targetConv = 0.03; 
    
    const currentMonthlyRev = traffic * currentConv * saleValue;
    const targetMonthlyRev = traffic * targetConv * saleValue;
    const annualLeak = (targetMonthlyRev - currentMonthlyRev) * 12;

    const resultDiv = document.getElementById('auditResult');
    
    if (annualLeak <= 0 && traffic > 0) {
        resultDiv.innerHTML = `
            <div style="color: #00ff88; font-weight: 900; font-size: 2rem; text-transform: uppercase;">Optimized</div>
            <div style="font-family: 'Space Mono'; font-size: 0.7rem; opacity: 0.7; margin-top:10px;">Your infrastructure meets current benchmarks.</div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="color: #ff007f; font-weight: 900; font-size: 2.8rem;">$${Math.floor(annualLeak).toLocaleString()}</div>
            <div style="font-family: 'Space Mono'; font-size: 0.8rem; letter-spacing: 1px; color: #fff; margin-top:10px; text-transform: uppercase;">Annual Revenue Leak</div>
            <div style="font-size: 0.7rem; opacity: 0.5; margin-top: 15px; max-width: 250px; margin-left: auto; margin-right: auto;">Based on a high-performance benchmark of 3%.</div>
        `;
    }
}
