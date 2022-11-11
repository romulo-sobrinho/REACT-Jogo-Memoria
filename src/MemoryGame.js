import Header from "./components/Header"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver"
import Footer from "./components/Footer"
import game from "./game/game"
import { useState, useEffect } from "react"

function MemoryGame() {

  const [ gameOver, setGameOver ] = useState(false)
  const [ cards, setCards ] = useState([])
  useEffect(() => {
    setCards(game.createCardsFromCharacters())
  }, []) //Inicializa as cartas apenas uma vez devido os colchetes vazios

  function onHandleRestart() {
    game.clearCards()
    setCards(game.createCardsFromCharacters())
    setGameOver(false)
  }

  function onHandleFlip(card) {
    if(game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
          if(game.checkGameOver()) {
            setGameOver(true)
          }
        } else {
          setTimeout(() => {
            setCards([...game.cards])
            game.unflipCards();
          }, 1000)
        }
      }
    }
    setCards([...game.cards])
  }

  return (
    <div>
      <Header></Header>
      <GameBoard onHandleFlip={onHandleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} onHandleRestart={onHandleRestart}></GameOver>
      <Footer></Footer>
    </div>
  )
}

export default MemoryGame