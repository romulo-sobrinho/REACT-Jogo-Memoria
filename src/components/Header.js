import "./Header.css"

function Header() {
  return (
    <div className="header">
      <img class="header_img-logo" src="./assets/img/logos/logo.png" alt="Imagem da logo Dev"></img>
      <div class="header_title">
        <h1>Jogo da Memória Harry Potter</h1>
        <img class="header_title-img" src="./assets/img/logos/reliquias-da-morte.png" alt=""></img>
      </div>
    </div>
  )
}

export default Header