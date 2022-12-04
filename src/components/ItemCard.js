import { useEffect } from "react"

const ItemCard = ({game}) => {
  useEffect(() => {
    console.log('[ItemCard][useEffect]')
    console.log(game)
  })

  return (
    <li>
      <div className="">
        <a className="" href="">
          <img className="" src={game.background_image} alt={game.slug} />
          <h1>{game.name}</h1>
          
        </a>
      </div>
    </li>
  )
}

export default ItemCard