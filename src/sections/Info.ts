
import InfoCategory from './components/InfoCategory'
import './Info.styles.css'
import Information from '/icons/Information.svg'
import UserGroup from '/icons/UserGroup.svg'
import VideoGame from '/icons/VideoGame.svg'
import Code from '/icons/Code.svg'


const CATEGORIES = [
  {
    title: 'Moderación',
    description: 'Eiusmod velit cupidatat voluptate id magna amet in exercitation ad consequat magna sint irure mollit. Eu quis Lorem nostrud incididunt.',
    thumbnail: UserGroup
  },
  {
    title: 'Información',
    description: 'Eiusmod velit cupidatat voluptate id magna amet in exercitation ad consequat magna sint irure mollit. Eu quis Lorem nostrud incididunt.',
    thumbnail: Information
  },
  {
    title: 'Diversión',
    description: 'Eiusmod velit cupidatat voluptate id magna amet in exercitation ad consequat magna sint irure mollit. Eu quis Lorem nostrud incididunt.',
    thumbnail: VideoGame
  },
  {
    title: 'Desarrolladores',
    description: 'Eiusmod velit cupidatat voluptate id magna amet in exercitation ad consequat magna sint irure mollit. Eu quis Lorem nostrud incididunt.',
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