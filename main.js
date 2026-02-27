:root {
    --bg-primary: #050505; --bg-purple: #1a0b2e;
    --accent-pink: #ff007f; --glass-border: rgba(255, 0, 127, 0.3);
}

* { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
body { background: var(--bg-purple); color: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; }

section { width: 100%; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 100px 5%; }

/* --- HERO --- */
.hero { background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-purple) 100%); text-align: center; }
.hero h1 { font-size: clamp(3rem, 8vw, 6rem); color: var(--accent-pink); line-height: 0.9; margin-bottom: 20px; }
.btn-primary { background: var(--accent-pink); padding: 20px 40px; color: white; text-decoration: none; font-weight: 900; border-radius: 4px; display: inline-block; transition: 0.3s; }

/* --- ROI BOX: CENTERED --- */
.sultan-glass { background: #000; border: 2px solid var(--accent-pink); border-radius: 20px; padding: 60px; max-width: 1100px; width: 100%; box-shadow: 0 0 40px rgba(255, 0, 127, 0.2); }
.audit-main-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.panel { background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 40px; border-radius: 15px; }

/* --- CONTACT: WIDE & BLEAK --- */
.contact-header {
    font-size: clamp(3rem, 10vw, 6rem); color: var(--accent-pink); text-transform: uppercase; margin-bottom: 50px;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 20px var(--accent-pink);
}
.contact-box-wide { background: rgba(0,0,0,0.5); border: 1px solid var(--glass-border); padding: 80px 60px; width: 100%; max-width: 1200px; border-radius: 15px; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; text-align: left; }
.full-width { grid-column: span 2; }
input, textarea { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); padding: 15px; color: #fff; border-radius: 5px; }
label { font-family: 'Space Mono'; font-size: 0.7rem; color: var(--accent-pink); text-transform: uppercase; display: block; margin-bottom: 8px; }

/* --- FOOTER --- */
.telemetry-footer { background: #000; padding: 40px 5%; width: 100%; display: flex; justify-content: space-between; font-family: 'Space Mono'; font-size: 10px; border-top: 1px solid var(--glass-border); }
