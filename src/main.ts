import Server from './components/Server'

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = /*html*/`
  ${Server()}
`
