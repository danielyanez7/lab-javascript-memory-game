const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.classList.add('turned')
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        const name1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        const name2 = memoryGame.pickedCards[1].getAttribute('data-card-name')

        if (!memoryGame.checkIfPair(name1, name2)) {
          memoryGame.pickedCards.forEach((eachCard) => {
            setTimeout(() => {
              eachCard.classList.remove('turned')
            }, 500)
          })
        }
        memoryGame.pickedCards = []
      }

      const scoreClicked = document.querySelector('#pairs-clicked')
      const scoreGuessed = document.querySelector('#pairs-guessed')

      scoreClicked.innerHTML = memoryGame.pairsClicked
      scoreGuessed.innerHTML = memoryGame.pairsGuessed


      if (memoryGame.checkIfFinished()) {
        setTimeout(() => {
          location.reload()
        }, 500)
      }

      // console.log(`Card clicked: ${card}`);
    });
  });
});
