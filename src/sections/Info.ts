
import InfoCategory from './components/InfoCategory'
import './Info.styles.css'
import Information from '/icons/Information.svg'
import UserGroup from '/icons/UserGroup.svg'
import VideoGame from '/icons/VideoGame.svg'
import Code from '/icons/Code.svg'


const CATEGORIES = [
  {
    title: 'Moderación',
    description: 'Comandos que te ayudarán con el manejo de usuarios y la moderación de tu servidor, minimizando ciertas acciones.',
    thumbnail: UserGroup
  },
  {
    title: 'Información',
    description: 'Comandos que te darán la información de las cosas que te interesen, como juegos en steam, shows de IMDb, datos de tu servidor ¡y más!',
    thumbnail: Information
  },
  {
    title: 'Diversión',
    description: 'Obtención de los datos de cosas específicas como servidor el de un minecraft, una skin, o sencillamente obtener un "uwu" aleatorio.',
    thumbnail: VideoGame
  },
  {
    title: 'Desarrolladores',
    description: 'Herramientas para manejar la eficiencia a la hora de desarrollar en discord, como buscar algún paquete en NPM.',
    thumbnail: Code
  },
]

export default function Info() {
  return /*html*/`
    <section class="section info" id="utilities">
      <h2 class="section__title">Utilidades</h2>
      <div class="info__container">
        ${
          CATEGORIES.map((category, index) => InfoCategory({category, index})).join('')
        }
      </div>
    </section>
  `
}