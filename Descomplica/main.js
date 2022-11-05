function createGame (player1, hour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg"
    alt="Bandeira do ${player1}"  />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
                </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
           
                        </div>
                    </div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo da NLW">
        </header>
        <main id="cards">
            ${createCard("24/11", "quinta", 
            createGame('brazil', '16:00', 'serbia') + 
            createGame('hungary', '16:00', 'argentina') +
            createGame('colombia', '16:00', 'japan')
            )}
            ${createCard("28/11", "quarta",
            createGame('brazil', '13:00', 'swaziland') + 
            createGame('brazil', '13:00', 'swaziland') +
            createGame('brazil', '16:00', 'serbia')
            )}
            ${createCard("02/12", "sexta",
            createGame('brazil', '16:00', 'cameroon') +
            createGame('brazil', '16:00', 'serbia') + 
            createGame('brazil', '16:00', 'serbia')
            )}
                </ul>
            </main>
        `