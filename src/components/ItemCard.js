import { useEffect } from "react"
import "./ItemCard.css"

const ItemCard = ({game}) => {
  useEffect(() => {
    console.log('[ItemCard][useEffect]')
    console.log(game)
  })

  return (
    <li>
      {/* <div className="card">
        <a className="" href="">
          <img className="" style="width:100%" src={game.background_image} alt={game.slug} />
          <div className="container">
            <h1>{game.name}</h1>
          </div>
        </a>
      </div> */}
      <div className="card">
        <img className="bg-img" src={game.background_image} alt={game.slug} />
        <div className="container">
          <h1>{game.name}</h1>
        </div>
      </div>
    </li>
  )
}

export default ItemCard