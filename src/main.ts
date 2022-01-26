import './style.css'
import './styles/header.css'
import './styles/server.css'

const toggleButton = document.getElementById('toggleColor');
const body = document.body;

let isDarkMode = true;

toggleButton?.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  body.classList.toggle('body_light-mode');
});

const app = document.querySelector<HTMLDivElement>('#app');
