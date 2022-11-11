import "./CardElement.css"

function CardElement(props) {

  return (
    <div onClick={() => props.onHandleFlip(props.card)} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`} >
      <div className="card__front">
        <img className="card__front__img" src={`./assets/img/cards/${props.card.icon}.jpg`} alt={props.card.icon}></img>
      </div>
      
      <div className="card__back">
        <img className="card__back__img" src="./assets/img/cards/reliquias-da-morte2.png" alt="Imagem das relíquias da morte"></img>
      </div>
    </div>
  )
}

export default CardElement