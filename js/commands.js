const collButton = document.getElementsByClassName('main__commands-collapse--button');

for(let i = 0; i < collButton.length; i++) {
    collButton[i].addEventListener('click', () => {
        collButton[i].classList.toggle('activeButton');
        
        const categoryContent = collButton[i].nextElementSibling;

        categoryContent.classList.toggle('hidden');
        categoryContent.classList.toggle('activeContent');
        
    })
}