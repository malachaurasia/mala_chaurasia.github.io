const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  let theme = 'light';
  if (document.body.classList.contains('dark')) {
    theme = 'dark';
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
});
