const toggle = document.getElementById("toggle-theme");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
});

const toggleLanguageButton = document.getElementById('toggle-language');

toggleLanguageButton.addEventListener('click', () => {
  // Alterna entre mostrar o conteúdo em PT e EN
  document.body.classList.toggle('lang-en');
  
  // Salva a escolha do idioma no localStorage
  const currentLang = document.body.classList.contains('lang-en') ? 'en' : 'pt';
  localStorage.setItem('language', currentLang);
});

// Ao carregar a página, define o idioma baseado na preferência salva no localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'en') {
    document.body.classList.add('lang-en');
  } else {
    document.body.classList.remove('lang-en');
  }
});
