// Card section
const serverSpan = document.getElementById("servers_number");
const commandsSpan = document.getElementById("commands_number");

const cmdBotInfo = document.getElementById("cmd-bot-info");
const cmdInfoInfo = document.getElementById("cmd-info-info");
const cmdModInfo = document.getElementById("cmd-mod-info");
const cmdFunInfo = document.getElementById("cmd-fun-info");


// Loading icon
// document.getElementById('loader').innerHTML = '<img src="https://s.svgbox.net/loaders.svg?ic=three-dots&fill=fff" width="32" height="32" draggable="false">'

const oneoneData = 'https://dc-one-one.herokuapp.com/'
fetch(oneoneData)
    .then(res => res.json())
    .then(data => {

        const { total, servers } = data;
        const { bot, info, mod, fun } = data.commands;

        serverSpan.innerHTML = servers;
        commandsSpan.innerHTML = total;

        // console.log(bot);
        // console.log(info);
        // console.log(mod);
        // console.log(fun);

        bot.map(command => {
            const article = document.createElement('article');
            article.innerHTML = `
                <p class="main__commands-data--title">${command.name}</p>
                <p class="main__commands-data--body">${command.description}</p>
            `;
            article.className = 'main__commands-data-container';
            cmdBotInfo.appendChild(article);
        });

        info.map(command => {
            const article = document.createElement('article');
            article.innerHTML = `
                <p class="main__commands-data--title">${command.name}</p>
                <p class="main__commands-data--body">${command.description}</p>
            `;
            article.className = 'main__commands-data-container';
            cmdInfoInfo.appendChild(article);
        });
        
        mod.map(command => {
            const article = document.createElement('article');
            article.innerHTML = `
                <p class="main__commands-data--title">${command.name}</p>
                <p class="main__commands-data--body">${command.description}</p>
            `;
            article.className = 'main__commands-data-container';
            cmdModInfo.appendChild(article);
        });
        
        fun.map(command => {
            const article = document.createElement('article');
            article.innerHTML = `
                <p class="main__commands-data--title">${command.name}</p>
                <p class="main__commands-data--body">${command.description}</p>
            `;
            article.className = 'main__commands-data-container';
            cmdFunInfo.appendChild(article);
        });
        

        
        // let cmds = res.commands;

        // Object.keys(cmds).forEach(key => {
        //     let tr = document.createElement('tr');
        //     tr.innerHTML = `
        //         <th>${key}</th>
        //         <td>${cmds[key]}</td>
        //     `
        //     commandsTable.appendChild(tr)
        // });
    })

