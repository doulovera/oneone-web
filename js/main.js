// Card section
const serverSpan = document.getElementById("servers_number");
const commandsSpan = document.getElementById("commands_number");
// Command section
const commandContainer = document.getElementsByClassName('main__commands-data--container');

const oneoneData = 'https://oneone-api.herokuapp.com/V210419'
fetch(oneoneData)
    .then(res => res.json())
    .then(data => {

        const { total, servers } = data;
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
                article.className = "main__commands-data-container";
                commandContainer[i].appendChild(article);
            })
}})

