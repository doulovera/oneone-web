interface Props {
  category: {
    title: string
    description: string
    thumbnail: string
  }
  index: number
}

export default function InfoCategory({ category, index }: Props) {
  const { title, description, thumbnail } = category

  const getOdd = index % 2

  return /*html*/`
    <div class="info__category ${getOdd === 1 ? 'info__category-odd' : ''}">
      <div class="info__category__text">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <div class="info__category__image">
        <img src="${thumbnail}" alt="Settings icon" width="100px" />
      </div>
    </div>
  `
}