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
    // Capture Inputs
    const traffic = parseFloat(document.getElementById('traffic').value) || 0;
    const value = parseFloat(document.getElementById('saleValue').value) || 0;
    const currentConv = (parseFloat(document.getElementById('convRate').value) || 0) / 100;
    
    // Simplicious Benchmark: 3% is the floor for performance builds
    const targetConv = 0.03; 
    
    const currentRev = traffic * currentConv * value;
    const projectedRev = traffic * targetConv * value;
    const annualLeak = (projectedRev - currentRev) * 12;

    const resultDiv = document.getElementById('auditResult');
    
    // Visual Feedback: Resetting the state for the "Thinking" feel
    resultDiv.style.opacity = "0";
    resultDiv.style.transition = "opacity 0.3s ease";
    
    setTimeout(() => {
        if (annualLeak <= 0) {
            resultDiv.innerHTML = `
                <div style="font-family: 'Space Mono'; color: #00ff88; font-size: 0.8rem; letter-spacing: 2px;">SYSTEM STATUS: OPTIMIZED</div>
                <div style="font-family: 'Inter'; font-weight: 900; font-size: 1.5rem; margin-top: 15px;">NO LEAKS DETECTED</div>
                <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 10px;">Your infrastructure meets Simplicious Performance Standards.</p>
            `;
        } else {
            resultDiv.innerHTML = `
                <div style="font-size: 0.7rem; opacity: 0.5; font-family: 'Space Mono'; letter-spacing: 1px;">ANNUAL REVENUE LEAK DETECTED</div>
                <div style="color: #ff007f; font-family: 'Inter'; font-weight: 900; font-size: 2.8rem; margin: 15px 0; text-shadow: 0 0 20px rgba(255, 0, 127, 0.3);">$${Math.floor(annualLeak).toLocaleString()}</div>
                <div style="font-size: 0.7rem; opacity: 0.5; font-family: 'Space Mono'; margin-bottom: 20px;">RECOVERABLE THROUGH HIGH-PERFORMANCE INFRASTRUCTURE</div>
                <a href="#contact" class="btn-primary" style="display: inline-block; padding: 12px 25px; font-size: 0.8rem; text-decoration: none; border-radius: 5px; background: linear-gradient(90deg, #7000ff, #ff007f);">PLUG THE LEAK</a>
            `;
        }
        resultDiv.style.opacity = "1";
    }, 400); // 400ms delay to make it feel like an "Analysis" is happening
}
