export default function commandContent() {
  
  const commandsSection = document.querySelectorAll('.command-item__title');

  commandsSection.forEach(command => {
    command.addEventListener('click', () => {
      command.classList.toggle('active')
    })
  })

}