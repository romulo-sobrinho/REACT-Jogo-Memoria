let game = {

  lockMode: false, //Trava a carta para não escolher uma terceira carta antes de verificar as duas primeiras
  firstCard: null,
  secondCard: null,

  characters: [
    "harry-potter",
    "hermione-granger",
    "ron-weasley",
    "malfoy",
    "severus-snape",
    "rubeus-hagrid",
    "voldemort",
    "albus-dumbledore",
    "arthur-weasley",
    "dobby"
  ],

  cards: null,

  setCard: function (id) {
    let card = this.cards.filter(card => card.id === id)[0];
    if(card.flipped || this.lockMode) {
      return false;
    }

    if(!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },

  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) { //verifica se uma das cartas estão com valores nulos
      return false;
    } else {
      return this.firstCard.icon === this.secondCard.icon //Se forem iguais retorna verdadeiro
    }
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  unflipCards: function () {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
  },

  checkGameOver: function () {
    return this.cards.filter(card => !card.flipped).length == 0;
  },


  createCardsFromCharacters: function() {
    this.cards = [];
  
    this.characters.forEach((character) => {// Pode ser usado o for of ex.:for (let character of characters) {função aqui})
      this.cards.push(this.createPairFromCharacter(character));
      }
    );
    this.cards = this.cards.flatMap(pair => pair); //Flapmap vai pegar o array de duplas de cartas e passar carta por carta
    this.shuffleCards();
    return this.cards;
  },
  
  createPairFromCharacter: function(character) {
    return [
      {
        id: this.createIdWithCharacter(character),
        icon: character,
        flipped: false
      }, 
      {
        id: this.createIdWithCharacter(character),
        icon: character,
        flipped: false
      }
    ];
  },
  
  createIdWithCharacter: function(character) {
    return character + parseInt(Math.random()*100);
  },

  shuffleCards: function() {
    let currentIndex = this.cards.length;
    let randomIndex = 0;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
    }
  }
};

export default game