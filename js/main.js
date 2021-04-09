// Card section
let serverSpan = document.getElementById("servers_number")
let commandsSpan = document.getElementById("commands_number")

// Command section
// let cmdsTable = document.getElementById('commands_table');

// Loading icon
// document.getElementById('loader').innerHTML = '<img src="https://s.svgbox.net/loaders.svg?ic=three-dots&fill=fff" width="32" height="32" draggable="false">'

const oneoneData = 'https://oneone-data.herokuapp.com/oneone'
fetch(oneoneData)
    .then(res => res.json())
    .then(res => {
        
        serverSpan.innerHTML = res.guildSize
        commandsSpan.innerHTML = res.commandsSize
        
        // let cmds = res.commands;

        // Object.keys(cmds).forEach(key => {
        //     let tr = document.createElement('tr');
        //     tr.innerHTML = `
        //         <th>${key}</th>
        //         <td>${cmds[key]}</td>
        //     `
        //     cmdsTable.appendChild(tr)
        //     document.getElementById('loader').innerHTML = '';
        // });
    })

