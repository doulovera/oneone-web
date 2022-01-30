import './style.css'
import './styles/header.css'
import './styles/commands.css'
import './styles/server.css'

import commandContent from './sections/commandContent'

const toggleButton = document.getElementById('toggleColor');
const body = document.body;

let isDarkMode = true;

toggleButton?.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  body.classList.toggle('body_light-mode');
});

commandContent();