import { useEffect } from "react"
import "./ItemCard.css"

const ItemCard = ({game}) => {

  return (
    <div className="card">
      <img className="bg-img" src={game.background_image} alt={game.slug} />
      <div className="container">
        <h1>{game.name}</h1>
      </div>
    </div>
  )
}

export default ItemCard