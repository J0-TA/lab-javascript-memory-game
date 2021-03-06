const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards()

let scoreClicked = document.getElementById('pairs_clicked')
let scoreGuessed = document.getElementById('pairs_guessed')

function cardBack (card1, card2) {
card1.classList.remove(`turned`)
card2.classList.remove(`turned`)
}

window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-cardname="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.className="card turned"
      memoryGame.pickedCards.push(card)
      if(memoryGame.pickedCards.length === 2){
        memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardname, memoryGame.pickedCards[1].dataset.cardname)
        memoryGame.pickedCards = []
        scoreClicked.innerText=memoryGame.pairsClicked
        scoreGuessed.innerText=memoryGame.pairsGuessed
        memoryGame.isFinished() && window.alert(`You WIN`)
      } else {
        setTimeout(cardBack, 2000, memoryGame.pickedCards[0], memoryGame.pickedCards[1])
        scoreClicked.innerText=memoryGame.pairsClicked

      }
    });
  });
});
