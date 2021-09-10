
import InfoCategory from './components/InfoCategory'
import './Info.styles.css'
import Settings from '../../public/icons/Settings.svg'
import UserGroup from '../../public/icons/UserGroup.svg'
import VideoGame from '../../public/icons/VideoGame.svg'
import Code from '../../public/icons/Code.svg'


const CATEGORIES = [
  {
    title: 'Moderación',
    description: 'Eiusmod velit cupidatat voluptate id magna amet in exercitation ad consequat magna sint irure mollit. Eu quis Lorem nostrud incididunt.',
    thumbnail: UserGroup
  },
  {
    title: 'Información',
    description: 'Eiusmod velit cupidatat voluptate id magna amet in exercitation ad consequat magna sint irure mollit. Eu quis Lorem nostrud incididunt.',
    thumbnail: Settings
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
    <section class="section info">
      <h2 class="section__title">Información</h2>
      <div class="info__container">
        ${
          CATEGORIES.map((category, index) => InfoCategory({category, index})).join('')
        }
      </div>
    </section>
  `
}