import getData from '../getData'
import './CommandList.styles.css';

export default async function CommandList() {
  console.log(await getData().then(res => res))
  return /*html*/`
    <section class="commands" id="commands">
      <h2 class="section__title">Comandos</h2><span>------</span>
      <p></p>
    </section>
  `
}