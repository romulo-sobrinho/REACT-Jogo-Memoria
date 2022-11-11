import "./GameOver.css"

function GameOver(props) {
  return (props.show ?
    <div id="gameOver">
      <div id="gameOver__msg">
        Parabéns, você completou o jogo!
      </div>
      <button id="btn-reset" onClick={props.onHandleRestart}>Jogue novamente</button>
    </div> : <></>
  )
}

export default GameOver