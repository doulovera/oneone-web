import Info from './sections/Info'
import Server from './sections/Server'
import CommandList from './sections/CommandList'

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!
const command_list = document.querySelector<HTMLDivElement>('#command_list')!


app.innerHTML = /*html*/`
  ${Info()}
  ${Server()}
`

// Last to render, because of async/await
// command_list.innerHTML = await CommandList()