// script.js

const unlockBtn = document.getElementById('unlock-btn');
const nameInput = document.getElementById('name-input');
const errorMsg = document.getElementById('error-msg');
const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const themeToggle = document.getElementById('theme-toggle');

const birthday = new Date('2025-06-16');
const today = new Date();
today.setHours(0, 0, 0, 0);

unlockBtn.addEventListener('click', () => {
  const enteredName = nameInput.value.trim().toLowerCase();

  if (enteredName !== 'placeholder') {
    errorMsg.textContent = 'Hmm... that doesn\'t seem right. Try again 💭';
    return;
  }

  if (today < birthday) {
    errorMsg.textContent = `Patience! This unlocks on June 16 🌸`;
    return;
  }

  lockScreen.classList.add('hidden');
  mainContent.classList.remove('hidden');
});

// Theme toggle
let isDark = false;
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDark = !isDark;
});
