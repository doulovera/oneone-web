// Card section
const serverSpan = document.getElementById("servers_number");
const commandsSpan = document.getElementById("commands_number");
// Command section
const commandContainer = document.getElementsByClassName('main__commands-data--container');

// Loading icon
// document.getElementById('loader').innerHTML = '<img src="https://s.svgbox.net/loaders.svg?ic=three-dots&fill=fff" width="32" height="32" draggable="false">'

const oneoneData = 'https://dc-one-one.herokuapp.com/'
fetch(oneoneData)
    .then(res => res.json())
    .then(data => {

        const { total, servers } = data;
        // const { bot, info, mod, fun } = data.commands;
        const cmds = data.commands;

        serverSpan.innerHTML = servers;
        commandsSpan.innerHTML = total;
 
        const categories = ['bot', 'info', 'mod', 'fun'];

        for(let i = 0; i < commandContainer.length; i++) {
            cmds[categories[i]].map(command => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <p class="main__commands-data--title">${command.name}</p>
                    <p class="main__commands-data--body">${command.description}</p>
                `;
                article.className= "main__commands-data-container";
                commandContainer[i].appendChild(article);
            })
}})

