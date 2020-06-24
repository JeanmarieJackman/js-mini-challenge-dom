document.addEventListener("DOMContentLoaded", () => {
    /***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header);


/***** Deliverable 2 *****/
header.style.color = 'red';


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playerDiv = '<div class="player" data-number="{player number}"><h3>{player name} (<em>{player nickname}</em>)</h3><img src="{player image}" alt="{player name}"></div>';

for (let index in PLAYERS) {
    let divText = playerDiv;
    divText = divText.replace("{player number}", PLAYERS[index].number);
    divText = divText.replace("{player name}", PLAYERS[index].name);
    divText = divText.replace("{player nickname}", PLAYERS[index].nickname);
    divText = divText.replace("{player image}", PLAYERS[index].photo);
    document.write(divText);
}

// alert(playerDiv);


/***** Deliverable 4 *****/

var el = document.querySelector("div.player[data-number='7']");
el.remove();
});