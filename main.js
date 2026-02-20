/**
 * Simplicious.dev // Core Logic
 */

let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
const cursor = document.getElementById('cursor-ring');

// 1. Mouse Tracking (Always runs)
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 2. Cursor Animation Logic (Only runs if cursor element exists)
function animateCursor() {
    if (!cursor) return; // Safety check: If no cursor element, stop the loop
    
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + (distX * 0.15);
    cursorY = cursorY + (distY * 0.15);

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("SIMPLICIOUS // SYSTEM OPERATIONAL");
    
    // Start cursor if it exists
    if (cursor) animateCursor();

    // 3. Reveal Elements on Scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .hero-content, .glass-form').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // 4. Interactive "Spotlight" Effect for Cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
