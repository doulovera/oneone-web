interface Props {
  category: {
    title: string
    description: string
    thumbnail: string
  }
  index: number
}

export default function InfoCategory({ category }: Props) {
  const { title, description, thumbnail } = category

  return /*html*/`
    <div class="info__category">
      <div class="info__category__header">
        <h3>${title}</h3>
        <img src="${thumbnail}" alt="Settings icon" width="25px" draggable="false" />
      </div>
      <div class="info__category__description">
        <p>${description}</p>
      </div>
    </div>
  `
}