// script.js

// --- Theme toggle ---
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('preferred-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// --- Load preferred theme or default to system ---
window.addEventListener('DOMContentLoaded', () => {
  const preferredTheme = localStorage.getItem('preferred-theme');
  if (preferredTheme) {
    if (preferredTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }
  }

  // 🔐 Unlock using secret key in URL
  const params = new URLSearchParams(window.location.search);
  const key = params.get('key');
  const allowedKey = 'stardust'; // 👈 You can change this to whatever you want

  if (key !== allowedKey) {
    document.body.innerHTML = `
      <div style="text-align:center; padding:2rem;">
        <h2>💌 This page is not ready for you... yet.</h2>
        <p>If this was meant for you, check the link again! 🌙</p>
      </div>
    `;
  }
});
