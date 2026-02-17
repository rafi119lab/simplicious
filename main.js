/**
 * Simplicious.dev // Core Logic
 * High-performance UI interactions
 */

const cursor = document.getElementById('cursor-ring');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Update mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Custom easing for HUD cursor (Smooth lag effect)
function animateCursor() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + (distX * 0.15); // 0.15 provides the "lag"
    cursorY = cursorY + (distY * 0.15);

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

// Hover Interaction States
function growCursor() {
    cursor.style.width = '50px';
    cursor.style.height = '50px';
    cursor.style.background = 'rgba(0, 255, 204, 0.1)';
}

function shrinkCursor() {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'transparent';
}

// Initializing the "Digital System"
document.addEventListener('DOMContentLoaded', () => {
    console.log("SIMPLICIOUS // SYSTEM OPERATIONAL");
    animateCursor();
});