const botButton = document.getElementById('cmd-bot-btn');

botButton.addEventListener("click", () => {
    const botInfo = document.getElementById('cmd-bot-info');
    botInfo.classList.toggle("active")
    botButton.classList.toggle("activeIcon")
});

const infoButton = document.getElementById('cmd-info-btn');

infoButton.addEventListener("click", () => {
    const infoInfo = document.getElementById('cmd-info-info');
    infoInfo.classList.toggle("active")
    infoButton.classList.toggle("activeIcon")
});

const modButton = document.getElementById('cmd-mod-btn');

modButton.addEventListener("click", () => {
    const modInfo = document.getElementById('cmd-mod-info');
    modInfo.classList.toggle("active")
    modButton.classList.toggle("activeIcon")
});

const funButton = document.getElementById('cmd-fun-btn');

funButton.addEventListener("click", () => {
    const funInfo = document.getElementById('cmd-fun-info');
    funInfo.classList.toggle("active")
    funButton.classList.toggle("activeIcon")
})