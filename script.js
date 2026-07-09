// ===================================================
// Mobile nav toggle
// ===================================================
const navToggle = document.getElementById('navToggle');
const tabs = document.getElementById('tabs');

if (navToggle && tabs) {
  navToggle.addEventListener('click', () => {
    const isOpen = tabs.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  tabs.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      tabs.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===================================================
// Hero terminal: type the command, then reveal results line by line
// ===================================================
const cmdText = document.getElementById('cmdText');
const typeCursor = document.getElementById('typeCursor');
const terminalResults = document.getElementById('terminalResults');

const COMMAND = 'run-suite --candidate="Pramodh Kumar S."';

const RESULTS = [
  { label: 'Experience', meta: '2 yrs · Amazon' },
  { label: 'Automation stack', meta: 'Selenium · TestNG · Rest Assured' },
  { label: 'Projects', meta: '5 shipped' },
  { label: 'Availability', meta: 'open to opportunities' }
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeCommand(text, el, speed) {
  return new Promise(resolve => {
    if (!el) return resolve();
    if (prefersReducedMotion) {
      el.textContent = text;
      return resolve();
    }
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

function appendResultLine(result, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = 'result-line';
      line.innerHTML = `<span class="check">✓</span><span class="label">${result.label}</span><span class="meta">${result.meta}</span>`;
      terminalResults.appendChild(line);
      resolve();
    }, delay);
  });
}

async function runTerminalSequence() {
  if (!cmdText) return;

  await typeCommand(COMMAND, cmdText, prefersReducedMotion ? 0 : 28);
  if (typeCursor) typeCursor.style.display = 'none';

  for (const result of RESULTS) {
    await appendResultLine(result, prefersReducedMotion ? 0 : 260);
  }

  const summary = document.createElement('div');
  summary.className = 'terminal-summary';
  summary.textContent = 'Suite passed. 4 of 4. 0 failed.';
  setTimeout(() => {
    terminalResults.appendChild(summary);
  }, prefersReducedMotion ? 0 : 200);
}

runTerminalSequence();

// ===================================================
// Scroll reveal for project cards
// ===================================================
const revealEls = document.querySelectorAll('.project-card');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

// ===================================================
// Footer year
// ===================================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
