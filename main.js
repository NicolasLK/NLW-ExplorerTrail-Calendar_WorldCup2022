function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon${player1}.svg" alt="${player1} Flag">
      <strong>${hour}</strong>
      <img src="./assets/icon${player2}.svg" alt="${player2} Flag">
    </li>
  `
}

let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s" >
      <h2>${date} <span>${day}</span></h2>
      <ul>
      ${games}
      </ul>

    </div>
  `
} 


document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("Brazil", "08:00", "Cameroon") +
      createGame("Hungary", "13:00", "Argentina") +
      createGame("Colombia", "20:00", "Japan")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("BritishColumbia", "08:00", "Cameroon") +
      createGame("India", "13:00", "Armenia") +
      createGame("Comoros", "20:00", "Jordan")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("Switzerland", "10:00", "Cameroon") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Southkorea", "10:00", "Ghana") +
      createGame("Brazil", "13:00", "Switzerland") +
      createGame("Portugal", "16:00", "Uruguay")
  )
